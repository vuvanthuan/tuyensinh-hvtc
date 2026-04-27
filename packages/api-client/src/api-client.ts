import type { TokenRefreshHandler } from "./auth/token-refresh-handler.interface";
import type { TokenStorage } from "./auth/token-storage.interface";
import type { CacheStorage } from "./cache/cache-storage.interface";
import type { HttpClient } from "./client/http-client.interface";
import type {
  ApiClientConfig,
  IFileOptions,
  IRequestOptions,
} from "./core/types/api.types";
import type { RequestConfig } from "./core/types/request.types";
import type {
  IResponseDTO,
  IResponseWithMetadataDTO,
} from "./core/types/response.types";
import type { IErrorHandler } from "./error/error-handler.interface";
import type { Interceptor } from "./interceptors/interceptor.interface";
import type { NotificationService } from "./notification/notification.interface";
import type { ResponseParser } from "./parser/response-parser.interface";
import { AxiosInstanceFactory } from "./client/axios/axios-instance.factory";
import { ErrorFactory } from "./error/error-factory";
import { HttpException } from "./error/exceptions/http.exception";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { CacheInterceptor } from "./interceptors/cache.interceptor";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";
import { RetryInterceptor } from "./interceptors/retry.interceptor";
import { NoopNotificationService } from "./notification/noop-notification";
import { DefaultResponseParser } from "./parser/response-parser";

// ─── Public options ────────────────────────────────────────────────────────────

export interface ApiClientOptions {
  /**
   * Additional request/response interceptors plugged into the Axios pipeline.
   * They are applied in insertion order; the built-in auth/retry/cache/logging
   * interceptors are added automatically based on the provided config.
   */
  interceptors?: Interceptor[];

  /** Custom response envelope parser. Defaults to DefaultResponseParser. */
  responseParser?: ResponseParser;

  /**
   * UI notification adapter (e.g. Ant Design / React-Toastify).
   * Defaults to a no-op implementation that silently ignores all notifications.
   */
  notificationService?: NotificationService;

  /**
   * Token storage adapter used for reading/writing JWT tokens.
   * Required when `tokenRefreshHandler` is provided.
   */
  tokenStorage?: TokenStorage;

  /**
   * Handler responsible for refreshing expired access tokens.
   * When provided together with `tokenStorage`, the AuthInterceptor is enabled.
   */
  tokenRefreshHandler?: TokenRefreshHandler;

  /**
   * Cache storage backend (e.g. MemoryCacheStorage, LRUCacheStorage).
   * Only used when `config.cacheConfig.enabled` is true.
   */
  cache?: CacheStorage;

  /**
   * Optional error handler invoked for every caught HttpException.
   * Use this to centralise Sentry reporting, analytics events, or
   * session-invalidation logic without touching individual call sites.
   */
  errorHandler?: IErrorHandler;
}

// ─── AbortHandle ─────────────────────────────────────────────────────────────

/**
 * Returned by certain ApiClient methods to let callers cancel in-flight requests.
 */
export interface AbortHandle {
  /** Cancel the associated request. An optional reason string can be provided. */
  abort(reason?: string): void;
  /** The underlying AbortSignal – pass directly to RequestConfig.signal. */
  signal: AbortSignal;
}

/** Factory helper to create an AbortHandle from a fresh AbortController. */
export function createAbortHandle(): AbortHandle {
  const controller = new AbortController();
  return {
    abort: (reason?: string) => controller.abort(reason),
    signal: controller.signal,
  };
}

// ─── ApiClient ────────────────────────────────────────────────────────────────

export class ApiClient {
  private readonly httpClient: HttpClient;
  private readonly responseParser: ResponseParser;
  private readonly notificationService: NotificationService;
  private readonly errorHandler?: IErrorHandler;
  private readonly tokenStorage?: TokenStorage;
  private readonly tokenRefreshHandler?: TokenRefreshHandler;

  constructor(config: ApiClientConfig, options: ApiClientOptions = {}) {
    this.responseParser = options.responseParser ?? new DefaultResponseParser();
    this.notificationService =
      options.notificationService ?? new NoopNotificationService();
    this.tokenStorage = options.tokenStorage;
    this.tokenRefreshHandler = options.tokenRefreshHandler;
    this.errorHandler = options.errorHandler;

    const interceptors: Interceptor[] = [...(options.interceptors ?? [])];

    // Auth (token injection + 401 → refresh) – must run before retry
    if (this.tokenStorage && this.tokenRefreshHandler) {
      interceptors.push(
        new AuthInterceptor(this.tokenStorage, this.tokenRefreshHandler),
      );
    }

    // Exponential-backoff retry
    if (config.retryConfig) {
      interceptors.push(new RetryInterceptor(config.retryConfig));
    }

    // GET-only response cache
    if (options.cache && config.cacheConfig?.enabled) {
      interceptors.push(
        new CacheInterceptor(options.cache, {
          enabled: config.cacheConfig.enabled,
          defaultTTL: config.cacheConfig.defaultTTL,
        }),
      );
    }

    // Logging is always last so it observes the final resolved config
    interceptors.push(new LoggingInterceptor());

    this.httpClient = AxiosInstanceFactory.create(config, interceptors);
  }

  /**
   * The underlying AxiosInstance used by this client.
   * Only available when using the Axios-backed HttpClient.
   */
  public get instance(): unknown {
    // We cast to any here because ApiClient is technically framework-agnostic
    // but in this monorepo we know it's always AxiosHttpClient.
    return (this.httpClient as unknown as { instance: unknown }).instance;
  }

  // ─── Core request execution ───────────────────────────────────────────────

  /**
   * Low-level typed request. Prefer the semantic helpers (get/post/…) for
   * everyday use.
   */
  async request<TResponse = unknown, TData = unknown>(
    config: RequestConfig<TData>,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.executeRequest<TResponse, TData>(config, options);
  }

  /**
   * Same as `request` but guarantees metadata is always present in the return
   * value. Useful for paginated endpoints.
   */
  async requestWithMeta<TResponse = unknown, TData = unknown>(
    config: RequestConfig<TData>,
    options?: IRequestOptions,
  ): Promise<IResponseWithMetadataDTO<TResponse>> {
    return this.executeRequestWithMeta<TResponse, TData>(config, options);
  }

  // ─── Semantic HTTP helpers ────────────────────────────────────────────────

  async get<TResponse = unknown>(
    url: string,
    params?: Record<string, unknown>,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.request<TResponse>({ method: "GET", url, params }, options);
  }

  async getWithMeta<TResponse = unknown>(
    url: string,
    params?: Record<string, unknown>,
    options?: IRequestOptions,
  ): Promise<IResponseWithMetadataDTO<TResponse>> {
    return this.requestWithMeta<TResponse>(
      { method: "GET", url, params },
      options,
    );
  }

  async post<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.request<TResponse, TData>(
      { method: "POST", url, data },
      options,
    );
  }

  async put<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.request<TResponse, TData>(
      { method: "PUT", url, data },
      options,
    );
  }

  async patch<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.request<TResponse, TData>(
      { method: "PATCH", url, data },
      options,
    );
  }

  async delete<TResponse = unknown>(
    url: string,
    params?: Record<string, unknown>,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.request<TResponse>({ method: "DELETE", url, params }, options);
  }

  // ─── File operations ──────────────────────────────────────────────────────

  /**
   * Upload a File or Blob (multipart/form-data).
   * Additional form fields can be passed via `additionalData`.
   */
  async upload<TResponse = unknown>(
    url: string,
    file: File | Blob,
    options?: IRequestOptions,
    additionalData?: Record<string, string | Blob>,
    onProgress?: (pct: number) => void,
  ): Promise<IResponseDTO<TResponse>> {
    const formData = new FormData();

    if (file instanceof File) {
      formData.append("file", file);
    } else {
      formData.append("file", file, "file");
    }

    if (additionalData) {
      for (const [key, value] of Object.entries(additionalData)) {
        formData.append(key, value);
      }
    }

    return this.request<TResponse, FormData>(
      {
        method: "POST",
        url,
        data: formData,
        onUploadProgress: onProgress
          ? ({ loaded, total }) => {
              const pct = total ? Math.round((loaded / total) * 100) : 0;
              onProgress(pct);
            }
          : undefined,
      },
      { ...options, isFormData: true },
    );
  }

  /**
   * Download a resource as a Blob.
   * When `fileOptions` is provided the file is also immediately saved via an
   * anchor-click (browser only).
   */
  async download(
    url: string,
    params?: Record<string, unknown>,
    fileOptions?: IFileOptions,
    options?: IRequestOptions,
  ): Promise<Blob> {
    try {
      const config: RequestConfig = {
        method: "GET",
        url,
        params,
        responseType: "blob",
        _options: options,
      };

      const response = await this.httpClient.request<Blob>(config);

      if (fileOptions?.fileName && fileOptions.fileType) {
        this.triggerDownload(
          response.data,
          fileOptions.fileName,
          fileOptions.fileType,
        );
      }

      return response.data;
    } catch (error) {
      const httpError = this.normaliseError(error);
      await this.handleError(httpError, options);
      throw httpError;
    }
  }

  // ─── Abort helpers ────────────────────────────────────────────────────────

  /**
   * Create a cancellable version of any request.
   *
   * @example
   * const { abort, signal } = createAbortHandle();
   * const promise = client.get("/search", { q }, { signal });
   * // Later:
   * abort("user navigated away");
   */
  withAbort<T>(fn: (signal: AbortSignal) => Promise<T>): {
    promise: Promise<T>;
    abort: (reason?: string) => void;
  } {
    const handle = createAbortHandle();
    return {
      promise: fn(handle.signal),
      abort: (reason?: string) => handle.abort(reason),
    };
  }

  // ─── Private helpers ──────────────────────────────────────────────────────

  /**
   * Shared execution core for request().
   */
  private async executeRequest<TResponse, TData>(
    config: RequestConfig<TData>,
    options: IRequestOptions | undefined,
  ): Promise<IResponseDTO<TResponse>> {
    try {
      const enhancedConfig: RequestConfig<TData> = {
        ...config,
        _options: options,
      };

      const response = await this.httpClient.request<TResponse, TData>(
        enhancedConfig,
      );

      const parsed = this.responseParser.parse<TResponse>(response.data);

      if (!parsed.success && options?.displayError !== false) {
        this.displayError(parsed.message ?? "Request failed");
      }

      return parsed;
    } catch (error) {
      const httpError = this.normaliseError(error);
      await this.handleError(httpError, options);
      throw httpError;
    }
  }

  /**
   * Shared execution core for requestWithMeta().
   */
  private async executeRequestWithMeta<TResponse, TData>(
    config: RequestConfig<TData>,
    options: IRequestOptions | undefined,
  ): Promise<IResponseWithMetadataDTO<TResponse>> {
    try {
      const enhancedConfig: RequestConfig<TData> = {
        ...config,
        _options: options,
      };

      const response = await this.httpClient.request<TResponse, TData>(
        enhancedConfig,
      );

      const parsed = this.responseParser.parseWithMeta<TResponse>(
        response.data,
      );

      if (!parsed.success && options?.displayError !== false) {
        this.displayError(parsed.message ?? "Request failed");
      }

      return parsed;
    } catch (error) {
      const httpError = this.normaliseError(error);
      await this.handleError(httpError, options);
      throw httpError;
    }
  }

  /** Ensure any thrown value is always an HttpException. */
  private normaliseError(error: unknown): HttpException {
    return error instanceof HttpException
      ? error
      : ErrorFactory.fromAxiosError(error);
  }

  /** Invoke optional errorHandler then conditionally show a notification. */
  private async handleError(
    error: HttpException,
    options?: IRequestOptions,
  ): Promise<void> {
    if (this.errorHandler) {
      await this.errorHandler.handle(error);
    }

    if (options?.displayError !== false) {
      this.displayError(error.message);
    }
  }

  private displayError(message: string): void {
    this.notificationService.error({
      message: "Error",
      description: message,
      duration: 3,
    });
  }

  private triggerDownload(
    blob: Blob,
    fileName: string,
    fileType: string,
  ): void {
    if (typeof window === "undefined") return;

    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", `${fileName}.${fileType}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }
}
