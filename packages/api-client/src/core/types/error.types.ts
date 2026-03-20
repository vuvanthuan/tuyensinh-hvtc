/**
 * @module error.types
 * @description
 * Typed context objects that carry structured metadata about errors.
 *
 * These are the *input* types consumed by {@link BaseException} and
 * {@link ErrorFactory}. They are intentionally separate from the exception
 * classes themselves so context can be inspected or logged without catching
 * exception objects.
 *
 * @example
 * ```ts
 * function logError(ctx: ErrorContext) {
 *   if (isValidationErrorContext(ctx)) {
 *     console.table(ctx.errors); // field-level errors
 *   }
 * }
 * ```
 */

// ─── Base context ─────────────────────────────────────────────────────────────

/**
 * Minimal error context. All other context interfaces extend this.
 *
 * `statusCode` here is the **application-level** code (e.g. `"VALIDATION_ERROR"`),
 * not the HTTP status integer.
 */
export interface ErrorContext {
  /** Application-level error code string. */
  statusCode?: string | number;
  /** Human-readable error description. */
  message?: string;
  /** Optional payload attached to the error response. */
  data?: unknown;
  /**
   * Field-level validation errors, present when the server returns 400/422
   * with per-field violation messages.
   */
  errors?: Record<string, string[]>;
  /** The original raw error (Axios error, fetch rejection, etc.). */
  originalError?: unknown;
}

// ─── Specialised contexts ─────────────────────────────────────────────────────

/**
 * Context for errors with a known HTTP origin – both `statusCode` and
 * `message` are guaranteed to be present.
 */
export interface HttpErrorContext extends ErrorContext {
  statusCode: string;
  message: string;
}

/**
 * Context for field-level validation failures (HTTP 400 / 422).
 * Extends {@link HttpErrorContext} and mandates the `errors` map.
 */
export interface ValidationErrorContext extends HttpErrorContext {
  errors: Record<string, string[]>;
}

/**
 * Context for network-level errors (no HTTP response received).
 * Typical causes: offline, DNS failure, ECONNREFUSED.
 */
export interface NetworkErrorContext extends ErrorContext {
  isNetworkError: true;
}

/**
 * Context for request timeout errors (`ECONNABORTED` / `AbortError`).
 */
export interface TimeoutErrorContext extends ErrorContext {
  isTimeoutError: true;
}

// ─── Type guards ──────────────────────────────────────────────────────────────

/**
 * Narrows `context` to {@link HttpErrorContext}.
 *
 * @param context - Any {@link ErrorContext} value.
 * @returns `true` when both `statusCode` and `message` are defined.
 */
export function isHttpErrorContext(
  context: ErrorContext,
): context is HttpErrorContext {
  return context.statusCode !== undefined && context.message !== undefined;
}

/**
 * Narrows `context` to {@link ValidationErrorContext}.
 *
 * @param context - Any {@link ErrorContext} value.
 * @returns `true` when the context is an HTTP error that also carries `errors`.
 */
export function isValidationErrorContext(
  context: ErrorContext,
): context is ValidationErrorContext {
  return isHttpErrorContext(context) && context.errors !== undefined;
}
