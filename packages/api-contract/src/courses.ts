import { z } from "zod";

/**
 * Shared pagination and filtering query parameters
 */
export const PaginationParamsSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  sort: z.string().optional(),
  order: z.enum(["asc", "desc"]).optional(),
});

export type PaginationParams = z.infer<typeof PaginationParamsSchema>;

/**
 * Helper to create a paginated response schema
 */
export const createPaginatedResponseSchema = <T extends z.ZodTypeAny>(
  itemSchema: T,
) =>
  z.object({
    data: z.array(itemSchema),
    meta: z.object({
      totalItems: z.number(),
      currentPage: z.number(),
      pageSize: z.number(),
      totalPages: z.number(),
    }),
  });

/**
 * Course Schema definitions
 */
export const CourseSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  description: z.string().optional(),
  price: z.number().nonnegative(),
  instructor: z.string().min(1),
  category: z.string().min(1),
  status: z.enum(["draft", "published", "archived"]),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Course = z.infer<typeof CourseSchema>;

export const CourseQuerySchema = PaginationParamsSchema.extend({
  category: z.string().optional(),
  status: z.enum(["draft", "published", "archived"]).optional(),
});

export type CourseQuery = z.infer<typeof CourseQuerySchema>;

export const PaginatedCourseSchema = createPaginatedResponseSchema(CourseSchema);
export type PaginatedCourse = z.infer<typeof PaginatedCourseSchema>;
