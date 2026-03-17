import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
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
  constructor(private instance: AxiosInstance) {}

  async request<TResponse = unknown, TData = unknown>(
    config: RequestConfig<TData>,
  ): Promise<HttpResponse<TResponse>> {
    try {
      const axiosConfig = this.toAxiosConfig<TData>(config);
      const response = await this.instance.request<
        TResponse,
        AxiosResponse<TResponse>
      >(axiosConfig);
      return this.transformResponse(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw new Error("Unexpected error occurred");
    }
  }

  async get<TResponse = unknown>(
    url: string,
    config?: Omit<GetRequestConfig, "url" | "method">,
  ): Promise<HttpResponse<TResponse>> {
    const requestConfig: RequestConfig = {
      method: "GET",
      url,
      ...config,
    };
    return this.request<TResponse>(requestConfig);
  }

  async post<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PostRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>> {
    const requestConfig: RequestConfig<TData> = {
      method: "POST",
      url,
      data,
      ...config,
    };
    return this.request<TResponse, TData>(requestConfig);
  }

  async put<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PutRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>> {
    const requestConfig: RequestConfig<TData> = {
      method: "PUT",
      url,
      data,
      ...config,
    };
    return this.request<TResponse, TData>(requestConfig);
  }

  async patch<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PatchRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>> {
    const requestConfig: RequestConfig<TData> = {
      method: "PATCH",
      url,
      data,
      ...config,
    };
    return this.request<TResponse, TData>(requestConfig);
  }

  async delete<TResponse = unknown>(
    url: string,
    config?: Omit<DeleteRequestConfig, "url" | "method">,
  ): Promise<HttpResponse<TResponse>> {
    const requestConfig: RequestConfig = {
      method: "DELETE",
      url,
      ...config,
    };
    return this.request<TResponse>(requestConfig);
  }

  private toAxiosConfig<TData = unknown>(
    config: RequestConfig<TData>,
  ): AxiosRequestConfig {
    return {
      url: config.url,
      method: config.method,
      headers: config.headers,
      params: config.params,
      data: config.data,
      timeout: config.timeout,
      withCredentials: config.withCredentials,
      responseType: config.responseType,
      signal: config.signal,
      onUploadProgress: config.onUploadProgress,
      onDownloadProgress: config.onDownloadProgress,
    };
  }

  private transformResponse<TResponse>(
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
