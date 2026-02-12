"use client";

import { findProductById } from "@/core/api-route/site/handlers/shop/findproductbyid/findProductById";
import { handleSubmitEditForm } from "@/core/features/admin/utils/handleSubmitEditForm";
import { categoryP, Gender } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductEditDescription from "./ProductEditDescription";
import ProductEditInfo from "./ProductEditInfo";
import ProductEditSize from "./ProductEditSize";
import SubmitProductEdit from "./SubmitProductEdit";

function FormEditProduct() {
  const params = useParams();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState<categoryP>("crocs");
  const [gender, setGender] = useState<Gender>("men");

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [newSize, setNewSize] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await findProductById(params.id as string);
        if (result?.product) {
          const product = result.product;

          setProductName(product.name || "");
          setDescription(product.description || "");
          setFullDescription(product.specs || "");
          setPrice(product.price?.toString() || "");
          setDiscount(product.discount?.toString() || "0");
          setCategory(product.category || "crocs");
          setGender(product.gender || "men");
          setSelectedSizes(product.size as string[]);
        } else {
          toast.error("Failed to load product");
          router.push("/admin/dashboard");
        }
      } catch {
        toast.error("Error loading product");
        router.push("/admin/dashboard");
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id, router]);

  function handleAddSize() {
    if (newSize && !selectedSizes.includes(newSize)) {
      setSelectedSizes([...selectedSizes, newSize]);
      setNewSize("");
    }
  }

  function handleRemoveSize(size: string) {
    setSelectedSizes(selectedSizes.filter((s) => s !== size));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    await handleSubmitEditForm({
      productName,
      description,
      fullDescription,
      price,
      discount,
      category,
      gender,
      selectedSizes,
      params: { id: params.id as string },
      router,
      setSubmitting,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ProductEditInfo
        category={category}
        productName={productName}
        setProductName={setProductName}
        price={price}
        setPrice={setPrice}
        discount={discount}
        setDiscount={setDiscount}
        setCategory={setCategory}
        gender={gender}
        setGender={setGender}
      />

      <ProductEditDescription
        description={description}
        setDescription={setDescription}
        fullDescription={fullDescription}
        setFullDescription={setFullDescription}
      />

      <ProductEditSize
        setNewSize={setNewSize}
        selectedSizes={selectedSizes}
        handleAddSize={handleAddSize}
        newSize={newSize}
        handleRemoveSize={handleRemoveSize}
      />

      <SubmitProductEdit router={router} submitting={submitting} />
    </form>
  );
}

export default FormEditProduct;
