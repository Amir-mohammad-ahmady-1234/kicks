"use client";
import React, { useState } from "react";
import Form from "next/form";
import { Input } from "@/core/components/shadcn/ui/input";
import { Textarea } from "@/core/components/shadcn/ui/textarea";
import { Gendersdata } from "@/core/features/main/components/ui/shop/FilterContentShop";
import { TypographyP } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { ClosedCaption, MoveLeft, MoveRight, X } from "lucide-react";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
function FormCreateProduct() {
  const [step, setstep] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  console.log(images);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages((prev) => [...prev, ...filesArray]);
  }
  function addSize(size: string) {
    if (size.trim() !== "") {
      setSizes([...sizes, size]);
    }
  }
  function addColor(color: string) {
    if (color.trim() !== "") {
      setColors([...colors, color]);
    }
  }
  /////////

  function handeldeletecolors(c: string) {
    setColors(colors.filter((pre) => pre !== c));
  }
  return (
    <>
      <Form action="/search">
        {step === 1 ? (
          <>
            <Input
              label="نام محصول"
              type="text"
              placeholder="نام محصول وارد کنید"
            />
            <Input
              label="توضیح کوتاه"
              type="text"
              placeholder="توضیجات محصول به صورت خلاصه بیان کنید"
            />
            <Textarea
              label="توضیح کامل"
              placeholder="توضیح محصول کامل وارد کنید"
            />
            <Input
              type="number"
              label="Price ($)"
              name="price"
              min={0}
              placeholder="100"
            />
            <Input
              type="number"
              label="discount"
              name="discount"
              min={0}
              max={100}
              placeholder="20"
            />
          </>
        ) : (
          <>
            <Input type="file" label="عکس اصلی محصول" />
            <Input
              type="file"
              accept="image/*"
              multiple
              label="عکس دیگر محصول وارد کنید"
              onChange={handleFileChange}
            />
            <div className="flex flex-wrap gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-lg overflow-hidden border shadow-sm"
                >
                  <ImgNormalCustom
                    width={50}
                    height={50}
                    src={img}
                    alt={`image-${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <TypographyP>انتخاب جنسیت</TypographyP>
            <div className="flex gap-3">
              {Gendersdata.map((size) => (
                <label
                  key={size}
                  className="flex items-center gap-2 cursor-pointer"
                >
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
            <Input
              label="لیست رنگ محصول انتخاب کنید"
              type="color"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSize(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {sizes.map((s, i) => (
                <div
                  key={i}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {s}
                </div>
              ))}
            </div>
            <Input
              label="لیست سایز محصول انتخاب کنید"
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addColor(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <div className="flex flex-wrap gap-1 mt-2">
              {colors.map((c, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="text-sm gap-2 flex items-center bg-accent p-2 rounded-md m-1 border border-black">
                    {c}
                    <div
                      className="bg-amber-500 rounded-sm hover:border hover:border-black transition duration-300"
                      onClick={() => handeldeletecolors(c)}
                    >
                      <X />
                    </div>
                  </span>
                </div>
              ))}
            </div>
            <Input
              label="دسته بندی محصول"
              placeholder="دسته بندی محصول ایجاد کنید"
              type="text"
            />
            <Button type="submit" className="w-full mt-4">
              Create Product
            </Button>
          </>
        )}
      </Form>
      <Button variant="secondary" onClick={() => setstep(step + 1)}>
        <MoveLeft />
      </Button>
      <Button variant="secondary" onClick={() => setstep(step - 1)}>
        <MoveRight />
      </Button>
    </>
  );
}

export default FormCreateProduct;
