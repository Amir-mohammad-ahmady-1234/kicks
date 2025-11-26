"use client";

import { TypographyMuted } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { useState } from "react";

export default function ProductSizes({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div>
      <TypographyMuted className="text-sm font-medium mb-2">
        Size
      </TypographyMuted>

      <div className="flex flex-wrap gap-3">
        {product.sizes.map((s) => (
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
