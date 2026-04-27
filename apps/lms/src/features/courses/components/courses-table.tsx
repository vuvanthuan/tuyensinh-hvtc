"use client";

import {
  DataTable,
  DataTableSkeleton,
  DataTableToolbar,
  useDataTable,
} from "@acme/ui/table";

import { useCourses } from "../hooks";
import { columns } from "./columns";

/**
 * A feature-rich table for managing courses.
 * Integrated with TanStack Query for data fetching and nuqs for URL state sync.
 */
export function CoursesTable() {
  // 1. Fetch data using our custom hook
  // We'll let useDataTable handle the query params via URL sync
  const { data, isLoading, isError, error } = useCourses();

  // 2. Initialize the table logic
  const { table } = useDataTable({
    data: data?.data ?? [],
    columns,
    pageCount: data?.meta.totalPages ?? 0,
    initialState: {
      columnPinning: { right: ["actions"] },
    },
    getRowId: (row) => row.id,
    shallow: false,
  });

  // 3. Handle loading state
  if (isLoading) {
    return (
      <DataTableSkeleton
        columnCount={columns.length}
        filterCount={3}
        cellWidths={[
          "40px",
          "250px",
          "120px",
          "150px",
          "100px",
          "80px",
          "120px",
        ]}
        shrinkZero
      />
    );
  }

  // 4. Handle error state
  if (isError) {
    return (
      <div className="border-destructive bg-destructive/10 text-destructive flex h-48 items-center justify-center rounded-md border p-6">
        <div className="text-center">
          <p className="text-lg font-semibold">Failed to Load Courses</p>
          <p className="mt-1 text-sm opacity-90">
            {typeof error === "string"
              ? error
              : // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                (error as unknown as { message?: string }).message ||
                JSON.stringify(error) ||
                "An unexpected error occurred while fetching course data."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table} />
    </DataTable>
  );
}
