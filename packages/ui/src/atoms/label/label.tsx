import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { cn } from "../../index";

const labelVariants = cva(
  "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

/**
 * Renders an accessible label associated with controls.
 *
 * @example
 * ```tsx
 * import { Label, Checkbox } from "@acme/ui";
 *
 * export function Example() {
 *   return (
 *     <div className="flex items-center space-x-2">
 *       <Checkbox id="terms" />
 *       <Label htmlFor="terms">Accept terms and conditions</Label>
 *     </div>
 *   );
 * }
 * ```
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
