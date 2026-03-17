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

interface ExtendedInternalAxiosRequestConfig
  extends InternalAxiosRequestConfig {
  _retry?: boolean;
  _options?: IRequestOptions;
}

export class AuthInterceptor implements Interceptor {
  constructor(
    private tokenStorage: TokenStorage,
    private tokenRefreshHandler: TokenRefreshHandler,
  ) {}

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

  private async handleResponseError(error: unknown): Promise<never> {
    const axiosError = error as AxiosError;
    const originalRequest = axiosError.config as
      | ExtendedInternalAxiosRequestConfig
      | undefined;

    if (!originalRequest) {
      return this.rejectWithError(error);
    }

    if (originalRequest._retry || originalRequest._options?.skipAuth) {
      return this.rejectWithError(error);
    }

    if (axiosError.response?.status === 401) {
      originalRequest._retry = true;

      try {
        const newToken = await this.tokenRefreshHandler.refresh();
        originalRequest.headers.set("Authorization", `Bearer ${newToken}`);

        // Simply retry with axios default instance
        return axios(originalRequest);
      } catch (refreshError) {
        this.tokenRefreshHandler.onRefreshFailed();
        return this.rejectWithError(refreshError);
      }
    }

    return this.rejectWithError(error);
  }

  private rejectWithError(error: unknown): Promise<never> {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
    return Promise.reject(new Error(String(error)));
  }
}
