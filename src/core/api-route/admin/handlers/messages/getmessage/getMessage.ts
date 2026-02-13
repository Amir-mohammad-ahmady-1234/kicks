"use server";
import prisma from "@/core/lib/db/client";

export async function getMessage({ userId, ticketId }) {
  try {
    if (!userId) {
      return { success: false, error: "plase login first" };
    }
    if (!ticketId) {
      return { error: "TicketId is required" };
    }
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      return { error: "Ticket not found" };
    }
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user.role !== "ADMIN" && ticket.userId !== userId) {
      return { error: "You don't have permission to view this ticket" };
    }
    const messages = await prisma.message.findMany({
      where: { ticketId },
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
        createdAt: "asc",
      },
    });
    if (user.role === "ADMIN") {
      await prisma.ticket.update({
        where: { id: ticketId },
        data: { unreadCount: 0 },
      });
    }

    return { success: true, messages };
  } catch {
    return { error: "Internal server error" };
  }
}
