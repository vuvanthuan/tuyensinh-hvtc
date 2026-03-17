import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class NetworkException extends HttpException {
  public readonly isNetworkError = true;

  constructor(message?: string) {
    super({
      statusCode: ERROR_CODES.NETWORK_ERROR,
      message: message ?? "Network connection error",
    });
    this.name = "NetworkException";
  }
}
