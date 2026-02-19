"use server";
import prisma from "@/core/lib/db/client";

export async function saveSearch({
  userId,
  text,
}: {
  userId: string;
  text: string;
}) {
  try {
    const normalizedText = text.trim().toLowerCase();

    const existing = await prisma.searches.findFirst({
      where: { userId, text: normalizedText },
    });

    if (existing) {
      await prisma.searches.update({
        where: { id: existing.id },
        data: { count: { increment: 1 } },
      });
    } else {
      await prisma.searches.create({
        data: { userId, text: normalizedText, count: 1 },
      });
    }
  } catch (err) {
    console.error("Failed to save search:", err);
  }
}
