"use client";
import { products } from "@/core/assets/mock/products";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { SimpleDropdown } from "@/core/components/custom/ui/SimpleDropdown";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographySmall,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import CardsProduct from "@/core/features/main/components/ui/CardProduct";
import { Heart, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
const sizes = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
  { value: "xl", label: "Extra Large" },
];
const quantityOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6+" },
];
function page() {
  const [size, setSize] = useState("md");
  const [quantity, setQuantity] = useState("1");
  return (
    <SectionLayout>
      <div>
        <TypographyH3>Saving to celebrate </TypographyH3>
        <TypographyP>
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </TypographyP>
        <TypographyP>Join us or Sign-in</TypographyP>
      </div>
      <div className="flex-col flex md:flex-row items-center w-full gap-4">
        <div className="bg-background p-4 w-full sm:w-1/2 rounded-xl">
          <div>
            <TypographyH3>Your Bag</TypographyH3>
            <TypographyP className="text-muted-foreground">
              Items in your bag not reserved- check out now to make them yours.
            </TypographyP>
          </div>
          <div className="flex">
            <ImgNormalCustom
              src={"/common/img/main/products/Rectangle1.png"}
              alt="image produt"
              width={200}
              height={200}
            />
            <div className="flex-col sm:flex-row flex p-4 ">
              <div className="space-y-4">
                <TypographyH3 className="sm:text-2xl  text-md ">
                  DROPSET TRAINER SHOES
                </TypographyH3>
                <TypographyP className="text-muted-foreground text-sm">
                  Men’s Road Running Shoes
                </TypographyP>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                  <SimpleDropdown
                    title="Size"
                    options={sizes}
                    value={size}
                    onValueChange={setSize}
                    placeholder="Select size"
                  />
                  <SimpleDropdown
                    title="Quantity"
                    options={quantityOptions}
                    value={quantity}
                    onValueChange={setQuantity}
                    placeholder="Select quantity"
                  />
                </div>
                <div className="block md:hidden">
                  <TypographyH4 className="text-primary">$130.00</TypographyH4>
                </div>
                <div className="flex items-center gap-5">
                  <Heart className="text-stone-500 " />
                  <ShoppingCart className="text-stone-500 " />
                </div>
              </div>
              <div className="hidden md:flex">
                <TypographyH4 className="text-primary">$130.00</TypographyH4>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full sm:w-1/2  flex flex-col space-y-5">
          <TypographyH3>Order Summary</TypographyH3>
          <div className="flex items-center justify-between">
            <TypographySmall>1 ITEM</TypographySmall>
            <TypographySmall className="text-stone-500">
              $130.00
            </TypographySmall>
          </div>
          <div className="flex items-center justify-between">
            <TypographySmall>Delivery </TypographySmall>
            <TypographySmall className="text-stone-500">$6.99</TypographySmall>
          </div>
          <div className="flex items-center justify-between">
            <TypographySmall>Sales Tax</TypographySmall>
            <TypographySmall className="text-stone-500">-</TypographySmall>
          </div>
          <div className="flex items-center justify-between">
            <TypographyH4>Total</TypographyH4>
            <TypographyP className="text-stone-500">$136.99</TypographyP>
          </div>
          <Button
            className="w-full bg-black/80 text-secondary  hover:bg-secondary hover:text-black  hover:border hover:border-stone-600"
            variant="secondary"
          >
            Checkout
          </Button>
          <TypographyP>User a promo code</TypographyP>
        </div>
      </div>
      <TypographyH2 className="mt-10">You may also like</TypographyH2>
      <CardsProduct products={products} />
    </SectionLayout>
  );
}

export default page;
