/**
 * @module api.types
 * @description
 * Fundamental shared types used across all layers of the API client.
 *
 * Import these types instead of re-declaring them in individual layers so that
 * every layer speaks the same language and can be composed without friction.
 */

// ─── HTTP primitives ──────────────────────────────────────────────────────────

/**
 * Supported HTTP request methods.
 *
 * @remarks Only these methods are handled by the HTTP clients in this package.
 * Additional methods (e.g. `CONNECT`) are not in scope.
 */
export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS";

/**
 * Expected format of the response body.
 *
 * Maps 1-to-1 with Axios `responseType` and the native `fetch` body readers:
 * - `"json"` → `response.json()`
 * - `"text"` → `response.text()`
 * - `"blob"` → `response.blob()`  (file downloads)
 * - `"arraybuffer"` → `response.arrayBuffer()`
 * - `"document"` → Axios-only (browser DOMParser)
 * - `"stream"` → Axios-only (Node.js readable stream)
 */
export type ResponseType =
  | "json"
  | "text"
  | "blob"
  | "arraybuffer"
  | "document"
  | "stream";

// ─── Per-request options ──────────────────────────────────────────────────────

/**
 * Caller-supplied options that fine-tune how a single request is handled
 * without requiring a new {@link ApiClientConfig} instance.
 *
 * @remarks
 * These options are forwarded through the interceptor pipeline via the
 * private `_options` field on {@link RequestConfig}.
 *
 * @example
 * ```ts
 * // Skip auth header + suppress error toast for a public endpoint
 * client.get("/public/data", {}, { skipAuth: true, displayError: false });
 * ```
 */
export interface IRequestOptions {
  /**
   * Override the access token for this request only.
   * When omitted the token is read from {@link TokenStorage}.
   */
  token?: string;

  /**
   * @deprecated Use `skipAuth: true` to omit the token.
   */
  withToken?: boolean;

  /**
   * Whether to display an error notification when the request fails.
   * Defaults to `true` (inherits from global `ApiClientConfig.displayError`).
   */
  displayError?: boolean;

  /**
   * Set to `true` when posting `FormData`.
   * The AuthInterceptor will set `Content-Type: multipart/form-data` automatically.
   */
  isFormData?: boolean;

  /**
   * Token scheme prefix (e.g. `"Bearer"`, `"Token"`).
   * Defaults to `"Bearer"`.
   */
  authType?: string;

  /**
   * Custom header name to carry the token (e.g. `"X-API-Key"`).
   * When set the token value is placed verbatim, without a scheme prefix.
   */
  customAuthHeader?: string;

  /**
   * Skip the authentication interceptor entirely for this request.
   * Useful for public endpoints or when tokens are managed externally.
   */
  skipAuth?: boolean;

  /**
   * Disable the retry interceptor for this request.
   * Useful for mutations that must not be replayed.
   */
  skipRetry?: boolean;

  /**
   * Bypass the response cache for this request.
   * A fresh network call will always be made.
   */
  skipCache?: boolean;

  /**
   * Per-request cache TTL in milliseconds.
   * Overrides `ApiClientConfig.cacheConfig.defaultTTL`.
   */
  cacheTTL?: number;
}

/**
 * Options for automatic file-save after a download request.
 *
 * @example
 * ```ts
 * await client.download("/reports/annual", {}, { fileName: "report", fileType: "pdf" });
 * ```
 */
export interface IFileOptions {
  /** File name (without extension). */
  fileName: string;
  /** File extension (without leading dot), e.g. `"pdf"`, `"xlsx"`. */
  fileType: string;
}

// ─── Pagination metadata ──────────────────────────────────────────────────────

/**
 * Pagination and timing metadata returned by list endpoints.
 *
 * @remarks
 * The {@link DefaultResponseParser} extracts this from multiple common server
 * envelope formats (`metaData`, `meta`, `pagination`).
 */
export interface IMetadata {
  /** ISO-8601 timestamp of when the data was generated on the server. */
  time?: string;
  /** Total number of pages for the current query. */
  totalPages: number;
  /** Total number of matching records across all pages. */
  totalItems: number;
  /** Current page number (1-based). */
  currentPage: number;
  /** Number of records per page. */
  pageSize?: number;
}

// ─── Client configuration ─────────────────────────────────────────────────────

/**
 * Top-level configuration for {@link ApiClient}.
 *
 * Pass this to the `ApiClient` constructor. Use {@link createApiConfig} to
 * merge with sensible defaults.
 *
 * @example
 * ```ts
 * const config: ApiClientConfig = createApiConfig({
 *   baseURL: process.env.NEXT_PUBLIC_API_URL,
 *   timeout: 15_000,
 *   retryConfig: { maxRetries: 3, retryDelay: 1000 },
 *   cacheConfig: { enabled: true, defaultTTL: 60_000 },
 * });
 * ```
 */
export interface ApiClientConfig {
  /**
   * Root URL for all requests.
   * Relative `url` values on individual requests are appended to this.
   */
  baseURL: string;

  /**
   * Request timeout in milliseconds.
   * The connection is aborted and a {@link TimeoutException} is thrown when
   * exceeded.
   */
  timeout?: number;

  /**
   * Headers merged into every outgoing request.
   * Individual requests can add or override these.
   */
  headers?: Record<string, string>;

  /**
   * Whether to include cookies / credentials in cross-origin requests.
   * Equivalent to `fetch` `credentials: "include"`.
   */
  withCredentials?: boolean;

  /**
   * @deprecated Attach token handling via `ApiClientOptions.tokenStorage` instead.
   */
  useToken?: boolean;

  /**
   * Global default for {@link IRequestOptions.displayError}.
   * Set to `false` to suppress all error notifications by default.
   */
  displayError?: boolean;

  /**
   * Automatic retry configuration.
   * When present, the {@link RetryInterceptor} is registered automatically.
   */
  retryConfig?: {
    /** Maximum number of retry attempts. */
    maxRetries: number;
    /** Base delay between retries in ms (doubled each attempt when `backoffFactor` is 2). */
    retryDelay: number;
    /**
     * Custom predicate to decide whether an error should trigger a retry.
     * Defaults to retrying on network errors and 5xx responses.
     */
    retryCondition?: (error: unknown) => boolean;
  };

  /**
   * Response cache configuration.
   * When `enabled: true` and a {@link CacheStorage} is injected via
   * `ApiClientOptions.cache`, the {@link CacheInterceptor} is registered.
   */
  cacheConfig?: {
    /** Enable or disable caching globally. */
    enabled: boolean;
    /**
     * Default time-to-live for cached responses in milliseconds.
     * Overridable per-request via {@link IRequestOptions.cacheTTL}.
     */
    defaultTTL: number;
  };
}
