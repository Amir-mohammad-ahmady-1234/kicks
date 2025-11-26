"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/core/components/shadcn/ui/button";

export default function ProductActions() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 border rounded-md px-3 py-2">
        <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
          <Minus className="h-4 w-4" />
        </button>

        <div className="w-10 text-center">{qty}</div>

        <button onClick={() => setQty((q) => q + 1)}>
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <Button variant="outline">Add to cart</Button>
        <Button variant="secondary">Buy it now</Button>
      </div>
    </div>
  );
}
