import { TypographyH1 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";

function HeadeCardProduct() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between justify-center sm:items-end items-endpy-5">
      <TypographyH1 className="font-semibold flex flex-col sm:items-start items-center -tracking-tighter text-center">
        Don’t miss out <span>new drops</span>
      </TypographyH1>
      <Button className="mb-2">Shop New Drops 🛍️</Button>
    </div>
  );
}

export default HeadeCardProduct;
