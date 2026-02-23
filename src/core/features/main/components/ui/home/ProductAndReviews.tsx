import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import HeadeCardProduct from "@/core/features/main/components/ui/product/HeadeCardProduct";

import CardsProductClient from "./CardsProductClient";
import CategoriesSectionClient from "./CategoriesSectionClient";
import ReviewsSectionClient from "./ReviewsSectionClient";
function ProductAndReviews() {
  return (
    <>
      <SectionLayout>
        <HeadeCardProduct />
        <CardsProductClient />
      </SectionLayout>

      <CategoriesSectionClient />

      <SectionLayout>
        <ReviewsSectionClient />
      </SectionLayout>
    </>
  );
}

export default ProductAndReviews;
