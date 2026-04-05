"use client";

import type * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "../..";

/**
 * A control that allows the user to toggle between checked and not checked.
 *
 * @example
 * ```tsx
 * import { Switch, Label } from "@acme/ui";
 *
 * export function Example() {
 *   return (
 *     <div className="flex items-center space-x-2">
 *       <Switch id="airplane-mode" />
 *       <Label htmlFor="airplane-mode">Airplane Mode</Label>
 *     </div>
 *   );
 * }
 * ```
 */
function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
