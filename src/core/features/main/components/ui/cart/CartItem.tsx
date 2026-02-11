import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import {
  TypographyH4,
  TypographyP,
  TypographySmall,
} from "@/core/components/custom/ui/Typography";
import CartAction from "@/core/features/main/components/ui/cart/CartAction";
import { getProductImage } from "@/core/utils/randomImage";
import { CartItemTs } from "../../../assets/types/CartItemTs";

export default function CartItem({ item, index }: CartItemTs) {
  const itemTotal = item.price * item.quantity;
  const discountAmount = item.discount ? (itemTotal * item.discount) / 100 : 0;
  const finalPrice = itemTotal - discountAmount;

  return (
    <div className="flex flex-col sm:flex-row gap-5 border-b pb-6 last:border-b-0 bg-chart-3 rounded-sm p-2 items-center">
      <div className="w-full sm:w-32 h-32 shrink-0">
        <ImgNormalCustom
          src={getProductImage(index) || "/placeholder.png"}
          alt={item.product.name}
          width={128}
          height={128}
          className="object-cover rounded-md w-full h-full"
        />
      </div>

      <div className="flex-1 space-y-3">
        <TypographyH4 className="text-lg font-medium">
          {item.product.name}
        </TypographyH4>

        <TypographyP className="text-sm text-muted-foreground">
          {item.product.category} • Size: {item.size || "—"}
        </TypographyP>

        <div className="flex items-center gap-5 text-sm">
          <TypographySmall>Qty: {item.quantity}</TypographySmall>
          <div className="flex items-center gap-2">
            <TypographySmall className="font-medium">
              ${item.price.toFixed(2)}
            </TypographySmall>
            {item.discount && (
              <span className="text-red-600 text-sm">-{item.discount}%</span>
            )}
          </div>
        </div>

        <CartAction
          cartId={item.cartId}
          productId={item.productId}
          size={item.size}
        />
      </div>

      <div className="text-right sm:min-w-25">
        <p className="font-medium text-lg">${finalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
