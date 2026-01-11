import { Paginations } from "@/core/components/custom/ui/Pagination";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { SimpleDropdown } from "../../ui/SimpleDropdown";
import { TypographyMuted } from "../Typography";

const sorts = [
  { value: "DACE", label: "DACE" },
  { value: "ACE", label: "ACE" },
];
function FilterTabel({ setnewdata, Data, newdata, TextPlaceholder }) {
  const [search, setsearch] = useState("");

  const [sort, setSort] = useState("ACE");

  async function handelSerchItems(e) {
    setsearch(e);
  }
  async function handelSubmitSerch() {
    if (search === "" && Data.filter((items) => items.productName !== search)) {
      setnewdata(Data);
    } else {
      const a = Data.filter((items) => items.productName === search);
      setnewdata(a);
    }
  }

  async function handelSetSort(sort) {
    if (sort === "ACE") {
      setnewdata(newdata.reverse());
    }
  }
  return (
    <div className="p-1 space-x-1 flex items-center justify-start">
      <div>
        <Paginations />
      </div>
      <TypographyMuted>||</TypographyMuted>
      <div className="flex items-center  gap-1">
        <Input
          placeholder={TextPlaceholder}
          className="mb-2"
          value={search}
          onChange={(e) => handelSerchItems(e.target.value)}
        />
        <Button size="sm" variant="outline" onClick={() => handelSubmitSerch()}>
          <Search />
        </Button>
      </div>
      <TypographyMuted>||</TypographyMuted>
      <div onClick={() => handelSetSort(sort)}>
        <SimpleDropdown
          title="Sort"
          options={sorts}
          value={sort}
          onValueChange={setSort}
          placeholder="Select sort"
        />
      </div>
    </div>
  );
}

export default FilterTabel;
