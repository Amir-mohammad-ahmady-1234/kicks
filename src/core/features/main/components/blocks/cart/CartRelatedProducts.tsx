import { findAllProduct } from "@/core/api-route/site/handlers/shop/findallproduct/findAllProduct";
import { ProductCardItem } from "@/core/assets/types/Product";
import { TypographyH2 } from "@/core/components/custom/ui/Typography";
import CardsProduct from "@/core/features/main/components/ui/product/CardProduct";

export default async function CartRelatedProducts() {
  const pdata = await findAllProduct();
  const rawProducts = pdata?.product ?? [];

  const products: ProductCardItem[] = rawProducts.map((product) => ({
    id: product.id,
    src: product.mainImage ?? "",
    mainImage: product.mainImage ?? "",
    title: product.name,
    price: product.price,
    percentOff: product.discount ?? 0,
    category: String(product.category ?? ""),
    star: product.star ? Number(product.star) : 0,
  }));

  return (
    <div className="mt-10 lg:mt-12">
      <TypographyH2 className="mb-6">You may also like</TypographyH2>
      <CardsProduct products={products} />
    </div>
  );
}
