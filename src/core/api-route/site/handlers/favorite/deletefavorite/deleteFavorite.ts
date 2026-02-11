"use server";

import prisma from "@/core/lib/db/client";

export async function deleteFavorite(
  userId: string,
  pid: string,
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    if (!userId) {
      return { success: false, error: "Please login first" };
    }

    const favorite = await prisma.favorite.findUnique({
      where: { userId },
    });

    if (!favorite) {
      return { success: false, error: "No favorite list found" };
    }

    await prisma.favoriteItem.delete({
      where: {
        favoriteId_productId: {
          favoriteId: favorite.id,
          productId: pid,
        },
      },
    });

    return {
      success: true,
      message: "Product removed from favorite list",
    };
  } catch {
    return { success: false, error: "Server error" };
  }
}
