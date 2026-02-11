"use server";

import prisma from "@/core/lib/db/client";

export async function createFavorite(
  userId: string,
  pid: string,
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    if (!userId) {
      return { success: false, error: "plase login first" };
    }

    const product = await prisma.products.findUnique({
      where: { id: pid },
    });
    if (!product) {
      return { success: false, error: "product not fund" };
    }

    let favorite = await prisma.favorite.findUnique({
      where: { userId },
    });

    if (!favorite) {
      favorite = await prisma.favorite.create({
        data: {
          userId,
        },
      });
    }

    await prisma.favoriteItem.upsert({
      where: {
        favoriteId_productId: {
          favoriteId: favorite.id,
          productId: pid,
        },
      },
      update: {},
      create: {
        favoriteId: favorite.id,
        productId: pid,
      },
    });

    return {
      success: true,
      message: "product add to favorite list",
    };
  } catch {
    return { success: false, error: "server error" };
  }
}
