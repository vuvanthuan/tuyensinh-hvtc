/**
 * @module axios-client
 * @description
 * Axios-backed implementation of {@link HttpClient}.
 *
 * Wraps an `AxiosInstance` (pre-configured with interceptors by
 * {@link AxiosInstanceFactory}) and adapts Axios responses to the
 * library-internal {@link HttpResponse} shape.
 *
 * ### Why separate from AxiosInstance?
 * Keeping the adapter thin lets the interceptor pipeline (auth, retry,
 * cache, logging) operate on the raw Axios layer, while the `ApiClient`
 * always sees the clean, framework-agnostic `HttpClient` interface.
 *
 * @example
 * ```ts
 * // Typically created via AxiosInstanceFactory, not directly
 * const client = AxiosInstanceFactory.create(config, [authInterceptor]);
 * const response = await client.get<User>("/me");
 * ```
 */

import type {
  AxiosInstance,
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import axios from "axios";

import type {
  DeleteRequestConfig,
  GetRequestConfig,
  PatchRequestConfig,
  PostRequestConfig,
  PutRequestConfig,
  RequestConfig,
} from "../../core/types/request.types";
import type { HttpResponse } from "../../core/types/response.types";
import type { HttpClient } from "../http-client.interface";

export class AxiosHttpClient implements HttpClient {
  /**
   * @param instance - A pre-configured Axios instance with interceptors
   *   already registered (provided by {@link AxiosInstanceFactory}).
   */
  constructor(private readonly _instance: AxiosInstance) {}

  /**
   * The underlying AxiosInstance used by this client.
   * Useful for registering mock adapters or direct Axios interceptors.
   */
  public get instance(): AxiosInstance {
    return this._instance;
  }

  // ─── HttpClient interface ─────────────────────────────────────────────────

  /**
   * Send a fully typed HTTP request via Axios.
   *
   * Internal pipeline state fields (`_options`, `_retry`, `_retryCount`,
   * `_cacheKey`, `_cacheTTL`) are forwarded as-is so Axios interceptors
   * can read and mutate them during the request lifecycle.
   *
   * @typeParam TResponse - Expected shape of the response body.
   * @typeParam TData     - Shape of the request body payload.
   * @param config - Full request configuration including internal fields.
   * @throws Re-throws Axios errors unchanged so the interceptor chain and
   *   {@link ErrorFactory} can handle them correctly.
   */
  async request<TResponse = unknown, TData = unknown>(
    config: RequestConfig<TData>,
  ): Promise<HttpResponse<TResponse>> {
    try {
      const axiosConfig = this.toAxiosConfig<TData>(config);
      const response = await this.instance.request<
        TResponse,
        AxiosResponse<TResponse>
      >(axiosConfig);
      return this.toHttpResponse<TResponse>(response);
    } catch (error) {
      // Re-throw Axios errors so ErrorFactory / interceptors can handle them.
      // Non-Axios errors (programming mistakes) are wrapped for consistency.
      if (axios.isAxiosError(error)) {
        throw error;
      }
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Unexpected error: ${String(error)}`);
    }
  }

  /**
   * Convenience `GET` wrapper.
   *
   * @typeParam TResponse - Expected shape of the response body.
   */
  async get<TResponse = unknown>(
    url: string,
    config?: Omit<GetRequestConfig, "url" | "method">,
  ): Promise<HttpResponse<TResponse>> {
    return this.request<TResponse>({ method: "GET", url, ...config });
  }

  /**
   * Convenience `POST` wrapper.
   *
   * @typeParam TResponse - Expected shape of the response body.
   * @typeParam TData     - Shape of the request body payload.
   */
  async post<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PostRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>> {
    return this.request<TResponse, TData>({
      method: "POST",
      url,
      data,
      ...config,
    });
  }

  /**
   * Convenience `PUT` wrapper.
   *
   * @typeParam TResponse - Expected shape of the response body.
   * @typeParam TData     - Shape of the request body payload.
   */
  async put<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PutRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>> {
    return this.request<TResponse, TData>({
      method: "PUT",
      url,
      data,
      ...config,
    });
  }

  /**
   * Convenience `PATCH` wrapper.
   *
   * @typeParam TResponse - Expected shape of the response body.
   * @typeParam TData     - Shape of the request body payload.
   */
  async patch<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PatchRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>> {
    return this.request<TResponse, TData>({
      method: "PATCH",
      url,
      data,
      ...config,
    });
  }

  /**
   * Convenience `DELETE` wrapper.
   *
   * @typeParam TResponse - Expected shape of the response body.
   */
  async delete<TResponse = unknown>(
    url: string,
    config?: Omit<DeleteRequestConfig, "url" | "method">,
  ): Promise<HttpResponse<TResponse>> {
    return this.request<TResponse>({ method: "DELETE", url, ...config });
  }

  // ─── Private helpers ──────────────────────────────────────────────────────

  /**
   * Map a {@link RequestConfig} to an Axios-compatible `AxiosRequestConfig`.
   *
   * Internal pipeline fields (`_options`, `_retry`, `_retryCount`, etc.) are
   * spread **as-is** onto the returned object so Axios interceptors can read
   * and update them at every stage of the lifecycle.
   *
   * Fields explicitly mapped ensure type safety; the spread at the end passes
   * through any Axios-specific extensions without losing them.
   *
   * @param config - The full application-level request config.
   */
  private toAxiosConfig<TData = unknown>(
    config: RequestConfig<TData>,
  ): AxiosRequestConfig & Record<string, unknown> {
    return {
      // ── Standard Axios fields ──────────────────────────────────────────
      url: config.url,
      method: config.method,
      headers: config.headers,
      params: config.params,
      data: config.data,
      timeout: config.timeout,
      withCredentials: config.withCredentials,
      responseType: config.responseType,
      signal: config.signal,
      onUploadProgress: config.onUploadProgress
        ? (progressEvent: AxiosProgressEvent) => {
            const percentage =
              progressEvent.total && progressEvent.total > 0
                ? Math.round((progressEvent.loaded / progressEvent.total) * 100)
                : 0;
            config.onUploadProgress?.({
              loaded: progressEvent.loaded,
              total: progressEvent.total,
              percentage,
            });
          }
        : undefined,
      onDownloadProgress: config.onDownloadProgress
        ? (progressEvent: AxiosProgressEvent) => {
            const percentage =
              progressEvent.total && progressEvent.total > 0
                ? Math.round((progressEvent.loaded / progressEvent.total) * 100)
                : 0;
            config.onDownloadProgress?.({
              loaded: progressEvent.loaded,
              total: progressEvent.total,
              percentage,
            });
          }
        : undefined,

      // ── Internal pipeline fields (read by interceptors) ────────────────
      _retry: config._retry,
      _retryCount: config._retryCount,
      _options: config._options,
      _cacheKey: config._cacheKey,
      _cacheTTL: config._cacheTTL,
    };
  }

  /**
   * Convert an `AxiosResponse` into the framework-agnostic {@link HttpResponse}.
   *
   * `headers` are cast to `Record<string, string>` because Axios normalises
   * header names to lower-case strings at this point in the lifecycle.
   *
   * @param response - The raw Axios response object.
   */
  private toHttpResponse<TResponse>(
    response: AxiosResponse<TResponse>,
  ): HttpResponse<TResponse> {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as Record<string, string>,
    };
  }
}
