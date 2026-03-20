/**
 * Thrown when a request is aborted because the server did not respond
 * within the configured timeout period.
 *
 * Triggered by Axios `ECONNABORTED` code or by the `AbortController`
 * timeout path in {@link FetchHttpClient}.
 *
 * @example
 * ```ts
 * catch (error) {
 *   if (error instanceof TimeoutException) {
 *     toast.warning("The server is taking too long to respond. Please try again.");
 *   }
 * }
 * ```
 */
import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class TimeoutException extends HttpException {
  /** Brand flag for narrow `instanceof`-free checks. */
  public readonly isTimeoutError = true;

  constructor(message = "Request timeout") {
    super({ statusCode: ERROR_CODES.TIMEOUT_ERROR, message });
    this.name = "TimeoutException";
  }
}
