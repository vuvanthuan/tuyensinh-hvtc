/**
 * @module http.exception
 * @description
 * The primary HTTP exception class. All status-code-specific exceptions
 * (e.g. {@link NotFoundException}, {@link ValidationException}) extend this.
 *
 * Carries the raw `statusCode` string from the server envelope alongside
 * optional field-level `errors`.
 */

import type { ErrorCode } from "../../core/constants/error.constant";
import { BaseException } from "./base.exception";

/**
 * Constructor context for {@link HttpException}.
 */
export interface HttpExceptionContext {
  /**
   * Application-level status code string (e.g. `"VALIDATION_ERROR"`).
   * Stored verbatim from the server response envelope.
   */
  statusCode: string;
  /** Human-readable error message. */
  message: string;
  /** Optional payload from the server response. */
  data?: unknown;
  /**
   * Field-level validation errors (present on 400 / 422 responses).
   *
   * @example
   * ```ts
   * { email: ["must be a valid email"], age: ["must be at least 18"] }
   * ```
   */
  errors?: Record<string, string[]>;
}

/**
 * Represents any HTTP-level error that the server explicitly returned.
 *
 * Use the more specific subclasses ({@link ValidationException},
 * {@link NotFoundException}, etc.) when you need to handle a particular
 * status category; use `HttpException` itself for generic cases.
 *
 * @example
 * ```ts
 * try {
 *   await client.get("/admin");
 * } catch (error) {
 *   if (error instanceof HttpException) {
 *     console.error(error.statusCode, error.message);
 *   }
 * }
 * ```
 */
export class HttpException extends BaseException {
  /** Application-level status code string from the server. */
  public readonly statusCode: string;
  /**
   * Field-level validation errors when present.
   * Non-null only on 400 / 422 responses with structured error bodies.
   */
  public readonly errors?: Record<string, string[]>;

  constructor(context: HttpExceptionContext) {
    super(context.statusCode as ErrorCode, context.message, context.data);
    this.statusCode = context.statusCode;
    this.errors = context.errors;
  }

  /** @inheritdoc */
  override toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      statusCode: this.statusCode,
      errors: this.errors,
    };
  }
}
