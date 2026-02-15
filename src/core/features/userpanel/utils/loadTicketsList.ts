import { getTickets } from "@/core/api-route/admin/handlers/messages/gettickets/getTickets";
import { Ticket } from "../assets/types/ChatTypes";

export async function loadTicketsList(
  userId: string,
  userRole: string,
): Promise<{ tickets: Ticket[]; success: boolean; error?: string }> {
  if (!userId) {
    return { tickets: [], success: false, error: "User ID is required" };
  }

  const result = await getTickets({
    userId,
    userRole,
  });

  if (result.success) {
    return {
      tickets: result.tickets,
      success: true,
    };
  } else {
    return {
      tickets: [],
      success: false,
      error: result.error,
    };
  }
}
