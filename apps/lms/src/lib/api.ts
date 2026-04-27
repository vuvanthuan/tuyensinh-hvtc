import type { AxiosInstance } from "axios";

import { ApiClient } from "@acme/api-client";
import { setupMocks } from "@acme/api-mock";

import { env } from "~/env";

type MockScenario = "success" | "error" | "empty";

export const api = new ApiClient({
  baseURL: env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api",
});

const enableMock =
  env.NEXT_PUBLIC_ENABLE_MOCK === "true" || env.NODE_ENV === "development";

if (enableMock) {
  setupMocks(api.instance as AxiosInstance, {
    scenario: env.NEXT_PUBLIC_MOCK_SCENARIO as MockScenario,
  });
}
