"use client";
import React, { useState } from "react";
import { Input } from "@/core/components/shadcn/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/core/components/shadcn/ui/dialog";
import { Search, X, ArrowRight } from "lucide-react";
import { useHeader } from "../../../context/HeaderContext";
import { Button } from "@/core/components/shadcn/ui/button";
import RecentSearches from "./RecentSearches";
import PopularSearches from "./PopularSearches";
import SearchResult from "./SearchResult";

export default function SearchModal() {
  const { searchModalOpen, setSearchModalOpen } = useHeader();
  const [searchValue, setSearchValue] = useState("");
  const [searchingMode, setSearchingMode] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);

    if (e.target.value.length > 2) {
      setSearchingMode(true);
    } else {
      setSearchingMode(false);
    }
  }

  return (
    <Dialog open={searchModalOpen} onOpenChange={setSearchModalOpen}>
      <DialogContent className="max-w-full h-screen sm:max-w-150 flex flex-col p-0 gap-0">
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
              value={searchValue}
              onChange={handleChange}
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-6 text-lg rounded-xl border-2 focus:border-primary"
              autoFocus
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!searchingMode ? (
            <>
              <RecentSearches />
              <PopularSearches />
            </>
          ) : (
            <SearchResult serachValue={searchValue} />
          )}

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
