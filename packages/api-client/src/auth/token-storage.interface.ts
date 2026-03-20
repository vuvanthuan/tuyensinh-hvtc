/**
 * @module token-storage.interface
 * @description
 * Contract for persisting and reading JWT tokens.
 *
 * The library ships with {@link LocalStorageTokenStorage} (browser) as the
 * default implementation. For server-side rendering or React Native you can
 * provide an alternative that reads from `httpOnly` cookies, SecureStore, etc.
 *
 * @example
 * ```ts
 * class CookieTokenStorage implements TokenStorage {
 *   setTokens(tokens) { setCookie("access", tokens.accessToken); }
 *   getAccessToken() { return getCookie("access"); }
 *   // …
 * }
 * const client = new ApiClient(config, { tokenStorage: new CookieTokenStorage() });
 * ```
 */

/**
 * The token bundle returned by authentication endpoints.
 */
export interface TokenData {
  /** Short-lived access token sent in the `Authorization` header. */
  accessToken: string;
  /** Long-lived refresh token used to obtain a new access token. */
  refreshToken: string;
  /**
   * Access token lifetime in **seconds** (e.g. `3600` = 1 hour).
   * The storage layer uses this to compute the absolute expiry timestamp.
   */
  expiresIn: number;
  /** Token scheme (usually `"Bearer"`). */
  tokenType: string;
}

/**
 * Abstraction over the physical token store (localStorage, cookie, memory, etc.).
 *
 * Implement this interface when you need a storage strategy different from
 * {@link LocalStorageTokenStorage}.
 */
export interface TokenStorage {
  /**
   * Persist a full token bundle after a successful login or refresh.
   * @param tokens - The token data returned by the auth server.
   */
  setTokens(tokens: TokenData): void;

  /**
   * Retrieve the current access token.
   * @returns The access token string, or `null` when unauthenticated.
   */
  getAccessToken(): string | null;

  /**
   * Retrieve the refresh token.
   * @returns The refresh token string, or `null` when absent.
   */
  getRefreshToken(): string | null;

  /**
   * Retrieve the token type prefix (e.g. `"Bearer"`).
   * @returns The token type string (default: `"Bearer"`).
   */
  getTokenType(): string;

  /**
   * Remove all stored tokens (on logout or after a failed refresh).
   * Must invalidate any in-memory state as well as the persistent store.
   */
  clearTokens(): void;

  /**
   * Determine whether the user is currently authenticated.
   *
   * @remarks
   * Implementations should check both that a token exists **and** that
   * it has not yet expired (using the stored `expiresAt` timestamp).
   *
   * @returns `true` when a valid, unexpired access token is available.
   */
  isAuthenticated(): boolean;
}
