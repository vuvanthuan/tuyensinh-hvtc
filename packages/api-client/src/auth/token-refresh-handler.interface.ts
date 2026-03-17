export interface TokenRefreshResult {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface TokenRefreshHandler {
  refresh(): Promise<string>;
  onRefreshFailed(): void;
}
