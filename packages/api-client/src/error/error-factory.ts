import type { AxiosError } from "axios";
import axios from "axios";

import type { ErrorResponse } from "../core/types/response.types";
import { ERROR_CODES } from "../core/constants/error.constant";
import { HTTP_STATUS } from "../core/constants/http-status.constant";
import { ForbiddenException } from "./exceptions/forbidden.exception";
import { HttpException } from "./exceptions/http.exception";
import { NetworkException } from "./exceptions/network.exception";
import { NotFoundException } from "./exceptions/not-found.exception";
import { ServerException } from "./exceptions/server.exception";
import { TimeoutException } from "./exceptions/timeout.exception";
import { UnauthorizedException } from "./exceptions/unauthorized.exception";
import { ValidationException } from "./exceptions/validation.exception";

export class ErrorFactory {
  static fromAxiosError(error: unknown): HttpException {
    if (!this.isAxiosError(error)) {
      return new HttpException({
        statusCode: ERROR_CODES.UNKNOWN_ERROR,
        message: "Unknown error occurred",
      });
    }

    if (!error.response) {
      if (error.code === "ECONNABORTED") {
        return new TimeoutException();
      }
      if (axios.isCancel(error)) {
        return new HttpException({
          statusCode: ERROR_CODES.ABORT_ERROR,
          message: "Request was cancelled",
        });
      }
      return new NetworkException(error.message);
    }

    const status = error.response.status;
    const data = error.response.data;

    const errorResponse = this.parseErrorResponse(data);
    const statusCode = errorResponse.statusCode ?? String(status);
    const message =
      errorResponse.message ?? (error.message || "An error occurred");
    const errors = errorResponse.errors;

    return this.createExceptionForStatus(
      status,
      statusCode,
      message,
      errors,
      errorResponse.data,
    );
  }

  static fromResponse(data: unknown): HttpException | null {
    const errorResponse = this.parseErrorResponse(data);

    return new HttpException({
      statusCode: errorResponse.statusCode ?? ERROR_CODES.UNKNOWN_ERROR,
      message: errorResponse.message ?? "An error occurred",
      data: errorResponse.data,
      errors: errorResponse.errors,
    });
  }

  private static isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError).isAxiosError === true;
  }

  private static parseErrorResponse(data: unknown): Partial<ErrorResponse> {
    if (!data || typeof data !== "object") {
      return {};
    }

    const obj = data as Record<string, unknown>;

    return {
      statusCode:
        typeof obj.statusCode === "string" ? obj.statusCode : undefined,
      message: typeof obj.message === "string" ? obj.message : undefined,
      data: obj.data,
      errors: this.isValidationErrors(obj.errors) ? obj.errors : undefined,
    };
  }

  private static isValidationErrors(
    errors: unknown,
  ): errors is Record<string, string[]> {
    if (!errors || typeof errors !== "object") {
      return false;
    }

    return Object.values(errors as Record<string, unknown>).every(
      (value) =>
        Array.isArray(value) && value.every((item) => typeof item === "string"),
    );
  }

  private static createExceptionForStatus(
    status: number,
    statusCode: string,
    message: string,
    errors?: Record<string, string[]>,
    data?: unknown,
  ): HttpException {
    switch (status) {
      case HTTP_STATUS.BAD_REQUEST:
        if (errors && Object.keys(errors).length > 0) {
          return new ValidationException(message, errors);
        }
        return new HttpException({ statusCode, message, data, errors });

      case HTTP_STATUS.UNAUTHORIZED:
        if (statusCode === ERROR_CODES.EXPIRED_TOKEN) {
          return new HttpException({
            statusCode: ERROR_CODES.EXPIRED_TOKEN,
            message: message || "Token has expired",
            data,
          });
        }
        return new UnauthorizedException(message);

      case HTTP_STATUS.FORBIDDEN:
        return new ForbiddenException(message);

      case HTTP_STATUS.NOT_FOUND:
        return new NotFoundException(message);

      case HTTP_STATUS.UNPROCESSABLE_ENTITY:
        return new ValidationException(message, errors ?? {});

      case HTTP_STATUS.INTERNAL_SERVER_ERROR:
      case HTTP_STATUS.BAD_GATEWAY:
      case HTTP_STATUS.SERVICE_UNAVAILABLE:
      case HTTP_STATUS.GATEWAY_TIMEOUT:
        return new ServerException(status, message);

      default:
        return new HttpException({ statusCode, message, data, errors });
    }
  }
}
