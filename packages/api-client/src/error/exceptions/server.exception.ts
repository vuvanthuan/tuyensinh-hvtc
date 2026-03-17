import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class ServerException extends HttpException {
  public readonly statusCodeNumber: number;

  constructor(statusCode: number, message?: string) {
    super({
      statusCode: ERROR_CODES.SERVER_ERROR,
      message: message ?? `Server error (${statusCode})`,
    });
    this.name = "ServerException";
    this.statusCodeNumber = statusCode;
  }
}
