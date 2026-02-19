"use client";

import CardProduct from "@/core/components/custom/ui/CardProduct";
import { Paginations } from "@/core/components/custom/ui/Pagination";
import { TabelProductsTs } from "@/core/features/admin/components/ui/TabelProducts";
import { getProductImage } from "@/core/utils/randomImage";

function ShopProducts({ data, pagination }: TabelProductsTs) {
  const tableItems = data.map((product, index) => ({
    id: product.id,
    src: getProductImage(index) || "/common/img/placeholder.png",
    title: product.name,
    price: product.price,
    mainImage: product.mainImage,
    percentOff: product.discount > 0 ? product.discount : undefined,
    category: product.category,
  }));
  return (
    <div className="flex flex-col w-full">
      <CardProduct
        listproducts={tableItems}
        IsPagination={true}
        gridcss="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-6"
      />
      <div className="flex justify-center mt-12">
        <Paginations pagination={pagination} />
      </div>
    </div>
  );
}

export default ShopProducts;
