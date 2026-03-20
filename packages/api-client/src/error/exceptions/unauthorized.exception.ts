/**
 * Thrown when a request fails due to HTTP 401 Unauthorized.
 *
 * This typically means the access token is missing or invalid (but **not**
 * expired – expired tokens produce `ERROR_CODES.EXPIRED_TOKEN` via the
 * {@link AuthInterceptor} refresh cycle).
 *
 * The {@link AuthInterceptor} will attempt a token refresh on 401 before
 * throwing this exception. If the refresh also fails, `onRefreshFailed()` is
 * called and the user is usually redirected to the login page.
 *
 * @example
 * ```ts
 * catch (error) {
 *   if (error instanceof UnauthorizedException) {
 *     authStore.logout();
 *   }
 * }
 * ```
 */
import { ERROR_CODES } from "../../core/constants/error.constant";
import { HttpException } from "./http.exception";

export class UnauthorizedException extends HttpException {
  constructor(message = "Authentication required") {
    super({ statusCode: ERROR_CODES.NOT_AUTHENTICATED, message });
    this.name = "UnauthorizedException";
  }
}
