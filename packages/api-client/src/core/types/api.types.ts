export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS";

export type ResponseType =
  | "json"
  | "text"
  | "blob"
  | "arraybuffer"
  | "document"
  | "stream";

export interface IRequestOptions {
  token?: string;
  withToken?: boolean;
  displayError?: boolean;
  isFormData?: boolean;
  authType?: string;
  customAuthHeader?: string;
  skipAuth?: boolean;
  skipRetry?: boolean;
  skipCache?: boolean;
  cacheTTL?: number;
}

export interface IFileOptions {
  fileName: string;
  fileType: string;
}

export interface IMetadata {
  time?: string;
  totalPages: number;
  totalItems: number;
  currentPage: number;
  pageSize?: number;
}

export interface ApiClientConfig {
  baseURL: string;
  timeout: number;
  headers?: Record<string, string>;
  withCredentials?: boolean;
  useToken?: boolean;
  displayError?: boolean;
  retryConfig?: {
    maxRetries: number;
    retryDelay: number;
    retryCondition?: (error: unknown) => boolean;
  };
  cacheConfig?: {
    enabled: boolean;
    defaultTTL: number;
  };
}
