import Link from "next/link";
import { BarChart3Icon, PlusIcon, SettingsIcon, UsersIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, cn } from "@acme/ui";

const actions = [
  {
    label: "New Course",
    description: "Create a learning program",
    icon: PlusIcon,
    href: "/courses/new",
    className: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    label: "Analytics",
    description: "View performance data",
    icon: BarChart3Icon,
    href: "/analytics",
    className:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    label: "Team",
    description: "Manage collaborators",
    icon: UsersIcon,
    href: "/team",
    className:
      "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  },
  {
    label: "Settings",
    description: "Configure the platform",
    icon: SettingsIcon,
    href: "/settings",
    className:
      "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  },
];

export function QuickActions({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              className={cn(
                "group flex flex-col gap-2.5 rounded-lg border p-3.5 text-sm transition-colors",
                "hover:bg-accent",
              )}
            >
              <div
                className={cn(
                  "flex size-8 items-center justify-center rounded-md",
                  action.className,
                )}
              >
                <Icon className="size-4" />
              </div>
              <div>
                <p className="leading-none font-medium">{action.label}</p>
                <p className="text-muted-foreground mt-1 text-xs leading-snug">
                  {action.description}
                </p>
              </div>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
