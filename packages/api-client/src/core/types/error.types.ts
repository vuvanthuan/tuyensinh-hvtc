export interface ErrorContext {
  statusCode?: string | number;
  message?: string;
  data?: unknown;
  errors?: Record<string, string[]>;
  originalError?: unknown;
}

export interface HttpErrorContext extends ErrorContext {
  statusCode: string;
  message: string;
}

export interface ValidationErrorContext extends HttpErrorContext {
  errors: Record<string, string[]>;
}

export interface NetworkErrorContext extends ErrorContext {
  isNetworkError: true;
}

export interface TimeoutErrorContext extends ErrorContext {
  isTimeoutError: true;
}

export function isHttpErrorContext(
  context: ErrorContext,
): context is HttpErrorContext {
  return context.statusCode !== undefined && context.message !== undefined;
}

export function isValidationErrorContext(
  context: ErrorContext,
): context is ValidationErrorContext {
  return isHttpErrorContext(context) && context.errors !== undefined;
}
