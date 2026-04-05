import type * as React from "react";

import { cn } from "@acme/ui";

/**
 * A multi-line text input control.
 *
 * @example
 * ```tsx
 * import { Textarea, Label } from "@acme/ui";
 *
 * export function Example() {
 *   return (
 *     <div className="grid w-full gap-1.5">
 *       <Label htmlFor="message">Your message</Label>
 *       <Textarea placeholder="Type your message here." id="message" />
 *     </div>
 *   );
 * }
 * ```
 */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
