/**
 * @module request.types
 * @description
 * Request configuration types used by {@link HttpClient} implementations
 * and the {@link ApiClient}.
 *
 * The hierarchy is:
 * - {@link BaseRequestConfig} – transport-level fields (url, method, headers, …)
 * - {@link RequestConfig} – extends Base with internal pipeline fields (`_options`, `_retry`, …)
 * - Method-specific aliases ({@link GetRequestConfig}, etc.) for stricter typing at call sites
 */

import type { HttpMethod, IRequestOptions, ResponseType } from "./api.types";

// ─── Base ─────────────────────────────────────────────────────────────────────

/**
 * Transport-level request configuration that maps directly to the
 * underlying HTTP adapter (Axios or native `fetch`).
 *
 * @remarks
 * Do **not** add internal pipeline state here. Use {@link RequestConfig}
 * for fields that are consumed by interceptors.
 */
export interface BaseRequestConfig {
  /** Relative path (e.g. `/users/1`) or absolute URL. */
  url: string;

  /** HTTP verb for this request. */
  method: HttpMethod;

  /**
   * Per-request headers merged on top of instance-level headers.
   * Can be used to set `Accept-Language`, custom API keys, etc.
   */
  headers?: Record<string, string>;

  /**
   * URL query parameters serialised into the request URL.
   *
   * @example
   * ```ts
   * // Produces: GET /users?page=2&limit=20
   * { params: { page: 2, limit: 20 } }
   * ```
   */
  params?: Record<string, unknown>;

  /**
   * Request body payload. Serialised as JSON unless `isFormData` is set.
   * `GET` and `HEAD` requests should leave this empty.
   */
  data?: unknown;

  /**
   * Per-request timeout override in milliseconds.
   * Overrides the instance-level `ApiClientConfig.timeout`.
   */
  timeout?: number;

  /**
   * Include credentials (cookies) in cross-origin requests.
   * Maps to Axios `withCredentials` / `fetch` `credentials: "include"`.
   */
  withCredentials?: boolean;

  /**
   * Expected response body format.
   * Defaults to `"json"`.
   */
  responseType?: ResponseType;

  /**
   * An `AbortSignal` to cancel the request programmatically.
   *
   * @example
   * ```ts
   * const controller = new AbortController();
   * client.request({ method: "GET", url: "/search", signal: controller.signal });
   * controller.abort(); // cancels immediately
   * ```
   */
  signal?: AbortSignal;
}

// ─── Extended (pipeline) config ───────────────────────────────────────────────

/**
 * Full request configuration used internally by the {@link ApiClient}
 * and the interceptor pipeline.
 *
 * Extends {@link BaseRequestConfig} with internal state fields prefixed
 * with `_` (to signal they are not part of the public API surface).
 *
 * @typeParam TData - Shape of the request body payload.
 */
export interface RequestConfig<TData = unknown> extends BaseRequestConfig {
  /** Typed payload for POST / PUT / PATCH bodies. */
  data?: TData;

  /**
   * Internal flag set by the AuthInterceptor to mark that a 401-refresh
   * retry has already been attempted, preventing infinite loops.
   * @internal
   */
  _retry?: boolean;

  /**
   * Number of retry attempts already performed by the RetryInterceptor.
   * @internal
   */
  _retryCount?: number;

  /**
   * Per-request high-level options forwarded from the {@link ApiClient}
   * public methods to the interceptor pipeline.
   * @internal
   */
  _options?: IRequestOptions;

  /**
   * Cache key computed by the CacheInterceptor.
   * @internal
   */
  _cacheKey?: string;

  /**
   * TTL for the cache entry associated with this request.
   * @internal
   */
  _cacheTTL?: number;

  /**
   * Callback invoked periodically during file uploads.
   *
   * @param progressEvent - Contains `loaded` bytes, optional `total` bytes,
   *   and a pre-calculated `percentage` (0–100).
   */
  onUploadProgress?: (progressEvent: {
    loaded: number;
    total?: number;
    percentage?: number;
  }) => void;

  /**
   * Callback invoked periodically during response streaming / file downloads.
   *
   * @param progressEvent - Same shape as `onUploadProgress`.
   */
  onDownloadProgress?: (progressEvent: {
    loaded: number;
    total?: number;
    percentage?: number;
  }) => void;
}

// ─── Method-specific aliases ──────────────────────────────────────────────────

/** Request config for `GET` – body (`data`) is excluded. */
export type GetRequestConfig = Omit<RequestConfig, "data">;

/** Request config for `POST` with a typed body. */
export type PostRequestConfig<TData = unknown> = RequestConfig<TData>;

/** Request config for `PUT` with a typed body. */
export type PutRequestConfig<TData = unknown> = RequestConfig<TData>;

/** Request config for `PATCH` with a typed body. */
export type PatchRequestConfig<TData = unknown> = RequestConfig<TData>;

/** Request config for `DELETE` – body (`data`) is excluded. */
export type DeleteRequestConfig = Omit<RequestConfig, "data">;
