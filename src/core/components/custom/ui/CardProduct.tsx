import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { Badge } from "@/core/components/shadcn/ui/badge";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";
import { Button } from "@/core/components/shadcn/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export type ProductCardItem = {
  id: string;
  src: string;
  title: string;
  price: number;
  mainImage: string;
  percentOff: number;
  category: string;
  star?: number;
};

type PropsCardProduct = {
  product?: ProductCardItem;
  listproducts?: ProductCardItem[];
  badgecolor?: string;
  IsPagination?: boolean;
  gridcss?: string;
};

function CardProduct({
  product,
  listproducts,
  badgecolor = "black/80",
  IsPagination = false,
  gridcss = "",
}: PropsCardProduct) {
  if (IsPagination) {
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

            <Card className="border-none bg-background p-2 sm:p-3 flex-1 flex flex-col">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xs sm:text-sm font-medium line-clamp-2 text-foreground/90 min-h-8 sm:min-h-10">
                  {product.title}
                </CardTitle>
              </CardHeader>

              <CardFooter className="p-0 flex flex-col gap-2 mt-auto">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                    <span className="text-sm sm:text-base font-bold text-foreground">
                      $
                      {product.percentOff > 0
                        ? (
                            product.price *
                            (1 - product.percentOff / 100)
                          ).toFixed(0)
                        : product.price.toFixed(0)}
                    </span>
                    {product.percentOff > 0 && (
                      <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
                        ${product.price.toFixed(0)}
                      </span>
                    )}
                  </div>

                  {product.star ? (
                    <div className="flex items-center gap-0.5">
                      <span className="text-yellow-500 text-xs">★</span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">
                        {product.star}
                      </span>
                    </div>
                  ) : null}
                </div>

                <Link href={`/shop/${product.id}`} className="w-full">
                  <Button
                    className="w-full bg-black/80 text-white hover:bg-black text-xs sm:text-sm py-1 sm:py-2 h-auto"
                    size="sm"
                  >
                    <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Buy Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col relative rounded-md bg-background border border-border shadow-sm hover:shadow-lg transition-all overflow-hidden">
      <div className="w-full aspect-square overflow-hidden bg-gray-100">
        <ImgNormalCustom
          src={
            product?.mainImage ||
            "https://placehold.jp/240x240.png?text=default-img"
          }
          alt={product?.title || ""}
          width={240}
          height={240}
          className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      {product?.percentOff ? (
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

      <Card className="border-none bg-background p-2 sm:p-3 flex-1 flex flex-col">
        <CardHeader className="p-0 -mb-4">
          <CardTitle className="text-xs sm:text-sm font-medium line-clamp-2 text-foreground/90 min-h-8 sm:min-h-10">
            {product?.title}
          </CardTitle>
        </CardHeader>

        <CardFooter className="p-0 flex flex-col gap-2 mt-auto">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
              <span className="text-sm sm:text-base font-bold text-foreground">
                $
                {product && product.percentOff > 0
                  ? (product.price * (1 - product.percentOff / 100)).toFixed(0)
                  : product?.price.toFixed(0)}
              </span>
              {product && product.percentOff > 0 && (
                <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
                  ${product.price.toFixed(0)}
                </span>
              )}
            </div>

            {product?.star ? (
              <div className="flex items-center gap-0.5">
                <span className="text-yellow-500 text-xs">★</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">
                  {product.star}
                </span>
              </div>
            ) : null}
          </div>

          <Link href={`/shop/${product?.id}`} className="w-full">
            <Button
              className="w-full bg-black/80 text-white hover:bg-black text-xs sm:text-sm py-1 sm:py-2 h-auto"
              size="sm"
            >
              <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Buy Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardProduct;
