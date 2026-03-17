import type { Interceptor } from "@/interceptors/interceptor.interface";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";

import type { ApiClientConfig } from "../../core/types/api.types";
import { AxiosHttpClient } from "./axios-client";

export class AxiosInstanceFactory {
  static create(
    config: ApiClientConfig,
    interceptors: Interceptor[] = [],
  ): AxiosHttpClient {
    const axiosConfig: AxiosRequestConfig = {
      baseURL: config.baseURL,
      timeout: config.timeout,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...config.headers,
      },
      withCredentials: config.withCredentials,
    };

    const instance = axios.create(axiosConfig);

    interceptors.forEach((interceptor) => {
      interceptor.register(instance);
    });

    return new AxiosHttpClient(instance);
  }
}
