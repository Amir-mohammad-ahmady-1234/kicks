"use server";

import prisma from "@/core/lib/db/client";

export async function searchProducts(search: string) {
  try {
    if (!search || search.trim() === "") {
      return { success: true, data: [] };
    }

    const products = await prisma.products.findMany({
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { success: true, data: products };
  } catch (err) {
    console.error(err);
    return { success: false, error: err.message };
  }
}
