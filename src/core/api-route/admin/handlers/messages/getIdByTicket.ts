"use server";

import prisma from "@/core/lib/db/client";

export async function getIdByTicket({ ticketId }: { ticketId: string }) {
  try {
    const finduser = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });
    const id = finduser.userId;

    return { success: true, id };
  } catch {
    return { success: false, error: "Internal server error" };
  }
}
