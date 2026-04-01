import { ApiClient } from "@acme/api-client";
import { setupMocks } from "@acme/api-mock";

export const api = new ApiClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
});

// Initialize mocks in development
// Force mock to true for demo purposes if not explicitly disabled
const enableMock =
  process.env.NEXT_PUBLIC_ENABLE_MOCK === "true" ||
  process.env.NODE_ENV === "development";

if (enableMock) {
  setupMocks(api.instance, {
    scenario: (process.env.NEXT_PUBLIC_MOCK_SCENARIO as any) || "success",
  });
}
