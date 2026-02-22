"use client";
import Modal from "@/core/components/custom/ui/Modal";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import { ArrowRight, Search } from "lucide-react";
import React, { useState } from "react";
import { useHeader } from "../../../context/HeaderContext";
import PopularCategory from "./PopularCategory";
import RecentSearches from "./RecentSearches";
import SearchResult from "./SearchResult";

export default function SearchModal({ userId }: { userId: string }) {
  const { searchModalOpen, setSearchModalOpen } = useHeader();
  const [searchValue, setSearchValue] = useState("");
  const [searchingMode, setSearchingMode] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);

    if (e.target.value.trim().length > 2) {
      setSearchingMode(true);
    } else {
      setSearchingMode(false);
    }
  }

  return (
    <Modal
      title="Search"
      open={searchModalOpen}
      onOpenChange={setSearchModalOpen}
      hideDefaultFooter
    >
      <div className="p-2 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 mt-1 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            value={searchValue}
            onChange={handleChange}
            type="search"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-5 text-lg rounded-xl border focus:border-primary"
            autoFocus
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {!searchingMode ? (
          <>
            <RecentSearches userId={userId} />
            <PopularCategory setSearchModalOpen={setSearchModalOpen} />
          </>
        ) : (
          <SearchResult
            serachValue={searchValue.trim()}
            setSearchValue={setSearchValue}
            setSearchingMode={setSearchingMode}
            userId={userId}
          />
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
    </Modal>
  );
}
