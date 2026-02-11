"use server";
import prisma from "@/core/lib/db/client";

export async function findCartUser(userId: string) {
  try {
    const cartitems = await prisma.cart.findUnique({
      where: { userId: userId },
    });
    if (!cartitems) {
      return { success: false, error: "User ID is required" };
    }

    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
    if (!cart) {
      return {
        success: false,
        error: "A shopping cart was not found for this user",
      };
    }

    return { success: true, cart };
  } catch (err) {
    console.log(err);
    return { success: false, error: "server error" };
  }
}
