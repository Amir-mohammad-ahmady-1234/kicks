"use client";
import { products } from "@/core/assets/mock/products";

import CardProduct from "@/core/components/custom/ui/CardProduct";
import { Paginations } from "@/core/components/custom/ui/Pagination";

function ShopProducts() {
  const pagination = {
    limit: 5,
    page: 1,
    total: 2,
    totalPages: 1,
  };
  return (
    <div className="flex flex-col w-full">
      <CardProduct
        listproducts={products}
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
