"use server";
import prisma from "@/core/lib/db/client";
import { notFound } from "next/navigation";

export async function findProductById(id: string) {
  try {
    const existp = await prisma.products.findUnique({ where: { id: id } });
    if (!existp) {
      return notFound();
    }
    const product = await prisma.products.findUnique({
      where: {
        id,
      },
    });
    const relatedProducts = await prisma.products.findMany({
      where: {
        category: product.category,
        id: { not: product.id },
      },
      take: 8,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        mainImage: true,
        images: true,
        name: true,
        price: true,
        discount: true,
        star: true,
      },
    });
    return {
      product,
      related: relatedProducts,
    };
  } catch {
    notFound();
  }
}
export async function findexsistProductById(id: string) {
  const findexsistProductById = await prisma.products.findUnique({
    where: { id: id },
  });
  return findexsistProductById;
}
