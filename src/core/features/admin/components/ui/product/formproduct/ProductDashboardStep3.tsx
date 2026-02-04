import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import { X } from "lucide-react";
import { useState } from "react";

function ProductDashboardStep3({ setSizes, sizes }) {
  const [sizeInput, setSizeInput] = useState<string>("");
  const addSize = (value: string) => {
    if (!value.trim()) return;
    setSizes((prev) => [...prev, value]);
  };
  function handeldeletesizes(val: string) {
    setSizes((prv) => prv.filter((c) => c !== val));
  }

  return (
    <>
      <Input
        label="Add Size"
        name="sizes"
        value={sizeInput}
        type="text"
        onChange={(e) => setSizeInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addSize(sizeInput);
            setSizeInput("");
          }
        }}
      />
      <div className="flex flex-wrap gap-2 mt-2">
        {sizes.map((s, i) => (
          <div
            key={i}
            className="px-3 py-1 flex items-center rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            {s}
            <div
              className="rounded-sm hover:border hover:border-black transition duration-300"
              onClick={() => handeldeletesizes(s)}
            >
              <X />
            </div>
          </div>
        ))}
      </div>
      <Button type="submit" className="w-full mt-4">
        Create Product
      </Button>
    </>
  );
}

export default ProductDashboardStep3;
