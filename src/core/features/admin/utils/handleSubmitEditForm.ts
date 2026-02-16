import { updateProduct } from "@/core/api-route/site/handlers/shop/updateproduct/updateProduct";
import { toast } from "sonner";
import { HandleSubmitEditFormTS } from "../assets/types/HandleSubmitEditFormTS";

export async function handleSubmitEditForm({
  productName,
  description,
  fullDescription,
  price,
  discount,
  category,
  gender,
  selectedSizes,
  mainImage,
  params,
  router,

  setSubmitting,
}: HandleSubmitEditFormTS) {
  if (!productName.trim()) {
    toast.error("Product name is required");
    setSubmitting(false);
    return;
  } else if (productName.length < 2) {
    toast.error("Product name must be at least 2 characters");
    setSubmitting(false);
    return;
  }

  if (!description.trim()) {
    toast.error("Description is required");
    setSubmitting(false);
    return;
  } else if (description.length < 10) {
    toast.error("Description must be at least 10 characters");
    setSubmitting(false);
    return;
  }

  if (!fullDescription.trim()) {
    toast.error("Full description is required");
    setSubmitting(false);
    return;
  } else if (fullDescription.length < 20) {
    toast.error("Full description must be at least 20 characters");
    setSubmitting(false);
    return;
  }

  if (!price) {
    toast.error("Price is required");
    setSubmitting(false);
    return;
  } else if (Number(price) <= 0) {
    toast.error("Price must be greater than 0");
    setSubmitting(false);
    return;
  }

  if (discount && Number(discount) < 0) {
    toast.error("Discount must be between 0 and 100");
    setSubmitting(false);
    return;
  }

  if (selectedSizes.length === 0) {
    toast.error("At least one size is required");
    setSubmitting(false);
    return;
  }

  try {
    const result = await updateProduct(
      params.id,
      {
        productName,
        description,
        fullDescription,
        price: Number(price),
        discount: discount ? Number(discount) : 0,
        category,
        gender,
        mainImage,
      },
      selectedSizes,
    );

    if (result.success) {
      toast.success("Product updated successfully!");
      router.push("/admin/dashboard");
    } else {
      toast.error(result.error || "Failed to update product");
    }
  } catch (error) {
    console.error("Update error:", error);
    toast.error("Failed to update product");
  } finally {
    setSubmitting(false);
  }
}
