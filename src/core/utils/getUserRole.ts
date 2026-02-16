"use server";

import prisma from "@/core/lib/db/client";
import { getUserId } from "./getUserId";

export async function getUserRole(): Promise<string> {
  try {
    const userId = await getUserId();
    if (!userId) return "USER";

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    return user?.role || "USER";
  } catch {
    return "USER";
  }
}
