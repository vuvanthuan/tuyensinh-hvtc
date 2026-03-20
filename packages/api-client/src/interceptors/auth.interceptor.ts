/**
 * @module auth.interceptor
 * @description
 * Axios interceptor that handles JWT token injection and automatic
 * silent token refresh on 401 Unauthorized responses.
 *
 * ### Request phase
 * Reads the access token from {@link TokenStorage} (or from the per-request
 * `options.token` override) and appends it as an `Authorization: Bearer <token>`
 * header – unless `options.skipAuth` is set.
 *
 * ### Response phase (401 handling)
 * 1. Detects a `401` response on a request that has not yet been retried.
 * 2. Calls `tokenRefreshHandler.refresh()` to obtain a new access token.
 * 3. Re-sends the original request with the updated token.
 * 4. If the refresh itself fails, delegates to `tokenRefreshHandler.onRefreshFailed()`
 *    and propagates the error to the caller.
 *
 * @example
 * ```ts
 * const interceptor = new AuthInterceptor(tokenStorage, refreshHandler);
 * // Registered automatically when ApiClientOptions.tokenStorage +
 * // ApiClientOptions.tokenRefreshHandler are both provided.
 * ```
 */

import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";

import type { TokenRefreshHandler } from "../auth/token-refresh-handler.interface";
import type { TokenStorage } from "../auth/token-storage.interface";
import type { IRequestOptions } from "../core/types/api.types";
import type { Interceptor } from "./interceptor.interface";

/** Augmented Axios config type that includes pipeline state fields. */
interface ExtendedInternalAxiosRequestConfig
  extends InternalAxiosRequestConfig {
  /** Set to `true` after the first 401-refresh retry to prevent loops. */
  _retry?: boolean;
  /** Per-request options forwarded from {@link ApiClient}. */
  _options?: IRequestOptions;
}

export class AuthInterceptor implements Interceptor {
  /**
   * @param tokenStorage        - Adapter to read the current access token.
   * @param tokenRefreshHandler - Strategy to refresh the token on 401.
   */
  constructor(
    private tokenStorage: TokenStorage,
    private tokenRefreshHandler: TokenRefreshHandler,
  ) {}

  /** @inheritdoc */
  register(instance: AxiosInstance): void {
    instance.interceptors.request.use(
      this.handleRequest.bind(this),
      (error: unknown) => this.rejectWithError(error),
    );

    instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      this.handleResponseError.bind(this),
    );
  }

  /**
   * Inject the `Authorization` header before the request is sent.
   *
   * Skips injection when:
   * - `options.skipAuth` is `true`
   * - No token is available in storage and none was provided per-request
   *
   * Sets `Content-Type: multipart/form-data` when `options.isFormData` is `true`.
   */
  private handleRequest(
    config: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
    const extendedConfig = config as ExtendedInternalAxiosRequestConfig;
    const options = extendedConfig._options;

    if (options?.skipAuth) {
      return config;
    }

    const token = options?.token ?? this.tokenStorage.getAccessToken();

    if (token) {
      const authType = options?.authType ?? "Bearer";
      const headerName = options?.customAuthHeader ?? "Authorization";

      // Custom header: use token verbatim (no scheme prefix)
      if (options?.customAuthHeader) {
        config.headers.set(headerName, token);
      } else {
        config.headers.set(headerName, `${authType} ${token}`);
      }
    }

    if (options?.isFormData) {
      config.headers.set("Content-Type", "multipart/form-data");
    }

    return config;
  }

  /**
   * Attempt a silent token refresh on `401 Unauthorized`.
   *
   * Guards against infinite loops via the `_retry` flag.
   * Delegates the refresh network call to {@link TokenRefreshHandler.refresh}.
   */
  private async handleResponseError(error: unknown): Promise<never> {
    const axiosError = error as AxiosError;
    const originalRequest = axiosError.config as
      | ExtendedInternalAxiosRequestConfig
      | undefined;

    if (!originalRequest) {
      return this.rejectWithError(error);
    }

    // Already retried or auth is explicitly skipped – propagate immediately
    if (originalRequest._retry || originalRequest._options?.skipAuth) {
      return this.rejectWithError(error);
    }

    if (axiosError.response?.status === 401) {
      originalRequest._retry = true;

      try {
        const newToken = await this.tokenRefreshHandler.refresh();
        originalRequest.headers.set("Authorization", `Bearer ${newToken}`);

        // Re-send the original request with the refreshed token
        return axios(originalRequest);
      } catch (refreshError) {
        this.tokenRefreshHandler.onRefreshFailed();
        return this.rejectWithError(refreshError);
      }
    }

    return this.rejectWithError(error);
  }

  /** Wrap the error in an `Error` object if it is not already one. */
  private rejectWithError(error: unknown): Promise<never> {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
    return Promise.reject(new Error(String(error)));
  }
}
