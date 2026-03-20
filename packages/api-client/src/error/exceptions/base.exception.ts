/**
 * @module base.exception
 * @description
 * Abstract base class for all exceptions thrown by `@acme/api-client`.
 *
 * Every exception in this library:
 * - Extends `Error` (can be caught with `catch (e)` and passes `instanceof Error`)
 * - Carries a typed {@link ErrorCode} for programmatic branching
 * - Records a creation timestamp for logging / observability
 * - Provides a {@link toJSON} method for structured serialisation (e.g. to Sentry)
 *
 * @example
 * ```ts
 * try {
 *   await client.get("/resource");
 * } catch (error) {
 *   if (error instanceof BaseException) {
 *     console.error(error.code, error.timestamp.toISOString());
 *   }
 * }
 * ```
 */

import type { ErrorCode } from "../../core/constants/error.constant";
import { ERROR_MESSAGES } from "../../core/constants/error.constant";

/**
 * Abstract base for all typed exceptions in `@acme/api-client`.
 *
 * @remarks
 * Subclasses **must** call `super(code, message, data)` and optionally
 * set `this.name` to their own class name for readable stack traces.
 */
export abstract class BaseException extends Error {
  /** The application-level error category code. */
  public readonly code: ErrorCode;
  /** Timestamp of when this exception was instantiated. */
  public readonly timestamp: Date;
  /** Optional structured payload accompanying the error. */
  public readonly data?: unknown;
  /**
   * Brand flag to distinguish `BaseException` from plain `Error` objects
   * without relying on `instanceof` across module boundaries.
   */
  public readonly isBaseException = true;

  /**
   * @param code    - One of the {@link ERROR_CODES} constant values.
   * @param message - Human-readable description. Falls back to the default
   *                  message for `code` when omitted.
   * @param data    - Optional structured payload (server response body, etc.).
   */
  constructor(code: ErrorCode, message?: string, data?: unknown) {
    super(message ?? ERROR_MESSAGES[code]);
    this.name = this.constructor.name;
    this.code = code;
    this.timestamp = new Date();
    this.data = data;

    // Preserve correct stack trace in V8 (Node.js / Chrome)
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  /**
   * Serialise the exception to a plain object.
   *
   * Useful for structured logging (Pino, Winston) or error tracking
   * (Sentry `extras`).
   *
   * @returns A serialisable record containing all public exception fields.
   */
  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      timestamp: this.timestamp.toISOString(),
      data: this.data,
      stack: this.stack,
    };
  }
}
