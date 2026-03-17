import type { TokenData, TokenStorage } from "./token-storage.interface";

export class LocalStorageTokenStorage implements TokenStorage {
  private static instance: LocalStorageTokenStorage | null = null;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private tokenType = "Bearer";
  private expiresAt: number | null = null;

  static getInstance(): LocalStorageTokenStorage {
    LocalStorageTokenStorage.instance ??= new LocalStorageTokenStorage();
    return LocalStorageTokenStorage.instance;
  }

  setTokens(data: TokenData): void {
    this.accessToken = data.accessToken;
    this.refreshToken = data.refreshToken;
    this.tokenType = data.tokenType;
    this.expiresAt = Date.now() + data.expiresIn * 1000;

    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("tokenType", data.tokenType);
      localStorage.setItem("expiresAt", String(this.expiresAt));
    }
  }

  getAccessToken(): string | null {
    if (!this.accessToken && typeof window !== "undefined") {
      this.loadFromStorage();
    }
    return this.accessToken;
  }

  getRefreshToken(): string | null {
    if (!this.refreshToken) {
      this.loadFromStorage();
    }
    return this.refreshToken;
  }

  getTokenType(): string {
    return this.tokenType;
  }

  clearTokens(): void {
    this.accessToken = null;
    this.refreshToken = null;
    this.expiresAt = null;

    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("tokenType");
      localStorage.removeItem("expiresAt");
    }
  }

  isAuthenticated(): boolean {
    const token = this.getAccessToken();
    if (!token || !this.expiresAt) return false;
    return Date.now() < this.expiresAt;
  }

  private loadFromStorage(): void {
    if (typeof window === "undefined") return;

    this.accessToken = localStorage.getItem("accessToken");
    this.refreshToken = localStorage.getItem("refreshToken");
    this.tokenType = localStorage.getItem("tokenType") ?? "Bearer";

    const expiresAt = localStorage.getItem("expiresAt");
    this.expiresAt = expiresAt ? Number(expiresAt) : null;
  }
}
