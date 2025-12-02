import React from "react";

import SidebarAdmin from "@/core/features/admin/components/blocks/sidebar/SidebarAdmin";
import HeaderAdmin from "@/core/features/admin/components/blocks/header/HeaderAdmin";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Plus } from "lucide-react";
import ProductCardAdmin from "@/core/features/admin/components/blocks/product/ProductCardAdmin";
import { products } from "@/core/assets/mock/products";
import Modal from "@/core/components/custom/ui/Modal";
import FormCreateProduct from "@/core/features/admin/components/ui/FormCreateProduct";
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 m-5">
            {products.map((item, i) => (
              <ProductCardAdmin key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default layout;
