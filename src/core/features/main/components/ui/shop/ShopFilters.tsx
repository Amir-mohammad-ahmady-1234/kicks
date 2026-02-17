"use client";

import { useState } from "react";
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
      <div className="hidden md:block bg-background border border-border rounded-xl p-5 shadow-sm">
        <TypographyH3 className="mb-6">Filters</TypographyH3>
        <FilterContentShop />
      </div>

      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <Button
          onClick={() => setIsFilterOpen(true)}
          size="lg"
          className="rounded-full px-6 shadow-xl"
        >
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </Button>
      </div>

      <Drawer open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DrawerContent className="max-h-[85vh] rounded-t-2xl">
          <div className="p-5 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <DrawerTitle className="text-lg font-semibold">
                Filters
              </DrawerTitle>

              <DrawerClose>
                <Button variant="ghost" size="icon">
                  <X className="w-5 h-5" />
                </Button>
              </DrawerClose>
            </div>

            <FilterContentShop />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ShopFilters;
