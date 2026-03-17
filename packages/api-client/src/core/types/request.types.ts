import type { HttpMethod, IRequestOptions, ResponseType } from "./api.types";

// Base request config - không dùng conditional type
export interface BaseRequestConfig {
  url: string;
  method: HttpMethod;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  data?: unknown; // Cho phép data ở tất cả các request
  timeout?: number;
  withCredentials?: boolean;
  responseType?: ResponseType;
  signal?: AbortSignal;
}

// Extended config với các thuộc tính internal
export interface RequestConfig<TData = unknown> extends BaseRequestConfig {
  data?: TData;
  _retry?: boolean;
  _retryCount?: number;
  _options?: IRequestOptions;
  _cacheKey?: string;
  _cacheTTL?: number;
  onUploadProgress?: (progressEvent: {
    loaded: number;
    total?: number;
    percentage?: number;
  }) => void;
  onDownloadProgress?: (progressEvent: {
    loaded: number;
    total?: number;
    percentage?: number;
  }) => void;
}

export type GetRequestConfig = Omit<RequestConfig, "data">;
export type PostRequestConfig<TData = unknown> = RequestConfig<TData>;
export type PutRequestConfig<TData = unknown> = RequestConfig<TData>;
export type PatchRequestConfig<TData = unknown> = RequestConfig<TData>;
export type DeleteRequestConfig = Omit<RequestConfig, "data">;
