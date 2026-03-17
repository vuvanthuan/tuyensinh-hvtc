export interface TokenData {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface TokenStorage {
  setTokens(tokens: TokenData): void;
  getAccessToken(): string | null;
  getRefreshToken(): string | null;
  getTokenType(): string;
  clearTokens(): void;
  isAuthenticated(): boolean;
}
