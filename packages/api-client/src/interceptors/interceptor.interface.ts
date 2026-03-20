/**
 * @module interceptor.interface
 * @description
 * Base contract for all interceptors in `@acme/api-client`.
 *
 * An {@link Interceptor} is a pluggable middleware unit that hooks into the
 * Axios request/response lifecycle. The {@link AxiosInstanceFactory} calls
 * `register` on each interceptor in insertion order.
 *
 * Built-in interceptors (registered automatically by {@link ApiClient}):
 * - {@link AuthInterceptor} – injects the `Authorization` header and handles 401 refresh
 * - {@link RetryInterceptor} – exponential-backoff retry on network/5xx errors
 * - {@link CacheInterceptor} – GET response caching
 * - {@link LoggingInterceptor} – structured request/response logging
 *
 * Custom interceptors (opt-in via `ApiClientOptions.interceptors`):
 * - {@link RateLimitInterceptor} – token-bucket request throttling
 * - {@link DeduplicationInterceptor} – collapses concurrent identical GET calls
 */
import type { AxiosInstance } from "axios";

/**
 * Lifecycle interface every interceptor must implement.
 *
 * @example
 * ```ts
 * class CorrelationIdInterceptor implements Interceptor {
 *   register(instance: AxiosInstance): void {
 *     instance.interceptors.request.use((config) => {
 *       config.headers.set("X-Correlation-ID", crypto.randomUUID());
 *       return config;
 *     });
 *   }
 * }
 * ```
 */
export interface Interceptor {
  /**
   * Attach request and/or response interceptors to the given Axios instance.
   *
   * This method is called **once** during `ApiClient` construction.
   * Use `instance.interceptors.request.use` and
   * `instance.interceptors.response.use` to register handlers.
   *
   * @param instance - The shared Axios instance for this `ApiClient`.
   */
  register(instance: AxiosInstance): void;
}
