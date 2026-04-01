import * as React from "react";

import { CoursesTable } from "~/features/courses/components/courses-table";

export default function CoursesPage() {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex flex-col gap-1 px-1">
        <h2 className="text-xl font-semibold tracking-tight">Courses</h2>
        <p className="text-sm text-muted-foreground">
          View and manage all your courses in one place.
        </p>
      </div>
      
      <CoursesTable />
    </div>
  );
}
