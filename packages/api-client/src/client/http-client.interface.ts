/**
 * @module http-client.interface
 * @description
 * Transport-layer abstraction used by {@link ApiClient}.
 *
 * Decouples the high-level request logic from the underlying HTTP adapter
 * (Axios, native `fetch`, etc.). Swap implementations without changing any
 * code above this layer.
 *
 * Built-in implementations:
 * - {@link AxiosHttpClient} – full interceptor pipeline for browser / Node.js
 * - {@link FetchHttpClient} – native `fetch` for Edge / Cloudflare Workers
 */

import type { HttpResponse } from "../core/types/response.types";

import type {
  DeleteRequestConfig,
  GetRequestConfig,
  PatchRequestConfig,
  PostRequestConfig,
  PutRequestConfig,
  RequestConfig,
} from "../core/types/request.types";

/**
 * Low-level HTTP client interface.
 *
 * All methods resolve to an {@link HttpResponse} on a 2xx-4xx-5xx response
 * and reject with a transport error (e.g. network failure, timeout).
 * Error mapping to typed {@link HttpException} subclasses happens at the
 * {@link ApiClient} layer via {@link ErrorFactory}.
 */
export interface HttpClient {
  /**
   * Send a fully typed HTTP request.
   *
   * @typeParam TResponse - Expected shape of the response body.
   * @typeParam TData     - Shape of the request body payload.
   * @param config - Fully populated request configuration.
   * @returns A promise that resolves to the raw HTTP response.
   */
  request<TResponse = unknown, TData = unknown>(
    config: RequestConfig<TData>,
  ): Promise<HttpResponse<TResponse>>;

  /**
   * Convenience wrapper for `GET` requests.
   *
   * @typeParam TResponse - Expected shape of the response body.
   * @param url    - Relative or absolute URL.
   * @param config - Optional additional request config (params, headers, …).
   */
  get<TResponse = unknown>(
    url: string,
    config?: Omit<GetRequestConfig, "url" | "method">,
  ): Promise<HttpResponse<TResponse>>;

  /**
   * Convenience wrapper for `POST` requests.
   *
   * @typeParam TResponse - Expected shape of the response body.
   * @typeParam TData     - Shape of the request body payload.
   * @param url    - Relative or absolute URL.
   * @param data   - Request body payload.
   * @param config - Optional additional request config.
   */
  post<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PostRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>>;

  /**
   * Convenience wrapper for `PUT` requests.
   *
   * @typeParam TResponse - Expected shape of the response body.
   * @typeParam TData     - Shape of the request body payload.
   */
  put<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PutRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>>;

  /**
   * Convenience wrapper for `PATCH` requests.
   *
   * @typeParam TResponse - Expected shape of the response body.
   * @typeParam TData     - Shape of the request body payload.
   */
  patch<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PatchRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>>;

  /**
   * Convenience wrapper for `DELETE` requests.
   *
   * @typeParam TResponse - Expected shape of the response body.
   * @param url    - Relative or absolute URL.
   * @param config - Optional additional request config (params, headers, …).
   */
  delete<TResponse = unknown>(
    url: string,
    config?: Omit<DeleteRequestConfig, "url" | "method">,
  ): Promise<HttpResponse<TResponse>>;
}
