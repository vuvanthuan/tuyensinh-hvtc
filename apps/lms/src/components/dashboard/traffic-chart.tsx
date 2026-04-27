"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  cn,
} from "@acme/ui";

const detailedData = Array.from({ length: 60 }).map((_, i) => ({
  date: `${i}`,
  uv: Math.sin(i / 3) * 2000 + 4000 + Math.random() * 1000,
  pv: Math.cos(i / 4) * 1500 + 3000 + Math.random() * 800,
  label:
    i === 0
      ? "Jan"
      : i === 12
        ? "Feb"
        : i === 24
          ? "Mar"
          : i === 36
            ? "Apr"
            : i === 48
              ? "May"
              : i === 59
                ? "Jun"
                : "",
}));

const chartConfig = {
  uv: {
    label: "Visitors (Current)",
    color: "#f97316",
  },
  pv: {
    label: "Visitors (Previous)",
    color: "#14b8a6",
  },
};

export function TrafficChart({ className }: { className?: string }) {
  const [timeRange, setTimeRange] = React.useState("last3months");

  return (
    <Card className={cn("border-border shadow-none", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-base font-semibold">
            Total Visitors
          </CardTitle>
          <CardDescription className="text-muted-foreground font-normal">
            Total for the last 3 months
          </CardDescription>
        </div>
        <div className="bg-muted/50 border-border/40 flex items-center gap-1.5 rounded-md border p-1 shadow-sm">
          <button
            onClick={() => setTimeRange("last3months")}
            className={cn(
              "rounded-sm px-2.5 py-1 text-xs font-medium transition-colors",
              timeRange === "last3months"
                ? "bg-background text-foreground ring-border/20 shadow-sm ring-1"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Last 3 months
          </button>
          <button
            onClick={() => setTimeRange("last30days")}
            className={cn(
              "rounded-sm px-2.5 py-1 text-xs font-medium transition-colors",
              timeRange === "last30days"
                ? "bg-background text-foreground ring-border/20 shadow-sm ring-1"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Last 30 days
          </button>
          <button
            onClick={() => setTimeRange("last7days")}
            className={cn(
              "rounded-sm px-2.5 py-1 text-xs font-medium transition-colors",
              timeRange === "last7days"
                ? "bg-background text-foreground ring-border/20 shadow-sm ring-1"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Last 7 days
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <AreaChart
            data={detailedData}
            margin={{ left: -20, right: 0, top: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="fillUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              strokeOpacity={0.8}
              vertical={false}
            />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              tickMargin={12}
            />
            <ChartTooltip
              cursor={{ stroke: "hsl(var(--border))", strokeWidth: 1 }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="pv"
              type="monotone"
              fill="url(#fillPv)"
              stroke="#14b8a6"
              strokeWidth={2}
              dot={false}
            />
            <Area
              dataKey="uv"
              type="monotone"
              fill="url(#fillUv)"
              stroke="#f97316"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
