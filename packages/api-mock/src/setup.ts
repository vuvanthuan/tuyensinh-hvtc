import type { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

import { setupCourseHandlers } from "./handlers/courses";

export type MockScenario = "success" | "empty" | "error" | "slow";

export interface MockOptions {
  delay?: number;
  scenario?: MockScenario;
}

export function setupMocks(
  axiosInstance: AxiosInstance,
  options: MockOptions = {},
) {
  const { delay = 0, scenario = "success" } = options;

  const mock = new MockAdapter(axiosInstance, {
    delayResponse: scenario === "slow" ? 2000 : delay,
  });

  console.log(`[Mock] Initializing with scenario: ${scenario}`);

  // Register handlers
  setupCourseHandlers(mock, scenario);

  return mock;
}
