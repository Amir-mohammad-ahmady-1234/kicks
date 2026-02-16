"use server";

import prisma from "@/core/lib/db/client";

export async function getTickets({ userId, userRole }) {
  try {
    if (!userId) {
      return { success: false, error: "Please login first" };
    }
    await prisma.user.findUnique({ where: { id: userId } });
    let tickets;

    if (userRole === "ADMIN") {
      tickets = await prisma.ticket.findMany({
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
              role: true,
            },
          },
        },
        orderBy: {
          lastMessageAt: "desc",
        },
      });
    } else {
      tickets = await prisma.ticket.findMany({
        where: {
          userId: userId,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
              role: true,
            },
          },
        },
        orderBy: {
          lastMessageAt: "desc",
        },
      });
    }
    return { success: true, tickets };
  } catch {
    return { success: false, error: "Internal server error" };
  }
}
