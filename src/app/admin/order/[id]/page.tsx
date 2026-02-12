import FormEditProduct from "@/core/features/admin/components/ui/product/edite/FormEditProduct";

import HeaderEditeProduct from "@/core/features/admin/components/ui/product/edite/HeaderEditeProduct";

export default function EditProductPage() {
  return (
    <div className="container mx-auto py-6 max-w-4xl">
      <HeaderEditeProduct />

      <FormEditProduct />
    </div>
  );
}
