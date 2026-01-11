import { filterTabel } from "@/core/api-route/admin/handlers/tabel/filterTabel";
import Modal from "@/core/components/custom/ui/Modal";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import FormCreateProduct from "@/core/features/admin/components/ui/product/FormCreateProduct";
import TabelProducts from "@/core/features/admin/components/ui/product/TabelProducts";
import { categoryP } from "@prisma/client";
import { Plus } from "lucide-react";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;

  const Pdata = await filterTabel({
    category: params.category as categoryP,
    limit: params.limit ? Number(params.limit) : 5,
    page: params.page ? Number(params.page) : 1,
    search: params.search ?? "",
    sortOrder: (params.sortOrder as "desc" | "asc") ?? "asc",
  });

  console.log(Pdata);
  return (
    <section className="p-4">
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
      <TabelProducts />
    </section>
  );
}

export default page;
