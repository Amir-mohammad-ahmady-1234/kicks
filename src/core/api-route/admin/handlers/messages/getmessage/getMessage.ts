"use server";
import prisma from "@/core/lib/db/client";
import { getUserId } from "@/core/utils/getUserId";

export async function getMessage({ ticketId, userRole }) {
  try {
    if (!ticketId) {
      return { error: "TicketId is required" };
    }

    const userId = await getUserId();
    if (!userId) {
      return { error: "User not found" };
    }

    let ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
      include: {
        user: true,
      },
    });

    if (!ticket) {
      const admin = await prisma.user.findFirst({
        where: { role: "ADMIN" },
        select: { id: true },
      });

      if (!admin) {
        return { error: "No admin found in system" };
      }

      ticket = await prisma.ticket.create({
        data: {
          id: ticketId,
          title: "Support Chat",
          status: "open",
          userId: userId,
          lastMessage: "Chat started",
          lastMessageAt: new Date(),
          unreadCount: 0,
        },

        include: {
          user: true,
        },
      });

      await prisma.message.create({
        data: {
          content: "Hello! How can I help you today?",
          ticketId: ticket.id,
          userId: admin.id,
        },
      });
    }

    if (ticket.userId !== userId && userRole !== "ADMIN") {
      return { error: "You don't have permission to view this ticket" };
    }

    const messages = await prisma.message.findMany({
      where: { ticketId: ticket.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            role: true,
            bio: true,
            country: true,
            phone: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    if (userRole === "ADMIN") {
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: { unreadCount: 0 },
      });
    }

    return {
      success: true,
      messages,
      ticketOwner: ticket.user,
    };
  } catch {
    return { error: "Internal server error" };
  }
}
