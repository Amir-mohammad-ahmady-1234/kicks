import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import {
  TypographyMuted,
  TypographyP,
} from "@/core/components/custom/ui/Typography";
import { Input } from "@/core/components/shadcn/ui/input";
import { Gendersdata } from "@/core/features/main/components/ui/shop/FilterContentShop";
import { Gender } from "@prisma/client";
import SelectBoxProductsDashboard from "./SelectBoxProductsDashboard";

function ProductDashboardStep2({ setValues, values }) {
  function handleFileShowImages(
    e: React.ChangeEvent<HTMLInputElement>,
    key: "mainImage" | "otherImages"
  ) {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );

    if (key === "mainImage") {
      setValues({ ...values, mainImage: filesArray[0] });
    } else {
      setValues({
        ...values,
        otherImages: [...values.otherImages, ...filesArray],
      });
    }
  }
  return (
    <>
      <Input
        type="file"
        name="mainImage"
        label="Main Image"
        onChange={(e) => handleFileShowImages(e, "mainImage")}
      />
      <Input
        type="file"
        name="otherImages"
        accept="image/*"
        multiple
        label="Other Images"
        onChange={(e) => handleFileShowImages(e, "otherImages")}
      />
      <div className="flex flex-wrap gap-3 mt-2">
        {values.otherImages.map((img, i) => (
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
      <TypographyP>Gender</TypographyP>
      <div className="flex gap-3">
        {Gendersdata.map((gender) => (
          <label
            key={gender}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={values.gender === gender}
              onChange={(e) =>
                setValues({ ...values, gender: e.target.value as Gender })
              }
            />
            <span>{gender}</span>
          </label>
        ))}
      </div>
      <TypographyP>Category</TypographyP>
      <SelectBoxProductsDashboard setValues={setValues} values={values} />
      <TypographyMuted className="flex items-center">
        select item:
        <span className="text-stone-800 font-semibold leading-7 [&:not(:first-child)]:mt-2">
          {values.category}
        </span>
      </TypographyMuted>
    </>
  );
}

export default ProductDashboardStep2;
