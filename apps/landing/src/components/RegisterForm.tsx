"use client";

import type { CSSProperties } from "react";
import { useForm } from "@tanstack/react-form";
import { ChevronDown } from "lucide-react";

import type { EnrollmentLeadInput } from "@acme/validators";
import { enrollmentLeadSchema, enrollmentMajors } from "@acme/validators";

interface RegisterFormProps {
  accentColor?: string;
  accentHoverColor?: string;
  buttonLabel?: string;
}

const defaultValues: EnrollmentLeadInput = {
  fullName: "",
  phone: "",
  email: "",
  major: "Tài chính - Ngân hàng",
};

const getError = (errors: unknown[]) => {
  const first = errors[0];

  if (!first) return null;
  if (typeof first === "string") return first;
  if (typeof first === "object" && "message" in first) {
    return String(first.message);
  }

  return "Thông tin chưa hợp lệ";
};

const fieldClassName =
  "box-border h-12 min-h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-[14px] text-[15px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[var(--form-accent)] focus:bg-white focus:ring-2 focus:ring-[var(--form-accent-ring)]";

export function RegisterForm({
  accentColor = "#1a5c3a",
  accentHoverColor = "#2e8b57",
  buttonLabel = "Đăng ký ngay",
}: RegisterFormProps) {
  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: enrollmentLeadSchema,
    },
    onSubmit: ({ value }) => {
      console.log("TODO: wire to tRPC mutation", value);
    },
  });

  return (
    <div
      style={
        {
          "--form-accent": accentColor,
          "--form-accent-hover": accentHoverColor,
          "--form-accent-ring": `${accentColor}26`,
          "--form-accent-shadow": `${accentColor}33`,
        } as CSSProperties
      }
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          void form.handleSubmit();
        }
      }}
    >
      <form.Field name="fullName">
        {(field) => {
          const error = getError(field.state.meta.errors);

          return (
            <label className="mb-4 block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">
                Họ và Tên *
              </span>
              <input
                className={fieldClassName}
                name={field.name}
                value={field.state.value}
                placeholder="Nhập họ và tên"
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              {error ? (
                <span className="mt-1 block text-xs text-red-600">{error}</span>
              ) : null}
            </label>
          );
        }}
      </form.Field>

      <form.Field name="phone">
        {(field) => {
          const error = getError(field.state.meta.errors);

          return (
            <label className="mb-4 block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">
                Số điện thoại *
              </span>
              <input
                className={fieldClassName}
                name={field.name}
                type="tel"
                value={field.state.value}
                placeholder="Nhập số điện thoại"
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              {error ? (
                <span className="mt-1 block text-xs text-red-600">{error}</span>
              ) : null}
            </label>
          );
        }}
      </form.Field>

      <form.Field name="email">
        {(field) => {
          const error = getError(field.state.meta.errors);

          return (
            <label className="mb-4 block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">
                Email
              </span>
              <input
                className={fieldClassName}
                name={field.name}
                type="email"
                value={field.state.value ?? ""}
                placeholder="Email nhận tư vấn"
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              {error ? (
                <span className="mt-1 block text-xs text-red-600">{error}</span>
              ) : null}
            </label>
          );
        }}
      </form.Field>

      <form.Field name="major">
        {(field) => (
          <label className="mb-4 block">
            <span className="mb-1 block text-sm font-semibold text-gray-700">
              Ngành học
            </span>
            <div className="relative">
              <select
                className={`${fieldClassName} appearance-none pr-10`}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) =>
                  field.handleChange(
                    event.target.value as EnrollmentLeadInput["major"],
                  )
                }
              >
                {enrollmentMajors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-[14px] h-4 w-4 -translate-y-1/2 text-gray-700"
                strokeWidth={2.5}
              />
            </div>
          </label>
        )}
      </form.Field>

      <button
        className="mt-2 box-border h-[52px] min-h-[52px] w-full rounded-lg bg-[var(--form-accent)] px-4 text-[15px] font-semibold tracking-[0.5px] text-white uppercase shadow-[var(--form-accent-shadow)] shadow-md transition hover:bg-[var(--form-accent-hover)] focus:ring-2 focus:ring-[#F5A623] focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
        type="button"
        onClick={() => void form.handleSubmit()}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
