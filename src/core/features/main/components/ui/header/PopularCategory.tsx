import { TrendingUp } from "lucide-react";
import Link from "next/link";

const popularCategory = [
  "crocs",
  "nirkenstock",
  "clarks",
  "timberland",
  "allen",
  "oofos",
  "sorel",
  "hunter",
];

export default function PopularCategory({ setSearchModalOpen }) {
  return (
    <div>
      <h3 className="font-semibold flex items-center gap-2 mb-3">
        <TrendingUp className="h-4 w-4" />
        Trending Category
      </h3>
      <div className="flex flex-wrap gap-2">
        {popularCategory.map((search, index) => (
          <Link
            key={index}
            href={`/shop?category=${search}`}
            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
            onClick={() => {
              setSearchModalOpen(false);
            }}
          >
            {search}
          </Link>
        ))}
      </div>
    </div>
  );
}
