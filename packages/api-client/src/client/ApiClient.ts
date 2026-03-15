import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

import type {
  IApiConfig,
  IDataWithMeta,
  IDataWithStatusCode,
  IFileOptions,
  IRequestOptions,
  IResponseDTO,
  IResponseWithMetadataDTO,
  RequestConfig,
} from "./types";
import { ErrorHandler } from "./errorHandler";
import { InterceptorManager } from "./interceptors";
import { ResponseParser } from "./responseParser";

export class ApiClient {
  private instance: AxiosInstance;
  private interceptorManager: InterceptorManager;
  private responseParser: ResponseParser;
  private errorHandler: ErrorHandler;
  private defaultOptions: IRequestOptions;

  constructor(config: Partial<IApiConfig> = {}) {
    this.defaultOptions = {
      withToken: config.useToken ?? true,
      displayError: config.displayError ?? true,
      authType: "Bearer",
    };

    this.instance = this.createInstance(config);
    this.interceptorManager = new InterceptorManager();
    this.responseParser = new ResponseParser();
    this.errorHandler = ErrorHandler.getInstance();

    this.setupInterceptors();
  }

  private createInstance(config: Partial<IApiConfig>): AxiosInstance {
    return axios.create({
      baseURL: config.baseURL ?? "http://localhost:3000",
      timeout: config.timeout ?? 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  private setupInterceptors(): void {
    this.interceptorManager.setupInterceptors(
      this.instance,
      this.defaultOptions,
    );
  }

  async get<T>(url: string, options?: IRequestOptions): Promise<T> {
    return this.request<T>({ method: "GET", url }, options);
  }

  async post<T>(url: string, data?: T, options?: IRequestOptions): Promise<T> {
    return this.request<T>({ method: "POST", url, data }, options);
  }

  async put<T>(url: string, data?: T, options?: IRequestOptions): Promise<T> {
    return this.request<T>({ method: "PUT", url, data }, options);
  }

  async patch<T>(url: string, data?: T, options?: IRequestOptions): Promise<T> {
    return this.request<T>({ method: "PATCH", url, data }, options);
  }

  async delete<T>(url: string, options?: IRequestOptions): Promise<T> {
    return this.request<T>({ method: "DELETE", url }, options);
  }

  async request<T>(
    config: AxiosRequestConfig,
    options?: IRequestOptions,
  ): Promise<T> {
    const mergedOptions = { ...this.defaultOptions, ...options };

    const requestConfig: RequestConfig = {
      ...config,
      _options: mergedOptions,
      headers: {
        ...config.headers,
        ...(mergedOptions.isFormData && {
          "Content-Type": "multipart/form-data",
        }),
      },
    };

    const response =
      await this.instance.request<IResponseDTO<T>>(requestConfig);
    return this.responseParser.parseData(response, mergedOptions);
  }

  async requestWithMeta<T>(
    config: AxiosRequestConfig,
    options?: IRequestOptions,
  ): Promise<IDataWithMeta<T>> {
    const mergedOptions = { ...this.defaultOptions, ...options };
    const requestConfig: RequestConfig = {
      ...config,
      _options: mergedOptions,
      headers: {
        ...config.headers,
        ...(mergedOptions.isFormData && {
          "Content-Type": "multipart/form-data",
        }),
      },
    };

    const response =
      await this.instance.request<IResponseWithMetadataDTO<T>>(requestConfig);
    return this.responseParser.parseDataWithMeta(response, mergedOptions);
  }

  async requestWithStatusCode<T>(
    config: AxiosRequestConfig,
    options?: IRequestOptions,
  ): Promise<IDataWithStatusCode<T>> {
    const mergedOptions = { ...this.defaultOptions, ...options };
    const requestConfig: RequestConfig = {
      ...config,
      _options: mergedOptions,
      headers: {
        ...config.headers,
        ...(mergedOptions.isFormData && {
          "Content-Type": "multipart/form-data",
        }),
      },
    };

    const response =
      await this.instance.request<IResponseDTO<T>>(requestConfig);
    return this.responseParser.parseDataWithStatusCode(response, mergedOptions);
  }

  async download(
    config: AxiosRequestConfig,
    fileOptions: IFileOptions = {},
    options?: IRequestOptions,
  ): Promise<Blob> {
    const mergedOptions = { ...this.defaultOptions, ...options };
    const requestConfig: RequestConfig = {
      ...config,
      _options: mergedOptions,
      responseType: "blob",
    };

    const response = await this.instance.request<Blob>(requestConfig);
    return this.responseParser.parseBlobResponse(response, fileOptions);
  }

  onLogout(callback: () => void): void {
    this.errorHandler.setLogoutCallback(callback);
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }
}
