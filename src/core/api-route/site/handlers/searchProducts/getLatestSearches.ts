"use server";
import prisma from "@/core/lib/db/client";

export async function getLatestSearches(userId: string, limit = 10) {
  try {
    const searches = await prisma.searches.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
      take: limit,
      select: {
        text: true,
        count: true,
        updatedAt: true,
      },
    });

    return { success: true, data: searches };
  } catch (err) {
    console.error("Failed to get latest searches:", err);
    return { success: false, error: err.message };
  }
}
