"use client";

import CardProduct, {
  ProductCardItem,
} from "@/core/components/custom/ui/CardProduct";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export type PropsCardProduct = {
  products?: ProductCardItem[];
  product?: ProductCardItem;
  listproducts?: ProductCardItem[];
  IsPagination?: boolean;
  gridcss?: string;
  badgecolor?: string;
};

function CardsProduct({ products, badgecolor = "black/80" }: PropsCardProduct) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={2.2}
      loop
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        480: { slidesPerView: 2.5, spaceBetween: 16 },
        640: { slidesPerView: 3, spaceBetween: 16 },
        768: { slidesPerView: 3.2, spaceBetween: 16 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1280: { slidesPerView: 5, spaceBetween: 20 },
      }}
      className="h-auto! px-1"
    >
      {products?.map((product, index) => (
        <SwiperSlide key={index} className="h-auto! pb-1">
          <div className="h-full">
            <CardProduct product={product} badgecolor={badgecolor} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardsProduct;
