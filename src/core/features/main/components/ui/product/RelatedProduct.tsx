import { ProductCardItem } from "@/core/assets/types/Product";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import CardsProduct from "./CardProduct";

function RelatedProduct({ related }) {
  const relatedProducts: ProductCardItem[] = related.map((item) => ({
    id: item.id,
    title: item.name,
    src: item.mainImage,
    mainImage: item.mainImage,
    price: item.price,
    percentOff: item.discount || 0,
    category: item.category,
    star: item.star || 0,
  }));
  return (
    <div>
      <div className="mt-16 lg:mt-24">
        <TypographyH3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
          You may also like
        </TypographyH3>

        {related.length > 0 ? (
          <CardsProduct products={relatedProducts || []} />
        ) : (
          <p className="text-center text-muted-foreground py-8">
            No similar products were found in this category
          </p>
        )}
      </div>
    </div>
  );
}

export default RelatedProduct;
