import type { Course, CourseQuery } from "@acme/api-contract";

import { api } from "../../lib/api";

export const coursesApi = {
  /**
   * Fetch paginated courses with optional filters
   */
  getAll: async (query?: CourseQuery) => {
    const response = await api.getWithMeta<Course[]>("/courses", query);
    return {
      data: response.data,
      meta: response.metaData,
    };
  },

  /**
   * Fetch a single course by ID
   */
  getById: async (id: string) => {
    const response = await api.get<Course>(`/courses/${id}`);
    return response.data;
  },

  /**
   * Create a new course
   */
  create: async (data: Partial<Course>) => {
    const response = await api.post<Course>("/courses", data);
    return response.data;
  },

  /**
   * Update an existing course
   */
  update: async (id: string, data: Partial<Course>) => {
    const response = await api.patch<Course>(`/courses/${id}`, data);
    return response.data;
  },

  /**
   * Delete a course
   */
  delete: async (id: string) => {
    await api.delete(`/courses/${id}`);
  },
};
