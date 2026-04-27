"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { CheckCircle2, CircleDashed, FileText, Tag } from "lucide-react";

import type { Course } from "@acme/api-contract";
import { Checkbox } from "@acme/ui";
import { DataTableColumnHeader } from "@acme/ui/table";

export const columns: ColumnDef<Course>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="align-left translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("title")}</div>
    ),
    meta: {
      label: "Title",
      variant: "text",
      placeholder: "Search by title...",
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const category = row.getValue("category");
      return (
        <div className="text-muted-foreground flex items-center">
          <Tag className="mr-2 size-3.5" />
          <span>{String(category)}</span>
        </div>
      );
    },
    meta: {
      label: "Category",
      variant: "multiSelect",
      options: [
        { label: "Development", value: "Development" },
        { label: "Design", value: "Design" },
        { label: "Infrastructure", value: "Infrastructure" },
      ],
    },
  },
  {
    accessorKey: "instructor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Instructor" />
    ),
    cell: ({ row }) => (
      <div className="text-muted-foreground">{row.getValue("instructor")}</div>
    ),
    meta: {
      label: "Instructor",
      variant: "text",
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status");

      if (status === "published") {
        return (
          <div className="text-muted-foreground flex items-center">
            <CheckCircle2 className="mr-2 size-4 text-emerald-500" />
            <span className="font-medium">Published</span>
          </div>
        );
      }
      if (status === "draft") {
        return (
          <div className="text-muted-foreground flex items-center">
            <CircleDashed className="mr-2 size-4" />
            <span className="font-medium">Draft</span>
          </div>
        );
      }
      return (
        <div className="text-muted-foreground flex items-center">
          <FileText className="mr-2 size-4" />
          <span className="font-medium capitalize">{String(status)}</span>
        </div>
      );
    },
    meta: {
      label: "Status",
      variant: "multiSelect",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
        { label: "Archived", value: "archived" },
      ],
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <div className="font-medium">{formatted}</div>;
    },
    meta: {
      label: "Price",
      variant: "range",
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const date = String(row.getValue("createdAt"));
      return (
        <div className="text-muted-foreground">
          {format(new Date(date), "MMM d, yyyy")}
        </div>
      );
    },
    meta: {
      label: "Created At",
      variant: "dateRange",
    },
  },
];
