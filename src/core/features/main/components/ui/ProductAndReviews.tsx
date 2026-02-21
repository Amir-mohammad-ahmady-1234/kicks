import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import CategoriesSection from "@/core/features/main/components/ui/CategoriesSection";
import HeadeCardProduct from "@/core/features/main/components/ui/HeadeCardProduct";

import { Suspense } from "react";
import CardsProductSkeleton from "./CardsProductSkeleton";
import ReviewsSectionSkeleton from "./ReviewsSectionSkeleton";
import SkeletonSlide from "./SkeletonSlide";
function ProductAndReviews() {
  return (
    <>
      <SectionLayout>
        <HeadeCardProduct />
        <Suspense fallback={<SkeletonSlide />}>
          <CardsProductSkeleton />
        </Suspense>
      </SectionLayout>
      <CategoriesSection />

      <SectionLayout>
        <ReviewsSectionSkeleton />
      </SectionLayout>
    </>
  );
}

export default ProductAndReviews;
