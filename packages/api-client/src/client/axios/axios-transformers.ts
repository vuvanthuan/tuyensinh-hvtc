import type { InternalAxiosRequestConfig } from "axios";

/**
 * Axios request/response transform utilities.
 *
 * These are pure functions that can be composed into the Axios `transformRequest`
 * and `transformResponse` config arrays, keeping the AxiosInstanceFactory thin.
 */

// ─── Request transforms ───────────────────────────────────────────────────────

/**
 * Strip undefined values from the request payload so the server does not
 * receive spurious `undefined` → `null` JSON fields.
 */
export function stripUndefined(data: unknown): unknown {
  if (typeof data !== "object" || data === null || data instanceof FormData) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(stripUndefined);
  }

  return Object.fromEntries(
    Object.entries(data as Record<string, unknown>)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => [k, stripUndefined(v)]),
  );
}

/**
 * Convert Date objects in the request body to ISO-8601 strings.
 */
export function serializeDates(data: unknown): unknown {
  if (data instanceof Date) {
    return data.toISOString();
  }

  if (typeof data !== "object" || data === null || data instanceof FormData) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(serializeDates);
  }

  return Object.fromEntries(
    Object.entries(data as Record<string, unknown>).map(([k, v]) => [
      k,
      serializeDates(v),
    ]),
  );
}

// ─── Response transforms ──────────────────────────────────────────────────────

/**
 * Parse ISO-8601 date strings in response JSON back into Date objects.
 *
 * Typical usage in AxiosInstanceFactory:
 *   transformResponse: [parseResponseDates]
 */
const ISO_DATE_REGEX =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;

export function parseResponseDates(data: unknown): unknown {
  if (typeof data === "string") {
    if (ISO_DATE_REGEX.test(data)) {
      const parsed = new Date(data);
      if (!isNaN(parsed.getTime())) return parsed;
    }
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(parseResponseDates);
  }

  if (typeof data === "object" && data !== null) {
    return Object.fromEntries(
      Object.entries(data as Record<string, unknown>).map(([k, v]) => [
        k,
        parseResponseDates(v),
      ]),
    );
  }

  return data;
}

/**
 * Axios `transformResponse` helper that first JSON.parses the raw string
 * (Axios does this by default when `transformResponse` is overridden) and
 * then runs `parseResponseDates`.
 */
export function jsonParseAndTransform(rawData: unknown): unknown {
  let parsed: unknown = rawData;

  if (typeof rawData === "string") {
    try {
      parsed = JSON.parse(rawData);
    } catch {
      return rawData;
    }
  }

  return parseResponseDates(parsed);
}

// ─── Header helpers ───────────────────────────────────────────────────────────

/**
 * Add a correlation/trace ID header to every outgoing request.
 * Useful for distributed tracing (Sentry, Datadog, etc.).
 */
export function addCorrelationId(
  config: InternalAxiosRequestConfig,
  headerName = "X-Correlation-ID",
): InternalAxiosRequestConfig {
  if (!config.headers.get(headerName)) {
    config.headers.set(headerName, generateId());
  }
  return config;
}

function generateId(): string {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for older Node environments
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
