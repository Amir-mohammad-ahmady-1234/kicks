"use server";
import { ProductType } from "@/core/api-route/admin/ts/ProductType";
import prisma from "@/core/lib/db/client";
import { Prisma } from "@prisma/client";

export async function updateProduct(
  productId: string,
  dataP: ProductType,
  sizes: string[],
) {
  try {
    const existingProduct = await prisma.products.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return { success: false, error: "Product not found" };
    }

    await prisma.products.update({
      where: { id: productId },
      data: {
        description: dataP.description,
        name: dataP.productName,
        price: dataP.price,
        specs: dataP.fullDescription,
        category: dataP.category,
        gender: dataP.gender,
        discount: dataP.discount,
        size: sizes,
        updatedAt: new Date(),
      },
    });

    return { success: true, message: "Product updated successfully" };
  } catch (error) {
    console.log("Error updating product:", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const target =
          (error.meta as { target?: string[] })?.target?.[0] || "product name";
        return {
          success: false,
          error: `Product with this ${target} already exists`,
        };
      }

      if (error.code === "P2025") {
        return { success: false, error: "Product not found" };
      }

      if (error.code === "P2003") {
        return { success: false, error: "Invalid category or gender value" };
      }
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      return {
        success: false,
        error: "Invalid data format submitted",
      };
    }

    return { success: false, error: "Server error while updating product" };
  }
}
