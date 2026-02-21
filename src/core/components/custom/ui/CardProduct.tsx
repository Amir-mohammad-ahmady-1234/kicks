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
      <div className={gridcss ? gridcss : ""}>
        {listproducts.map((product) => (
          <div
            key={product.id}
            className="gap-4 relative max-w-sm rounded-md bg-background border border-border shadow-sm hover:shadow-lg transition-all"
          >
            <div className="w-full aspect-square overflow-hidden rounded-t-md bg-gray-100">
              <ImgNormalCustom
                src={
                  product.mainImage ||
                  "https://placehold.jp/240x240.png?text=default-img"
                }
                alt={product.title}
                width={240}
                height={240}
                className="object-cover object-center w-full h-full"
              />
            </div>

            {product.percentOff ? (
              <Badge
                variant="secondary"
                className={`absolute top-3 left-3 bg-${badgecolor} text-white px-3 py-1 rounded-bl-md text-xs `}
              >
                -{product.percentOff}% OFF
              </Badge>
            ) : (
              <>
                <Badge
                  variant="secondary"
                  className={`absolute top-3 left-3 bg-${badgecolor} text-white px-3 py-1 rounded-bl-md text-xs`}
                >
                  New
                </Badge>
              </>
            )}

            <Card className="border-none bg-background mt-2 p-3">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-medium line-clamp-2 text-foreground/90">
                  {product.title}
                </CardTitle>
              </CardHeader>

              <CardFooter className="p-0 flex justify-between flex-col items-center gap-3">
                <div className="flex justify-between items-center gap-3 w-full">
                  <div className="flex items-center gap-2">
                    <span className="text-md font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.percentOff && (
                      <span className="text-sm text-muted-foreground line-through">
                        $
                        {(
                          product.price /
                          (1 - product.percentOff / 100)
                        ).toFixed(0)}
                      </span>
                    )}
                  </div>

                  {product.star && (
                    <div className="flex items-center gap-1">
                      <span className="text-xs  text-yellow-500">★</span>

                      <span className="text-xs text-muted-foreground ml-1">
                        ({product.star})
                      </span>
                    </div>
                  )}
                </div>
                <Link href={`/shop/${product.id}`} className="w-full">
                  <Button
                    className="w-full bg-black/80  text-secondary  hover:bg-secondary hover:text-black hover:border hover:border-stone-600"
                    variant="secondary"
                  >
                    <ShoppingBag className="w-4 h-4" /> Buy Now
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
    <>
      <div className="w-full aspect-square overflow-hidden rounded-t-md bg-gray-100">
        <ImgNormalCustom
          src={
            product.mainImage ||
            "https://placehold.jp/240x240.png?text=default-img"
          }
          alt={product.title}
          width={240}
          height={240}
          className="object-cover object-center w-full h-full"
        />
      </div>

      {product.percentOff ? (
        <Badge
          variant="secondary"
          className={`absolute top-3 left-3 bg-${badgecolor} text-white px-3 py-1 rounded-bl-md text-xs `}
        >
          -{product.percentOff}% OFF
        </Badge>
      ) : (
        <>
          <Badge
            variant="secondary"
            className={`absolute top-3 left-3 bg-${badgecolor} text-white px-3 py-1 rounded-bl-md text-xs`}
          >
            New
          </Badge>
        </>
      )}

      <Card className="border-none bg-background mt-2 p-3">
        <CardHeader className="p-0">
          <CardTitle className="text-sm font-medium line-clamp-2 text-foreground/90">
            {product.title}
          </CardTitle>
        </CardHeader>

        <CardFooter className="p-0 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">
                $
                {(() => {
                  let finalPrice = product.price;
                  if (product.percentOff > 0) {
                    finalPrice = product.price - product.percentOff;
                  } else if (product.percentOff > 0) {
                    finalPrice = product.price * (1 - product.percentOff / 100);
                  }
                  return finalPrice.toFixed(2);
                })()}
              </span>

              {product.percentOff > 0 && (
                <>
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.price.toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {product.star > 0 && (
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="text-sm">{product.star.toFixed(2)}</span>
              </div>
            )}
          </div>

          <Link href={`/shop/${product.id}`} className="w-full">
            <Button className="w-full bg-black/80 text-white hover:bg-black">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Buy Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default CardProduct;
