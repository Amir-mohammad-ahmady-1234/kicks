import React from "react";
import { Input } from "@/core/components/shadcn/ui/input";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/core/components/shadcn/ui/dialog";
import { Search, X, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { useHeader } from "../../../context/HeaderContext";
import { Button } from "@/core/components/shadcn/ui/button";

const recentSearches = [
  "Men's T-Shirt",
  "Running Shoes",
  "Women's Coat",
  "Leather Bag",
  "Perfume",
];

const popularSearches = [
  "Special Sale",
  "Newest Products",
  "Best Sellers",
  "Discounted Items",
  "Popular Brands",
];

const suggestedProducts = [
  {
    id: 1,
    name: "Men's Printed T-Shirt",
    price: "$25.00",
    image: "/images/product-1.jpg",
  },
  {
    id: 2,
    name: "Nike Running Shoes",
    price: "$185.00",
    image: "/images/product-2.jpg",
  },
  {
    id: 3,
    name: "Women's Formal Coat",
    price: "$98.00",
    image: "/images/product-3.jpg",
  },
];

export default function SearchModal() {
  const { searchModalOpen, setSearchModalOpen } = useHeader();

  return (
    <Dialog open={searchModalOpen} onOpenChange={setSearchModalOpen}>
      <DialogContent className="sm:max-w-150 h-[80vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">Search</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchModalOpen(false)}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-6 text-lg rounded-xl border-2 focus:border-primary"
              autoFocus
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
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

          <div>
            <h3 className="font-semibold mb-3">Suggested Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {suggestedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border"
                  onClick={() => setSearchModalOpen(false)}
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-md shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">
                      {product.name}
                    </h4>
                    <p className="text-primary font-semibold mt-1">
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full py-6 border-2 border-dashed"
            onClick={() => {
              setSearchModalOpen(false);
            }}
          >
            View All Results
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
