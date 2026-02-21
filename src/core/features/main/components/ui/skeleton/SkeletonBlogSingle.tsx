"use client";

import { Skeleton } from "@/core/components/shadcn/ui/skeleton";

export default function SkeletonBlogSingle() {
  return (
    <div className="px-8 sm:px-1">
      <div className="max-w-5xl mx-auto space-y-8 mt-35 bg-white p-4 rounded-md ">
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-white">
          <Skeleton className="w-full h-full rounded-2xl bg-gray-300 dark:bg-gray-700" />
        </div>

        <Skeleton className="h-10 w-4/5 bg-gray-300 dark:bg-gray-700 rounded" />
        <Skeleton className="h-6 w-3/5 bg-gray-300 dark:bg-gray-700 rounded" />

        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          <Skeleton className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"
            />
          ))}
        </div>

        <div className="flex gap-3 flex-wrap pt-6 border-t border-border/30">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
