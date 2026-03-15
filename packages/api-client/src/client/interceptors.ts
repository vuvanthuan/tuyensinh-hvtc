import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import type { IRequestOptions, RequestConfig } from "./types";
import { AuthHelper } from "./authHelper";
import { ErrorHandler } from "./errorHandler";

export class InterceptorManager {
  private errorHandler: ErrorHandler;
  private refreshSubscribers: ((token: string) => void)[] = [];
  private isRefreshing = false;

  constructor() {
    this.errorHandler = ErrorHandler.getInstance();
  }

  setupInterceptors(
    instance: AxiosInstance,
    defaultOptions: IRequestOptions,
  ): void {
    this.setupRequestInterceptor(instance, defaultOptions);
    this.setupResponseInterceptor(instance, defaultOptions);
  }

  private setupRequestInterceptor(
    instance: AxiosInstance,
    defaultOptions: IRequestOptions,
  ): void {
    instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const options = (config as RequestConfig)._options ?? defaultOptions;
        const authorization = AuthHelper.getAuthorization(options);

        if (authorization) {
          config.headers.Authorization = authorization;
        }

        if (typeof window !== "undefined") {
          const language = localStorage.getItem("language");
          if (language) {
            config.headers["X-Accept-Language"] = language;
          }
        }

        return config;
      },
      (error) => error as Error,
    );
  }

  private setupResponseInterceptor(
    instance: AxiosInstance,
    defaultOptions: IRequestOptions,
  ): void {
    instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const originalConfig = error.config as RequestConfig;

        if (originalConfig._retry) {
          return Promise.reject(error);
        }

        if (
          error.response?.status === 401 &&
          Boolean(originalConfig._retry) !== true
        ) {
          return this.handleTokenExpired(originalConfig, instance);
        }

        const options = originalConfig._options ?? defaultOptions;
        const dataError = await this.errorHandler.handleErrorResponse(
          error,
          options,
        );

        return Promise.reject(new Error(dataError.errorMessage));
      },
    );
  }

  private async handleTokenExpired<T>(
    config: RequestConfig,
    instance: AxiosInstance,
  ): Promise<T> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      try {
        const newToken = await AuthHelper.refreshToken();
        this.isRefreshing = false;

        if (newToken) {
          this.onRefreshed(newToken);
          config._retry = true;

          if (config.headers) {
            config.headers.Authorization = `Bearer ${newToken}`;
          } else {
            config.headers = { Authorization: `Bearer ${newToken}` };
          }

          return instance(config);
        }
      } catch (error) {
        this.isRefreshing = false;
        await this.errorHandler.handleErrorResponse(error as Error, {});
      }
    }

    return new Promise((resolve) => {
      this.subscribeTokenRefresh((token: string) => {
        config._retry = true;

        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          config.headers = { Authorization: `Bearer ${token}` };
        }

        resolve(instance(config));
      });
    });
  }

  private subscribeTokenRefresh(callback: (token: string) => void): void {
    this.refreshSubscribers.push(callback);
  }

  private onRefreshed(token: string): void {
    this.refreshSubscribers.forEach((callback) => callback(token));
    this.refreshSubscribers = [];
  }
}
