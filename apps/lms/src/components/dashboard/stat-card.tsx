import * as React from "react";
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

export function StatCard({
  title,
  value,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("shadow-none border-border", className)}>
      <CardContent className="p-5 flex flex-col gap-4">
        {/* Header row: Title and Percentage */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground/80">
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
          <span className="text-3xl font-bold tracking-tight text-foreground">
            {value}
          </span>
        </div>

        {/* Footer row: Descriptions */}
        <div className="flex flex-col gap-0.5 mt-1">
          <span className="text-xs font-medium text-foreground flex items-center gap-1.5">
            {trend.description}
            {trend.isUp ? (
              <TrendingUp className="size-3 text-muted-foreground" />
            ) : (
              <TrendingDown className="size-3 text-muted-foreground" />
            )}
          </span>
          <span className="text-xs text-muted-foreground">
            {trend.subDescription}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
