"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "../../index";

/**
 * A control that allows the user to toggle between checked and not checked.
 * Built on top of `\@radix-ui/react-checkbox`.
 *
 * @example
 * ```tsx
 * import { Checkbox } from "@acme/ui";
 *
 * export function Example() {
 *   return (
 *     <div className="items-top flex space-x-2">
 *       <Checkbox id="terms1" />
 *       <div className="grid gap-1.5 leading-none">
 *         <label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
 *           Accept terms and conditions
 *         </label>
 *         <p className="text-sm text-muted-foreground">
 *           You agree to our Terms of Service and Privacy Policy.
 *         </p>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer border-primary focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4 shrink-0 rounded-sm border shadow focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
