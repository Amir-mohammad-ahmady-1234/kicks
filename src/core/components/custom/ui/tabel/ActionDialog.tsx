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
import { TypographyMuted } from "../Typography";
function ActionDialog() {
  return (
    <TableCell className="flex items-center justify-end gap-1">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="delete">
            <Edit className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="delete">
            <Trash2Icon className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Delete Item</DialogTitle>
          </DialogHeader>
          <TypographyMuted>Are your shure for delete item?</TypographyMuted>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TableCell>
  );
}

export default ActionDialog;
