"use server";

import prisma from "@/core/lib/db/client";

export async function findAllProduct() {
  try {
    const product = await prisma.products.findMany();

    return {
      product,
    };
  } catch {
    console.log("server error");
  }
}
