import { TypographyP } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";

const colors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-gray-700",
];
const sizes = ["Casual shoes", "Runners", "Hiking", "Soccer", "Tennis", "Golf"];
export const Gendersdata = ["men", "women"];
export default function FilterContentShop() {
  return (
    <div className="space-y-6">
      <TypographyP className="font-bold">Refine by</TypographyP>
      <div className="flex flex-wrap gap-3">
        <Button variant="default">Mens</Button>
        <Button variant="default">Casual</Button>
      </div>

      <TypographyP className="font-bold">Size</TypographyP>
      <div className="grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
          <Button key={size} variant="outline">
            {size}
          </Button>
        ))}
      </div>

      <TypographyP className="font-bold">Color</TypographyP>
      <div className="grid grid-cols-5 gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`${color} w-10 h-10 rounded cursor-pointer hover:ring-2 ring-offset-1 ring-primary`}
          ></div>
        ))}
      </div>
      <TypographyP className="font-bold">Size</TypographyP>
      <div className="flex flex-col gap-1">
        {sizes.map((size) => (
          <label key={size} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="size"
              value={size}
              className="accent-primary"
            />
            <span>{size}</span>
          </label>
        ))}
      </div>
      <TypographyP className="font-bold">Gender</TypographyP>
      <div className="flex flex-col gap-1">
        {Gendersdata.map((size) => (
          <label key={size} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="size"
              value={size}
              className="accent-primary"
            />
            <span>{size}</span>
          </label>
        ))}
      </div>
      <TypographyP className="font-bold">Price</TypographyP>
      <Input type="range" name="" id="" />
    </div>
  );
}
