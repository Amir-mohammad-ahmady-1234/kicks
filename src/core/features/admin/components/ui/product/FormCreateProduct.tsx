"use client";
import { createProducts } from "@/core/api-route/admin/handlers/dashboard/createProducts";
import { ProductType } from "@/core/api-route/admin/ts/ProductType";
import { Button } from "@/core/components/shadcn/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { categoryP } from "../../../assets/types/Products";
import ProductDashboardStep1 from "./formproduct/ProductDashboardStep1";
import ProductDashboardStep2 from "./formproduct/ProductDashboardStep2";
import ProductDashboardStep3 from "./formproduct/ProductDashboardStep3";
function FormCreateProduct() {
  const [values, setValues] = useState<ProductType>({
    productName: "",
    description: "",
    fullDescription: "",
    price: 10,
    discount: 0,
    mainImage: "",
    otherImages: [] as string[],
    gender: "men" as "men" | "women",
    category: categoryP.crocs,
  });
  ///
  const [sizes, setSizes] = useState<string[]>([]);

  const [step, setstep] = useState(1);
  ///
  async function PostProducct() {
    const res = await createProducts(values, sizes);
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.error);
    }
  }
  ///

  ////////

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          PostProducct();
        }}
      >
        {step === 1 && (
          <ProductDashboardStep1 setValues={setValues} values={values} />
        )}
        {step === 2 && (
          <ProductDashboardStep2 setValues={setValues} values={values} />
        )}
        {step === 3 && (
          <ProductDashboardStep3 setSizes={setSizes} sizes={sizes} />
        )}
      </form>
      <Button
        variant="secondary"
        onClick={() => setstep((prev) => Math.max(1, prev - 1))}
        className="mt-5"
      >
        <MoveLeft />
      </Button>

      <Button
        variant="secondary"
        onClick={() => setstep((prev) => Math.min(3, prev + 1))}
      >
        <MoveRight />
      </Button>
    </>
  );
}

export default FormCreateProduct;
