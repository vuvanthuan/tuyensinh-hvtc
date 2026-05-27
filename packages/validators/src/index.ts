import { z } from "zod/v4";

export const enrollmentMajors = [
  "Tài chính - Ngân hàng",
  "Kế toán",
  "Quản trị kinh doanh",
  "Marketing",
] as const;

export const enrollmentLeadSchema = z.object({
  fullName: z.string().trim().min(2, "Vui lòng nhập họ và tên"),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => value.replace(/\D/g, "").length >= 10,
      "Số điện thoại cần tối thiểu 10 chữ số",
    ),
  email: z
    .string()
    .trim()
    .refine(
      (value) =>
        value.length === 0 || z.string().email().safeParse(value).success,
      "Email không hợp lệ",
    )
    .optional(),
  major: z.enum(enrollmentMajors),
});

export type EnrollmentLeadInput = z.infer<typeof enrollmentLeadSchema>;
