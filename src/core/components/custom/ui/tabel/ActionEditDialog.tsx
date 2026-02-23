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
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TypographyMuted } from "../Typography";
function ActionEditDialog({ item }) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const route = useRouter();

  async function handleEdit(id: string) {
    setEditDialogOpen(false);
    console.log(id);
    route.push(`/admin/order/${id}`);
  }
  return (
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
          <Button onClick={() => handleEdit(String(item.id))}>form edit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ActionEditDialog;
