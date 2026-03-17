import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import type { Interceptor } from "./interceptor.interface";

export interface Logger {
  log(...args: unknown[]): void;
  info(...args: unknown[]): void;
  warn(...args: unknown[]): void;
  error(...args: unknown[]): void;
}

export class ConsoleLogger implements Logger {
  log(...args: unknown[]): void {
    console.log(...args);
  }
  info(...args: unknown[]): void {
    console.info(...args);
  }
  warn(...args: unknown[]): void {
    console.warn(...args);
  }
  error(...args: unknown[]): void {
    console.error(...args);
  }
}

export class LoggingInterceptor implements Interceptor {
  constructor(
    private logger: Logger = new ConsoleLogger(),
    private enabled: boolean = process.env.NODE_ENV === "development",
  ) {}

  register(instance: AxiosInstance): void {
    if (!this.enabled) return;

    instance.interceptors.request.use(
      this.handleRequest.bind(this),
      this.rejectWithError,
    );

    instance.interceptors.response.use(
      this.handleResponse.bind(this),
      this.handleError.bind(this),
    );
  }

  private handleRequest(
    config: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig {
    this.logger.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`, {
      params: config.params,
      data: config.data,
      headers: config.headers.toJSON(),
    });
    return config;
  }

  private handleResponse(response: AxiosResponse): AxiosResponse {
    this.logger.log(
      `[Response] ${response.config.method?.toUpperCase()} ${response.config.url}`,
      {
        status: response.status,
        data: response.data,
      },
    );
    return response;
  }

  private handleError(error: unknown): Promise<never> {
    const errorInfo = this.extractErrorInfo(error);

    this.logger.error(`[Error] ${errorInfo.method} ${errorInfo.url}`, {
      status: errorInfo.status,
      message: errorInfo.message,
      data: errorInfo.data,
    });

    return this.rejectWithError(error);
  }

  private extractErrorInfo(error: unknown): {
    method: string;
    url: string;
    status?: number;
    message: string;
    data: unknown;
  } {
    const defaultInfo = {
      method: "UNKNOWN",
      url: "UNKNOWN",
      status: undefined,
      message: "Unknown error",
      data: undefined,
    };

    if (this.isAxiosError(error)) {
      return {
        method: error.config?.method?.toUpperCase() ?? "UNKNOWN",
        url: error.config?.url ?? "UNKNOWN",
        status: error.response?.status,
        message: error.message,
        data: error.response?.data,
      };
    }

    if (error instanceof Error) {
      return {
        ...defaultInfo,
        message: error.message,
      };
    }

    return {
      ...defaultInfo,
      message: String(error),
    };
  }

  private isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError)?.isAxiosError === true;
  }

  private rejectWithError(error: unknown): Promise<never> {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
    return Promise.reject(new Error(String(error)));
  }
}
