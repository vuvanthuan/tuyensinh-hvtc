/**
 * @module token-storage
 * @description
 * Default {@link TokenStorage} implementation backed by `localStorage` with
 * an in-memory cache layer to minimise synchronous `localStorage` reads on
 * the hot path.
 *
 * **Browser-only.** The implementation guards all `localStorage` calls with
 * `typeof window !== "undefined"` so it is safe to import in SSR (Next.js)
 * environments, though it will not persist data server-side.
 *
 * @example
 * ```ts
 * const storage = LocalStorageTokenStorage.getInstance();
 * storage.setTokens({ accessToken, refreshToken, expiresIn: 3600, tokenType: "Bearer" });
 * ```
 */

import type { TokenData, TokenStorage } from "./token-storage.interface";

/**
 * Singleton localStorage-backed token storage.
 *
 * Using a singleton ensures that the AuthInterceptor and the application
 * state layer (e.g. Redux auth slice) always share the same token instance.
 *
 * @remarks
 * Cookie-based or SSR-compatible alternatives should implement
 * {@link TokenStorage} directly and be passed to `ApiClientOptions.tokenStorage`.
 */
export class LocalStorageTokenStorage implements TokenStorage {
  private static instance: LocalStorageTokenStorage | null = null;

  // In-memory cache – avoids repeated synchronous localStorage reads
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private tokenType = "Bearer";
  private expiresAt: number | null = null;

  /** Keys used to persist tokens in localStorage. */
  private static readonly KEYS = {
    ACCESS: "accessToken",
    REFRESH: "refreshToken",
    TYPE: "tokenType",
    EXPIRES: "expiresAt",
  } as const;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  /**
   * Returns the single shared instance (Singleton pattern).
   * Creates the instance on first invocation.
   */
  static getInstance(): LocalStorageTokenStorage {
    LocalStorageTokenStorage.instance ??= new LocalStorageTokenStorage();
    return LocalStorageTokenStorage.instance;
  }

  /** @inheritdoc */
  setTokens(data: TokenData): void {
    this.accessToken = data.accessToken;
    this.refreshToken = data.refreshToken;
    this.tokenType = data.tokenType;
    this.expiresAt = Date.now() + data.expiresIn * 1000;

    if (typeof window !== "undefined") {
      const { KEYS } = LocalStorageTokenStorage;
      localStorage.setItem(KEYS.ACCESS, data.accessToken);
      localStorage.setItem(KEYS.REFRESH, data.refreshToken);
      localStorage.setItem(KEYS.TYPE, data.tokenType);
      localStorage.setItem(KEYS.EXPIRES, String(this.expiresAt));
    }
  }

  /** @inheritdoc */
  getAccessToken(): string | null {
    if (!this.accessToken && typeof window !== "undefined") {
      this.loadFromStorage();
    }
    return this.accessToken;
  }

  /** @inheritdoc */
  getRefreshToken(): string | null {
    if (!this.refreshToken) {
      this.loadFromStorage();
    }
    return this.refreshToken;
  }

  /** @inheritdoc */
  getTokenType(): string {
    return this.tokenType;
  }

  /** @inheritdoc */
  clearTokens(): void {
    this.accessToken = null;
    this.refreshToken = null;
    this.expiresAt = null;

    if (typeof window !== "undefined") {
      const { KEYS } = LocalStorageTokenStorage;
      localStorage.removeItem(KEYS.ACCESS);
      localStorage.removeItem(KEYS.REFRESH);
      localStorage.removeItem(KEYS.TYPE);
      localStorage.removeItem(KEYS.EXPIRES);
    }
  }

  /** @inheritdoc */
  isAuthenticated(): boolean {
    const token = this.getAccessToken();
    if (!token || !this.expiresAt) return false;
    return Date.now() < this.expiresAt;
  }

  /**
   * Hydrate the in-memory cache from `localStorage`.
   * Called lazily the first time a token is requested.
   */
  private loadFromStorage(): void {
    if (typeof window === "undefined") return;

    const { KEYS } = LocalStorageTokenStorage;
    this.accessToken = localStorage.getItem(KEYS.ACCESS);
    this.refreshToken = localStorage.getItem(KEYS.REFRESH);
    this.tokenType = localStorage.getItem(KEYS.TYPE) ?? "Bearer";

    const expiresAt = localStorage.getItem(KEYS.EXPIRES);
    this.expiresAt = expiresAt ? Number(expiresAt) : null;
  }
}
