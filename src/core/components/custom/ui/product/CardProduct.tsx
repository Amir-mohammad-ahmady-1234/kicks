import { PropsCardProduct } from "@/core/assets/types/Product";
import DefultCardProduct from "./DefultCardProduct";
import PCardProduct from "./PCardProduct";

function CardProduct({
  product,
  listproducts,
  badgecolor = "black/80",
  IsPagination = false,
  gridcss = "",
}: PropsCardProduct) {
  if (IsPagination) {
    return (
      <PCardProduct
        badgecolor={badgecolor}
        gridcss={gridcss}
        listproducts={listproducts}
      />
    );
  } else {
    return <DefultCardProduct badgecolor={badgecolor} product={product} />;
  }
}

export default CardProduct;
