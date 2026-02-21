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
    return (
      <div className="text-center py-12">
        <TypographyH4>No reviews yet</TypographyH4>
      </div>
    );
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
          320: { slidesPerView: 1.7, spaceBetween: 15 },
          480: { slidesPerView: 1.5, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 25 },
          768: { slidesPerView: 2.2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {blog.map((item: BlogItemType, index: number) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col bg-linear-to-br from-background to-background/90 rounded-2xl">
              <div className="relative bg-linear-to-br from-background to-background/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30  transition-all duration-500 hover:-translate-y-2  flex flex-col">
                {index === 0 && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-red-500 hover:bg-red-600 text-white border-0 animate-pulse">
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

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(item.createdAt)}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {calculateReadingTime(item.content)} min read
                    </span>
                  </div>

                  <TypographyH4 className=" line-clamp-1 mb-2 group-hover/card:text-primary transition-colors">
                    {item.title}
                  </TypographyH4>

                  {item.excerpt && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {item.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-wrap gap-2 mt-auto">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>{" "}
                    <Link href={`/blog/${item.slug}`}>
                      <TypographyMuted className="flex items-center underline ">
                        Read More <ChevronRight size={15} />
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
