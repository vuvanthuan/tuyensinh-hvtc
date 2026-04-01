import { cn } from "../..";

/**
 * Use to show a placeholder while content is loading.
 *
 * @example
 * ```tsx
 * import { Skeleton } from "@acme/ui";
 *
 * export function Example() {
 *   return (
 *     <div className="flex items-center space-x-4">
 *       <Skeleton className="h-12 w-12 rounded-full" />
 *       <div className="space-y-2">
 *         <Skeleton className="h-4 w-[250px]" />
 *         <Skeleton className="h-4 w-[200px]" />
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-primary/10 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
