import type { Table as TanstackTable } from "@tanstack/react-table";
import type * as React from "react";
import { flexRender } from "@tanstack/react-table";

import {
  cn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@acme/ui";

import { getCommonPinningStyles } from "../lib/data-table";
import { DataTablePagination } from "./data-table-pagination";

/**
 * Giao diện cấu hình (Props) cho component DataTable.
 * Kế thừa các thuộc tính chuẩn của thẻ `div`.
 *
 * @template TData - Kiểu dữ liệu của một bản ghi (record) hiển thị trên mỗi dòng.
 * @property {TanstackTable<TData>} table - Đối tượng instance của bảng được khởi tạo thông qua hook `useReactTable` từ `@tanstack/react-table`. Đối tượng này tự động quản lý các dòng, cột, phân trang, bộ lọc.
 * @property {React.ReactNode} [actionBar] - Giao diện thanh công cụ hành động (Action Bar) xuất hiện ở dưới. Thanh này chỉ hiện ra khi có ít nhất một dòng trong bảng đang được tích chọn (selected). Thường dùng cho các hành động Bulk Delete/Bulk Edit.
 */
interface DataTableProps<TData> extends React.ComponentProps<"div"> {
  table: TanstackTable<TData>;
  actionBar?: React.ReactNode;
}

/**
 * Bảng dữ liệu linh hoạt (DataTable) tương thích hoàn toàn với nền tảng `@tanstack/react-table`.
 * Thành phần này đảm nhận việc render UI (giao diện) bao phủ từ header, nội dung (rows), trạng thái empty đến thanh phân trang (pagination) nằm bên dưới.
 * Tích hợp tự động việc ghim cột cố định (pinning column) và hiển thị thanh Action Bar khi có phần tử được chọn.
 *
 * @example
 * ```tsx
 * // Khởi tạo hook table trước khi truyền vào.
 * const table = useReactTable({
 *   data,
 *   columns,
 *   getCoreRowModel: getCoreRowModel(),
 * })
 *
 * return (
 *   <DataTable
 *     table={table}
 *     actionBar={<Button variant="destructive">Xoá các mục đã chọn</Button>}
 *   >
 *     <DataTableToolbar table={table} /> // Optional Header Toolbar
 *   </DataTable>
 * )
 * ```
 */
export function DataTable<TData>({
  table,
  actionBar,
  children,
  className,
  ...props
}: DataTableProps<TData>) {
  return (
    <div
      className={cn("flex w-full flex-col gap-2.5 overflow-auto", className)}
      {...props}
    >
      {children}
      <div className="border-border/40 bg-background overflow-hidden rounded-xl border shadow-xs">
        <Table>
          <TableHeader className="bg-muted/30">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{
                      ...getCommonPinningStyles({ column: header.column }),
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        ...getCommonPinningStyles({ column: cell.column }),
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-2.5">
        <DataTablePagination table={table} />
        {actionBar &&
          table.getFilteredSelectedRowModel().rows.length > 0 &&
          actionBar}
      </div>
    </div>
  );
}
