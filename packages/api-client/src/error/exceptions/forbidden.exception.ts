import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class ForbiddenException extends HttpException {
  constructor(message?: string) {
    super({
      statusCode: ERROR_CODES.NO_PERMISSION,
      message: message ?? "You do not have permission to access this resource",
    });
    this.name = "ForbiddenException";
  }
}
