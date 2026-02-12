import { TypographyH4 } from "@/core/components/custom/ui/Typography";
import { ProductOrderList } from "../../assets/types/Products";
import TabelProducts from "./TabelProducts";

function Tavel5BestProduct({ data }: { data: ProductOrderList[] }) {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm border">
      <TypographyH4 className="mb-4">🔥 5 Best Products</TypographyH4>
      <TabelProducts ShowFilter={false} data={data} />
    </div>
  );
}

export default Tavel5BestProduct;
