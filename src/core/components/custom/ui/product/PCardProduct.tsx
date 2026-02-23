import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { Badge } from "@/core/components/shadcn/ui/badge";
import ActionProductCard from "./ActionProductCard";

function PCardProduct({ listproducts, gridcss, badgecolor }) {
  return (
    <div className={gridcss}>
      {listproducts?.map((product) => (
        <div
          key={product.id}
          className="h-full flex flex-col relative rounded-md bg-background border border-border shadow-sm hover:shadow-lg transition-all overflow-hidden"
        >
          <div className="w-full aspect-square overflow-hidden bg-gray-100">
            <ImgNormalCustom
              src={
                product.mainImage ||
                "https://placehold.jp/240x240.png?text=default-img"
              }
              alt={product.title}
              width={240}
              height={240}
              className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          {product.percentOff ? (
            <Badge
              variant="secondary"
              className={`absolute top-2 left-2 bg-${badgecolor} text-white px-2 py-0.5 rounded-bl-md text-[10px] sm:text-xs`}
            >
              -{product.percentOff}%
            </Badge>
          ) : (
            <Badge
              variant="secondary"
              className={`absolute top-2 left-2 bg-${badgecolor} text-white px-2 py-0.5 rounded-bl-md text-[10px] sm:text-xs`}
            >
              New
            </Badge>
          )}

          <ActionProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default PCardProduct;
