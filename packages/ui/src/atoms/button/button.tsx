import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../../index";
import { buttonVariants } from "./helper";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * A highly customizable Button component that supports various sizes, variants, and polymorphism (`asChild`).
 *
 * @example
 * ```tsx
 * import { Button } from "@acme/ui";
 *
 * export function Example() {
 *   return (
 *     <div className="flex gap-4">
 *       <Button variant="default" size="default">Standard</Button>
 *       <Button variant="outline" size="sm">Small Outline</Button>
 *       <Button variant="ghost" asChild>
 *         <a href="/login">Link as Button</a>
 *       </Button>
 *     </div>
 *   );
 * }
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
