import { getFavoriteList } from "@/core/api-route/site/handlers/favorite/getfavoritelist/getFavoriteList";
import { TypographyH4 } from "@/core/components/custom/ui/Typography";
import FavoriteItems from "./FavoriteItems";
import HeadeFavoritePage from "./HeadeFavoritePage";

import { getUserId } from "@/core/utils/getUserId";

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
      <HeadeFavoritePage favoriteItems={favoriteItems} />

      <FavoriteItems userId={userId} favoriteItems={favoriteItems} />
    </section>
  );
}

export default FavoritePage;
