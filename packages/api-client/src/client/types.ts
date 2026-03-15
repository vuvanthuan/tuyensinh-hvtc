import type { AxiosRequestConfig } from "axios";

export interface IDataError<T> {
  data?: T;
  statusCode?: number | string;
  errorMessage?: string;
}

export interface IMetadata {
  time?: string;
  totalPages: number;
  totalItems: number;
  currentPage: number;
  pageSize?: number;
}

export interface IDataWithMeta<T> {
  meta: IMetadata;
  data: T;
}

export interface IDataWithStatusCode<T> {
  statusCode: string;
  data: T;
}

export interface IResponseDTO<T> {
  success: boolean;
  statusCode: string;
  message?: string;
  metaData?: IMetadata;
  data?: T;
}

export interface IResponseWithMetadataDTO<T> {
  success: boolean;
  statusCode: string;
  message?: string;
  metaData?: IMetadata;
  data?: T;
}

export interface IRequestOptions {
  token?: string;
  withToken?: boolean;
  displayError?: boolean;
  isFormData?: boolean;
  authType?: string;
  customAuthHeader?: string;
  skipAuth?: boolean;
}

export interface IFileOptions {
  fileName?: string;
  fileType?: string;
}

export interface IApiConfig {
  baseURL: string;
  timeout: number;
  useToken: boolean;
  displayError: boolean;
}

export type RequestConfig = AxiosRequestConfig & {
  _retry?: boolean;
  _options?: IRequestOptions;
};
