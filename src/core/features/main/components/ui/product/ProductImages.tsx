"use client";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { useState } from "react";

export default function ProductImages({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const productimages = [
    "/common/img/main/products/singlpage/p-1.png",
    "/common/img/main/products/singlpage/p-2.png",
    "/common/img/main/products/singlpage/p-3.png",
    "/common/img/main/products/singlpage/p-4.png",
  ];
  return (
    <div className="space-y-4">
      <div className="w-full sm:h-130 h-70 rounded-xl overflow-hidden border">
        <ImgNormalCustom
          src={productimages[selectedImage]}
          alt={product.title}
          width={1200}
          height={1200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {productimages.map((img, i) => (
          <button
            key={img}
            onClick={() => setSelectedImage(i)}
            className={`rounded-md overflow-hidden border-2 ${
              selectedImage === i
                ? "border-primary scale-105"
                : "border-transparent"
            } transition-transform duration-150`}
          >
            <ImgNormalCustom
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
  );
}
