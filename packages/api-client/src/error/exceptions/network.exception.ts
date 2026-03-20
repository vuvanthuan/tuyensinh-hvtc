/**
 * Thrown when a request fails at the network level and no HTTP response
 * was received from the server.
 *
 * Common causes:
 * - Device is offline
 * - DNS resolution failure
 * - Server actively refused the connection (`ECONNREFUSED`)
 * - Intermediate proxy failure
 *
 * @remarks
 * `NetworkException` is distinct from {@link TimeoutException} (server
 * reached but did not respond in time) and {@link ServerException}
 * (server responded with a 5xx).
 *
 * @example
 * ```ts
 * catch (error) {
 *   if (error instanceof NetworkException) {
 *     toast.error("No internet connection. Please check your network.");
 *   }
 * }
 * ```
 */
import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class NetworkException extends HttpException {
  /** Brand flag for narrow `instanceof`-free checks. */
  public readonly isNetworkError = true;

  constructor(message = "Network connection error") {
    super({ statusCode: ERROR_CODES.NETWORK_ERROR, message });
    this.name = "NetworkException";
  }
}
