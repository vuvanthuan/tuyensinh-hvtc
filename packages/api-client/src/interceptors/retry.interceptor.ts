/**
 * @module retry.interceptor
 * @description
 * Axios response interceptor that automatically retries failed requests
 * using an **exponential backoff** strategy.
 *
 * ### Retry behaviour
 * - Retries on network-level errors (no response) and 5xx server errors by default.
 * - Applies `backoffFactor` exponential growth: `retryDelay * (backoffFactor ^ attempt)`.
 * - A custom `retryCondition` predicate can narrow or expand which errors are retried.
 * - Per-request opt-out: set `options.skipRetry = true`.
 * - Maximum `maxRetries` attempts total (not counting the initial try).
 *
 * @example
 * ```ts
 * new ApiClient(
 *   createApiConfig({ retryConfig: { maxRetries: 3, retryDelay: 500, backoffFactor: 2 } }),
 * );
 * // Delays: 500ms → 1000ms → 2000ms
 * ```
 */

import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

import type { Interceptor } from "./interceptor.interface";

/**
 * Configuration for the {@link RetryInterceptor}.
 */
export interface RetryConfig {
  /** Maximum number of retry attempts. */
  maxRetries: number;
  /** Base delay in milliseconds between retry attempts. */
  retryDelay: number;
  /**
   * Custom predicate to decide whether an error should trigger a retry.
   *
   * When omitted, the default retries on:
   * - No response (network failure)
   * - HTTP 5xx responses
   */
  retryCondition?: (error: AxiosError) => boolean;
  /**
   * Multiplier applied to `retryDelay` on each successive attempt.
   * Defaults to `2` (standard exponential backoff).
   */
  backoffFactor?: number;
}

/** Internal Axios config augmented with retry state. */
export interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  /** Number of retries already attempted for this request. */
  _retryCount?: number;
  _options?: {
    /** Per-request opt-out of the retry mechanism. */
    skipRetry?: boolean;
  };
}

export class RetryInterceptor implements Interceptor {
  constructor(private config: RetryConfig) {}

  /** @inheritdoc */
  register(instance: AxiosInstance): void {
    instance.interceptors.response.use(
      (response) => response,
      async (error: unknown) => {
        const axiosError = error as AxiosError;
        const config = axiosError.config as
          | ExtendedAxiosRequestConfig
          | undefined;

        if (!config) {
          return Promise.reject(
            axiosError instanceof Error ? axiosError : new Error(String(error)),
          );
        }

        // Per-request opt-out
        if (config._options?.skipRetry) {
          return Promise.reject(
            axiosError instanceof Error ? axiosError : new Error(String(error)),
          );
        }

        config._retryCount = config._retryCount ?? 0;

        if (config._retryCount >= this.config.maxRetries) {
          return Promise.reject(
            axiosError instanceof Error ? axiosError : new Error(String(error)),
          );
        }

        const shouldRetry =
          this.config.retryCondition?.(axiosError) ??
          this.defaultRetryCondition(axiosError);

        if (!shouldRetry) {
          return Promise.reject(
            axiosError instanceof Error ? axiosError : new Error(String(error)),
          );
        }

        config._retryCount++;

        // Exponential backoff: base * factor^(attempt - 1)
        const delay =
          this.config.retryDelay *
          Math.pow(this.config.backoffFactor ?? 2, config._retryCount - 1);

        await new Promise((resolve) => setTimeout(resolve, delay));

        return instance(config);
      },
    );
  }

  /**
   * Default retry condition: retry on network failures and 5xx responses.
   *
   * @param error - The Axios error from the failed request.
   * @returns `true` when the request should be retried.
   */
  private defaultRetryCondition(error: AxiosError): boolean {
    return (
      !error.response ||
      (error.response.status >= 500 && error.response.status <= 599)
    );
  }
}
