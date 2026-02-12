"use server";
import prisma from "@/core/lib/db/client";
import { CreateCartTs } from "../../../ts/cart";

export async function createCart({
  userId,
  productId,
  quantity,
  size,
  price,
  discount,
}: CreateCartTs): Promise<{
  success: boolean;
  message?: string;
  error?: string;
}> {
  try {
    const product = await prisma.products.findUnique({
      where: { id: productId },
      select: {
        id: true,
        price: true,
        discount: true,
      },
    });

    if (!product) {
      return { success: false, error: "not fund product" };
    }

    const finalPrice = price ?? product.price;
    const finalDiscount = discount ?? product.discount ?? null;

    let cart = await prisma.cart.findFirst({
      where: { userId },
      include: { items: true },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId,
        },
        include: { items: true },
      });
    }

    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: productId,
        size: size ?? null,
      },
    });

    if (existingItem) {
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: { increment: quantity },
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
          size: size ?? null,
          price: finalPrice,
          discount: finalDiscount,
        },
      });
    }

    return {
      success: true,
      message: "The product has been successfully added to the cart",
    };
  } catch (error) {
    console.error("Error in createCart:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "sercer error ",
    };
  }
}
