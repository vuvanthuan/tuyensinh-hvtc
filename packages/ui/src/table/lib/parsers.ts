import { createParser } from "nuqs/server";
import { z } from "zod";

import type {
  ExtendedColumnFilter,
  ExtendedColumnSort,
} from "../types/data-table";
import { dataTableConfig } from "./data-table-config";

const sortingItemSchema = z.object({
  id: z.string(),
  desc: z.boolean(),
});

export const getSortingStateParser = <TData>(
  columnIds?: string[] | Set<string>,
) => {
  const validKeys = columnIds
    ? columnIds instanceof Set
      ? columnIds
      : new Set(columnIds)
    : null;

  return createParser({
    parse: (value) => {
      try {
        const parsed = JSON.parse(value) as unknown;
        const result = z.array(sortingItemSchema).safeParse(parsed);

        if (!result.success) return null;

        if (validKeys && result.data.some((item) => !validKeys.has(item.id))) {
          return null;
        }

        return result.data as ExtendedColumnSort<TData>[];
      } catch {
        return null;
      }
    },
    serialize: (value) => JSON.stringify(value),
    eq: (a, b) =>
      a.length === b.length &&
      a.every(
        (item, index) =>
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          item.id === b[index]!.id && item.desc === b[index]!.desc,
      ),
  });
};

const filterItemSchema = z.object({
  id: z.string(),
  value: z.union([z.string(), z.array(z.string())]),
  variant: z.enum(dataTableConfig.filterVariants),
  operator: z.enum(dataTableConfig.operators),
  filterId: z.string(),
});

export type FilterItemSchema = z.infer<typeof filterItemSchema>;

export const getFiltersStateParser = <TData>(
  columnIds?: string[] | Set<string>,
) => {
  const validKeys = columnIds
    ? columnIds instanceof Set
      ? columnIds
      : new Set(columnIds)
    : null;

  return createParser({
    parse: (value) => {
      try {
        const parsed = JSON.parse(value) as unknown;

        const result = z.array(filterItemSchema).safeParse(parsed);

        if (!result.success) return null;

        if (validKeys && result.data.some((item) => !validKeys.has(item.id))) {
          return null;
        }

        return result.data as ExtendedColumnFilter<TData>[];
      } catch {
        return null;
      }
    },
    serialize: (value) => JSON.stringify(value),
    eq: (a, b) =>
      a.length === b.length &&
      a.every(
        (filter, index) =>
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          filter.id === b[index]!.id &&
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          filter.value === b[index]!.value &&
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          filter.variant === b[index]!.variant &&
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          filter.operator === b[index]!.operator,
      ),
  });
};
