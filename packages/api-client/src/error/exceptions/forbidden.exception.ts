/**
 * Thrown when the server returns HTTP 403 Forbidden.
 *
 * Indicates the authenticated user is recognised but does not have
 * sufficient permissions to access the resource.
 *
 * @example
 * ```ts
 * catch (error) {
 *   if (error instanceof ForbiddenException) {
 *     toast.error("You don't have access to this resource.");
 *   }
 * }
 * ```
 */
import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class ForbiddenException extends HttpException {
  constructor(message = "You do not have permission to perform this action") {
    super({ statusCode: ERROR_CODES.NO_PERMISSION, message });
    this.name = "ForbiddenException";
  }
}
