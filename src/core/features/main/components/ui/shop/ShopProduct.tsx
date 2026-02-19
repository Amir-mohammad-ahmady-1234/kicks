import { discountFilterTs } from "@/core/api-route/admin/handlers/tabel/filterProductTabel";
import { filterProductsShop } from "@/core/api-route/site/handlers/filterproducts/filterProductsShop";
import { validSortOrder } from "@/core/utils/validSortOrder";
import { categoryP, Gender } from "@prisma/client";
import ShopFilters from "./ShopFilters";
import ShopProducts from "./ShopProducts";
async function ShopProduct({ searchParams }) {
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
    <div className="md:flex gap-5 sm:flex-col md:flex-row">
      <ShopFilters />
      <ShopProducts data={pdata.data || []} pagination={pdata.pagination} />
    </div>
  );
}

export default ShopProduct;
