import type {
  DeleteRequestConfig,
  GetRequestConfig,
  PatchRequestConfig,
  PostRequestConfig,
  PutRequestConfig,
  RequestConfig,
} from "../../core/types/request.types";
import type { HttpResponse } from "../../core/types/response.types";
import type { HttpClient } from "../http-client.interface";

function serializeParams(params?: Record<string, unknown>): string {
  if (!params) return "";
  const qs = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      qs.append(
        key,
        typeof value === "object"
          ? JSON.stringify(value)
          : String(value as string | number | boolean),
      );
    }
  }
  const str = qs.toString();
  return str ? `?${str}` : "";
}

/**
 * FetchHttpClient – a native `fetch` implementation of HttpClient.
 *
 * Benefits over AxiosHttpClient:
 * - No extra dependency (fetch is available in modern Node/Edge/browser)
 * - Smaller bundle for edge runtimes (Vercel Edge, Cloudflare Workers)
 *
 * Limitations:
 * - Interceptor pipeline is not supported (interceptors are Axios-specific).
 *   Use token/headers directly through RequestConfig._options.
 * - Automatic JSON parse of errors is performed inline.
 */
export class FetchHttpClient implements HttpClient {
  constructor(
    private readonly baseURL: string,
    private readonly defaultHeaders: Record<string, string> = {},
    private readonly defaultTimeout = 30_000,
  ) {}

  async request<TResponse = unknown, TData = unknown>(
    config: RequestConfig<TData>,
  ): Promise<HttpResponse<TResponse>> {
    const url = this.buildUrl(config.url, config.params);

    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      config.timeout ?? this.defaultTimeout,
    );

    // Honour the caller's AbortSignal if provided
    if (config.signal) {
      config.signal.addEventListener("abort", () => controller.abort());
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...this.defaultHeaders,
      ...(config.headers ?? {}),
    };

    const body =
      config.data !== undefined ? JSON.stringify(config.data) : undefined;

    let fetchResponse: Response;
    try {
      fetchResponse = await fetch(url, {
        method: config.method,
        headers,
        body,
        credentials: config.withCredentials ? "include" : "same-origin",
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    const responseHeaders = this.extractHeaders(fetchResponse.headers);

    // Handle blob/arraybuffer response types
    if (config.responseType === "blob") {
      const blob = await fetchResponse.blob();
      return {
        data: blob as unknown as TResponse,
        status: fetchResponse.status,
        statusText: fetchResponse.statusText,
        headers: responseHeaders,
      };
    }

    if (config.responseType === "text") {
      const text = await fetchResponse.text();
      return {
        data: text as unknown as TResponse,
        status: fetchResponse.status,
        statusText: fetchResponse.statusText,
        headers: responseHeaders,
      };
    }

    if (config.responseType === "arraybuffer") {
      const buffer = await fetchResponse.arrayBuffer();
      return {
        data: buffer as unknown as TResponse,
        status: fetchResponse.status,
        statusText: fetchResponse.statusText,
        headers: responseHeaders,
      };
    }

    // Default: JSON
    let data: unknown;
    try {
      data = await fetchResponse.json();
    } catch {
      data = null;
    }

    if (!fetchResponse.ok) {
      const err = new Error(
        ((data ?? {}) as { message?: string }).message ??
          `HTTP Error ${fetchResponse.status}`,
      ) as Error & {
        response: {
          status: number;
          data: unknown;
          headers: Record<string, string>;
        };
        isAxiosError: false;
      };

      err.response = {
        status: fetchResponse.status,
        data,
        headers: responseHeaders,
      };

      // Mark as non-axios so ErrorFactory can still handle it
      err.isAxiosError = false;
      throw err;
    }

    return {
      data: data as TResponse,
      status: fetchResponse.status,
      statusText: fetchResponse.statusText,
      headers: responseHeaders,
    };
  }

  async get<TResponse = unknown>(
    url: string,
    config?: Omit<GetRequestConfig, "url" | "method">,
  ): Promise<HttpResponse<TResponse>> {
    return this.request<TResponse>({ method: "GET", url, ...config });
  }

  async post<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PostRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>> {
    return this.request<TResponse, TData>({
      method: "POST",
      url,
      data,
      ...config,
    });
  }

  async put<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PutRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>> {
    return this.request<TResponse, TData>({
      method: "PUT",
      url,
      data,
      ...config,
    });
  }

  async patch<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: Omit<PatchRequestConfig<TData>, "url" | "method" | "data">,
  ): Promise<HttpResponse<TResponse>> {
    return this.request<TResponse, TData>({
      method: "PATCH",
      url,
      data,
      ...config,
    });
  }

  async delete<TResponse = unknown>(
    url: string,
    config?: Omit<DeleteRequestConfig, "url" | "method">,
  ): Promise<HttpResponse<TResponse>> {
    return this.request<TResponse>({ method: "DELETE", url, ...config });
  }

  // ─── Helpers ─────────────────────────────────────────────────────────────────

  private buildUrl(path: string, params?: Record<string, unknown>): string {
    const base = this.baseURL.replace(/\/$/, "");
    const pathname = path.startsWith("/") ? path : `/${path}`;
    return `${base}${pathname}${serializeParams(params)}`;
  }

  private extractHeaders(headers: Headers): Record<string, string> {
    const result: Record<string, string> = {};
    headers.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }
}
