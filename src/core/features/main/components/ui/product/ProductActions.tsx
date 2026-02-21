"use client";

import { createCart } from "@/core/api-route/site/handlers/cart/createcart/createCart";
import { Button } from "@/core/components/shadcn/ui/button";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function ProductActions({ sizeselect, idp, userid }) {
  const [qty, setQty] = useState(1);
  const route = useRouter();
  async function handelSubmit() {
    if (!userid) {
      return toast.error("Please log-in first 🌱");
    }
    const additem = await createCart({
      userId: userid,
      productId: idp,
      quantity: qty,
      size: sizeselect,
    });
    if (additem.success === true) {
      toast.message(additem.message);
    } else {
      toast.error(additem.error);
    }
  }
  async function handelSubmitNow() {
    if (!userid) {
      return toast.error("Please log-in first 🌱");
    }
    const additem = await createCart({
      userId: userid,
      productId: idp,
      quantity: 1,
      size: sizeselect,
    });
    if (additem.success === true) {
      toast.message(additem.message);
      route.push("/cart");
    } else {
      toast.error(additem.error);
    }
  }
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <div className="flex items-center gap-2 border rounded-md px-3 py-2">
        <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
          <Minus className="h-4 w-4" />
        </button>

        <div className="w-10 text-center">{qty}</div>

        <button onClick={() => setQty((q) => q + 1)}>
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center w-full gap-3 ml-auto">
        <div className="w-full">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handelSubmit()}
          >
            Add to cart
          </Button>
        </div>
        <div className="w-full">
          <Button
            variant="secondary"
            className="w-full bg-muted"
            onClick={() => handelSubmitNow()}
          >
            Buy it now
          </Button>
        </div>
      </div>
    </div>
  );
}
