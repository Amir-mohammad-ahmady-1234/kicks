import { TypographyH4 } from "@/core/components/custom/ui/Typography";

function HeadeFavoritePage({ favoriteItems }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <TypographyH4>Favorite Products</TypographyH4>
      <span className="text-sm text-gray-500">
        {favoriteItems.length} {favoriteItems.length === 1 ? "item" : "items"}
      </span>
    </div>
  );
}

export default HeadeFavoritePage;
