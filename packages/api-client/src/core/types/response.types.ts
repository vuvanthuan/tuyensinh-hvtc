import type { IMetadata } from "./api.types";

export interface HttpResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface ErrorResponse {
  statusCode: string;
  message: string;
  data?: unknown;
  errors?: Record<string, string[]>;
}

export interface IResponseDTO<T = unknown> {
  success: boolean;
  statusCode: string;
  message?: string;
  metaData?: IMetadata;
  data?: T;
}

export interface IResponseWithMetadataDTO<T = unknown> {
  success: boolean;
  statusCode: string;
  message?: string;
  metaData: IMetadata;
  data?: T;
}

export interface IDataWithMeta<T = unknown> {
  meta: IMetadata;
  data: T;
}

export interface IDataWithStatusCode<T = unknown> {
  statusCode: string;
  data: T;
}

export function isResponseDTO<T>(obj: unknown): obj is IResponseDTO<T> {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "success" in obj &&
    "statusCode" in obj
  );
}

export function isErrorResponse(obj: unknown): obj is ErrorResponse {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "statusCode" in obj &&
    "message" in obj
  );
}
