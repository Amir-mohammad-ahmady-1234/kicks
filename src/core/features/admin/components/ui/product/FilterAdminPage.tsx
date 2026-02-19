import { filterProductTabel } from "@/core/api-route/admin/handlers/tabel/filterProductTabel";
import HeadFilterOrder from "@/core/features/admin/components/ui/product/HeadFilterOrder";

import TabelProducts from "@/core/features/admin/components/ui/TabelProducts";
import { validSortOrder } from "@/core/utils/validSortOrder";
import { categoryP, Gender } from "@prisma/client";

async function FilterAdminPage({ searchParams }) {
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
      <HeadFilterOrder />
      <TabelProducts
        ShowFilter={true}
        data={Pdata?.data ?? []}
        pagination={Pdata.pagination}
      />
    </section>
  );
}

export default FilterAdminPage;
