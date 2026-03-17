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
import type { Interceptor } from "./interceptors/interceptor.interface";
import type { NotificationService } from "./notification/notification.interface";
import type { ResponseParser } from "./parser/response-parser";
import { AxiosInstanceFactory } from "./client/axios/axios-instance.factory";
import { ErrorFactory } from "./error/error-factory";
import { HttpException } from "./error/exceptions/http.exception";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { CacheInterceptor } from "./interceptors/cache.interceptor";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";
import { RetryInterceptor } from "./interceptors/retry.interceptor";
import { NoopNotificationService } from "./notification/noop-notification";
import { DefaultResponseParser } from "./parser/response-parser";

export interface ApiClientOptions {
  interceptors?: Interceptor[];
  responseParser?: ResponseParser;
  notificationService?: NotificationService;
  tokenStorage?: TokenStorage;
  tokenRefreshHandler?: TokenRefreshHandler;
  cache?: CacheStorage;
}

export class ApiClient {
  private httpClient: HttpClient;
  private responseParser: ResponseParser;
  private notificationService: NotificationService;
  private tokenStorage?: TokenStorage;
  private tokenRefreshHandler?: TokenRefreshHandler;

  constructor(config: ApiClientConfig, options: ApiClientOptions = {}) {
    this.responseParser = options.responseParser ?? new DefaultResponseParser();
    this.notificationService =
      options.notificationService ?? new NoopNotificationService();
    this.tokenStorage = options.tokenStorage;
    this.tokenRefreshHandler = options.tokenRefreshHandler;

    const interceptors: Interceptor[] = options.interceptors ?? [];

    if (this.tokenStorage && this.tokenRefreshHandler) {
      interceptors.push(
        new AuthInterceptor(this.tokenStorage, this.tokenRefreshHandler),
      );
    }

    if (config.retryConfig) {
      interceptors.push(new RetryInterceptor(config.retryConfig));
    }

    if (options.cache && config.cacheConfig?.enabled) {
      interceptors.push(
        new CacheInterceptor(options.cache, {
          enabled: config.cacheConfig.enabled,
          defaultTTL: config.cacheConfig.defaultTTL,
        }),
      );
    }

    // Logging interceptor should be last
    interceptors.push(new LoggingInterceptor());

    this.httpClient = AxiosInstanceFactory.create(config, interceptors);
  }

  async request<TResponse = unknown, TData = unknown>(
    config: RequestConfig<TData>,
    options?: IRequestOptions,
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
      const httpError =
        error instanceof HttpException
          ? error
          : ErrorFactory.fromAxiosError(error);

      if (options?.displayError !== false) {
        this.displayError(httpError.message);
      }

      throw httpError;
    }
  }

  async requestWithMeta<TResponse = unknown, TData = unknown>(
    config: RequestConfig<TData>,
    options?: IRequestOptions,
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
      const httpError =
        error instanceof HttpException
          ? error
          : ErrorFactory.fromAxiosError(error);

      if (options?.displayError !== false) {
        this.displayError(httpError.message);
      }

      throw httpError;
    }
  }

  async get<TResponse = unknown>(
    url: string,
    params?: Record<string, unknown>,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.request<TResponse>(
      {
        method: "GET",
        url,
        params,
      },
      options,
    );
  }

  async getWithMeta<TResponse = unknown>(
    url: string,
    params?: Record<string, unknown>,
    options?: IRequestOptions,
  ): Promise<IResponseWithMetadataDTO<TResponse>> {
    return this.requestWithMeta<TResponse>(
      {
        method: "GET",
        url,
        params,
      },
      options,
    );
  }

  async post<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.request<TResponse, TData>(
      {
        method: "POST",
        url,
        data,
      },
      options,
    );
  }

  async put<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.request<TResponse, TData>(
      {
        method: "PUT",
        url,
        data,
      },
      options,
    );
  }

  async patch<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.request<TResponse, TData>(
      {
        method: "PATCH",
        url,
        data,
      },
      options,
    );
  }

  async delete<TResponse = unknown>(
    url: string,
    params?: Record<string, unknown>,
    options?: IRequestOptions,
  ): Promise<IResponseDTO<TResponse>> {
    return this.request<TResponse>(
      {
        method: "DELETE",
        url,
        params,
      },
      options,
    );
  }

  async upload<TResponse = unknown>(
    url: string,
    file: File | Blob,
    options?: IRequestOptions,
    additionalData?: Record<string, string | Blob>,
  ): Promise<IResponseDTO<TResponse>> {
    const formData = new FormData();

    if (file instanceof File) {
      formData.append("file", file);
    } else {
      formData.append("file", file, "file");
    }

    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }

    return this.post<TResponse, FormData>(url, formData, {
      ...options,
      isFormData: true,
    });
  }

  async download(
    url: string,
    params?: Record<string, unknown>,
    fileOptions?: IFileOptions,
    options?: IRequestOptions,
  ): Promise<Blob> {
    try {
      const enhancedConfig: RequestConfig = {
        method: "GET",
        url,
        params,
        responseType: "blob",
        _options: options,
      };

      const response = await this.httpClient.request<Blob>(enhancedConfig);

      if (fileOptions?.fileName && fileOptions.fileType) {
        this.triggerDownload(
          response.data,
          fileOptions.fileName,
          fileOptions.fileType,
        );
      }

      return response.data;
    } catch (error) {
      const httpError =
        error instanceof HttpException
          ? error
          : ErrorFactory.fromAxiosError(error);

      if (options?.displayError !== false) {
        this.displayError(httpError.message);
      }

      throw httpError;
    }
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

  private displayError(message: string): void {
    this.notificationService.error({
      message: "Error",
      description: message,
      duration: 3,
    });
  }
}
