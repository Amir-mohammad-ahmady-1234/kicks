"use client";

import { Input } from "@/core/components/shadcn/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
function ActionHeader() {
  const [showisserch, setshowisserch] = useState(false);

  function handelshow() {
    setshowisserch(!showisserch);
  }
  return (
    <div className="flex  items-center gap-4 ">
      <Search className="hidden lg:flex" onClick={() => handelshow()} />
      <div
        className={`transition-all duration-300  ${
          showisserch ? "w-40 opacity-100" : "w-0 opacity-0 "
        }`}
      >
        <Input type="search" className="w-full" />
      </div>
    </div>
  );
}

export default ActionHeader;
