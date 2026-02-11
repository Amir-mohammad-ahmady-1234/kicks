import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { TypographyBig } from "@/core/components/custom/ui/Typography";
import HeroSiperSection from "@/core/features/main/components/ui/HeroSiperSection";

import { findAllProduct } from "@/core/api-route/site/handlers/shop/findallproduct/findAllProduct";
import CardsProduct from "@/core/features/main/components/ui/CardProduct";
import CategoriesSection from "@/core/features/main/components/ui/CategoriesSection";
import HeadeCardProduct from "@/core/features/main/components/ui/HeadeCardProduct";
import ReviewsSection from "@/core/features/main/components/ui/ReviewsSection";

export default async function HeroBannerWithClickableThumbs() {
  const pdata = await findAllProduct();
  console.log(pdata);
  const products = pdata.product;
  return (
    <>
      <SectionLayout>
        <TypographyBig className="tracking-widest ">
          DO IT <span className="text-primary">RIGHT</span>
        </TypographyBig>
      </SectionLayout>
      <SectionLayout>
        <HeroSiperSection />
      </SectionLayout>
      <SectionLayout>
        <HeadeCardProduct />
        <CardsProduct products={products} />
      </SectionLayout>
      <CategoriesSection />

      <SectionLayout>
        <ReviewsSection />
      </SectionLayout>
    </>
  );
}
