"use client";

import { findAllProduct } from "@/core/api-route/site/handlers/shop/findallproduct/findAllProduct";
import { useEffect, useState } from "react";
import CardsProduct from "../product/CardProduct";
import SkeletonSlide from "../skeleton/SkeletonSlide";

export default function CardsProductClient() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const pdata = await findAllProduct();
      const prods =
        pdata?.product?.map((item) => ({
          id: item.id,
          src: item.mainImage,
          title: item.name,
          price: item.price,
          percentOff: item.discount,
          mainImage: item.mainImage,
          category: item.category,
          star: item.star,
        })) ?? [];
      setProducts(prods);
    }

    getProducts();
  }, []);

  if (!products) {
    return <SkeletonSlide />;
  }

  return <CardsProduct products={products} />;
}
