import type { HttpClient } from "../client/http-client.interface";
import type { IResponseDTO } from "../core/types/response.types";
import type { TokenRefreshHandler } from "./token-refresh-handler.interface";
import type { TokenStorage } from "./token-storage.interface";

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export class DefaultTokenRefreshHandler implements TokenRefreshHandler {
  private refreshPromise: Promise<string> | null = null;

  constructor(
    private tokenStorage: TokenStorage,
    private httpClient: HttpClient,
    private refreshUrl: string,
    private onLogout: () => void,
  ) {}

  async refresh(): Promise<string> {
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
        this.refreshPromise = null;
      }
    })();

    return this.refreshPromise;
  }

  onRefreshFailed(): void {
    this.tokenStorage.clearTokens();
    this.onLogout();
  }
}
