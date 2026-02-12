"use server";

import prisma from "@/core/lib/db/client";

export async function deleteProduct(
  pid: string,
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const existp = await prisma.products.findUnique({ where: { id: pid } });
    if (!existp) {
      return { success: false, error: "product not fund" };
    }
    await prisma.products.delete({ where: { id: pid } });

    return { success: true, message: "product deleted" };
  } catch (err) {
    console.log(err);
    return { success: false, error: "server error" };
  }
}
