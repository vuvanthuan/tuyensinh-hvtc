import { TrendingDown, TrendingUp } from "lucide-react";

import { Card, CardContent, cn } from "@acme/ui";

interface StatCardProps {
  title: string;
  value: string;
  trend: {
    percentage: string;
    description: string;
    subDescription: string;
    isUp: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, trend, className }: StatCardProps) {
  return (
    <Card className={cn("border-border shadow-none", className)}>
      <CardContent className="flex flex-col gap-4 p-5">
        {/* Header row: Title and Percentage */}
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground/80 text-sm font-medium">
            {title}
          </span>
          <span
            className={cn(
              "flex items-center gap-0.5 text-xs font-semibold",
              trend.isUp ? "text-foreground" : "text-foreground",
              /* The screenshot just shows standard text color for the percentage, with perhaps a very faint background or just naked text (+12.5% and a tiny arrow) */
            )}
          >
            {trend.percentage}
            {trend.isUp ? (
              <TrendingUp className="size-3.5 text-emerald-500" />
            ) : (
              <TrendingDown className="size-3.5 text-rose-500" />
            )}
          </span>
        </div>

        {/* Value */}
        <div>
          <span className="text-foreground text-3xl font-bold tracking-tight">
            {value}
          </span>
        </div>

        {/* Footer row: Descriptions */}
        <div className="mt-1 flex flex-col gap-0.5">
          <span className="text-foreground flex items-center gap-1.5 text-xs font-medium">
            {trend.description}
            {trend.isUp ? (
              <TrendingUp className="text-muted-foreground size-3" />
            ) : (
              <TrendingDown className="text-muted-foreground size-3" />
            )}
          </span>
          <span className="text-muted-foreground text-xs">
            {trend.subDescription}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
