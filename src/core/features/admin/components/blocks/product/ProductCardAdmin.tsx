"use client";

import { Card, CardContent } from "@/core/components/shadcn/ui/card";
import { Star } from "lucide-react";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";

type ProductProps = {
  src: string;
  title: string;
  price: number;
  percentOff?: number;
  rating: number;
  inStock: boolean;
  category: string;
};

export default function ProductCardAdmin({
  src,
  title,
  price,
  percentOff,
  rating,
  inStock,
}: ProductProps) {
  const finalPrice = percentOff ? price - price * (percentOff / 100) : price;

  return (
    <Card className="flex items-center gap-4 p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-card border-muted/30">
      <CardContent className="p-0 flex  gap-1 w-full">
        <div className="w-24 h-24 overflow-hidden rounded-md flex items-center justify-center bg-muted">
          <ImgNormalCustom
            src={src}
            alt={title}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>

        <h3 className="font-semibold text-sm line-clamp-1">{title}</h3>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-3 text-xs">
            {percentOff && (
              <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-md">
                {percentOff}% OFF
              </span>
            )}

            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={14} fill="currentColor" />
              <span className="text-muted-foreground">{rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <p className="font-bold text-base">${finalPrice}</p>

            {percentOff && (
              <span className="line-through text-muted-foreground text-xs">
                ${price}
              </span>
            )}
          </div>

          {inStock ? (
            <span className="text-green-600 text-[11px] font-medium">
              In stock
            </span>
          ) : (
            <span className="text-red-500 text-[11px] font-medium">
              Out of stock
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
