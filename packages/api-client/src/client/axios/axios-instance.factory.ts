/**
 * @module axios-instance.factory
 * @description
 * Factory that wires a fully configured `AxiosInstance` and returns it
 * wrapped in an {@link AxiosHttpClient}.
 *
 * ### Responsibilities
 * 1. Create an `axios.create()` instance with base config from {@link ApiClientConfig}.
 * 2. Apply Axios request/response **transformers** (date serialisation +
 *    correlation-ID injection) so all outgoing and incoming payloads are
 *    normalised before interceptors run.
 * 3. Register each {@link Interceptor} in insertion order by calling their
 *    `register(instance)` method.
 * 4. Return the fully wired {@link AxiosHttpClient} (not the raw instance)
 *    so the rest of the codebase stays adapter-agnostic.
 *
 * @example
 * ```ts
 * // Automatically called by ApiClient constructor:
 * const httpClient = AxiosInstanceFactory.create(config, [
 *   authInterceptor,
 *   retryInterceptor,
 *   cacheInterceptor,
 *   loggingInterceptor,
 * ]);
 * ```
 */

import type { AxiosRequestConfig } from "axios";
import axios from "axios";

import type { ApiClientConfig } from "../../core/types/api.types";
import type { Interceptor } from "../../interceptors/interceptor.interface";
import { AxiosHttpClient } from "./axios-client";
import {
  addCorrelationId,
  parseResponseDates,
  serializeDates,
  stripUndefined,
} from "./axios-transformers";

export class AxiosInstanceFactory {
  /**
   * Build a fully configured {@link AxiosHttpClient}.
   *
   * The factory performs three tasks in order:
   * 1. `axios.create()` with the base config
   * 2. Apply request/response transformers
   * 3. Call `interceptor.register(instance)` for each provided interceptor
   *
   * @param config       - Top-level API client configuration.
   * @param interceptors - Ordered list of interceptors to apply. The auth
   *   interceptor should come first, followed by retry, cache, and logging.
   * @returns A ready-to-use {@link AxiosHttpClient} instance.
   */
  static create(
    config: ApiClientConfig,
    interceptors: Interceptor[] = [],
  ): AxiosHttpClient {
    const instance = axios.create(this.buildBaseConfig(config));

    this.applyTransformers(instance);

    // Register interceptors in insertion order.
    // Axios request interceptors execute in LIFO order, so inserting in
    // forward order means the last appended interceptor runs first on
    // outgoing requests. This is intentional: logging (appended last)
    // is registered first and therefore observes the FINAL resolved config.
    for (const interceptor of interceptors) {
      interceptor.register(instance);
    }

    return new AxiosHttpClient(instance);
  }

  // ─── Private helpers ──────────────────────────────────────────────────────

  /**
   * Derive a standard `AxiosRequestConfig` from {@link ApiClientConfig}.
   *
   * Sensible defaults are applied for any field not present in `config`:
   * - `Content-Type: application/json`
   * - `Accept: application/json`
   * - `timeout: 30_000` (30 seconds)
   * - `withCredentials: false`
   */
  private static buildBaseConfig(config: ApiClientConfig): AxiosRequestConfig {
    return {
      baseURL: config.baseURL,
      timeout: config.timeout ?? 30_000,
      withCredentials: config.withCredentials ?? false,
      headers: {
        // Library defaults (overridable by per-request headers)
        "Content-Type": "application/json",
        Accept: "application/json",
        // Consumer-supplied instance-level headers
        ...config.headers,
      },
    };
  }

  /**
   * Attach request and response transformers to the Axios instance.
   *
   * **Request transformers** (run before the request is sent):
   * 1. `stripUndefined`   – removes `undefined` values from the request body
   * 2. `serializeDates`   – converts `Date` objects to ISO-8601 strings
   * 3. `addCorrelationId` – injects a unique `X-Correlation-ID` header
   *
   * **Response transformers** (run after the response is received):
   * 1. `parseResponseDates` – converts ISO-8601 strings back to `Date` objects
   *
   * Transformers are prepended before Axios's built-in JSON serialiser /
   * deserialiser so the pipeline order is: our transformers → Axios defaults.
   *
   * @param instance - The newly created Axios instance to mutate.
   */
  private static applyTransformers(
    instance: ReturnType<typeof axios.create>,
  ): void {
    // The existing default transformers from Axios (JSON.stringify / JSON.parse)
    const defaultRequestTransformers = axios.defaults.transformRequest ?? [];
    const defaultResponseTransformers = axios.defaults.transformResponse ?? [];

    instance.defaults.transformRequest = [
      // Our pre-processors run FIRST to clean the data before Axios JSON-encodes it
      stripUndefined,
      serializeDates,
      // Then Axios's own JSON.stringify
      ...(Array.isArray(defaultRequestTransformers)
        ? defaultRequestTransformers
        : [defaultRequestTransformers]),
    ];

    instance.defaults.transformResponse = [
      // Axios's own JSON.parse runs FIRST to produce a JS object …
      ...(Array.isArray(defaultResponseTransformers)
        ? defaultResponseTransformers
        : [defaultResponseTransformers]),
      // … then we convert ISO strings back to Date objects
      parseResponseDates,
    ];

    // Interceptors (e.g. Correlation ID)
    instance.interceptors.request.use((config) => addCorrelationId(config));

    // Error normalization interceptor
    instance.interceptors.response.use(
      (response) => response,
      (error: unknown) => {
        const normalizedError = {
          message:
            (error as { response?: { data?: { message?: string } } }).response
              ?.data?.message ??
            (error as { message?: string }).message ??
            "An unexpected error occurred",
          status:
            (error as { response?: { status?: number } }).response?.status ??
            undefined,
          data:
            (error as { response?: { data?: unknown } }).response?.data ??
            undefined,
        };

        //alowed
        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
        return Promise.reject(normalizedError);
      },
    );
  }
}
