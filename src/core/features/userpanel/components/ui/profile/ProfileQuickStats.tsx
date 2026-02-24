import { TypographyMuted } from "@/core/components/custom/ui/Typography";
import Link from "next/link";

function ProfileQuickStats({ user }) {
  const cartCount =
    user.carts?.reduce((total, cart) => total + (cart.items?.length || 0), 0) ||
    0;

  const favoriteCount = user?.favorite?.[0]?.items?.length || 0;

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6">
      <h2 className="text-xl font-semibold mb-6 text-foreground">
        Quick Stats
      </h2>

      <div className="space-y-4">
        <Link
          href="/cart"
          className="flex items-center justify-between p-4 rounded-lg transition hover:bg-muted"
        >
          <div>
            <TypographyMuted className="font-medium text-foreground">
              Cart Items
            </TypographyMuted>
            <TypographyMuted className="text-sm text-muted-foreground">
              Items in your shopping cart
            </TypographyMuted>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
            {cartCount}
          </span>
        </Link>

        <Link
          href="favorite"
          className="flex items-center justify-between p-4 rounded-lg transition hover:bg-muted"
        >
          <div>
            <TypographyMuted className="font-medium text-foreground">
              Favorites
            </TypographyMuted>
            <TypographyMuted className="text-sm text-muted-foreground">
              Saved products
            </TypographyMuted>
          </div>
          <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full font-semibold">
            {favoriteCount}
          </span>
        </Link>

        <div className="flex items-center justify-between p-4">
          <div>
            <TypographyMuted className="font-medium text-foreground">
              Member Since
            </TypographyMuted>
            <TypographyMuted className="text-sm text-muted-foreground">
              Account creation date
            </TypographyMuted>
          </div>
          <span className="text-muted-foreground font-medium">
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
