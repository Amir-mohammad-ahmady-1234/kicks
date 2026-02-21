import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { TypographyBig } from "@/core/components/custom/ui/Typography";
import HeroSiperSection from "@/core/features/main/components/ui/home/HeroSiperSection";
import ProductAndReviews from "@/core/features/main/components/ui/home/ProductAndReviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "kicks | Home",
  description:
    "Welcome to Kicks – your go-to online store for the latest sneakers and shoes. Shop trending styles for men and women with fast and easy delivery.",
};

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
