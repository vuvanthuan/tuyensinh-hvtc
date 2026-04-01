"use client";

import type { FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";

import {
  Checkbox,
  cn,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@acme/ui";

interface BaseFieldProps {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

interface TextFieldProps extends BaseFieldProps {
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
}

const TextField = ({
  name,
  label,
  placeholder,
  type = "text",
  required,
  className,
}: TextFieldProps) => {
  const { control } = useFormContext<FieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel required={required}>{label}</FormLabel>}
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const TextAreaField = ({
  name,
  label,
  placeholder,
  required,
  className,
}: BaseFieldProps) => {
  const { control } = useFormContext<FieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel required={required}>{label}</FormLabel>}
          <FormControl>
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const CheckboxField = ({
  name,
  label,
  description,
  required,
  className,
}: BaseFieldProps) => {
  const { control } = useFormContext<FieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(
            "flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4 shadow",
            className,
          )}
        >
          <FormControl>
            <Checkbox
              checked={field.value as boolean}
              onCheckedChange={field.onChange}
              required={required}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            {label && <FormLabel>{label}</FormLabel>}
            {description && (
              <p className="text-muted-foreground text-sm">{description}</p>
            )}
          </div>
        </FormItem>
      )}
    />
  );
};

export { TextField, TextAreaField, CheckboxField };
