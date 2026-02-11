"use server";

import prisma from "@/core/lib/db/client";

export async function checkFavoriteStatus(
  userId: string,
  pid: string,
): Promise<{ success: boolean; isFavorite?: boolean; error?: string }> {
  try {
    if (!userId) {
      return { success: false, isFavorite: false };
    }

    const favorite = await prisma.favorite.findUnique({
      where: { userId },
      include: {
        items: {
          where: {
            productId: pid,
          },
        },
      },
    });

    const isFavorite = favorite && favorite.items.length > 0;

    return {
      success: true,
      isFavorite,
    };
  } catch {
    return { success: false, error: "Server error" };
  }
}
