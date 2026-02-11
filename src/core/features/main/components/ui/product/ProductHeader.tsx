"use client";
import { checkFavoriteStatus } from "@/core/api-route/site/handlers/favorite/checkfavoritestatus/checkFavoriteStatus";
import { createFavorite } from "@/core/api-route/site/handlers/favorite/createfavorite/createFavorite";
import { deleteFavorite } from "@/core/api-route/site/handlers/favorite/deletefavorite/deleteFavorite";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface ProductHeaderProps {
  product: {
    title?: string;
    name?: string;
    category: string;
    price: number;
  };
  userId: string;
  pid: string;
}

export default function ProductHeader({
  product,
  userId,
  pid,
}: ProductHeaderProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkInitialStatus() {
      if (!userId) {
        setIsLoading(false);
        return;
      }

      const status = await checkFavoriteStatus(userId, pid);
      if (status.success) {
        setIsFavorite(status.isFavorite || false);
      }
      setIsLoading(false);
    }

    checkInitialStatus();
  }, [userId, pid]);

  async function handleFavoriteClick() {
    if (!userId) {
      toast.error("Please login first");
      return;
    }

    setIsLoading(true);

    if (isFavorite) {
      const result = await deleteFavorite(userId, pid);
      if (result.success) {
        setIsFavorite(false);
        toast.success(result.message);
      } else {
        toast.error(result.error);
      }
    } else {
      const result = await createFavorite(userId, pid);
      if (result.success) {
        setIsFavorite(true);
        toast.success(result.message);
      } else {
        toast.error(result.error);
      }
    }

    setIsLoading(false);
  }

  return (
    <div className="space-y-3">
      <TypographyH3 className="text-2xl font-bold">
        {product.title || product.name}
      </TypographyH3>

      <div className="text-sm text-muted-foreground">{product.category}</div>

      <div className="flex items-center gap-4">
        <div className="text-2xl font-semibold">
          ${product.price.toFixed(2)}
        </div>

        <button
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          disabled={isLoading}
          className={`ml-auto p-2 rounded-full border hover:shadow-md transition ${
            isFavorite
              ? "bg-red-50 border-red-300 text-red-600"
              : "bg-white border-gray-200 text-gray-600"
          } ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-600" : ""}`} />
        </button>
      </div>
    </div>
  );
}
