"use client";

import { Skeleton } from "@/core/components/shadcn/ui/skeleton";
import React from "react";
import { SwiperSlide } from "swiper/react";

export default function SkeletonSlide() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <SwiperSlide
          key={index}
          className="relative max-w-72 rounded-md bg-background border border-border shadow-sm"
        >
          <div className="p-3 space-y-3">
            <div className="relative">
              <Skeleton className="aspect-square w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="absolute top-2 left-2 h-6 w-14 rounded-full bg-gray-300 dark:bg-gray-600" />
            </div>

            <Skeleton className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700" />
          </div>
        </SwiperSlide>
      ))}
    </>
  );
}
