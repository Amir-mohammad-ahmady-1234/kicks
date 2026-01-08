import TabelData from "@/core/components/custom/blocks/tabel/TabelData";
import Modal from "@/core/components/custom/ui/Modal";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import HeaderAdmin from "@/core/features/admin/components/blocks/header/HeaderAdmin";
import SidebarAdmin from "@/core/features/admin/components/blocks/sidebar/SidebarAdmin";
import FormCreateProduct from "@/core/features/admin/components/ui/product/FormCreateProduct";
import { Plus } from "lucide-react";

function layout() {
  return (
    <main className="flex gap-1">
      <section className="bg-background w-2/10 h-screen p-4">
        <SidebarAdmin />
      </section>
      <section className="flex-col w-full">
        <HeaderAdmin />
        <div className="p-4">
          <div className="flex items-center justify-between">
            <TypographyH3>All Products</TypographyH3>
            <Modal
              trigger={
                <Button variant="outline">
                  <Plus /> ADD NEW PRODUCT
                </Button>
              }
              title="new product"
              description="Please enter product information"
              className="w-2xl"
            >
              <FormCreateProduct />
            </Modal>
          </div>
          <TabelData
            CheckboxTabel={true}
            ShowImage={true}
            TableTextHead={["Product", "Color", "Category", "Price"]}
          />
        </div>
      </section>
    </main>
  );
}

export default layout;
