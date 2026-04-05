"use client";

import type * as React from "react";
import Link from "next/link";
import {
  BarChart,
  ChevronsUpDown,
  Command,
  FileText,
  FolderOpen,
  HelpCircle,
  LayoutDashboard,
  LifeBuoy,
  MoreHorizontal,
  PenTool,
  PieChart,
  PlusCircle,
  Search,
  Settings,
  Users,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  cn,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@acme/ui";

const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  { title: "Lifecycle", url: "#", icon: LifeBuoy },
  { title: "Analytics", url: "/analytics", icon: BarChart },
  { title: "Projects", url: "#", icon: FolderOpen },
  { title: "Team", url: "#", icon: Users },
];

const documents = [
  { title: "Data Library", url: "#", icon: PieChart },
  { title: "Reports", url: "#", icon: FileText },
  { title: "Word Assistant", url: "#", icon: PenTool },
];

export function AppSidebar() {
  return (
    <Sidebar
      variant="sidebar"
      collapsible="none"
      className="border-border/40 bg-primary-50 h-screen border-r pl-2 text-amber-200"
    >
      <SidebarHeader className="pt-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="hover:bg-primary-50 max-h-svh justify-start rounded-lg px-2 py-5"
                >
                  <div className="bg-primary-200 text-primary-600 flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                  </div>
                  <div className="flex flex-col gap-1 leading-none">
                    <span className="text-primary-900 text-sm font-semibold">
                      Acme Inc
                    </span>
                    <span className="text-muted-foreground text-xs">
                      Enterprise
                    </span>
                  </div>
                  <ChevronsUpDown className="text-muted-foreground ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="mb-4">
                <SidebarMenuButton className="bg-background border-primary-50 text-foreground hover:bg-primary-50 h-10 w-full gap-2 rounded-[8px] border px-3 font-medium shadow-sm">
                  <PlusCircle className="text-muted-foreground mr-1 size-4" />
                  Quick Create
                </SidebarMenuButton>
              </SidebarMenuItem>
              {navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className={cn(
                      "h-9 rounded-md",
                      item.isActive
                        ? "bg-sidebar-accent text-sidebar-foreground font-medium"
                        : "text-muted-foreground hover:bg-sidebar-accent hover:text-primary-50",
                    )}
                  >
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="size-4 shrink-0" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-muted-foreground text-xs font-semibold tracking-wider">
            DOCUMENTS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {documents.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="text-muted-foreground hover:bg-sidebar-accent hover:text-primary-50 h-9 gap-3 rounded-md">
                    <item.icon className="size-4 shrink-0" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-muted-foreground hover:bg-sidebar-accent hover:text-foreground h-9 gap-3 rounded-md">
                  <MoreHorizontal className="size-4 shrink-0" />
                  <span>More</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-2 pb-4">
        <SidebarMenu className="gap-1.5 pl-2">
          <SidebarMenuItem>
            <SidebarMenuButton className="text-muted-foreground hover:bg-sidebar-accent hover:text-primary-50 h-9 gap-3 rounded-md">
              <Settings className="size-4 shrink-0" />
              <span>Settings</span>
              <ChevronRight className="ml-auto size-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-muted-foreground hover:bg-sidebar-accent hover:text-primary-50 h-9 gap-3 rounded-md">
              <HelpCircle className="size-4 shrink-0" />
              <span>Get Help</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-muted-foreground hover:bg-sidebar-accent hover:text-primary-50 h-9 gap-3 rounded-md">
              <Search className="size-4 shrink-0" />
              <span>Search</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem className="mt-4">
            <SidebarMenuButton
              size="lg"
              className="hover:bg-sidebar-accent rounded-xl px-2 py-6"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="text-sm font-semibold">shadcn</span>
                <span className="text-muted-foreground text-xs">
                  m@example.com
                </span>
              </div>
              <ChevronsUpDown className="text-muted-foreground ml-auto size-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

// ChevronRight is needed in the footer Settings
function ChevronRight(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
