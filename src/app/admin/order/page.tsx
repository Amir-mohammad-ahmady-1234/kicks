import { filterProductTabel } from "@/core/api-route/admin/handlers/tabel/filterProductTabel";
import Modal from "@/core/components/custom/ui/Modal";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import FormCreateProduct from "@/core/features/admin/components/ui/product/FormCreateProduct";
import TabelProducts from "@/core/features/admin/components/ui/TabelProducts";
import { validSortOrder } from "@/core/utils/validSortOrder";
import { categoryP, Gender } from "@prisma/client";
import { Plus } from "lucide-react";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;

  const Pdata = await filterProductTabel({
    category: params.category as categoryP,
    limit: params.limit ? Number(params.limit) : 5,
    gender: params.gender as Gender,
    page: params.page ? Number(params.page) : 1,
    search: params.search ?? "",
    sortOrder: validSortOrder(params),
  });
  return (
    <section className="p-4">
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
        >
          <FormCreateProduct />
        </Modal>
      </div>
      <TabelProducts
        ShowFilter={true}
        data={Pdata?.data ?? []}
        pagination={Pdata.pagination}
      />
    </section>
  );
}

export default page;
