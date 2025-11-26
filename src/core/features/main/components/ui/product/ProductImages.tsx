"use client";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { useState } from "react";

export default function ProductImages({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="w-full h-[520px] rounded-xl overflow-hidden border">
        <ImgNormalCustom
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
