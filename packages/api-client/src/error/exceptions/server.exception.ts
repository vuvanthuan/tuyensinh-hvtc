/**
 * Thrown when the server returns a 5xx error (500, 502, 503, 504).
 *
 * Carries the raw HTTP `httpStatus` integer so consumers can distinguish
 * between infrastructure errors (502/503/504) and application crashes (500).
 *
 * @example
 * ```ts
 * catch (error) {
 *   if (error instanceof ServerException && error.httpStatus === 503) {
 *     showMaintenanceBanner();
 *   }
 * }
 * ```
 */
import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class ServerException extends HttpException {
  /**
   * The raw HTTP status integer (500, 502, 503, or 504).
   * Use this to differentiate between server crash and gateway/infrastructure errors.
   */
  public readonly httpStatus: number;

  /**
   * @param httpStatus - The HTTP status code received (e.g. `500`, `503`).
   * @param message    - Human-readable error message. Defaults to `"Internal server error"`.
   */
  constructor(httpStatus: number, message = "Internal server error") {
    super({ statusCode: ERROR_CODES.SERVER_ERROR, message });
    this.httpStatus = httpStatus;
    this.name = "ServerException";
  }

  /** @inheritdoc */
  override toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      httpStatus: this.httpStatus,
    };
  }
}
