import { CoursesTable } from "~/features/courses/components/courses-table";

export default function CoursesPage() {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex flex-col gap-1 px-1">
        <h2 className="text-xl font-semibold tracking-tight">Courses</h2>
        <p className="text-muted-foreground text-sm">
          View and manage all your courses in one place.
        </p>
      </div>

      <CoursesTable />
    </div>
  );
}
