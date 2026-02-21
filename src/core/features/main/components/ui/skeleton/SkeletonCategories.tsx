"use client";

import { TypographyH1 } from "@/core/components/custom/ui/Typography";
import { Skeleton } from "@/core/components/shadcn/ui/skeleton";

export default function SkeletonCategories() {
  return (
    <div className="bg-foreground p-10">
      <div className="flex justify-start pages-container mb-6">
        <TypographyH1 className="text-secondary text-3xl">
          Categories
        </TypographyH1>
      </div>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={[
              index === 2 && "hidden sm:block",
              index === 3 && "hidden lg:block",
              index === 4 && "hidden xl:block",
              "rounded-2xl overflow-hidden border border-border/50 shadow-md bg-background p-5",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="relative w-full aspect-5/4 rounded-2xl overflow-hidden bg-gray-100">
              <Skeleton className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="absolute top-4 right-4">
              <Skeleton className="h-7 w-7 rounded-full bg-gray-300 dark:bg-gray-600" />
            </div>

            <div className="mt-4 space-y-3">
              <Skeleton className="h-5 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
              <Skeleton className="h-4 w-3/5 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
