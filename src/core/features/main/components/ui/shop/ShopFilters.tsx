"use client";
import React, { useState } from "react";

import { Button } from "@/core/components/shadcn/ui/button";
import { Filter, X } from "lucide-react";
import {
  DrawerClose,
  DrawerContent,
  Drawer,
  DrawerTitle,
} from "@/core/components/shadcn/ui/drawer";
import FilterContentShop from "./FilterContentShop";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";

function ShopFilters() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <>
      <div className="hidden md:block ">
        <TypographyH3>Filters</TypographyH3>

        <FilterContentShop />
      </div>
      <div className="md:hidden fixed bottom-4 left-1/5 -translate-x-1/2 z-40">
        <Button
          onClick={() => setIsFilterOpen(true)}
          size="lg"
          className="shadow-lg"
        >
          <Filter className="w-5 h-5 ml-2" />
          Filters
        </Button>
      </div>
      <Drawer open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DrawerContent className="max-h-[85vh]">
          <div className="p-5 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <DrawerTitle>Filters</DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="sm">
                  <X className="w-5 h-5" />
                </Button>
              </DrawerClose>
            </div>
            <FilterContentShop />
            <div className="space-y-6">
              <div className="flex gap-3 pt-4">
                <Button
                  className="flex-1"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply filter
                </Button>
                <Button variant="outline" className="flex-1">
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ShopFilters;
