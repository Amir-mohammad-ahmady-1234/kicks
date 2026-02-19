import { TrendingUp } from "lucide-react";
import React from "react";

const popularSearches = [
  "Special Sale",
  "Newest Products",
  "Best Sellers",
  "Discounted Items",
  "Popular Brands",
];

export default function PopularSearches() {
  return (
    <div>
      <h3 className="font-semibold flex items-center gap-2 mb-3">
        <TrendingUp className="h-4 w-4" />
        Trending Searches
      </h3>
      <div className="flex flex-wrap gap-2">
        {popularSearches.map((search, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
            onClick={() => {
              console.log("Popular search:", search);
            }}
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
}
