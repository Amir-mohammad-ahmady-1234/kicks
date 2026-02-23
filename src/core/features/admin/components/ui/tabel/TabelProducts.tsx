"use client";
import TabelData from "@/core/components/custom/blocks/tabel/TabelData";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { categoryP } from "@prisma/client";
import { ProductOrderList } from "../../../assets/types/Products";
import { TableItemType } from "../../../assets/types/TableItemType";

export interface TabelProductsTs {
  ShowFilter?: boolean;
  data: ProductOrderList[];
  pagination?: {
    limit: number;
    page: number;
    total: number;
    totalPages: number;
  };
}
function TabelProducts({ ShowFilter, data, pagination }: TabelProductsTs) {
  const tableItems = (data ?? []).map((product) => ({
    id: product.id,
    productName: product.name,
    name: product.name,
    description: product.description || "-",
    mainImage: product.mainImage,
    fallback: product.name.slice(0, 3).toUpperCase(),
    category: product.category || "-",
    price: `${product.price.toLocaleString()} $`,
    model: product.description?.split(" ")[0] || product.name,
    gender: product.gender || "Men",
  }));
  const validCategories: categoryP[] = [
    "crocs",
    "nirkenstock",
    "clarks",
    "timberland",
    "allen",
    "oofos",
    "sorel",
    "hunter",
  ];
  const validCategoriesmap = validCategories.map((i) => ({ item: i }));

  return (
    <TabelData<TableItemType>
      ShowFilter={ShowFilter}
      ShowMoreFilter={true}
      pagination={pagination}
      Data={tableItems}
      TextPlaceholder={"Search Products..."}
      Columns={[
        {
          key: "mainImage",
          label: "محصول",
          render: (_, row) => (
            <div className="flex items-center gap-3">
              <ImgNormalCustom
                src={
                  row.mainImage ||
                  "https://placehold.jp/80x80.png?css=%7B%22border-radius%22%3A%2215px%22%7D?text=product"
                }
                alt={row.model}
                width={80}
                height={80}
                unoptimized={true}
              />
              <div>
                <div className="font-medium">{row.productName}</div>
                <span className="text-muted-foreground text-xs block mt-0.5">
                  {row.model}
                </span>
              </div>
            </div>
          ),
        },
        {
          key: "category",
          label: "دسته‌بندی",
        },
        {
          key: "gender",
          label: "جنسیت",
          render: (_, row) => (
            <span className="font-semibold">{row.gender} </span>
          ),
        },
        {
          key: "price",
          label: "قیمت",
          render: (_, row) => (
            <span className="font-semibold">{row.price} </span>
          ),
        },
      ]}
      ShowActions={true}
      CheckboxTabel={true}
      ShowImage={true}
      TableTextHead={["Product", "Category", "gender", "Price"]}
      ItemsCategory={validCategoriesmap}
      ItemsGender={[{ item: "Women" }, { item: "Men" }]}
      ItemsSize={[]}
    />
  );
}

export default TabelProducts;
