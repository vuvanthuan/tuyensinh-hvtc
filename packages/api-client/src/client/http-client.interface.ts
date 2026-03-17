import type { HttpResponse } from "@/core/types/response.types";

import type {
  DeleteRequestConfig,
  GetRequestConfig,
  PatchRequestConfig,
  PostRequestConfig,
  PutRequestConfig,
  RequestConfig,
} from "../core/types/request.types";

export interface HttpClient {
  request<TResponse = unknown, TData = unknown>(
    config: RequestConfig<TData>,
  ): Promise<HttpResponse<TResponse>>;

  get<TResponse = unknown>(
    url: string,
    config?: Omit<GetRequestConfig, "url" | "method">,
  ): Promise<HttpResponse<TResponse>>;

  post<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PostRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>>;

  put<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PutRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>>;

  patch<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PatchRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>>;

  delete<TResponse = unknown>(
    url: string,
    config?: Omit<DeleteRequestConfig, "url" | "method">,
  ): Promise<HttpResponse<TResponse>>;
}
