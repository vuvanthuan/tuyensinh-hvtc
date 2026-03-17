import type { AxiosInstance } from "axios";

export interface Interceptor {
  register(instance: AxiosInstance): void;
}
