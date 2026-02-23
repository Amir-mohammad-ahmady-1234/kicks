"use client";

import { TableCell } from "@/core/components/shadcn/ui/table";
import ActionDeletDialog from "./ActionDeletDialog";
import ActionEditDialog from "./ActionEditDialog";

interface ActionDialogTs<T> {
  item: T;
  onEdit?: (item: T) => void;
  onDelete?: (id: string | number) => void;
  isDeleting?: boolean;
  isEditing?: boolean;
}

function ActionDialog<T extends { id: string | number; productName?: string }>({
  item,
}: ActionDialogTs<T>) {
  return (
    <TableCell className="flex items-center justify-end gap-1">
      <ActionEditDialog item={item} />

      <ActionDeletDialog item={item} />
    </TableCell>
  );
}

export default ActionDialog;
