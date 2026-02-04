import { Paginations } from "@/core/components/custom/ui/Pagination";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SimpleDropdown } from "../../ui/SimpleDropdown";
import { TypographyMuted } from "../Typography";
import MoreFilterModal from "./MoreFilterModal";

const sorts = [
  { value: "ASE", label: "ASE" },
  { value: "DASE", label: "DASE" },
];

function FilterTabel({
  TextPlaceholder,
  ShowMoreFilter,
  ItemsCategory,
  ItemsGender,
  ItemsSize,
  pagination,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setsearch] = useState("");

  const [sort, setSort] = useState("ASE");
  async function handelSerchItems(e) {
    setsearch(e);
  }
  async function handelSubmitSerch() {
    const params = new URLSearchParams(searchParams.toString());
    if (search === "") {
      params.delete("search");
    } else {
      params.set("search", search);
    }
    router.push(`?${params.toString()}`);
  }
  async function handelSetSort(sort) {
    const params = new URLSearchParams(searchParams.toString());
    const issort = params.get("sortOrder");
    if (issort === sort.toLowerCase()) {
      params.delete("sortOrder");
    } else {
      params.set("sortOrder", sort.toLowerCase());
    }
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap justify-between items-center p-1">
      <div className="p-1 flex-wrap space-x-1 flex items-center justify-start">
        <div>
          <Paginations pagination={pagination} />
        </div>
        <TypographyMuted>||</TypographyMuted>
        <div className="flex items-center  gap-1">
          <Input
            placeholder={TextPlaceholder}
            className="mb-2"
            value={search}
            onChange={(e) => handelSerchItems(e.target.value)}
          />
          <Button
            size="sm"
            variant="outline"
            onClick={() => handelSubmitSerch()}
          >
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
      {ShowMoreFilter && (
        <MoreFilterModal
          ItemsCategory={ItemsCategory}
          ItemsGender={ItemsGender}
          ItemsSize={ItemsSize}
        />
      )}
    </div>
  );
}

export default FilterTabel;
