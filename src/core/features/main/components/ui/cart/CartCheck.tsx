import {
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographySmall,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";

export default function CartCheck({ items }) {
  const subtotal = items.reduce((acc, item) => {
    const price = item.price * item.quantity;
    const discount = item.discount ? (price * item.discount) / 100 : 0;
    return acc + (price - discount);
  }, 0);

  const delivery = 6.99;
  const total = subtotal + delivery;

  return (
    <div className="p-6 bg-background rounded-xl border h-fit sticky top-6">
      <TypographyH3 className="mb-6">Order Summary</TypographyH3>

      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <TypographySmall>
            {items.length} item{items.length !== 1 ? "s" : ""}
          </TypographySmall>
          <TypographySmall>${subtotal.toFixed(2)}</TypographySmall>
        </div>

        <div className="flex justify-between text-sm">
          <TypographySmall>Delivery</TypographySmall>
          <TypographySmall>${delivery.toFixed(2)}</TypographySmall>
        </div>

        <div className="flex justify-between text-sm">
          <TypographySmall>Sales Tax</TypographySmall>
          <TypographySmall>—</TypographySmall>
        </div>

        <div className="flex justify-between border-t pt-4">
          <TypographyH4>Total</TypographyH4>
          <TypographyH4>${total.toFixed(2)}</TypographyH4>
        </div>

        <Button className="w-full mt-6 bg-black hover:bg-gray-900 text-white">
          Checkout
        </Button>

        <TypographyP className="text-center text-sm text-muted-foreground mt-3">
          Use a promo code
        </TypographyP>
      </div>
    </div>
  );
}
