"use client";

import type * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@acme/ui";

/**
 * Visually or semantically separates content.
 *
 * @example
 * ```tsx
 * import { Separator } from "@acme/ui";
 *
 * export function Example() {
 *   return (
 *     <div>
 *       <div className="space-y-1">
 *         <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
 *         <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
 *       </div>
 *       <Separator className="my-4" />
 *       <div className="flex h-5 items-center space-x-4 text-sm">
 *         <div>Blog</div>
 *         <Separator orientation="vertical" />
 *         <div>Docs</div>
 *         <Separator orientation="vertical" />
 *         <div>Source</div>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
