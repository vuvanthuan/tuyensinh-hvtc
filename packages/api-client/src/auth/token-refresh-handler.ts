/**
 * @module token-refresh-handler
 * @description
 * Default {@link TokenRefreshHandler} implementation for standard JWT refresh flows.
 *
 * Features:
 * - **Promise deduplication**: concurrent 401 retries all share one refresh call.
 * - **Token persistence**: on success, immediately writes the new token bundle
 *   to the injected {@link TokenStorage}.
 * - **Failure delegation**: on failure, calls the injected `onLogout` callback
 *   so the application layer can clear state and redirect.
 */

import type { HttpClient } from "../client/http-client.interface";
import type { IResponseDTO } from "../core/types/response.types";
import type { TokenRefreshHandler } from "./token-refresh-handler.interface";
import type { TokenStorage } from "./token-storage.interface";

/**
 * Shape of the response body from the token refresh endpoint.
 */
export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

/**
 * Concrete token refresh handler that calls a configurable refresh URL.
 *
 * @example
 * ```ts
 * const handler = new DefaultTokenRefreshHandler(
 *   tokenStorage,
 *   httpClient,
 *   "/auth/token/refresh",
 *   () => router.push("/login"),
 * );
 * ```
 */
export class DefaultTokenRefreshHandler implements TokenRefreshHandler {
  /**
   * In-flight refresh promise. Stored so that parallel 401 retries all
   * await the same network call instead of triggering multiple refreshes.
   */
  private refreshPromise: Promise<string> | null = null;

  /**
   * @param tokenStorage   - Storage adapter to read the refresh token from
   *                         and write the new tokens to.
   * @param httpClient     - HTTP client used to call the refresh endpoint.
   *                         Should be a raw adapter (no auth interceptor) to
   *                         avoid infinite refresh loops.
   * @param refreshUrl     - API endpoint path for token refresh (e.g. `"/auth/refresh"`).
   * @param onLogout       - Called when the refresh fails so the application
   *                         can clear state and redirect to the login page.
   */
  constructor(
    private tokenStorage: TokenStorage,
    private httpClient: HttpClient,
    private refreshUrl: string,
    private onLogout: () => void,
  ) {}

  /** @inheritdoc */
  async refresh(): Promise<string> {
    // Return an already-in-flight refresh promise to deduplicate concurrent calls
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    const refreshToken = this.tokenStorage.getRefreshToken();
    if (!refreshToken) {
      this.onRefreshFailed();
      throw new Error("No refresh token available");
    }

    this.refreshPromise = (async () => {
      try {
        const response = await this.httpClient.post<
          IResponseDTO<RefreshTokenResponse>
        >(this.refreshUrl, { refreshToken });

        const responseData = response.data;

        if (!responseData.success || !responseData.data) {
          throw new Error("Refresh token failed");
        }

        const {
          accessToken,
          refreshToken: newRefreshToken,
          expiresIn,
        } = responseData.data;

        this.tokenStorage.setTokens({
          accessToken,
          refreshToken: newRefreshToken,
          expiresIn,
          tokenType: "Bearer",
        });

        return accessToken;
      } catch (error) {
        this.onRefreshFailed();
        throw error;
      } finally {
        // Always clear the cached promise so the next refresh starts fresh
        this.refreshPromise = null;
      }
    })();

    return this.refreshPromise;
  }

  /** @inheritdoc */
  onRefreshFailed(): void {
    this.tokenStorage.clearTokens();
    this.onLogout();
  }
}
