"use client";

import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import {
  TypographyH1,
  TypographyH4,
  TypographyMuted,
} from "@/core/components/custom/ui/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge";
import { BlogItemType } from "@/core/features/admin/assets/types/BlogTypes";
import { formatDate } from "@/core/utils/formatDate";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { calculateReadingTime } from "../../../utils/calculateReadingTime";

function ReviewsSection({ blog }) {
  if (!blog || blog.length === 0) {
    return <div className="text-center py-12"></div>;
  }

  return (
    <div className="relative group">
      <div className="flex items-center justify-between mb-8 relative">
        <TypographyH1>Reviews</TypographyH1>
      </div>

      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 12 },
          480: { slidesPerView: 1.5, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="h-auto! px-1 pb-12"
      >
        {blog.map((item: BlogItemType, index: number) => (
          <SwiperSlide key={item.id} className="h-auto!">
            <div className="h-full flex flex-col">
              <div className="group/card relative h-full flex flex-col bg-linear-to-br from-background to-background/90 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                {index === 0 && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-red-500 hover:bg-red-600 text-white border-0 animate-pulse text-[10px] sm:text-xs px-2 py-0.5">
                      🔥 Hot
                    </Badge>
                  </div>
                )}

                <div className="relative overflow-hidden aspect-4/3">
                  <ImgNormalCustom
                    src={item.Image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      {formatDate(item.createdAt)}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30 hidden xs:inline-block" />
                    <span className="flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      {calculateReadingTime(item.content)} min
                    </span>
                  </div>

                  <TypographyH4 className="text-sm sm:text-base lg:text-lg font-semibold line-clamp-1 mb-1 sm:mb-2 group-hover/card:text-primary transition-colors">
                    {item.title}
                  </TypographyH4>

                  {item.excerpt && (
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-3 sm:mb-4">
                      {item.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center flex-wrap gap-1 sm:gap-2">
                      <Badge
                        variant="secondary"
                        className="text-[10px] sm:text-xs px-2 py-0.5"
                      >
                        {item.category}
                      </Badge>
                    </div>

                    <Link href={`/blog/${item.slug}`}>
                      <TypographyMuted className="flex items-center text-[10px] sm:text-xs underline">
                        Read More{" "}
                        <ChevronRight size={12} className="sm:h-3 sm:w-3" />
                      </TypographyMuted>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewsSection;
