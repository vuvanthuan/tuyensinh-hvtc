/**
 * @module logging.interceptor
 * @description
 * Axios interceptor that logs outgoing requests and incoming responses
 * (including errors) using a pluggable {@link Logger} adapter.
 *
 * Logging is **enabled by default in development** (`NODE_ENV === "development"`)
 * and disabled in production to avoid leaking sensitive data. You can override
 * this by passing `enabled` explicitly to the constructor:
 *
 * ```ts
 * new LoggingInterceptor(new ConsoleLogger(), true); // always on
 * new LoggingInterceptor(undefined, false); // always off
 * ```
 *
 * ### Output format
 * - `[Request] METHOD /path` with params, data, and headers
 * - `[Response] METHOD /path` with status and response body
 * - `[Error] METHOD /path` with status, message, and error body
 *
 * @remarks
 * Keep this interceptor **last** in the pipeline so it observes the fully
 * resolved config (after auth headers have been injected, etc.).
 */

import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import type { Interceptor } from "./interceptor.interface";

// ─── Logger abstraction ───────────────────────────────────────────────────────

/**
 * Minimal logging interface that the `LoggingInterceptor` depends on.
 *
 * Implement this to redirect logs to a structured logger like Pino or Winston.
 *
 * @example
 * ```ts
 * class PinoLogger implements Logger {
 *   log(...args: unknown[]) { pino.info(...args); }
 *   info(...args: unknown[]) { pino.info(...args); }
 *   warn(...args: unknown[]) { pino.warn(...args); }
 *   error(...args: unknown[]) { pino.error(...args); }
 * }
 * new LoggingInterceptor(new PinoLogger());
 * ```
 */
export interface Logger {
  log(...args: unknown[]): void;
  info(...args: unknown[]): void;
  warn(...args: unknown[]): void;
  error(...args: unknown[]): void;
}

/**
 * Default logger implementation that delegates to the global `console`.
 */
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

// ─── Interceptor ─────────────────────────────────────────────────────────────

export class LoggingInterceptor implements Interceptor {
  /**
   * @param logger  - Logger adapter. Defaults to {@link ConsoleLogger}.
   * @param enabled - Whether logging is active. Defaults to `true` in development.
   */
  constructor(
    private logger: Logger = new ConsoleLogger(),
    private enabled: boolean = process.env.NODE_ENV === "development",
  ) {}

  /** @inheritdoc */
  register(instance: AxiosInstance): void {
    if (!this.enabled) return;

    instance.interceptors.request.use(
      this.handleRequest.bind(this),
      this.rejectWithError.bind(this),
    );

    instance.interceptors.response.use(
      this.handleResponse.bind(this),
      this.handleError.bind(this),
    );
  }

  /** Log the outgoing request details. */
  private handleRequest(
    config: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const params = config.params;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = config.data;

    this.logger.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      params,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data,
      headers: config.headers.toJSON(),
    });
    return config;
  }

  /** Log the successful HTTP response. */
  private handleResponse(response: AxiosResponse): AxiosResponse {
    this.logger.log(
      `[Response] ${response.config.method?.toUpperCase()} ${response.config.url}`,
      {
        status: response.status,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: response.data,
      },
    );
    return response;
  }

  /** Log the error response and re-propagate the error unchanged. */
  private handleError(error: unknown): Promise<never> {
    const errorInfo = this.extractErrorInfo(error);

    this.logger.error(`[Error] ${errorInfo.method} ${errorInfo.url}`, {
      status: errorInfo.status,
      message: errorInfo.message,
      data: errorInfo.data,
    });

    return this.rejectWithError(error);
  }

  /** Extract loggable fields from any thrown value. */
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
      return { ...defaultInfo, message: error.message };
    }

    return { ...defaultInfo, message: String(error) };
  }

  private isAxiosError(error: unknown): error is AxiosError {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (error as AxiosError)?.isAxiosError === true;
  }

  private rejectWithError(error: unknown): Promise<never> {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
    return Promise.reject(new Error(String(error)));
  }
}
