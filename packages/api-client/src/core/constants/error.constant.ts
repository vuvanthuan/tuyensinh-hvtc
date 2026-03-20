/**
 * @module error.constant
 * @description
 * Application-level error codes and their default human-readable messages.
 *
 * These codes are **not** HTTP status integers. They represent the semantic
 * error categories used throughout the exception hierarchy and surfaced to
 * the UI (e.g. for i18n key lookups).
 *
 * @example
 * ```ts
 * import { ERROR_CODES, ERROR_MESSAGES } from "@acme/api-client";
 *
 * if (error.code === ERROR_CODES.EXPIRED_TOKEN) {
 *   router.push("/login");
 * }
 * ```
 */

// ─── Code registry ────────────────────────────────────────────────────────────

/** All recognised application-level error code strings. */
export const ERROR_CODES = {
  // ── Authentication ──────────────────────────────────────────────────────
  /** The access token has expired and a refresh is required. */
  EXPIRED_TOKEN: "EXPIRED_TOKEN",
  /** The token signature or format is invalid. */
  INVALID_TOKEN: "INVALID_TOKEN",
  /** The authenticated user lacks the required permissions. */
  NO_PERMISSION: "NO_PERMISSION",
  /** The request requires authentication but none was provided. */
  NOT_AUTHENTICATED: "NOT_AUTHENTICATED",

  // ── Validation ──────────────────────────────────────────────────────────
  /** One or more request fields failed validation. */
  VALIDATION_ERROR: "VALIDATION_ERROR",

  // ── Network ─────────────────────────────────────────────────────────────
  /** No response was received (offline / DNS / TCP failure). */
  NETWORK_ERROR: "NETWORK_ERROR",
  /** The request was aborted because the timeout threshold was exceeded. */
  TIMEOUT_ERROR: "TIMEOUT_ERROR",
  /** The request was cancelled via `AbortController` / `CancelToken`. */
  ABORT_ERROR: "ABORT_ERROR",

  // ── Server ──────────────────────────────────────────────────────────────
  /** The server returned an unspecified 5xx error. */
  SERVER_ERROR: "SERVER_ERROR",
  /** HTTP 502 Bad Gateway. */
  BAD_GATEWAY: "BAD_GATEWAY",
  /** HTTP 503 Service Unavailable. */
  SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE",

  // ── Client ──────────────────────────────────────────────────────────────
  /** The requested resource does not exist (HTTP 404). */
  NOT_FOUND: "NOT_FOUND",
  /** The request payload was malformed or invalid (HTTP 400). */
  BAD_REQUEST: "BAD_REQUEST",
  /** A conflict with the current state of the resource (HTTP 409). */
  CONFLICT: "CONFLICT",

  // ── Catch-all ───────────────────────────────────────────────────────────
  /** The error does not match any known category. */
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;

/**
 * Union of all valid error code strings.
 * Derive from the `ERROR_CODES` object to keep source-of-truth in one place.
 */
export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

/**
 * Narrows an unknown value to {@link ErrorCode}.
 *
 * @param value - The value to check.
 * @returns `true` when `value` is a valid {@link ErrorCode} string.
 */
export function isErrorCode(value: unknown): value is ErrorCode {
  return (
    typeof value === "string" &&
    Object.values(ERROR_CODES).includes(value as ErrorCode)
  );
}

// ─── Default messages ─────────────────────────────────────────────────────────

/**
 * Default English-language messages for each {@link ErrorCode}.
 *
 * @remarks
 * These are **fallback** messages used when the server does not supply one.
 * For i18n support, pass translated strings when constructing exception
 * instances directly.
 */
export const ERROR_MESSAGES: Record<ErrorCode, string> = {
  [ERROR_CODES.EXPIRED_TOKEN]: "Token has expired",
  [ERROR_CODES.INVALID_TOKEN]: "Invalid token",
  [ERROR_CODES.NO_PERMISSION]:
    "You do not have permission to perform this action",
  [ERROR_CODES.NOT_AUTHENTICATED]: "Authentication required",
  [ERROR_CODES.VALIDATION_ERROR]: "Validation failed",
  [ERROR_CODES.NETWORK_ERROR]: "Network connection error",
  [ERROR_CODES.TIMEOUT_ERROR]: "Request timeout",
  [ERROR_CODES.ABORT_ERROR]: "Request was cancelled",
  [ERROR_CODES.SERVER_ERROR]: "Server error",
  [ERROR_CODES.BAD_GATEWAY]: "Bad gateway",
  [ERROR_CODES.SERVICE_UNAVAILABLE]: "Service unavailable",
  [ERROR_CODES.NOT_FOUND]: "Resource not found",
  [ERROR_CODES.BAD_REQUEST]: "Bad request",
  [ERROR_CODES.CONFLICT]: "Conflict",
  [ERROR_CODES.UNKNOWN_ERROR]: "Unknown error occurred",
};
