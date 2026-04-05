import type MockAdapter from "axios-mock-adapter";

import { Course, CourseSchema, PaginatedCourse } from "@acme/api-contract";

import { MockScenario } from "../setup";

const MOCK_COURSES: Course[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Introduction to React",
    description: "Learn the fundamentals of React with hands-on projects.",
    price: 49.99,
    instructor: "John Doe",
    category: "Development",
    status: "published",
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    title: "Advanced TypeScript",
    description: "Master type safety and advanced TS patterns.",
    price: 79.99,
    instructor: "Jane Smith",
    category: "Development",
    status: "published",
    createdAt: "2024-01-05T12:00:00Z",
    updatedAt: "2024-01-05T12:00:00Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    title: "UI/UX Design Masterclass",
    description: "Build beautiful and functional user interfaces.",
    price: 59.99,
    instructor: "Alice Johnson",
    category: "Design",
    status: "published",
    createdAt: "2024-02-10T09:00:00Z",
    updatedAt: "2024-02-10T09:00:00Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    title: "Node.js Backend Mastery",
    description: "Build scalable and performant backend services.",
    price: 89.99,
    instructor: "Bob Wilson",
    category: "Development",
    status: "draft",
    createdAt: "2024-03-15T14:00:00Z",
    updatedAt: "2024-03-15T14:00:00Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    title: "Cloud Architecture Foundations",
    description: "Understand the core principles of cloud computing.",
    price: 129.99,
    instructor: "Charlie Brown",
    category: "Infrastructure",
    status: "published",
    createdAt: "2024-04-20T11:00:00Z",
    updatedAt: "2024-04-20T11:00:00Z",
  },
];

export function setupCourseHandlers(mock: MockAdapter, scenario: MockScenario) {
  // Handle scenarios
  if (scenario === "error") {
    mock.onGet(/\/courses.*/).reply(500, {
      message: "Internal Server Error from Mock",
    });
    return;
  }

  if (scenario === "empty") {
    mock.onGet(/\/courses.*/).reply(200, {
      data: [],
      meta: {
        totalItems: 0,
        currentPage: 1,
        pageSize: 10,
        totalPages: 0,
      },
    });
    return;
  }

  // Success handler with basic search/pagination
  mock.onGet(/\/courses.*/).reply((config) => {
    const params = config.params || {};
    const page = Number(params.page) || 1;
    const limit = Number(params.limit) || 10;
    const search = params.search?.toLowerCase() || "";

    let filtered = [...MOCK_COURSES];

    if (search) {
      filtered = filtered.filter(
        (c) =>
          c.title.toLowerCase().includes(search) ||
          c.description?.toLowerCase().includes(search),
      );
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = filtered.slice(start, end);

    const response: PaginatedCourse = {
      data: paginated,
      meta: {
        totalItems: filtered.length,
        currentPage: page,
        pageSize: limit,
        totalPages: Math.ceil(filtered.length / limit),
      },
    };

    return [200, response];
  });

  // Get single course
  mock.onGet(/\/courses\/[a-z0-9-]+/).reply((config) => {
    const id = config.url?.split("/").pop();
    const course = MOCK_COURSES.find((c) => c.id === id);

    if (!course) {
      return [404, { message: "Course not found" }];
    }

    return [200, course];
  });
}
