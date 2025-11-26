"use client";
import { TypographyMuted } from "@/core/components/custom/ui/Typography";
import { useState } from "react";

export default function ProductColors({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);

  return (
    <div>
      <TypographyMuted className="text-sm font-medium mb-2">
        Color
      </TypographyMuted>

      <div className="flex items-center gap-3">
        {product.colors.map((c) => {
          const special = c.id === "army-green";

          return (
            <button
              key={c.id}
              onClick={() => setSelectedColor(c.id)}
              className={`w-9 h-9 rounded-full border-2 transition-shadow ${
                selectedColor === c.id
                  ? "ring-2 ring-offset-2 ring-orange-400"
                  : "shadow-sm"
              }`}
              style={{
                backgroundColor: c.hex,
                boxShadow: special
                  ? "0 6px 18px rgba(20,83,45,0.18)"
                  : undefined,
              }}
            />
          );
        })}
      </div>

      <div className="mt-2 text-xs text-muted-foreground">
        Selected:{" "}
        <TypographyMuted className="font-medium">
          {product.colors.find((x) => x.id === selectedColor)?.label}
        </TypographyMuted>
      </div>
    </div>
  );
}
