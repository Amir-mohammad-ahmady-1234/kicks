"use client";
import { useState } from "react";
import ProductAbout from "./ProductAbout";
import ProductActions from "./ProductActions";
import ProductHeader from "./ProductHeader";
import ProductSizes from "./ProductSizes";

function ProductCardAction({ product, findp, userid }) {
  const [sizeselect, setsizeselect] = useState(null);
  return (
    <div className="space-y-6">
      <ProductHeader product={product} userId={userid} pid={findp} />
      <ProductSizes product={product} setsizeselect={setsizeselect} />
      <ProductActions sizeselect={sizeselect} idp={findp} userid={userid} />
      <ProductAbout product={product} pid={findp} />
    </div>
  );
}

export default ProductCardAction;
