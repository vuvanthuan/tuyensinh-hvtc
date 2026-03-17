export const ERROR_CODES = {
  // Authentication errors
  EXPIRED_TOKEN: "EXPIRED_TOKEN",
  INVALID_TOKEN: "INVALID_TOKEN",
  NO_PERMISSION: "NO_PERMISSION",
  NOT_AUTHENTICATED: "NOT_AUTHENTICATED",

  // Validation errors
  VALIDATION_ERROR: "VALIDATION_ERROR",

  // Network errors
  NETWORK_ERROR: "NETWORK_ERROR",
  TIMEOUT_ERROR: "TIMEOUT_ERROR",
  ABORT_ERROR: "ABORT_ERROR",

  // Server errors
  SERVER_ERROR: "SERVER_ERROR",
  BAD_GATEWAY: "BAD_GATEWAY",
  SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE",

  // Client errors
  NOT_FOUND: "NOT_FOUND",
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",

  // Unknown
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

export function isErrorCode(value: unknown): value is ErrorCode {
  return (
    typeof value === "string" &&
    Object.values(ERROR_CODES).includes(value as ErrorCode)
  );
}

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
