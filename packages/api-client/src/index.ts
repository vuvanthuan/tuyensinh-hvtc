import { ApiClient } from "./client/ApiClient";

export type {
  IDataError,
  IMetadata,
  IDataWithMeta,
  IDataWithStatusCode,
  IResponseDTO,
  IResponseWithMetadataDTO,
  IRequestOptions,
  IFileOptions,
  IApiConfig,
} from "./client/types";

export { ErrorHandler } from "./client/errorHandler";
export { InterceptorManager } from "./client/interceptors";
export { ResponseParser } from "./client/responseParser";
export { AuthHelper } from "./client/authHelper";

const apiClient = new ApiClient({
  baseURL:
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_URL
      ? process.env.NEXT_PUBLIC_API_URL
      : "https://jsonplaceholder.typicode.com",
  timeout: 30000,
  useToken: true,
  displayError: true,
});

export default apiClient;
