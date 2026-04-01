"use client";

import type * as LabelPrimitive from "@radix-ui/react-label";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@acme/ui";

import { Label } from "../../atoms/label";

/**
 * Trình bao bọc (Wrapper) ngoài cùng cho hệ thống Form, cung cấp context của `react-hook-form` cho toàn bộ các component con bên trong.
 * Dùng `useForm` của `react-hook-form` để truyền vào component này.
 *
 * @example
 * ```tsx
 * const form = useForm<z.infer<typeof formSchema>>({
 *   resolver: zodResolver(formSchema),
 *   defaultValues: { username: "" },
 * })
 *
 * return (
 *   <Form {...form}>
 *     <form onSubmit={form.handleSubmit(onSubmit)}>
 *       <FormField name="username" ... />
 *     </form>
 *   </Form>
 * )
 * ```
 */
const Form = FormProvider;

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

/**
 * Cầu nối giữa giao diện UI và state của `react-hook-form`.
 * Quản lý trạng thái, validation và onChange của các trường cụ thể thông qua context.
 * Render UI thông qua thuộc tính `render` sử dụng mẫu render-props (cung cấp { field, fieldState, formState }).
 *
 * @example
 * ```tsx
 * <FormField
 *   control={form.control}
 *   name="username"
 *   render={({ field }) => (
 *     <FormItem>
 *       <FormLabel>Tên người dùng</FormLabel>
 *       <FormControl>
 *         <Input placeholder="Nhập tên..." {...field} />
 *       </FormControl>
 *       <FormDescription>Đây là tên hiển thị công khai của bạn.</FormDescription>
 *       <FormMessage />
 *     </FormItem>
 *   )}
 * />
 * ```
 *
 * @param props Các thuộc tính của \`Controller\` từ react-hook-form. Bao gồm \`control\`, \`name\`, \`render\`, v.v.
 */
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

interface FormItemContextValue {
  id: string;
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

/**
 * Vùng chứa/nhóm (Container) một nhóm trường biểu mẫu.
 * Cung cấp một `FormItemContext` chưa ID duy nhất để đảm bảo kết nối Accessibility (aria-describedby, htmlFor) giữa Label, Input, và Message.
 * Bắt buộc các `FormLabel`, `FormControl`, `FormMessage` phải đặt nằm trong thành phần này.
 */
const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

interface FormLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  required?: boolean;
}

/**
 * Nhãn (Label) cho phần tử nhập liệu.
 * Đặc biệt có khả năng bắt trạng thái lỗi của trường hiện tại và tự động chuyển đổi sang màu text lỗi (màu đỏ).
 *
 * @param required - Bật thuộc tính này sẽ hiện thêm dấu hoa thị (`*`) bằng màu chỉ định lỗi kế bên tiêu đề, cho biết đây là trường bắt buộc.
 *
 * @example
 * ```tsx
 * <FormLabel required>Tên đăng nhập</FormLabel> // Hiển thị: Tên đăng nhập *
 * ```
 */
const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>(({ className, required, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    >
      {props.children}
      {required && <span className="text-destructive ml-1">*</span>}
    </Label>
  );
});
FormLabel.displayName = "FormLabel";

/**
 * Hoạt động như một Slot chuyển tiếp Props, bao bọc trực tiếp component nhập liệu (ví dụ: `<Input>`, `<Textarea>`, `<Select>`).
 * Tự động truyền các thuộc tính ARIA (`id`, `aria-describedby`, `aria-invalid`) từ `FormItem` vào phần tử con đầu tiên nhằm tích hợp hỗ trợ đọc màn hình và tự làm nổi bật state lỗi.
 *
 * @example
 * ```tsx
 * <FormControl>
 *   <Input placeholder="Nhập liệu ở đây" {...field} />
 * </FormControl>
 * ```
 */
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

/**
 * Văn bản mô tả phụ cho ô nhập liệu.
 * Văn bản này sẽ tự động gắn liên kết ID của mình vào thuộc tính \`aria-describedby\` của `FormControl` ở trên cho mục đích hỗ trợ accessibility.
 */
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

/**
 * Hiển thị thông báo khi có lỗi trích xuất từ schema qua kiểm tra nội bộ (validation).
 * Nhận nội dung trực tiếp nếu `children` tồn tại, bằng không nó sẽ tự động trích xuất chuỗi message từ biến lỗi của Form.
 *
 * @example
 * ```tsx
 * // Dùng tự động (Lấy lỗi do zod hoặc react-hook-form sinh ra)
 * <FormMessage />
 *
 * // Dùng thủ công (Tuỳ chọn gán báo lỗi cố định)
 * <FormMessage>Trường này có lỗi đặc trưng.</FormMessage>
 * ```
 */
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-destructive text-sm font-medium", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
