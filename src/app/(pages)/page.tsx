import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { TypographyBig } from "@/core/components/custom/ui/Typography";
import HeroSiperSection from "@/core/features/main/components/ui/HeroSiperSection";
import ProductAndReviews from "@/core/features/main/components/ui/ProductAndReviews";

export default function page() {
  return (
    <>
      <SectionLayout>
        <TypographyBig className="tracking-widest mt-35">
          DO IT <span className="text-primary">RIGHT</span>
        </TypographyBig>
      </SectionLayout>
      <SectionLayout>
        <HeroSiperSection />
      </SectionLayout>
      <ProductAndReviews />
    </>
  );
}
