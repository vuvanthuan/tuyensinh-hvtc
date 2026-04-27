"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <header className="border-border/40 bg-background flex h-[60px] shrink-0 items-center justify-between border-b px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="hover:bg-muted -ml-2 flex aspect-square size-8 items-center justify-center rounded-md" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm font-semibold">
                {pageLabel}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hidden h-8 gap-1.5 px-3 text-xs font-medium md:flex"
          asChild
        >
          <Link href="https://github.com" target="_blank">
            <span>GitHub</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
