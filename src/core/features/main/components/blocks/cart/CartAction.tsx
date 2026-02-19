"use client";
import { deleteCartItem } from "@/core/api-route/site/handlers/cart/deletecartitem/deleteCartItem";
import { Heart, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function CartAction({ cartId, productId, size }) {
  const route = useRouter();
  async function handelItem(cartId, productId, size) {
    const result = await deleteCartItem(cartId, productId, size);
    if (result) {
      toast.message(result.message);
    } else {
      toast.error(result.error);
    }
    route.refresh();
  }
  return (
    <div className="flex items-center gap-4 mt-2">
      <Trash2
        size={18}
        className="hover:text-red-500"
        onClick={() => handelItem(cartId, productId, size)}
      />
      <Heart size={18} className="hover:text-red-500" />
    </div>
  );
}

export default CartAction;
