"use server";
import prisma from "@/core/lib/db/client";

export async function createMessage({ content, ticketId, userRole }) {
  try {
    if (!content || !ticketId) {
      return { error: "Content and ticketId are required" };
    }

    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
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

    if (!ticket) {
      return { error: "Ticket not found" };
    }

    let messageUserId;
    if (userRole === "ADMIN") {
      const admin = await prisma.user.findFirst({
        where: { role: "ADMIN" },
        select: { id: true },
      });
      messageUserId = admin?.id;
    } else {
      messageUserId = ticket.user.id;
    }

    if (!messageUserId) {
      return { error: "Sender user not found" };
    }

    const message = await prisma.message.create({
      data: {
        content,
        ticketId,
        userId: messageUserId,
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
        ...(userRole !== "ADMIN" && {
          unreadCount: { increment: 1 },
        }),
      },
    });

    return { success: true, message: "Message sent", data: message };
  } catch (error) {
    console.error("Error:", error);
    return { error: "Internal server error" };
  }
}
