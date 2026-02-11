import {
  findexsistProductById,
  findProductById,
} from "@/core/api-route/site/handlers/shop/findproductbyid/findProductById";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import CardsProduct from "@/core/features/main/components/ui/CardProduct";
import ProductCardAction from "@/core/features/main/components/ui/product/ProductCardAction";
import ProductImages from "@/core/features/main/components/ui/product/ProductImages";
import { getUserId } from "@/core/utils/getUserId";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const userid = await getUserId();
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const { product, related } = await findProductById(slug);
  const findp = await findexsistProductById(slug);

  return (
    <SectionLayout>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ProductImages product={product} />
          <ProductCardAction
            product={product}
            findp={findp.id}
            userid={userid}
          />
        </div>
        <SectionLayout>
          <div className="mt-16 lg:mt-24">
            <TypographyH3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
              You may also like
            </TypographyH3>

            {related.length > 0 ? (
              <CardsProduct related={related || []} />
            ) : (
              <p className="text-center text-muted-foreground py-8">
                No similar products were found in this category
              </p>
            )}
          </div>
        </SectionLayout>
      </div>
    </SectionLayout>
  );
}
