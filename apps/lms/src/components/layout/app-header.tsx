"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CornerUpRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  Button,
  Separator,
  SidebarTrigger,
} from "@acme/ui";

const routeLabels: Record<string, string> = {
  "/": "Documents",
  "/dashboard": "Documents",
};

export function AppHeader() {
  const pathname = usePathname();
  const pageLabel = routeLabels[pathname] ?? "Page";

  return (
    <header className="flex h-[60px] shrink-0 items-center justify-between border-b border-border/40 bg-background px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-2 flex aspect-square size-8 items-center justify-center rounded-md hover:bg-muted" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-sm">{pageLabel}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="hidden h-8 gap-1.5 px-3 text-xs font-medium text-muted-foreground hover:text-foreground md:flex" asChild>
          <Link href="https://github.com" target="_blank">
            <span>GitHub</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
