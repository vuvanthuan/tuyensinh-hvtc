/**
 * @module response-parser
 * @description
 * Default implementation of {@link ResponseParser} that normalises server
 * response payloads into the application's canonical DTO shapes.
 *
 * ### Supported server envelope formats
 *
 * The parser auto-detects three common patterns and maps them to
 * {@link IResponseDTO} / {@link IResponseWithMetadataDTO}:
 *
 * **1. Standard application envelope** (preferred):
 * ```json
 * { "success": true, "statusCode": "200", "message": "OK",
 *   "metaData": { "totalPages": 5, "totalItems": 50, "currentPage": 1 },
 *   "data": [ ... ] }
 * ```
 *
 * **2. Paginated `meta`/`pagination` wrapper**:
 * ```json
 * { "data": [...], "meta": { "totalPages": 5, "totalItems": 50, "currentPage": 1 } }
 * { "items": [...], "pagination": { "totalPages": 5, "totalItems": 50, "currentPage": 1 } }
 * { "results": [...], "meta": { ... } }
 * { "content": [...], "meta": { ... } }
 * ```
 *
 * **3. Bare payload** (no envelope, e.g. third-party APIs):
 * ```json
 * { "id": 1, "name": "John" }
 * ```
 *
 * **204 No Content** (empty response) is also handled gracefully.
 */

import type { IMetadata } from "../core/types/api.types";
import type {
  IResponseDTO,
  IResponseWithMetadataDTO,
} from "../core/types/response.types";
import type { ResponseParser } from "./response-parser.interface";

// ─── Known data-list keys across different backend conventions ───────────────
const DATA_KEYS = [
  "data",
  "items",
  "results",
  "content",
  "records",
  "rows",
] as const;

// ─── Known metadata-container keys ──────────────────────────────────────────
const META_KEYS = ["metaData", "meta", "pagination", "paging", "page"] as const;

// ─── DefaultResponseParser ───────────────────────────────────────────────────

/**
 * Ready-to-use response parser that handles the most common server envelope
 * formats without configuration.
 *a
 * Plug a custom implementation into `ApiClientOptions.responseParser` when
 * your backend uses a non-standard envelope.
 *
 * @implements {ResponseParser}
 */
export class DefaultResponseParser implements ResponseParser {
  // ─── Public API ────────────────────────────────────────────────────────────

  /**
   * Parse any raw HTTP response body into a normalised {@link IResponseDTO}.
   *
   * The parser is intentionally lenient and **never throws**. Unrecognised
   * shapes are wrapped in a synthetic success envelope so callers always
   * receive a consistent object.
   *
   * ### 204 No Content
   * When `data` is `null` or `undefined` (HTTP 204), the result is:
   * `{ success: true, statusCode: "204", data: undefined }`
   *
   * @typeParam T - Expected type of the `data` payload.
   * @param data - Raw value from `HttpResponse.data`.
   */
  parse<T>(data: unknown): IResponseDTO<T> {
    // 204 No Content – nothing to parse
    if (data === null || data === undefined) {
      return { success: true, statusCode: "204" };
    }

    // Standard application envelope: { success, statusCode, data?, metaData? }
    if (this.isStandardEnvelope(data)) {
      return {
        success: data.success,
        statusCode: String(data.statusCode),
        message: data.message,
        metaData: data.metaData,
        data: data.data as T,
      };
    }

    // Bare payload – wrap it as-is
    return {
      success: true,
      statusCode: "200",
      data: data as T,
    };
  }

  /**
   * Parse the response and guarantee that `metaData` is always present.
   *
   * Falls back to `createEmptyMetadata()` when the server does not include
   * pagination information.
   *
   * @typeParam T - Expected type of the `data` payload.
   * @param data - Raw value from `HttpResponse.data`.
   */
  parseWithMeta<T>(data: unknown): IResponseWithMetadataDTO<T> {
    // 204 No Content
    if (data === null || data === undefined) {
      return {
        success: true,
        statusCode: "204",
        metaData: this.createEmptyMetadata(),
      };
    }

    const parsed = this.parse<T>(data);

    // 1. metaData already on the envelope
    if (parsed.metaData && this.isValidMetadata(parsed.metaData)) {
      return {
        success: parsed.success,
        statusCode: parsed.statusCode,
        message: parsed.message,
        metaData: parsed.metaData,
        data: parsed.data,
      };
    }

    // 2. Metadata in a wrapper key on the raw payload
    //    (only applicable when data is an object – not a bare array/number/string)
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (typeof data === "object" && !Array.isArray(data) && data !== null) {
      const meta = this.extractMetaFromObject(data as Record<string, unknown>);
      if (meta) {
        const payload = this.extractDataFromObject<T>(
          data as Record<string, unknown>,
        );
        return {
          success: parsed.success,
          statusCode: parsed.statusCode,
          message: parsed.message,
          metaData: meta,
          // Use the found payload if present, otherwise fall back to parsed.data
          data: payload ?? parsed.data,
        };
      }
    }

    // 3. Bare array – we know the total count but cannot determine pages
    if (Array.isArray(data)) {
      return {
        success: true,
        statusCode: "200",
        metaData: this.createArrayMetadata(data as unknown[]),
        data: data as unknown as T,
      };
    }

    // 4. Fallback – empty metadata
    return {
      success: parsed.success,
      statusCode: parsed.statusCode,
      message: parsed.message,
      metaData: this.createEmptyMetadata(),
      data: parsed.data,
    };
  }

  /**
   * Unwrap the `data` field from a parsed {@link IResponseDTO}.
   *
   * @typeParam T - Shape of the data payload.
   * @returns The data payload, or `null` when absent.
   */
  extractData<T>(response: IResponseDTO<T>): T | null {
    return response.data ?? null;
  }

  /**
   * Unwrap the `metaData` field from a parsed {@link IResponseWithMetadataDTO}.
   *
   * Because `IResponseWithMetadataDTO.metaData` is required, this always
   * returns a non-null value.
   *
   * @returns The pagination metadata object.
   */
  extractMeta(response: IResponseWithMetadataDTO): IMetadata {
    return response.metaData;
  }

  /**
   * Determine whether the parsed response signals a business-level failure.
   *
   * Helper for use in service layers to avoid manual `!parsed.success` checks.
   *
   * @example
   * ```ts
   * const result = await client.post<User>("/users", payload);
   * if (parser.isError(result)) {
   *   console.error(result.message);
   * }
   * ```
   */
  isError(response: IResponseDTO): boolean {
    return !response.success;
  }

  /**
   * Extract the error message from a failed response, with a sensible default.
   *
   * @param response   - A parsed response DTO.
   * @param defaultMsg - Fallback when the server did not supply a message.
   */
  getErrorMessage(
    response: IResponseDTO,
    defaultMsg = "An unexpected error occurred",
  ): string {
    return response.message ?? defaultMsg;
  }

  // ─── Private helpers ────────────────────────────────────────────────────────

  /**
   * Detect the standard `{ success, statusCode }` API envelope.
   *
   * Intentionally loose: `message`, `data`, and `metaData` are all optional.
   */
  private isStandardEnvelope(data: unknown): data is {
    success: boolean;
    statusCode: string | number;
    message?: string;
    metaData?: IMetadata;
    data?: unknown;
  } {
    return (
      typeof data === "object" &&
      data !== null &&
      "success" in data &&
      typeof (data as Record<string, unknown>).success === "boolean" &&
      "statusCode" in data
    );
  }

  /**
   * Scan the known metadata keys in `obj` and return the first valid
   * {@link IMetadata} found, or `null` when none exists.
   *
   * Handles both `metaData` (our envelope), `meta`, `pagination`, `paging`, `page`.
   */
  private extractMetaFromObject(
    obj: Record<string, unknown>,
  ): IMetadata | null {
    for (const key of META_KEYS) {
      const candidate = obj[key];
      if (this.isValidMetadata(candidate)) {
        return {
          totalPages: candidate.totalPages,
          totalItems: candidate.totalItems,
          currentPage: candidate.currentPage,
          pageSize: (candidate as Record<string, unknown>).pageSize as
            | number
            | undefined,
          time: (candidate as Record<string, unknown>).time as
            | string
            | undefined,
        };
      }
    }
    return null;
  }

  /**
   * Scan the known data-list keys in `obj` and return the value of the
   * first match as `T`, or `null` when none is found.
   *
   * Checked in priority order: `data`, `items`, `results`, `content`,
   * `records`, `rows`.
   */
  private extractDataFromObject<T>(obj: Record<string, unknown>): T | null {
    for (const key of DATA_KEYS) {
      if (key in obj && obj[key] !== undefined) {
        return obj[key] as T;
      }
    }
    return null;
  }

  /**
   * Validate that `value` conforms to the {@link IMetadata} shape.
   *
   * Requires `totalPages`, `totalItems`, and `currentPage` to be numbers.
   */
  private isValidMetadata(
    value: unknown,
  ): value is IMetadata & Record<string, unknown> {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return false;
    }
    const obj = value as Record<string, unknown>;
    return (
      typeof obj.totalPages === "number" &&
      typeof obj.totalItems === "number" &&
      typeof obj.currentPage === "number"
    );
  }

  /**
   * Build synthetic metadata for a bare array response.
   *
   * `totalItems` is set to the array length; `totalPages` and `currentPage`
   * default to `1` since we have no server-provided page context.
   */
  private createArrayMetadata(arr: unknown[]): IMetadata {
    return {
      totalPages: 1,
      totalItems: arr.length,
      currentPage: 1,
      pageSize: arr.length,
    };
  }

  /**
   * Create an empty metadata object used as the last-resort fallback when
   * the server provides no pagination information at all.
   */
  private createEmptyMetadata(): IMetadata {
    return {
      totalPages: 0,
      totalItems: 0,
      currentPage: 1,
      pageSize: 0,
    };
  }
}
