import { createMessage } from "@/core/api-route/admin/handlers/messages/createmessage/createMessage";
import { toast } from "sonner";

export async function sendMessage(
  content: string,
  ticketId: string,
  userRole: string,
): Promise<{ success: boolean; error?: string }> {
  if (!content.trim()) {
    return { success: false, error: "Message cannot be empty" };
  }
  const result = await createMessage({
    content: content,
    ticketId: ticketId,
    userRole: userRole,
  });

  if (result.success) {
    return { success: true };
  } else {
    toast.error(result.error);
    return { success: false, error: result.error };
  }
}
