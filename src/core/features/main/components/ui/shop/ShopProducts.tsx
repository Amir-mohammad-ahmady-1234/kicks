"use client";

import CardProduct from "@/core/components/custom/ui/CardProduct";
import { Paginations } from "@/core/components/custom/ui/Pagination";
import { TabelProductsProps } from "@/core/features/admin/components/ui/product/TabelProducts";
import { getProductImage } from "@/core/utils/randomImage";

function ShopProducts({ data, pagination }: TabelProductsProps) {
  const tableItems = data.map((product, index) => ({
    id: product.id,
    src: getProductImage(index) || "/common/img/placeholder.png",
    title: product.name,
    price: product.price,
    percentOff: product.discount > 0 ? product.discount : undefined,
    category: product.category,
  }));
  return (
    <div className="flex flex-col w-full">
      <CardProduct
        listproducts={tableItems}
        IsPagination={true}
        gridcss="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
      />
      <div className="flex justify-center mt-12">
        <Paginations pagination={pagination} />
      </div>
    </div>
  );
}

export default ShopProducts;
