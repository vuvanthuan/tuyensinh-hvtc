import type { AxiosInstance } from "axios";

import type { Interceptor } from "./interceptor.interface";

export interface RateLimitConfig {
  /** Max number of requests per window */
  maxRequests: number;
  /** Window duration in milliseconds */
  windowMs: number;
  /** Delay (ms) to wait before retrying when rate-limited. Default: windowMs */
  retryAfterMs?: number;
}

/**
 * RateLimitInterceptor queues outgoing requests so that no more than
 * `maxRequests` calls are dispatched within any `windowMs` window.
 *
 * Uses a token-bucket strategy: tokens are restored after the window
 * elapses from the *first* request in each bucket period.
 */
export class RateLimitInterceptor implements Interceptor {
  private tokens: number;
  private windowStart: number = Date.now();

  constructor(private readonly config: RateLimitConfig) {
    this.tokens = config.maxRequests;
  }

  register(instance: AxiosInstance): void {
    instance.interceptors.request.use(
      async (cfg) => {
        await this.acquireToken();
        return cfg;
      },
      (error: unknown) =>
        Promise.reject(
          error instanceof Error ? error : new Error(String(error)),
        ),
    );
  }

  private async acquireToken(): Promise<void> {
    const now = Date.now();

    // Reset bucket after window expires
    if (now - this.windowStart >= this.config.windowMs) {
      this.tokens = this.config.maxRequests;
      this.windowStart = now;
    }

    if (this.tokens > 0) {
      this.tokens--;
      return;
    }

    // Wait until the current window resets, then retry
    const waitMs =
      this.config.retryAfterMs ??
      this.config.windowMs - (Date.now() - this.windowStart);

    await new Promise<void>((resolve) => setTimeout(resolve, waitMs));
    return this.acquireToken();
  }
}
