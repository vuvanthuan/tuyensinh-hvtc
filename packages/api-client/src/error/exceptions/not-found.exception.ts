import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class NotFoundException extends HttpException {
  constructor(message?: string) {
    super({
      statusCode: ERROR_CODES.NOT_FOUND,
      message: message ?? "Resource not found",
    });
    this.name = "NotFoundException";
  }
}
