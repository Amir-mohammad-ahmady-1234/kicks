import {
  findexsistProductById,
  findProductById,
} from "@/core/api-route/site/handlers/shop/findproductbyid/findProductById";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { getUserId } from "@/core/utils/getUserId";
import ProductSingalInfo from "./ProductSingalInfo";
import RelatedProduct from "./RelatedProduct";
async function SingalPageProduct({params}) {
  const userid = await getUserId();
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const { product, related } = await findProductById(slug);
  const findp = await findexsistProductById(slug);

  return (
    <SectionLayout>
      <div className="max-w-7xl mx-auto mt-35">
        <ProductSingalInfo product={product} findp={findp} userid={userid} />
        <RelatedProduct related={related} />
      </div>
    </SectionLayout>
  );
}

export default SingalPageProduct;
