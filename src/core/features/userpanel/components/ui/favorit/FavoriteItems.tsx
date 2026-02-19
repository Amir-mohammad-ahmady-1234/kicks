import { Button } from "@/core/components/shadcn/ui/button";
import { ProductFavoriteCard } from "@/core/features/userpanel/components/ui/ProductFavoriteCard";
import { Heart } from "lucide-react";
import Link from "next/link";
function FavoriteItems({ favoriteItems, userId }) {
  return (
    <>
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
    </>
  );
}

export default FavoriteItems;
