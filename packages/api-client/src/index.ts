/**
 * @acme/api-client – Public API
 *
 * Import everything your application needs from this single entry point.
 *
 * @example
 * import { ApiClient, createApiConfig, LRUCacheStorage } from "@acme/api-client";
 */

// ─── Main client ──────────────────────────────────────────────────────────────
export { ApiClient, createAbortHandle } from "./api-client";
export type { AbortHandle, ApiClientOptions } from "./api-client";

// ─── Core types ───────────────────────────────────────────────────────────────
export type {
  ApiClientConfig,
  HttpMethod,
  IFileOptions,
  IMetadata,
  IRequestOptions,
  ResponseType,
} from "./core/types/api.types";

export type {
  BaseRequestConfig,
  DeleteRequestConfig,
  GetRequestConfig,
  PatchRequestConfig,
  PostRequestConfig,
  PutRequestConfig,
  RequestConfig,
} from "./core/types/request.types";

export type {
  ErrorResponse,
  HttpResponse,
  IDataWithMeta,
  IDataWithStatusCode,
  IResponseDTO,
  IResponseWithMetadataDTO,
} from "./core/types/response.types";
export { isErrorResponse, isResponseDTO } from "./core/types/response.types";

export type {
  ErrorContext,
  HttpErrorContext,
  NetworkErrorContext,
  TimeoutErrorContext,
  ValidationErrorContext,
} from "./core/types/error.types";
export {
  isHttpErrorContext,
  isValidationErrorContext,
} from "./core/types/error.types";

// ─── Constants ────────────────────────────────────────────────────────────────
export {
  ERROR_CODES,
  ERROR_MESSAGES,
  isErrorCode,
} from "./core/constants/error.constant";
export type { ErrorCode } from "./core/constants/error.constant";

export {
  getHttpStatusMessage,
  HTTP_STATUS,
  isHttpStatusCode,
} from "./core/constants/http-status.constant";
export type { HttpStatusCode } from "./core/constants/http-status.constant";

// ─── Config helpers ───────────────────────────────────────────────────────────
export {
  createApiConfig,
  createDevConfig,
  createProdConfig,
  createTestConfig,
  DEFAULT_API_CONFIG,
  DEFAULT_CACHE_CONFIG,
  DEFAULT_RETRY_CONFIG,
  isDevelopment,
  isProduction,
  isTest,
} from "./core/config/api.config";

// ─── Error layer ──────────────────────────────────────────────────────────────
export { BaseException } from "./error/exceptions/base.exception";
export { ForbiddenException } from "./error/exceptions/forbidden.exception";
export { HttpException } from "./error/exceptions/http.exception";
export type { HttpExceptionContext } from "./error/exceptions/http.exception";
export { NetworkException } from "./error/exceptions/network.exception";
export { NotFoundException } from "./error/exceptions/not-found.exception";
export { ServerException } from "./error/exceptions/server.exception";
export { TimeoutException } from "./error/exceptions/timeout.exception";
export { UnauthorizedException } from "./error/exceptions/unauthorized.exception";
export { ValidationException } from "./error/exceptions/validation.exception";
export { ErrorFactory } from "./error/error-factory";
export {
  CompositeErrorHandler,
  NoopErrorHandler,
} from "./error/error-handler.interface";
export type { IErrorHandler } from "./error/error-handler.interface";

// ─── Auth layer ───────────────────────────────────────────────────────────────
export type {
  TokenRefreshHandler,
  TokenRefreshResult,
} from "./auth/token-refresh-handler.interface";
export { DefaultTokenRefreshHandler } from "./auth/token-refresh-handler";
export type { RefreshTokenResponse } from "./auth/token-refresh-handler";

export type { TokenData, TokenStorage } from "./auth/token-storage.interface";
export { LocalStorageTokenStorage } from "./auth/token-storage";

// ─── Cache layer ──────────────────────────────────────────────────────────────
export type { CacheStorage } from "./cache/cache-storage.interface";
export { CacheInvalidator } from "./cache/cache-invalidator";
export { LRUCacheStorage } from "./cache/lru-cache.storage";
export { MemoryCacheStorage } from "./cache/memory-cache.storage";

// ─── HTTP client layer ────────────────────────────────────────────────────────
export type { HttpClient } from "./client/http-client.interface";
export { AxiosHttpClient } from "./client/axios/axios-client";
export { AxiosInstanceFactory } from "./client/axios/axios-instance.factory";
export {
  addCorrelationId,
  jsonParseAndTransform,
  parseResponseDates,
  serializeDates,
  stripUndefined,
} from "./client/axios/axios-transformers";
export { FetchHttpClient } from "./client/fetch/fetch-client";

// ─── Interceptors ─────────────────────────────────────────────────────────────
export type { Interceptor } from "./interceptors/interceptor.interface";
export { AuthInterceptor } from "./interceptors/auth.interceptor";
export { CacheInterceptor } from "./interceptors/cache.interceptor";
export { DeduplicationInterceptor } from "./interceptors/deduplication.interceptor";
export {
  ConsoleLogger,
  LoggingInterceptor,
} from "./interceptors/logging.interceptor";
export type { Logger } from "./interceptors/logging.interceptor";
export { RateLimitInterceptor } from "./interceptors/rate-limit.interceptor";
export type { RateLimitConfig } from "./interceptors/rate-limit.interceptor";
export { RetryInterceptor } from "./interceptors/retry.interceptor";
export type { RetryConfig } from "./interceptors/retry.interceptor";

// ─── Parser layer ─────────────────────────────────────────────────────────────
export type { ResponseParser } from "./parser/response-parser.interface";
export { DefaultResponseParser } from "./parser/response-parser";

// ─── Notification layer ───────────────────────────────────────────────────────
export type {
  NotificationOptions,
  NotificationService,
} from "./notification/notification.interface";
export { NoopNotificationService } from "./notification/noop-notification";
