import ProductCardAction from "./ProductCardAction";
import ProductImages from "./ProductImages";

function ProductSingalInfo({ product, findp, userid }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <ProductImages product={product} />
      <ProductCardAction product={product} findp={findp.id} userid={userid} />
    </div>
  );
}

export default ProductSingalInfo;
