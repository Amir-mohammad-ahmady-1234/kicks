import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import {
  TypographyH3,
  TypographyP,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";

export default function CartEmpty() {
  return (
    <SectionLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <ShoppingBag
          className="w-20 h-20 text-muted-foreground mb-6"
          strokeWidth={1}
        />
        <TypographyH3 className="mb-3">Your bag is empty</TypographyH3>
        <TypographyP className="text-muted-foreground mb-8 max-w-md">
          Discover something you love and add it to your cart.
        </TypographyP>
        <Button size="lg" asChild>
          <Link href="/">Explore Products</Link>
        </Button>
      </div>
    </SectionLayout>
  );
}
