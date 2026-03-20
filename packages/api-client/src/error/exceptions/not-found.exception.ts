/**
 * Thrown when the server returns HTTP 404 Not Found.
 *
 * Indicates the requested resource does not exist at the given URL.
 * Consumers can catch this specifically to show a contextual "not found" UI
 * instead of a generic error page.
 *
 * @example
 * ```ts
 * catch (error) {
 *   if (error instanceof NotFoundException) {
 *     router.push("/404");
 *   }
 * }
 * ```
 */
import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class NotFoundException extends HttpException {
  constructor(message = "Resource not found") {
    super({ statusCode: ERROR_CODES.NOT_FOUND, message });
    this.name = "NotFoundException";
  }
}
