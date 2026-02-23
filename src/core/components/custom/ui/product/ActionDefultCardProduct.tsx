import { Button } from "@/core/components/shadcn/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

function ActionDefultCardProduct({ product }) {
  return (
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
  );
}

export default ActionDefultCardProduct;
