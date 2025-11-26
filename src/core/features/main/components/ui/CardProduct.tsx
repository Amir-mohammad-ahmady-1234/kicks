"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import CardProduct from "@/core/components/custom/ui/CardProduct";
type Product = {
  src: string;
  title: string;
  price: number;
  percentOff?: number;
  rating?: number;
  inStock?: boolean;
};

export type PropsCardProduct = {
  products?: Product[];
  product?: Product;
  listproducts?: Product[];
  IsPagination?: boolean;
  gridcss?: string;
  badgecolor?: string;
};

function CardsProduct({ products, badgecolor = "black/80" }: PropsCardProduct) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5.2}
      loop
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        380: { slidesPerView: 2.2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide
          key={index}
          className="relative max-w-sm rounded-md bg-background border border-border shadow-sm hover:shadow-lg transition-all"
        >
          <CardProduct product={product} badgecolor={badgecolor} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardsProduct;
