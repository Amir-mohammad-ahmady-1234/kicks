import { Button } from "@/core/components/shadcn/ui/button";
import { MoreVertical } from "lucide-react";
import Modal from "../Modal";
import { TItemCardMoreFilter } from "./CardMoreFilter";
import MoreFilterComponents from "./MoreFilterComponents";

function MoreFilterModal({
  ItemsCategory,
  ItemsGender,
  ItemsSize,
}: {
  ItemsCategory?: TItemCardMoreFilter[];
  ItemsGender?: TItemCardMoreFilter[];
  ItemsSize?: TItemCardMoreFilter[];
}) {
  return (
    <Modal
      trigger={
        <Button variant="outline">
          <MoreVertical /> M-F
        </Button>
      }
      title="More Filter"
      description="Please enter new filter"
      className="w-2xl"
    >
      <MoreFilterComponents
        ItemsCategory={ItemsCategory}
        ItemsGender={ItemsGender}
        ItemsSize={ItemsSize}
      />
    </Modal>
  );
}

export default MoreFilterModal;
