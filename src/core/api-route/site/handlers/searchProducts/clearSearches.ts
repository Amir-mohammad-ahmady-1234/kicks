"use server";

import prisma from "@/core/lib/db/client";

export async function clearSearches(userId: string) {
  try {
    await prisma.searches.deleteMany({ where: { userId } });
  } catch (err) {
    console.error("Failed to get latest searches:", err);
  }
}
