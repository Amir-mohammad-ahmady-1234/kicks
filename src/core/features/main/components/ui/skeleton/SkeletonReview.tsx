"use client";

import { Skeleton } from "@/core/components/shadcn/ui/skeleton";

export default function SkeletonReview() {
  return (
    <>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={[
              index === 2 && "hidden sm:block",
              index === 3 && "hidden lg:block",
              index === 4 && "hidden lg:block",
              "rounded-2xl overflow-hidden border border-border/50 shadow-sm bg-background p-4",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-gray-100">
              <Skeleton className="w-full h-full rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="absolute top-4 right-4">
              <Skeleton className="h-5 w-12 rounded-full bg-gray-300 dark:bg-gray-600" />
            </div>

            <div className="mt-3 space-y-2">
              <Skeleton className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
              <Skeleton className="h-3 w-3/5 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-600" />
              <Skeleton className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
