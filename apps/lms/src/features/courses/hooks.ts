import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type { Course, CourseQuery } from "@acme/api-contract";

import { coursesApi } from "./api";

export const COURSES_QUERY_KEY = ["courses"] as const;

/**
 * Hook to fetch paginated courses with filtering
 */
export const useCourses = (query?: CourseQuery) => {
  return useQuery({
    queryKey: [...COURSES_QUERY_KEY, query],
    queryFn: () => coursesApi.getAll(query),
    staleTime: 5000,
  });
};

/**
 * Hook to fetch a single course
 */
export const useCourse = (id: string, enabled = true) => {
  return useQuery({
    queryKey: [...COURSES_QUERY_KEY, id],
    queryFn: () => coursesApi.getById(id),
    enabled: !!id && enabled,
  });
};

/**
 * Hook to create a new course
 */
export const useCreateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: coursesApi.create,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: COURSES_QUERY_KEY,
      });
    },
  });
};

/**
 * Hook to update an existing course
 */
export const useUpdateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Course> }) =>
      coursesApi.update(id, data),

    onSuccess: async (_, { id }) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: COURSES_QUERY_KEY }),
        queryClient.invalidateQueries({
          queryKey: [...COURSES_QUERY_KEY, id],
        }),
      ]);
    },
  });
};

/**
 * Hook to delete a course
 */
export const useDeleteCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: coursesApi.delete,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: COURSES_QUERY_KEY,
      });
    },
  });
};
