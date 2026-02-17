import { discountFilterTs } from "@/core/api-route/admin/handlers/tabel/filterTabel";
import { filterProductsShop } from "@/core/api-route/site/handlers/filterproducts/filterProductsShop";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";

import BannerShop from "@/core/features/main/components/ui/shop/BannerShop";
import HeadFilterShop from "@/core/features/main/components/ui/shop/HeadFilterShop";
import ShopFilters from "@/core/features/main/components/ui/shop/ShopFilters";
import ShopProducts from "@/core/features/main/components/ui/shop/ShopProducts";
import { validSortOrder } from "@/core/utils/validSortOrder";
import { categoryP, Gender } from "@prisma/client";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;

  const pdata = await filterProductsShop({
    category: params.category as categoryP,
    gender: params.gender as Gender,
    limit: 8,
    page: params.page ? Number(params.page) : 1,
    search: params.serch,
    size: String(params.size),
    sortOrder: validSortOrder(params),
    discountFilter: params.discountfilter as discountFilterTs,
    maxPrice: Number(params.maxPrice),
    minPrice: Number(params.minPrice),
  });
  return (
    <SectionLayout>
      <BannerShop />
      <HeadFilterShop />
      <div className="md:flex gap-5 sm:flex-col md:flex-row">
        <ShopFilters />
        <ShopProducts data={pdata.data || []} pagination={pdata.pagination} />
      </div>
    </SectionLayout>
  );
}

export default page;
