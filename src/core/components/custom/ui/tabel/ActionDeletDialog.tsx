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
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { TypographyMuted } from "../Typography";
function ActionDeletDialog({ item }) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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

  return (
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
  );
}

export default ActionDeletDialog;
