import { getMessage } from "@/core/api-route/admin/handlers/messages/getmessage/getMessage";
import { toast } from "sonner";
import { MessageUserTs, TicketOwnerTs } from "../assets/types/ChatTypes";

export async function loadMessages(
  ticketId: string,
  userRole: string,
): Promise<{
  messages: MessageUserTs[];
  ticketOwner: TicketOwnerTs | null;
  success: boolean;
  error?: string;
}> {
  const result = await getMessage({
    ticketId: ticketId,
    userRole: userRole,
  });

  if (result.success) {
    return {
      messages: result.messages,
      ticketOwner: result.ticketOwner,
      success: true,
    };
  } else {
    toast.error(result.error);
    return {
      messages: [],
      ticketOwner: null,
      success: false,
      error: result.error,
    };
  }
}

export function formatLastSeen(date: Date | null): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString();
}

export function formatMessageTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString();
}
