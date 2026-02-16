import { TypographyMuted } from "@/core/components/custom/ui/Typography";
import Link from "next/link";

function ProfileQuickStats({ user }) {
  const cartCount =
    user.carts?.reduce((total, cart) => total + (cart.items?.length || 0), 0) ||
    0;
  const favoriteCount = user?.favorite[0]?.items?.length || 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6">Quick Stats</h2>

      <div className="space-y-4">
        <Link
          href="/cart"
          className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition"
        >
          <div>
            <TypographyMuted className="font-medium">
              Cart Items
            </TypographyMuted>
            <TypographyMuted className="text-sm text-gray-500">
              Items in your shopping cart
            </TypographyMuted>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
            {cartCount}
          </span>
        </Link>

        <Link
          href="favorite"
          className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition"
        >
          <div>
            <TypographyMuted className="font-medium">Favorites</TypographyMuted>
            <TypographyMuted className="text-sm text-gray-500">
              Saved products
            </TypographyMuted>
          </div>
          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full font-semibold">
            {favoriteCount}
          </span>
        </Link>

        <div className="flex items-center justify-between p-4">
          <div>
            <TypographyMuted className="font-medium">
              Member Since
            </TypographyMuted>
            <TypographyMuted className="text-sm text-gray-500">
              Account creation date
            </TypographyMuted>
          </div>
          <span className="text-gray-600 font-medium">
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileQuickStats;
