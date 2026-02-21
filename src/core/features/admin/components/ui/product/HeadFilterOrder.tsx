import Modal from "@/core/components/custom/ui/Modal";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import FormCreateProduct from "@/core/features/admin/components/ui/product/FormCreateProduct";
import { Plus } from "lucide-react";
function HeadFilterOrder() {
  return (
    <div className="flex items-center justify-between">
      <TypographyH3>Order</TypographyH3>

      <Modal
        trigger={
          <Button variant="outline">
            <Plus /> ADD NEW PRODUCT
          </Button>
        }
        title="new product"
        description="Please enter product information"
        className="w-2xl"
        hideDefaultFooter
      >
        <FormCreateProduct />
      </Modal>
    </div>
  );
}

export default HeadFilterOrder;
