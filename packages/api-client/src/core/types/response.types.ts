/**
 * @module response.types
 * @description
 * Response envelope types and type-guard utilities shared by all layers.
 *
 * The standard server envelope expected by this library is:
 * ```json
 * {
 *   "success": true,
 *   "statusCode": "200",
 *   "message": "OK",
 *   "metaData": { "totalPages": 5, "totalItems": 50, "currentPage": 1 },
 *   "data": [ ... ]
 * }
 * ```
 *
 * The {@link DefaultResponseParser} tolerates deviations from this format and
 * provides fallback shapes when fields are missing.
 */

import type { IMetadata } from "./api.types";

// ─── Transport-level response ─────────────────────────────────────────────────

/**
 * Raw HTTP response returned by {@link HttpClient} implementations before
 * any parsing or transformation.
 *
 * @typeParam T - Shape of the response body (`data`).
 */
export interface HttpResponse<T = unknown> {
  /** Parsed response body. */
  data: T;
  /** HTTP status code (e.g. `200`, `404`). */
  status: number;
  /** HTTP status text (e.g. `"OK"`, `"Not Found"`). */
  statusText: string;
  /** Response headers as a plain key-value object. */
  headers: Record<string, string>;
}

// ─── Error envelope ───────────────────────────────────────────────────────────

/**
 * Shape of an error response body returned by the server.
 *
 * The {@link ErrorFactory} reads this to construct strongly-typed
 * {@link HttpException} subclasses.
 */
export interface ErrorResponse {
  /**
   * Application-level error code (e.g. `"VALIDATION_ERROR"`, `"NOT_FOUND"`).
   * Distinct from the HTTP status code.
   */
  statusCode: string;
  /** Human-readable error description. */
  message: string;
  /** Optional payload attached to the error. */
  data?: unknown;
  /**
   * Field-level validation errors returned by form validation or DTO pipes.
   * Keys are field names; values are arrays of violation messages.
   *
   * @example
   * ```json
   * { "email": ["must be a valid email"], "password": ["too short"] }
   * ```
   */
  errors?: Record<string, string[]>;
}

// ─── Application-level DTOs ───────────────────────────────────────────────────

/**
 * Standard application response DTO returned by {@link ApiClient.request}.
 *
 * `success: false` with a non-undefined `message` signals a handled server
 * error that should be shown to the user.
 *
 * @typeParam T - Shape of the `data` payload.
 */
export interface IResponseDTO<T = unknown> {
  /** `true` when the server reports a successful operation. */
  success: boolean;
  /**
   * Application-level status code string (e.g. `"200"`, `"VALIDATION_ERROR"`).
   * Preferred over the HTTP status code for business logic branching.
   */
  statusCode: string;
  /** Optional human-readable message from the server. */
  message?: string;
  /**
   * Pagination metadata. Present on list endpoints.
   * Use {@link IResponseWithMetadataDTO} when metadata is required.
   */
  metaData?: IMetadata;
  /** Response payload. `undefined` on error responses. */
  data?: T;
}

/**
 * Variant of {@link IResponseDTO} that **guarantees** `metaData` is present.
 *
 * Use {@link ApiClient.requestWithMeta} / {@link ApiClient.getWithMeta} to
 * receive this shape.
 *
 * @typeParam T - Shape of the `data` payload.
 */
export interface IResponseWithMetadataDTO<T = unknown> {
  success: boolean;
  statusCode: string;
  message?: string;
  /** Always populated – falls back to empty metadata when server omits it. */
  metaData: IMetadata;
  data?: T;
}

// ─── Utility wrappers ─────────────────────────────────────────────────────────

/**
 * Combines a data payload with its pagination metadata.
 * Convenient return type for repository / service methods.
 *
 * @typeParam T - Element type of the data collection.
 */
export interface IDataWithMeta<T = unknown> {
  meta: IMetadata;
  data: T;
}

/**
 * Wraps a data payload alongside an application-level status code.
 * Useful when callers need to inspect the code for conditional logic.
 *
 * @typeParam T - Shape of the `data` payload.
 */
export interface IDataWithStatusCode<T = unknown> {
  statusCode: string;
  data: T;
}

// ─── Type guards ──────────────────────────────────────────────────────────────

/**
 * Narrows `obj` to {@link IResponseDTO} at runtime.
 *
 * @param obj - Any unknown value.
 * @returns `true` when `obj` has the required `success` and `statusCode` fields.
 *
 * @example
 * ```ts
 * if (isResponseDTO<User>(raw)) {
 *   console.log(raw.data?.name);
 * }
 * ```
 */
export function isResponseDTO<T>(obj: unknown): obj is IResponseDTO<T> {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "success" in obj &&
    "statusCode" in obj
  );
}

/**
 * Narrows `obj` to {@link ErrorResponse} at runtime.
 *
 * @param obj - Any unknown value.
 * @returns `true` when `obj` has `statusCode` and `message` fields.
 */
export function isErrorResponse(obj: unknown): obj is ErrorResponse {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "statusCode" in obj &&
    "message" in obj
  );
}
