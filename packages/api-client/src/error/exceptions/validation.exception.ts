import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export type ValidationErrors = Record<string, string[]>;

export class ValidationException extends HttpException {
  public readonly errors: ValidationErrors;

  constructor(message: string, errors: ValidationErrors = {}) {
    super({
      statusCode: ERROR_CODES.VALIDATION_ERROR,
      message,
      errors,
    });
    this.name = "ValidationException";
    this.errors = errors;
  }
}
