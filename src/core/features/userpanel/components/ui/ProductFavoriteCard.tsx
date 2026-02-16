"use client";

import { deleteFavorite } from "@/core/api-route/site/handlers/favorite/deletefavorite/deleteFavorite";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { Button } from "@/core/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/core/components/shadcn/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { ProductFavoriteCardTs } from "../../assets/types/ProductFavoriteCardTs";

export function ProductFavoriteCard({
  product,
    userId,
}: ProductFavoriteCardTs) {
  const [isRemoving, setIsRemoving] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  async function handleRemoveFavorite() {
    setIsRemoving(true);

    try {
      const result = await deleteFavorite(userId, product.id);

      if (result.success) {
        setIsRemoved(true);
        toast.success("Removed from favorites");
      } else {
        toast.error(result.error);
      }
    } catch {
      toast.error("An error occurred");
    } finally {
      setIsRemoving(false);
    }
  }

  if (isRemoved) {
    return null;
  }

  return (
    <Card className="py-0 pb-3">
      <div className="relative  overflow-hidden">
        <Link href={`/shop/${product.id}`}>
          <ImgNormalCustom
            src={product.mainImage || "/placeholder-product.jpg"}
            alt={product.name}
            width={1000}
            height={1000}
          />
        </Link>
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRemoveFavorite}
            disabled={isRemoving}
            className="bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            {isRemoving ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 " />
            ) : (
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            )}
          </Button>
        </div>
      </div>

      <CardContent className="flex flex-col justify-between sm:flex-row">
        <Link href={`/shop/${product.id}`}>
          <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
        </div>
      </CardContent>

      <CardFooter>
        <Link href={`/shop/${product.id}`} className="w-full">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
