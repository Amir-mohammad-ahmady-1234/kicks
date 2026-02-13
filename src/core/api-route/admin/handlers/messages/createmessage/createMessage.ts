"use server";
import prisma from "@/core/lib/db/client";

export async function createMessage({ userId, content, ticketId }) {
  try {
    if (!userId) {
      return { success: false, error: "plase login first" };
    }
    if (!content || !ticketId) {
      return { error: "Content and ticketId are required" };
    }
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      return { error: "Ticket not found" };
    }
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const message = await prisma.message.create({
      data: {
        content,
        ticketId,
        userId,
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
    });

    await prisma.ticket.update({
      where: { id: ticketId },
      data: {
        lastMessage: content,
        lastMessageAt: new Date(),
        ...(user.role !== "ADMIN" && {
          unreadCount: { increment: 1 },
        }),
      },
    });

    return { success: true, message: "Message sent", data: message };
  } catch {
    return { error: "Internal server error" };
  }
}
