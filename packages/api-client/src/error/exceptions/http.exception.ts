import { BaseException } from './base.exception';
import type { ErrorCode } from '../../core/constants/error.constant';

export interface HttpExceptionContext {
  statusCode: string;
  message: string;
  data?: unknown;
  errors?: Record<string, string[]>;
}

export class HttpException extends BaseException {
  public readonly statusCode: string;
  public readonly errors?: Record<string, string[]>;

  constructor(context: HttpExceptionContext) {
    super(context.statusCode as ErrorCode, context.message, context.data);
    this.statusCode = context.statusCode;
    this.errors = context.errors;
  }

  override toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      statusCode: this.statusCode,
      errors: this.errors,
    };
  }
}
