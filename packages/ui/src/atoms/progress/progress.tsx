"use client";

import type * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "../..";

/**
 * Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 *
 * @example
 * ```tsx
 * import { Progress } from "@acme/ui";
 *
 * export function Example() {
 *   return <Progress value={33} className="w-[60%]" />;
 * }
 * ```
 */
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
