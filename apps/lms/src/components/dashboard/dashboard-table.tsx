import {
  CheckCircle2,
  CircleDashed,
  MoreHorizontal,
  Plus,
  Settings2,
} from "lucide-react";

import {
  Button,
  Checkbox,
  cn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@acme/ui";

const data = [
  {
    header: "Cover page",
    type: "Cover page",
    status: "In Process",
    target: 19,
    limit: 5,
    reviewer: "Eddie Lake",
  },
  {
    header: "Table of contents",
    type: "Table of contents",
    status: "Done",
    target: 29,
    limit: 24,
    reviewer: "Eddie Lake",
  },
  {
    header: "Executive summary",
    type: "Narrative",
    status: "Done",
    target: 11,
    limit: 13,
    reviewer: "Eddie Lake",
  },
  {
    header: "Technical approach",
    type: "Narrative",
    status: "Done",
    target: 27,
    limit: 23,
    reviewer: "Jamik Tashpulatov",
  },
  {
    header: "Design",
    type: "Narrative",
    status: "In Process",
    target: 2,
    limit: 16,
    reviewer: "Jamik Tashpulatov",
  },
  {
    header: "Capabilities",
    type: "Narrative",
    status: "In Process",
    target: 20,
    limit: 8,
    reviewer: "Jamik Tashpulatov",
  },
  {
    header: "Integration with existing systems",
    type: "Narrative",
    status: "In Process",
    target: 19,
    limit: 21,
    reviewer: "Jamik Tashpulatov",
  },
  {
    header: "Innovation and Advantages",
    type: "Narrative",
    status: "Done",
    target: 25,
    limit: 26,
    reviewer: "John Doe",
  },
  {
    header: "Overview of EMR's Innovative Solutions",
    type: "Technical content",
    status: "Done",
    target: 7,
    limit: 23,
    reviewer: "John Doe",
  },
  {
    header: "Advanced Algorithms and Machine Learning",
    type: "Narrative",
    status: "Done",
    target: 30,
    limit: 28,
    reviewer: "John Doe",
  },
];

export function DashboardTable({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <Tabs defaultValue="outline" className="w-[400px]">
          <TabsList className="border-border/40 h-auto w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="outline"
              className="data-[state=active]:border-foreground rounded-none border-b-2 border-transparent px-4 pt-2 pb-2.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Outline
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="data-[state=active]:border-foreground rounded-none border-b-2 border-transparent px-4 pt-2 pb-2.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Past Performance{" "}
              <span className="text-muted-foreground bg-muted ml-2 rounded-md px-1.5 py-0.5 text-[10px]">
                3
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="key"
              className="data-[state=active]:border-foreground rounded-none border-b-2 border-transparent px-4 pt-2 pb-2.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Key Personnel{" "}
              <span className="text-muted-foreground bg-muted ml-2 rounded-md px-1.5 py-0.5 text-[10px]">
                2
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="focus"
              className="data-[state=active]:border-foreground rounded-none border-b-2 border-transparent px-4 pt-2 pb-2.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Focus Documents
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-muted/20 flex h-8 flex-row gap-2 px-3 text-xs"
          >
            <Settings2 className="size-3.5" />
            Customize Columns
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-muted/20 flex h-8 flex-row gap-2 px-3 text-xs"
          >
            <Plus className="size-3.5" />
            Add Section
          </Button>
        </div>
      </div>

      <div className="border-border/60 bg-card overflow-hidden rounded-xl border shadow-sm">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[40px] pl-4">
                <Checkbox aria-label="Select all" />
              </TableHead>
              <TableHead className="text-foreground w-[280px] font-medium">
                Header
              </TableHead>
              <TableHead className="text-foreground font-medium">
                Section Type
              </TableHead>
              <TableHead className="text-foreground font-medium">
                Status
              </TableHead>
              <TableHead className="text-foreground font-medium">
                Target
              </TableHead>
              <TableHead className="text-foreground font-medium">
                Limit
              </TableHead>
              <TableHead className="text-foreground font-medium">
                Reviewer
              </TableHead>
              <TableHead className="w-[40px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i} className="group">
                <TableCell className="pl-4">
                  <Checkbox aria-label="Select row" id={`row-${i}`} />
                </TableCell>
                <TableCell className="text-sm font-medium">
                  {i === 6 ? (
                    <span className="cursor-pointer rounded bg-blue-500 px-1.5 py-0.5 text-white selection:bg-transparent">
                      {row.header}
                    </span>
                  ) : (
                    <label htmlFor={`row-${i}`} className="cursor-pointer">
                      {row.header}
                    </label>
                  )}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {row.type}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-sm">
                    {row.status === "Done" ? (
                      <CheckCircle2 className="text-muted-foreground size-3.5" />
                    ) : (
                      <CircleDashed className="text-muted-foreground size-3.5" />
                    )}
                    <span className="text-muted-foreground">{row.status}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {row.target}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {row.limit}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {row.reviewer}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 opacity-0 group-hover:opacity-100"
                  >
                    <MoreHorizontal className="size-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="border-border/40 bg-muted/10 flex items-center justify-between border-t px-4 py-3">
          <div className="text-muted-foreground flex items-center text-xs">
            0 of 68 row(s) selected.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-xs">
                Rows per page
              </span>
              <Button
                variant="outline"
                size="sm"
                className="h-7 w-[60px] justify-between px-2 text-xs"
              >
                10{" "}
                <span className="inline-block scale-x-75 rotate-90 opacity-50">
                  &gt;
                </span>
              </Button>
            </div>
            <div className="text-muted-foreground flex items-center gap-4 text-xs">
              <span>Page 1 of 15</span>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  disabled
                >
                  <span className="sr-only">Previous Page</span>
                  &lt;
                </Button>
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <span className="sr-only">Next Page</span>
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
