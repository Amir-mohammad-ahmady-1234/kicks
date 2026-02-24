import { TypographyP } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import { listitems } from "@/core/features/admin/assets/mock/listitems";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const category = [
  "crocs",
  "nirkenstock",
  "clarks",
  "timberland",
  "allen",
  "oofos",
  "sorel",
  "hunter",
];

export const Gendersdata = ["men", "women"];
const discountFilter = ["all", "discount", "no-discount"];

export default function FilterContentShop() {
  const searchparams = useSearchParams();
  const ruote = useRouter();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  function applyPriceFilter() {
    const params = new URLSearchParams(searchparams.toString());

    if (minPrice && Number(minPrice) > 0) {
      params.set("minPrice", minPrice);
    } else {
      params.delete("minPrice");
    }

    if (maxPrice && Number(maxPrice) > 0) {
      params.set("maxPrice", maxPrice);
    } else {
      params.delete("maxPrice");
    }

    params.delete("page");
    ruote.push(`?${params.toString()}`, { scroll: false });
  }

  function handelSelectItem(name: string, value: string) {
    const params = new URLSearchParams(searchparams.toString());
    const isparams = params.get(name.toLowerCase());

    if (isparams === value.toLowerCase()) {
      params.delete(name.toLowerCase());
    } else {
      params.set(name.toLowerCase(), value.toLowerCase());
    }

    params.delete("page");
    const newUrl = `?${params.toString()}`;
    ruote.push(newUrl, { scroll: false });
  }

  function isActive(name: string, value: string) {
    const current = searchparams.get(name.toLowerCase());
    return current === value.toLowerCase();
  }

  return (
    <div className="space-y-6">
      <TypographyP className="font-bold">Gender</TypographyP>
      <div className="flex flex-wrap gap-3">
        {Gendersdata.map((item) => (
          <Button
            key={item}
            className={
              isActive("gender", item)
                ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90 transition-colors"
                : "border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            }
            variant="outline"
            onClick={() => handelSelectItem("gender", item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Button>
        ))}
      </div>

      <TypographyP className="font-bold">Discount</TypographyP>
      <div className="flex flex-wrap gap-3">
        {discountFilter.map((item) => (
          <Button
            key={item}
            className={
              isActive("discountFilter", item)
                ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90 transition-colors"
                : "border-border bg-background hover:bg-secondary hover:text-secondary-foreground transition-colors"
            }
            size="sm"
            variant="outline"
            onClick={() => handelSelectItem("discountFilter", item)}
          >
            {item === "all"
              ? "All"
              : item === "discount"
                ? "With Discount"
                : "No Discount"}
          </Button>
        ))}
      </div>

      <TypographyP className="font-bold">Size</TypographyP>
      <div className="grid grid-cols-7 gap-2">
        {listitems.map((size) => (
          <Button
            key={size}
            className={
              isActive("size", size)
                ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90 transition-colors"
                : "border-border bg-background hover:bg-secondary hover:text-secondary-foreground transition-colors"
            }
            variant="outline"
            onClick={() => handelSelectItem("size", size)}
          >
            {size}
          </Button>
        ))}
      </div>

      <TypographyP className="font-bold">Category</TypographyP>
      <div className="grid grid-cols-3 gap-1">
        {category.map((cat) => (
          <Button
            key={cat}
            className={
              isActive("category", cat)
                ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90 transition-colors"
                : "border-border bg-background hover:bg-secondary hover:text-secondary-foreground transition-colors"
            }
            variant="outline"
            onClick={() => handelSelectItem("category", cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </div>

      <TypographyP className="font-bold">Price</TypographyP>
      <div className="flex gap-3 items-center">
        <div className="flex-1">
          <label className="text-sm text-muted-foreground">Min</label>
          <Input
            type="number"
            placeholder="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            min={0}
            className="border-border focus:border-ring focus:ring-ring"
          />
        </div>

        <div className="flex-1">
          <label className="text-sm text-muted-foreground">Max</label>
          <Input
            type="number"
            placeholder="∞"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            min={0}
            className="border-border focus:border-ring focus:ring-ring"
          />
        </div>
      </div>

      <Button
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        variant="default"
        onClick={applyPriceFilter}
      >
        Apply Price Filter
      </Button>
    </div>
  );
}
