import { findAllProduct } from "@/core/api-route/site/handlers/shop/findallproduct/findAllProduct";
import { TypographyH2 } from "@/core/components/custom/ui/Typography";
import CardsProduct from "@/core/features/main/components/ui/CardProduct";

export default async function CartRelatedProducts() {
  const pdata = await findAllProduct();
  const products = pdata.product;
  return (
    <div className="mt-10 lg:mt-12">
      <TypographyH2 className="mb-6">You may also like</TypographyH2>
      <CardsProduct products={products} />
    </div>
  );
}
