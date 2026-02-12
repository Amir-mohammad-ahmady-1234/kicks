"use client";

import { deleteProduct } from "@/core/api-route/site/handlers/shop/deleteproduct/deleteProduct";
import { Button } from "@/core/components/shadcn/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/core/components/shadcn/ui/dialog";
import { TableCell } from "@/core/components/shadcn/ui/table";
import { Edit, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { TypographyMuted } from "../Typography";

interface ActionDialogProps<T> {
  item: T;
  onEdit?: (item: T) => void;
  onDelete?: (id: string | number) => void;
  isDeleting?: boolean;
  isEditing?: boolean;
}

function ActionDialog<T extends { id: string | number; productName: string }>({
  item,
}: ActionDialogProps<T>) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const route = useRouter();
  async function handleDelete(id: string) {
    setDeleteDialogOpen(false);
    const deleteitem = await deleteProduct(id);
    if (deleteitem.success === true) {
      toast.success(deleteitem.message || "Item deleted successfully");
      route.refresh();
    } else {
      toast.error(deleteitem.error);
    }
  }

  async function handleEdit(id: string) {
    setEditDialogOpen(false);
    console.log(id);
    route.push(`/admin/order/${id}`);
  }

  return (
    <TableCell className="flex items-center justify-end gap-1">
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="edit">
            <Edit className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
          </DialogHeader>

          <div className="py-4">
            <TypographyMuted>
              Edit form for item: {item.productName || item.id}
            </TypographyMuted>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={() => handleEdit(String(item.id))}>
              form edit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="delete">
            <Trash2Icon className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Delete Item</DialogTitle>
          </DialogHeader>
          <TypographyMuted>
            Are you sure you want to delete {item.productName || item.id}? This
            action cannot be undone.
          </TypographyMuted>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => handleDelete(String(item.id))}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TableCell>
  );
}

export default ActionDialog;
