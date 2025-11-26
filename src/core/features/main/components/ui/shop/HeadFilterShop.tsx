import React from "react";
import {
  TypographyH2,
  TypographySmall,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { ChevronDown } from "lucide-react";
function HeadFilterShop() {
  return (
    <div className="flex items-center justify-between mt-10 mb-10">
      <div className="flex flex-col">
        <TypographyH2>Life Style Shoes</TypographyH2>
        <TypographySmall>122 items</TypographySmall>
      </div>
      <Button className="flex" variant="outline" size="lg">
        Trending
        <ChevronDown />
      </Button>
    </div>
  );
}

export default HeadFilterShop;
