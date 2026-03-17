import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

import type { Interceptor } from "./interceptor.interface";

export interface RetryConfig {
  maxRetries: number;
  retryDelay: number;
  retryCondition?: (error: AxiosError) => boolean;
  backoffFactor?: number;
}

export interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retryCount?: number;
  _options?: {
    skipRetry?: boolean;
  };
}

export class RetryInterceptor implements Interceptor {
  constructor(private config: RetryConfig) {}

  register(instance: AxiosInstance): void {
    instance.interceptors.response.use(
      (response) => response,
      async (error: unknown) => {
        const axiosError = error as AxiosError;
        const config = axiosError.config as
          | ExtendedAxiosRequestConfig
          | undefined;

        if (!config) {
          // Wrap in Error object
          return Promise.reject(
            axiosError instanceof Error ? axiosError : new Error(String(error)),
          );
        }

        if (config._options?.skipRetry) {
          return Promise.reject(
            axiosError instanceof Error ? axiosError : new Error(String(error)),
          );
        }

        const maxRetries = this.config.maxRetries;
        config._retryCount = config._retryCount ?? 0;

        if (config._retryCount >= maxRetries) {
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

        const delay =
          this.config.retryDelay *
          Math.pow(this.config.backoffFactor ?? 2, config._retryCount - 1);

        await new Promise((resolve) => setTimeout(resolve, delay));

        return instance(config);
      },
    );
  }

  private defaultRetryCondition(error: AxiosError): boolean {
    // Retry on network errors or 5xx server errors
    return (
      !error.response ||
      (error.response.status >= 500 && error.response.status <= 599)
    );
  }
}
