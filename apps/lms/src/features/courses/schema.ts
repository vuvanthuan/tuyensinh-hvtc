import type { z } from "zod";

import { CourseQuerySchema, CourseSchema } from "@acme/api-contract";

export const CourseFeatureSchema = CourseSchema.extend({
  // Add any feature-specific UI fields here
});

export type CourseFeature = z.infer<typeof CourseFeatureSchema>;

export const CourseFeatureQuerySchema = CourseQuerySchema;
export type CourseFeatureQuery = z.infer<typeof CourseFeatureQuerySchema>;
