"use client";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function ProductHeader({ product }) {
  const [fav, setFav] = useState(false);

  return (
    <div className="space-y-3">
      <TypographyH3 className="text-2xl font-bold">
        {product.title}
      </TypographyH3>

      <div className="text-sm text-muted-foreground">{product.category}</div>

      <div className="flex items-center gap-4">
        <div className="text-2xl font-semibold">
          ${product.price.toFixed(2)}
        </div>

        <button
          onClick={() => setFav((s) => !s)}
          aria-label="add to wishlist"
          className={`ml-auto p-2 rounded-full border hover:shadow-md transition ${
            fav ? "bg-red-50 border-red-300 text-red-600" : "bg-white"
          }`}
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
