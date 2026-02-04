"use client";

import { TabelType } from "@/core/assets/types/Tabel";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/core/components/shadcn/ui/table";
import { TypographyMuted } from "../../ui/Typography";
import ActionDialog from "../../ui/tabel/ActionDialog";
import FilterTabel from "../../ui/tabel/FilterTabel";

function TabelData<T extends { id: string | number; productName: string }>({
  Data,
  CheckboxTabel = true,
  TableTextHead,
  Columns,
  ShowActions = true,
  TextPlaceholder,
  ShowFilter = true,
  ShowMoreFilter = true,
  pagination,
  ItemsCategory,
  ItemsGender,
  ItemsSize,
}: TabelType<T>) {
  return (
    <>
      <div className="w-full bg-background mt-5">
        {ShowFilter && (
          <FilterTabel
            ShowMoreFilter={ShowMoreFilter}
            TextPlaceholder={TextPlaceholder}
            ItemsCategory={ItemsCategory}
            ItemsGender={ItemsGender}
            pagination={pagination}
            ItemsSize={ItemsSize}
          />
        )}
        <div className=" [&>div]:border">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-secondary/40">
                {TableTextHead ? (
                  TableTextHead.map((items) => (
                    <TableHead key={items}>{items}</TableHead>
                  ))
                ) : (
                  <TableHead>Color</TableHead>
                )}

                <TableHead className="w-0">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={
                      Columns.length +
                      (CheckboxTabel ? 1 : 0) +
                      (ShowActions ? 1 : 0)
                    }
                    className="text-center py-8"
                  >
                    <TypographyMuted>NotFund Data</TypographyMuted>
                  </TableCell>
                </TableRow>
              ) : (
                Data.map((item) => (
                  <TableRow key={item.id} className="hover:bg-secondary/30">
                    {Columns.map((col) => {
                      const value = (item as Record<string, unknown>)[
                        String(col.key)
                      ];

                      return (
                        <TableCell key={String(col.key)}>
                          {col.render
                            ? col.render(value, item)
                            : value != null
                              ? String(value)
                              : "-"}
                        </TableCell>
                      );
                    })}

                    {ShowActions && <ActionDialog />}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default TabelData;
