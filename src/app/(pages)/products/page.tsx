import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { product } from "@/core/features/main/assets/mock/product";
import CardsProduct from "@/core/features/main/components/ui/CardProduct";
import ProductAbout from "@/core/features/main/components/ui/product/ProductAbout";
import ProductActions from "@/core/features/main/components/ui/product/ProductActions";
import ProductColors from "@/core/features/main/components/ui/product/ProductColors";
import ProductHeader from "@/core/features/main/components/ui/product/ProductHeader";
import ProductImages from "@/core/features/main/components/ui/product/ProductImages";
import ProductSizes from "@/core/features/main/components/ui/product/ProductSizes";

export default function ProductPage() {
  return (
    <SectionLayout>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ProductImages product={product} />
          <div className="space-y-6">
            <ProductHeader product={product} />
            <ProductColors product={product} />
            <ProductSizes product={product} />
            <ProductActions />
            <ProductAbout product={product} />
          </div>
        </div>
        <SectionLayout className="mt-16">
          <TypographyH3 className="text-2xl font-semibold mb-6">
            You may also like{" "}
          </TypographyH3>
          <CardsProduct products={product.related} />
        </SectionLayout>
      </div>
    </SectionLayout>
  );
}
