import type { HttpException } from "./exceptions/http.exception";

/**
 * IErrorHandler defines the contract for handling HTTP errors.
 * Consumers can implement this to plug in custom error handling strategies
 * (e.g. show toast, log to Sentry, redirect to login, etc.) without
 * modifying the core ApiClient.
 */
export interface IErrorHandler {
  /**
   * Called every time the ApiClient catches a thrown HttpException.
   * Return `true` to signal that the error was fully handled
   * (the ApiClient will then re-throw so callers can still catch it).
   */
  handle(error: HttpException): void | Promise<void>;
}

/**
 * Composite handler that delegates to multiple IErrorHandler instances in order.
 */
export class CompositeErrorHandler implements IErrorHandler {
  constructor(private readonly handlers: IErrorHandler[]) {}

  async handle(error: HttpException): Promise<void> {
    for (const handler of this.handlers) {
      await handler.handle(error);
    }
  }
}

/**
 * No-op implementation – swallows all errors silently.
 * Useful for testing or when the caller handles errors itself.
 */
export class NoopErrorHandler implements IErrorHandler {
  handle(_error: HttpException): void {
    // intentionally empty
  }
}
