import type { IRequestOptions } from "./types";

export class AuthHelper {
  static getAuthorization(options: IRequestOptions): string | undefined {
    if (options.customAuthHeader) {
      return options.customAuthHeader;
    }

    if (options.skipAuth) {
      return undefined;
    }

    if (options.token) {
      const authType = options.authType ?? "Bearer";
      return `${authType} ${options.token}`;
    }

    return undefined;
  }

  static refreshToken(): Promise<string | null> {
    //TODO: Implement refresh token logic here
    return Promise.resolve(null);
  }
}
