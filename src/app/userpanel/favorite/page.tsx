import { getFavoriteList } from "@/core/api-route/site/handlers/favorite/getfavoritelist/getFavoriteList";
import { TypographyH4 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { ProductFavoriteCard } from "@/core/features/userpanel/components/ui/ProductFavoriteCard";
import { getUserId } from "@/core/utils/getUserId";
import { Heart } from "lucide-react";
import Link from "next/link";

async function FavoritePage() {
  const userId = await getUserId();

  const result = await getFavoriteList(userId);

  if (!result.success) {
    return (
      <section className="container mx-auto px-4 py-8">
        <TypographyH4 className="mb-6">Favorite Products</TypographyH4>
        <div className="text-center py-12">
          <p className="text-gray-500">Error loading favorite products</p>
        </div>
      </section>
    );
  }

  const favoriteItems = result.favorite?.items || [];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <TypographyH4>Favorite Products</TypographyH4>
        <span className="text-sm text-gray-500">
          {favoriteItems.length} {favoriteItems.length === 1 ? "item" : "items"}
        </span>
      </div>

      {favoriteItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 text-gray-300 mb-4">
            <Heart size={100} />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No favorites yet
          </h3>
          <p className="text-gray-500 mb-6">
            Start adding products you love to your wishlist
          </p>
          <Link href="/shop">
            <Button variant="outline">Browse Products</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {favoriteItems.map((item, i) => (
            <ProductFavoriteCard
              key={item.id}
              index={i}
              product={item.product}
              userId={userId}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoritePage;
