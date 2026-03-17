import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class TimeoutException extends HttpException {
  public readonly isTimeoutError = true;

  constructor(message?: string) {
    super({
      statusCode: ERROR_CODES.TIMEOUT_ERROR,
      message: message ?? "Request timeout",
    });
    this.name = "TimeoutException";
  }
}
