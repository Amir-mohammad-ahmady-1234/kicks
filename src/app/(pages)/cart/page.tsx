import { findCartUser } from "@/core/api-route/site/handlers/cart/findcartuser/findCartUser";
import { getUserId } from "@/core/utils/getUserId";

import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import CartCheck from "@/core/features/main/components/ui/cart/CartCheck";
import CartEmpty from "@/core/features/main/components/ui/cart/CartEmpty";
import CartItemsList from "@/core/features/main/components/ui/cart/CartItemsList";
import CartPromoBanner from "@/core/features/main/components/ui/cart/CartPromoBanner";
import CartRelatedProducts from "@/core/features/main/components/ui/cart/CartRelatedProducts";

export default async function CartPage() {
  const userId = await getUserId();
  const response = await findCartUser(userId);

  if (!response.success || !response.cart) {
    return <CartEmpty />;
  }
  const cart = response.cart;
  const items = cart.items || [];

  if (items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <SectionLayout>
      <CartPromoBanner />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-3/5 p-6 bg-background rounded-xl top-6">
          <h2 className="text-2xl font-medium mb-6">Your Bag</h2>
          <CartItemsList items={items} />
        </div>

        <div className="w-full md:w-2/5">
          <CartCheck items={items} />
        </div>
      </div>

      <CartRelatedProducts />
    </SectionLayout>
  );
}
