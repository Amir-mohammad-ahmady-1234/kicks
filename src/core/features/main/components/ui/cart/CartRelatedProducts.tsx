import { products } from "@/core/assets/mock/products";
import { TypographyH2 } from "@/core/components/custom/ui/Typography";
import CardsProduct from "@/core/features/main/components/ui/CardProduct";

export default function CartRelatedProducts() {
  return (
    <div className="mt-10 lg:mt-12">
      <TypographyH2 className="mb-6">You may also like</TypographyH2>
      <CardsProduct products={products} />
    </div>
  );
}
