"use server";
import prisma from "@/core/lib/db/client";
import { Prisma } from "@prisma/client";
import { ProductType } from "../../ts/ProductType";
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
          (error.meta as { target?: string[] })?.target?.[0] || "product name";
        return {
          success: false,
          error: `Product with this ${target} already exists`,
        };
      }

      if (error.code === "P2025") {
        return { success: false, error: "Record not found" };
      }
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      return {
        success: false,
        error: "Invalid data submitted (e.g., wrong category)",
      };
    }

    return { success: false, error: "Server error while creating product" };
  }
}
