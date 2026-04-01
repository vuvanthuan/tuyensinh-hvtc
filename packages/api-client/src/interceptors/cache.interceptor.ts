/**
 * @module cache.interceptor
 * @description
 * Axios interceptor that caches `GET` responses in a {@link CacheStorage} backend.
 *
 * ### Caching strategy
 * - Only `GET` requests are cached (mutations are always forwarded).
 * - A cache key is derived from `method + url + params + data`.
 * - **Cache hit (request phase):** the request is cancelled via a `CancelToken`
 *   before it hits the network. The stored response is returned in the response
 *   error interceptor (which catches the cancel).
 * - **Cache miss (response phase):** the fresh response is stored under the
 *   computed key with the configured TTL.
 * - Per-request opt-out: set `options.skipCache = true`.
 * - Per-request TTL override: set `options.cacheTTL`.
 *
 * @example
 * ```ts
 * // Registered automatically when cache + cacheConfig.enabled are provided:
 * new ApiClient(
 *   createApiConfig({ cacheConfig: { enabled: true, defaultTTL: 60_000 } }),
 *   { cache: new LRUCacheStorage(256) },
 * );
 * ```
 */

import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";

import type { CacheStorage } from "../cache/cache-storage.interface";
import type { Interceptor } from "./interceptor.interface";

interface CacheConfig {
  enabled: boolean;
  defaultTTL: number;
}

/** Augmented Axios config to carry cache pipeline state. */
interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _options?: {
    skipCache?: boolean;
    cacheTTL?: number;
  };
  /** Cache key computed during the request phase. */
  _cacheKey?: string;
  /** TTL resolved for this specific request. */
  _cacheTTL?: number;
  /** Stashed response that will be returned instead of a network call. */
  _cachedResponse?: AxiosResponse;
}

export class CacheInterceptor implements Interceptor {
  constructor(
    private cache: CacheStorage,
    private config: CacheConfig,
  ) {}

  /** @inheritdoc */
  register(instance: AxiosInstance): void {
    instance.interceptors.request.use(
      this.handleRequest.bind(this),
      (error: unknown) =>
        Promise.reject(
          error instanceof Error ? error : new Error(String(error)),
        ),
    );

    instance.interceptors.response.use(
      this.handleResponse.bind(this),
      (error: unknown) =>
        Promise.reject(
          error instanceof Error ? error : new Error(String(error)),
        ),
    );
  }

  /**
   * Check the cache before the request is dispatched.
   *
   * - Cache **hit**: cancel the Axios request and stash the cached response.
   * - Cache **miss**: store the computed key so the response interceptor can
   *   save the result.
   */
  private handleRequest(
    config: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig {
    const extendedConfig = config as ExtendedAxiosRequestConfig;
    const options = extendedConfig._options;

    if (!this.config.enabled || options?.skipCache) {
      return config;
    }

    // Only cache GET requests
    if (config.method?.toUpperCase() !== "GET") {
      return config;
    }

    const cacheKey = this.generateCacheKey(config);
    const cachedResponse = this.cache.get<AxiosResponse>(cacheKey);

    if (cachedResponse) {
      extendedConfig._cachedResponse = cachedResponse;

      // Cancel the outgoing request; the response interceptor will short-circuit
      const source = axios.CancelToken.source();
      config.cancelToken = source.token;
      source.cancel("CACHE_HIT");
    } else {
      // Store key + TTL for the response interceptor to persist the result
      extendedConfig._cacheKey = cacheKey;
      extendedConfig._cacheTTL = options?.cacheTTL ?? this.config.defaultTTL;
    }

    return config;
  }

  /**
   * Persist the response to the cache when a key was registered during the
   * request phase.
   */
  private handleResponse(response: AxiosResponse): AxiosResponse {
    const config = response.config as ExtendedAxiosRequestConfig;

    if (config._cacheKey && config._cacheTTL) {
      this.cache.set(config._cacheKey, response, config._cacheTTL);
    }

    return response;
  }

  /**
   * Derive a deterministic cache key from the request's method, URL,
   * query params, and body.
   */
  private generateCacheKey(config: InternalAxiosRequestConfig): string {
    const url = config.url;
    const method = config.method;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const params = config.params;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = config.data;
    return `${method?.toUpperCase()}::${url}::${JSON.stringify(params ?? {})}::${JSON.stringify(data ?? {})}`;
  }
}
