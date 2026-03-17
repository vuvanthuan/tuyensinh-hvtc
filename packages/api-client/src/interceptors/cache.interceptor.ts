import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";

import type { CacheStorage } from "../cache/cache-storage.interface";
import type { Interceptor } from "./interceptor.interface";

interface CacheConfig {
  enabled: boolean;
  defaultTTL: number;
}

interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _options?: {
    skipCache?: boolean;
    cacheTTL?: number;
  };
  _cacheKey?: string;
  _cacheTTL?: number;
  _cachedResponse?: AxiosResponse;
}

export class CacheInterceptor implements Interceptor {
  constructor(
    private cache: CacheStorage,
    private config: CacheConfig,
  ) {}

  register(instance: AxiosInstance): void {
    instance.interceptors.request.use(
      this.handleRequest.bind(this),
      (error: unknown) => Promise.reject(error),
    );

    instance.interceptors.response.use(
      this.handleResponse.bind(this),
      (error: unknown) => Promise.reject(error),
    );
  }

  private handleRequest(
    config: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig {
    const extendedConfig = config as ExtendedAxiosRequestConfig;
    const options = extendedConfig._options;

    if (!this.config.enabled || options?.skipCache) {
      return config;
    }

    // Only cache GET requests
    if (config.method?.toUpperCase() !== "GET") {
      return config;
    }

    const cacheKey = this.generateCacheKey(config);
    const cachedResponse = this.cache.get<AxiosResponse>(cacheKey);

    if (cachedResponse) {
      // Store cached response in config for response interceptor
      extendedConfig._cachedResponse = cachedResponse;

      // Create a cancel token to abort the request
      const source = axios.CancelToken.source();
      config.cancelToken = source.token;
      source.cancel("CACHE_HIT");
    } else {
      // Store cache key for response interceptor
      extendedConfig._cacheKey = cacheKey;
      extendedConfig._cacheTTL = options?.cacheTTL ?? this.config.defaultTTL;
    }

    return config;
  }

  private handleResponse(response: AxiosResponse): AxiosResponse {
    const config = response.config as ExtendedAxiosRequestConfig;

    if (config._cacheKey && config._cacheTTL) {
      this.cache.set(config._cacheKey, response, config._cacheTTL);
    }

    return response;
  }

  private generateCacheKey(config: InternalAxiosRequestConfig): string {
    const { url, method, params, data } = config;
    return `${method}:${url}:${JSON.stringify(params)}:${JSON.stringify(data)}`;
  }
}
