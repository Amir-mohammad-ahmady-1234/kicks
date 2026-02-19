"use client";
import { createProducts } from "@/core/api-route/admin/handlers/dashboard/createProducts";
import { ProductType } from "@/core/api-route/admin/ts/ProductType";
import BtnSubmitForm from "@/core/components/custom/ui/BtnSubmitForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { categoryP } from "../../../assets/types/Products";
import ProductDashboardStep1 from "./formproduct/ProductDashboardStep1";
import ProductDashboardStep2 from "./formproduct/ProductDashboardStep2";
import ProductDashboardStep3 from "./formproduct/ProductDashboardStep3";

function FormCreateProduct() {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);

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
  async function handleSubmit() {
    try {
      setIsSubmit(true);
      toast.loading("Creating product...", { id: "create-product" });
      const res = await createProducts(values, sizes);
      if (res.success) {
        toast.success(res.message);

        router.push("/admin/order");
        router.refresh();
      } else {
        toast.error(res.error);
      }
    } catch {
      toast.error("error");
    } finally {
      setIsSubmit(false);
    }
  }
  ///

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
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
      <BtnSubmitForm
        isSubmit={isSubmit}
        setStep={setstep}
        step={step}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default FormCreateProduct;
