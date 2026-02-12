"use client";
import { Button } from "@/core/components/shadcn/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function HeaderEditeProduct() {
  const router = useRouter();
  return (
    <div className="flex items-center gap-4 mb-6">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <div>
        <h1 className="text-2xl font-bold">Edit Product</h1>
        <p className="text-muted-foreground">Update product information</p>
      </div>
    </div>
  );
}

export default HeaderEditeProduct;
