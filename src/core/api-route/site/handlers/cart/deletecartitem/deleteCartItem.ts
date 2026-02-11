"use server";
import prisma from "@/core/lib/db/client";

export async function deleteCartItem(
  cartId: string,
  productId: string,
  size: string | null,
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const item = await prisma.cartItem.findUnique({
      where: {
        cartId_productId_size: {
          cartId,
          productId,
          size: size ?? null,
        },
      },
    });

    if (!item) {
      return {
        success: false,
        message: "This product with this size is not in your basket",
      };
    }

    if (item.quantity <= 1) {
      await prisma.cartItem.delete({
        where: {
          cartId_productId_size: {
            cartId,
            productId,
            size: size ?? null,
          },
        },
      });

      return { success: true, message: "delete product" };
    }

    await prisma.cartItem.update({
      where: {
        cartId_productId_size: {
          cartId,
          productId,
          size: size ?? null,
        },
      },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    });

    return {
      success: true,
      message: `The quantity reached ${item.quantity - 1}`,
    };
  } catch (err) {
    console.error("خطا در کاهش تعداد:", err);
    return {
      success: false,
      error: "server error",
    };
  }
}
