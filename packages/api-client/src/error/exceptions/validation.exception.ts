/**
 * Thrown when the server returns HTTP 400 Bad Request or HTTP 422
 * Unprocessable Entity with a field-level validation error body.
 *
 * The `errors` map is guaranteed to be present and contains at least one
 * field-level violation message.
 *
 * @example
 * ```ts
 * catch (error) {
 *   if (error instanceof ValidationException) {
 *     // Display field errors in a form
 *     setFormErrors(error.errors);
 *   }
 * }
 * ```
 */
import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class ValidationException extends HttpException {
  constructor(
    message = "Validation failed",
    errors: Record<string, string[]> = {},
  ) {
    super({ statusCode: ERROR_CODES.VALIDATION_ERROR, message, errors });
    this.name = "ValidationException";
  }
}
