import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class UnauthorizedException extends HttpException {
  constructor(message?: string) {
    super({
      statusCode: ERROR_CODES.NOT_AUTHENTICATED,
      message: message ?? "Authentication required",
    });
    this.name = "UnauthorizedException";
  }
}
