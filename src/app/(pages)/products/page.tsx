"use client";
import { Button } from "@/core/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";
import { product } from "@/core/features/main/assets/mock/product";
import CardsProduct from "@/core/features/main/components/ui/CardProduct";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [fav, setFav] = useState(false);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="w-full h-[520px] rounded-xl overflow-hidden border">
            <Image
              src={product.images[selectedImage]}
              alt={product.title}
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setSelectedImage(i)}
                className={`rounded-md overflow-hidden border-2 ${
                  selectedImage === i
                    ? "border-primary scale-105"
                    : "border-transparent"
                } transition-transform duration-150`}
              >
                <Image
                  src={img}
                  alt={`${product.title}-${i}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-20"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <div className="text-sm text-muted-foreground mt-1">
              {product.category}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-2xl font-semibold">
              ${product.price.toFixed(2)}
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setFav((s) => !s)}
                aria-label="add to wishlist"
                className={`p-2 rounded-full border hover:shadow-md transition ${
                  fav ? "bg-red-50 border-red-300 text-red-600" : "bg-white"
                }`}
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Color</h4>
            <div className="flex items-center gap-3">
              {product.colors.map((c) => {
                const isSelected = selectedColor === c.id;
                const special = c.id === "army-green";
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c.id)}
                    title={c.label}
                    className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-shadow
                      ${
                        isSelected
                          ? "ring-2 ring-offset-2 ring-orange-400"
                          : "shadow-sm"
                      }
                    `}
                    style={{
                      backgroundColor: c.hex,
                      boxShadow: special
                        ? "0 6px 18px rgba(20,83,45,0.18)"
                        : undefined,
                    }}
                  />
                );
              })}
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Selected:{" "}
              <span className="font-medium">
                {product.colors.find((cc) => cc.id === selectedColor)?.label}
              </span>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h4 className="text-sm font-medium mb-2">Size</h4>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((s) => {
                const isSel = selectedSize === s;
                return (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-3 py-2 rounded-md border transition ${
                      isSel
                        ? "border-primary text-priborder-primary bg-accent font-medium"
                        : "border-gray-200"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity + Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border rounded-md px-3 py-2">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-1"
                aria-label="decrease"
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="w-10 text-center">{qty}</div>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-1"
                aria-label="increase"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <Button variant="outline">Add to cart</Button>

              <Button className="border" variant="secondary">
                Buy it now
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>About the product</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{product.about}</p>

              <ul className="mt-3 text-sm space-y-1 text-muted-foreground">
                <li>
                  This product is excluded from all promotional discounts and
                  offers.
                </li>
                <li>
                  Pay over time in interest-free installments with Affirm,
                  Klarna or Afterpay.
                </li>
                <li>
                  Join adiClub to get unlimited free standard shipping, returns,
                  & exchanges.
                </li>
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
        <CardsProduct products={product.related} />
      </section>
    </main>
  );
}
