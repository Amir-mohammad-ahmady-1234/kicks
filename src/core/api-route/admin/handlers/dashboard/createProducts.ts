"use server";
import { ProductType } from "@/core/features/admin/assets/types/Products";
import prisma from "@/core/lib/db/client";
import { Prisma } from "@prisma/client";
export async function createProducts(dataP: ProductType, sizes: string[]) {
  try {
    await prisma.products.create({
      data: {
        description: dataP.description,
        name: dataP.productName,
        price: dataP.price,
        specs: dataP.fullDescription,
        category: dataP.category,
        mainImage: dataP.mainImage,
        images: dataP.otherImages,
        gender: dataP.gender,
        discount: dataP.discount,
        size: sizes,
      },
    });
    return { success: true, message: "Product created successfully" };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const target =
          (error.meta as { target?: string[] })?.target?.[0] || "نام محصول";
        return {
          success: false,
          error: `محصول با این ${target} قبلاً وجود دارد`,
        };
      }

      if (error.code === "P2025") {
        return { success: false, error: "رکورد مورد نظر پیدا نشد" };
      }
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      return {
        success: false,
        error: "داده‌های ارسالی معتبر نیست (مثل دسته‌بندی اشتباه)",
      };
    }

    console.error("Error creating product:", error);
    return { success: false, error: "خطای سرور در ایجاد محصول" };
  }
}
