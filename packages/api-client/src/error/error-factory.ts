/**
 * @module error-factory
 * @description
 * Factory that converts raw Axios/Fetch errors into typed {@link HttpException}
 * subclasses from the `@acme/api-client` exception hierarchy.
 *
 * This is the single mapping point between the transport layer and the
 * application error domain. All {@link ApiClient} catch blocks funnel
 * through here so the rest of the application never sees raw Axios errors.
 *
 * @example
 * ```ts
 * try {
 *   await axios.get("/resource");
 * } catch (err) {
 *   throw ErrorFactory.fromAxiosError(err);
 *   // Guaranteed to be a typed HttpException subclass ↑
 * }
 * ```
 */

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
  /**
   * Convert an Axios error (or any unknown thrown value) into a typed
   * {@link HttpException} subclass.
   *
   * Decision tree:
   * 1. Not an Axios error → {@link HttpException} with `UNKNOWN_ERROR`
   * 2. `ECONNABORTED` → {@link TimeoutException}
   * 3. Axios `isCancel` → {@link HttpException} with `ABORT_ERROR`
   * 4. No response (network failure) → {@link NetworkException}
   * 5. HTTP 4xx / 5xx → appropriate typed subclass via {@link createExceptionForStatus}
   *
   * @param error - Any value thrown by Axios or the fetch adapter.
   * @returns A typed {@link HttpException} subclass. Never throws.
   */
  static fromAxiosError(error: unknown): HttpException {
    if (!this.isAxiosError(error)) {
      return new HttpException({
        statusCode: ERROR_CODES.UNKNOWN_ERROR,
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
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
    const message = errorResponse.message ?? error.message;
    const errors = errorResponse.errors;

    return this.createExceptionForStatus(
      status,
      statusCode,
      message,
      errors,
      errorResponse.data,
    );
  }

  /**
   * Construct a typed {@link HttpException} from a parsed response body.
   *
   * Use this when you have already received the response and want to
   * wrap it as an exception (e.g. when `success === false`).
   *
   * @param data - Raw response body (usually the full server envelope).
   * @returns An {@link HttpException} populated from the body fields.
   */
  static fromResponse(data: unknown): HttpException {
    const errorResponse = this.parseErrorResponse(data);

    return new HttpException({
      statusCode: errorResponse.statusCode ?? ERROR_CODES.UNKNOWN_ERROR,
      message: errorResponse.message ?? "An error occurred",
      data: errorResponse.data,
      errors: errorResponse.errors,
    });
  }

  // ─── Private helpers ────────────────────────────────────────────────────────

  private static isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError).isAxiosError === true;
  }

  /**
   * Safely extract known fields from an unknown response body.
   * Returns an empty object when the body does not match the
   * expected {@link ErrorResponse} shape.
   */
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

  /**
   * Validates that `errors` is a `Record<string, string[]>` as expected
   * by {@link ValidationException}.
   */
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

  /**
   * Maps an HTTP status integer to the most specific available exception.
   *
   * @param status     - HTTP status code integer.
   * @param statusCode - Application-level code string from the server envelope.
   * @param message    - Human-readable error message.
   * @param errors     - Optional field-level validation errors.
   * @param data       - Optional payload from the server response.
   */
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
        // Distinguish between truly expired tokens and other 401s
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
