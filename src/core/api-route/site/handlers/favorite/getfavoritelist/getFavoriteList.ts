"use server";

import prisma from "@/core/lib/db/client";

export async function getFavoriteList(userId: string) {
  try {
    const favoriteitems = await prisma.favorite.findUnique({
      where: { userId: userId },
    });
    if (!favoriteitems) {
      return { success: false, error: "User ID is required" };
    }

    const favorite = await prisma.favorite.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
    return {
      success: true,
      favorite,
    };
  } catch {
    return { success: false };
  }
}
