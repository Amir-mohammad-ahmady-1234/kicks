import { Button } from "@/core/components/shadcn/ui/button";
import { Clock } from "lucide-react";
import React from "react";

const recentSearches = [
  "Men's T-Shirt",
  "Running Shoes",
  "Women's Coat",
  "Leather Bag",
  "Perfume",
];

export default function RecentSearches() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Your Recent Searches
        </h3>
        <Button variant="ghost" size="sm" className="text-xs">
          Clear All
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {recentSearches.map((search, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={() => {
              console.log("Search:", search);
            }}
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
}
