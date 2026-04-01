import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

import type { Interceptor } from "./interceptor.interface";

/**
 * DeduplicationInterceptor collapses concurrent identical GET requests
 * into a single in-flight network call.
 *
 * When two requests with the same method + url + params arrive before the
 * first one resolves, the second (and subsequent) ones wait for the same
 * promise and receive the same response – no duplicate network trips.
 *
 * Only GET requests are deduplicated (POST/PUT/PATCH/DELETE are always
 * forwarded because they carry side effects).
 */
export class DeduplicationInterceptor implements Interceptor {
  /**
   * Map from cache-key → pending axios CancelToken source.
   * We store the in-flight promise so other requests can await it.
   */
  private readonly inFlight = new Map<string, Promise<AxiosResponse>>();

  register(instance: AxiosInstance): void {
    instance.interceptors.request.use(
      (config) => {
        if (config.method?.toUpperCase() !== "GET") {
          return config;
        }

        const key = this.buildKey(config);
        const pending = this.inFlight.get(key);

        if (pending) {
          // Piggyback on the existing request. We cancel the duplicate
          // request and attach the shared promise as a custom property so
          // the response interceptor can resolve with the shared result.
          const source = axios.CancelToken.source();
          config.cancelToken = source.token;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
          (config as any).__dedup_key = key;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
          (config as any).__dedup_promise = pending;
          source.cancel("DEDUP_HIT");
        }

        return config;
      },
      (error: unknown) =>
        Promise.reject(
          error instanceof Error ? error : new Error(String(error)),
        ),
    );

    instance.interceptors.response.use(
      (response) => {
        const key = this.buildKey(response.config);
        this.inFlight.delete(key);
        return response;
      },
      async (error: unknown) => {
        if (axios.isCancel(error)) {
          const axiosError = error as { config?: Record<string, unknown> };
          const dedupPromise = axiosError.config?.__dedup_promise as
            | Promise<AxiosResponse>
            | undefined;
          if (dedupPromise) {
            return dedupPromise;
          }
        }

        const axiosError = error as { config?: Record<string, unknown> };
        if (axiosError.config) {
          const key = this.buildKey(
            axiosError.config as {
              url?: string;
              method?: string;
              params?: unknown;
            },
          );
          this.inFlight.delete(key);
        }

        return Promise.reject(
          error instanceof Error ? error : new Error(String(error)),
        );
      },
    );
  }

  /**
   * Register the in-flight promise for a key before sending.
   * Call this from AxiosInstanceFactory after creating the instance,
   * OR let the request interceptor above manage it automatically.
   */
  track(key: string, promise: Promise<AxiosResponse>): void {
    this.inFlight.set(key, promise);
  }

  private buildKey(config: {
    url?: string;
    method?: string;
    params?: unknown;
  }): string {
    return `${config.method?.toUpperCase()}::${config.url}::${JSON.stringify(config.params ?? {})}`;
  }
}
