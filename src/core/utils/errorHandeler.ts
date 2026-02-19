import { Prisma } from "@prisma/client";

export default function errorHandeler(error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      const target =
        (error.meta as { target?: string[] })?.target?.[0] || "Product name";
      return {
        success: false,
        error: `Product with this ${target} already exists`,
      };
    }

    if (error.code === "P2025") {
      return { success: false, error: "The requested record was not found" };
    }
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return {
      success: false,
      error: "The data submitted is not valid (e.g. wrong category)",
    };
  }

  console.error("Error creating product:", error);
  return { success: false, error: "Server error creating product" };
}
