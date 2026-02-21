"use client";

import { Skeleton } from "@/core/components/shadcn/ui/skeleton";

export default function SkeletonSingleProduct() {
  return (
    <div className="max-w-7xl mx-auto mt-35 space-y-14 px-10 sm:px-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        <div className="space-y-4 bg-white p-4 rounded-md">
          <Skeleton className="w-full aspect-4/3 bg-gray-300 dark:bg-gray-700 rounded-2xl" />
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-24 w-full bg-gray-300 dark:bg-gray-700 rounded-md"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6 bg-white p-4 rounded-md">
          <Skeleton className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />{" "}
          <Skeleton className="h-6 w-2/5 bg-gray-300 dark:bg-gray-700 rounded" />{" "}
          <Skeleton className="h-5 w-2/4 bg-gray-300 dark:bg-gray-700 rounded" />{" "}
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-9 w-12 bg-gray-300 dark:bg-gray-700 rounded-md"
              />
            ))}
          </div>
          <div className="flex gap-4">
            <Skeleton className="h-10 w-32 bg-gray-300 dark:bg-gray-600 rounded-md" />
            <Skeleton className="h-10 w-32 bg-gray-300 dark:bg-gray-600 rounded-md" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            <Skeleton className="h-4 w-4/5 bg-gray-300 dark:bg-gray-700 rounded" />
            <Skeleton className="h-4 w-3/5 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>

      <Skeleton className="h-px w-full bg-gray-300 dark:bg-gray-700" />

      <Skeleton className="h-8 w-2/6 bg-gray-300 dark:bg-gray-700 rounded" />

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden border border-border bg-background shadow-sm p-4"
          >
            <Skeleton className="w-full aspect-square bg-gray-300 dark:bg-gray-700 rounded-lg" />
            <div className="mt-3 space-y-2">
              <Skeleton className="h-4 w-4/5 bg-gray-300 dark:bg-gray-700 rounded" />
              <Skeleton className="h-3 w-2/5 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
