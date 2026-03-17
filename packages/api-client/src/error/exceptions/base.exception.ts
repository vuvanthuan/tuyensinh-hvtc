import type { ErrorCode } from "../../core/constants/error.constant";
import { ERROR_MESSAGES } from "../../core/constants/error.constant";

export abstract class BaseException extends Error {
  public readonly code: ErrorCode;
  public readonly timestamp: Date;
  public readonly data?: unknown;
  public readonly isBaseException = true;

  constructor(code: ErrorCode, message?: string, data?: unknown) {
    super(message ?? ERROR_MESSAGES[code]);
    this.name = this.constructor.name;
    this.code = code;
    this.timestamp = new Date();
    this.data = data;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

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
