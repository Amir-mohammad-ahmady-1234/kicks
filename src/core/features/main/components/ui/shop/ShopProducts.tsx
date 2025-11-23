"use client";
import React from "react";
import { products } from "@/core/assets/mock/products";

import CardProduct from "@/core/components/custom/ui/CardProduct";
import { Paginations } from "@/core/components/custom/ui/Pagination";

function ShopProducts() {
  return (
    <div className="flex flex-col w-full">
      <CardProduct
        listproducts={products}
        IsPagination={true}
        gridcss="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
      />
      <div className="flex justify-center mt-12">
        <Paginations />
      </div>
    </div>
  );
}

export default ShopProducts;
