/**
 * API Client Configuration
 * Defines default configurations for the API Client
 */

import type { ApiClientConfig } from "../types/api.types";

/**
 * Default configuration for API Client
 */
export const DEFAULT_API_CONFIG: ApiClientConfig = {
  baseURL: "",
  timeout: 30000,
  useToken: true,
  displayError: true,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

/**
 * Default retry configuration
 */
export const DEFAULT_RETRY_CONFIG = {
  maxRetries: 3,
  retryDelay: 1000,
  backoffFactor: 2,
  retryCondition: (error: unknown) => {
    if (error && typeof error === "object" && "response" in error) {
      const err = error as { response?: { status?: number } };
      return (
        !err.response ||
        (err.response.status ? err.response.status >= 500 : false)
      );
    }
    return true;
  },
};

/**
 * Default cache configuration
 */
export const DEFAULT_CACHE_CONFIG = {
  enabled: false,
  defaultTTL: 300000, // 5 minutes
};

/**
 * HTTP Status Codes
 */
export const HTTP_STATUS = {
  // 2xx Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,

  // 4xx Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,

  // 5xx Server Errors
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const;

/**
 * Create API Client configuration with custom values
 * @param config - Custom configuration
 * @returns ApiClientConfig - Complete configuration
 */
export function createApiConfig(
  config: Partial<ApiClientConfig> = {},
): ApiClientConfig {
  return {
    ...DEFAULT_API_CONFIG,
    ...config,
    headers: {
      ...DEFAULT_API_CONFIG.headers,
      ...config.headers,
    },
    retryConfig: {
      ...DEFAULT_RETRY_CONFIG,
      ...config.retryConfig,
    },
    cacheConfig: {
      ...DEFAULT_CACHE_CONFIG,
      ...config.cacheConfig,
    },
  };
}

/**
 * Create configuration for development environment
 */
export function createDevConfig(): ApiClientConfig {
  return createApiConfig({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    timeout: 30000,
    displayError: true,
    cacheConfig: {
      enabled: false,
      defaultTTL: 0,
    },
  });
}

/**
 * Create configuration for production environment
 */
export function createProdConfig(): ApiClientConfig {
  return createApiConfig({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
    timeout: 30000,
    displayError: false,
    retryConfig: {
      maxRetries: 3,
      retryDelay: 1000,
    },
    cacheConfig: {
      enabled: true,
      defaultTTL: 300000,
    },
  });
}

/**
 * Create configuration for test environment
 */
export function createTestConfig(): ApiClientConfig {
  return createApiConfig({
    baseURL: "http://localhost:3001/api",
    timeout: 5000,
    displayError: false,
    cacheConfig: {
      enabled: false,
      defaultTTL: 0,
    },
  });
}

/**
 * Check if current environment is development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

/**
 * Check if current environment is production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

/**
 * Check if current environment is test
 */
export function isTest(): boolean {
  return process.env.NODE_ENV === "test";
}
