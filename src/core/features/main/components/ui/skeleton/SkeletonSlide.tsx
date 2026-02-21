"use client";

import { Skeleton } from "@/core/components/shadcn/ui/skeleton";

export default function SkeletonSlide() {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={[
            index === 2 && "hidden sm:block",
            index === 3 && "hidden lg:block",
            index === 4 && "hidden lg:block",
            "rounded-md bg-background border border-border shadow-sm",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="w-full aspect-square overflow-hidden rounded-t-md bg-gray-100 relative">
            <Skeleton className="w-full h-full rounded-t-md bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="absolute top-3 left-3 h-5 w-14 rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>

          <div className="p-3 space-y-2">
            <Skeleton className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
            <Skeleton className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />

            <div className="flex justify-between items-center mt-1">
              <Skeleton className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
              <Skeleton className="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>

            <Skeleton className="h-8 w-full bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
