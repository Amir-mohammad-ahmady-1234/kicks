import { filterProductTabel } from "@/core/api-route/admin/handlers/tabel/filterProductTabel";
import { TypographyH4 } from "@/core/components/custom/ui/Typography";
import { ProductOrderList } from "../../../assets/types/Products";
import TabelProducts from "./TabelProducts";

async function Tavel5BestProduct() {
  const Pdata = await filterProductTabel({
    limit: 5,
    page: 1,
  });
  console.log(Pdata);
  const data = Pdata.data;
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm border">
      <TypographyH4 className="mb-4">🔥 5 Best Products</TypographyH4>
      <TabelProducts ShowFilter={false} data={data as ProductOrderList[]} />
    </div>
  );
}

export default Tavel5BestProduct;
