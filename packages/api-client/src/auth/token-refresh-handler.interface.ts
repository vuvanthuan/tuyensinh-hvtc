/**
 * @module token-refresh-handler.interface
 * @description
 * Contract for refreshing expired JWT access tokens.
 *
 * The {@link AuthInterceptor} calls `refresh()` when it receives a 401 response
 * and `_retry` has not yet been set, giving the handler one chance to silently
 * obtain a new token without user interaction.
 *
 * If the refresh itself fails, `onRefreshFailed()` is called so the handler
 * can perform cleanup (clear stored tokens, redirect to login).
 */

/**
 * Shape of the token data returned by a successful refresh call.
 */
export interface TokenRefreshResult {
  /** The new short-lived access token. */
  accessToken: string;
  /** A new or rotated refresh token. */
  refreshToken: string;
  /** New access token lifetime in **seconds**. */
  expiresIn: number;
}

/**
 * Strategy interface for refreshing an expired access token.
 *
 * Implement this interface when your auth server exposes a refresh endpoint,
 * then pass the implementation to `ApiClientOptions.tokenRefreshHandler`.
 *
 * The library ships {@link DefaultTokenRefreshHandler} as a ready-to-use
 * implementation for typical JWT refresh flows.
 */
export interface TokenRefreshHandler {
  /**
   * Obtain a new access token using the stored refresh token.
   *
   * Implementations **must** be idempotent for concurrent calls: if multiple
   * interceptors trigger a refresh simultaneously, only one network request
   * should be made (use promise deduplication).
   *
   * @returns A promise that resolves to the new **access token string**.
   * @throws When the refresh endpoint returns an error or the refresh token
   *   is missing / expired. The interceptor will call `onRefreshFailed()` next.
   */
  refresh(): Promise<string>;

  /**
   * Called by the {@link AuthInterceptor} when the refresh attempt fails.
   *
   * Use this hook to clear stored tokens and redirect the user to the
   * login page (or dispatch an `AUTH/LOGOUT` action, etc.).
   */
  onRefreshFailed(): void;
}
