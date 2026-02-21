import CartPage from "@/core/features/main/components/blocks/cart/CartPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "cart",
  description:
    "View your selected shoes in the Kicks Cart. Review items, update quantities, and proceed to secure checkout quickly.",
};

export default function Page() {
  return <CartPage />;
}
