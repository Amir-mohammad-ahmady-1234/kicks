"use client";

import { TypographyMuted } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { useEffect, useState } from "react";

export default function ProductSizes({ product, setsizeselect }) {
  const sizes = Array.isArray(product?.size) ? product.size : [];
  console.log(sizes[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0] || null);
  useEffect(() => {
    if (selectedSize) {
      setsizeselect(selectedSize);
    }
  }, [selectedSize, setsizeselect]);
  return (
    <div>
      <TypographyMuted className="text-sm font-medium mb-2">
        Size
      </TypographyMuted>

      <div className="flex flex-wrap gap-3">
        {sizes.map((s) => (
          <Button
            key={s}
            onClick={() => setSelectedSize(s)}
            variant={selectedSize === s ? "outline" : "ghost"}
          >
            {s}
          </Button>
        ))}
      </div>
    </div>
  );
}
