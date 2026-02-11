"use server";

import prisma from "@/core/lib/db/client";

export async function getAllUserData(userId: string) {
  try {
    if (!userId) {
      return { success: false, error: "User ID is required" };
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        carts: {
          include: {
            items: true,
          },
        },
        favorite: {
          include: {
            items: true,
          },
        },
      },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    return {
      success: true,
      user: user,
    };
  } catch (error) {
    console.error("Error getting user data:", error);
    return { success: false, error: "Server error" };
  }
}
