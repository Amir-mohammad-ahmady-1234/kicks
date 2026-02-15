import { createMessage } from "@/core/api-route/admin/handlers/messages/createmessage/createMessage";
import { getMessage } from "@/core/api-route/admin/handlers/messages/getmessage/getMessage";
import { getTickets } from "@/core/api-route/admin/handlers/messages/gettickets/getTickets";
import { ChatUser, MessageUserTs, Ticket } from "../assets/types/ChatTypes";
import { toast } from "sonner";

type MessageWithDate = Omit<MessageUserTs, "createdAt"> & {
  createdAt: Date | string;
};

export async function loadMessages(
  ticketId: string,
  userRole: string,
): Promise<{
  messages: MessageUserTs[];
  ticketOwner: {
    id: string;
    name: string;
    image: string | null;
    role: string;
    email: string | null;
    phone: string | null;
    bio: string | null;
    country: string | null;
  } | null;
  success: boolean;
  error?: string;
}> {
  const result = await getMessage({
    ticketId: ticketId,
    userRole: userRole,
  });

  if (result.success) {
    // Convert Date to string for createdAt
    const formattedMessages: MessageUserTs[] = result.messages.map((msg: MessageWithDate) => ({
      ...msg,
      createdAt: msg.createdAt instanceof Date 
        ? msg.createdAt.toISOString() 
        : typeof msg.createdAt === 'string' 
        ? msg.createdAt 
        : new Date(msg.createdAt).toISOString(),
    }));

    return {
      messages: formattedMessages,
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

export function formatLastSeen(date: Date | null): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString();
}

export function formatMessageTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString();
}

export function convertTicketOwnerToChatUser(
  ticketOwner: {
    id: string;
    name: string;
    image: string | null;
    role: string;
    email: string | null;
    phone: string | null;
    bio: string | null;
    country: string | null;
  } | null,
): ChatUser | null {
  if (!ticketOwner) return null;

  return {
    id: ticketOwner.id,
    name: ticketOwner.name,
    avatar: ticketOwner.image || "",
    role: ticketOwner.role,
    email: ticketOwner.email || "default@gmail.com",
    phone: ticketOwner.phone || "no phone set",
    bio: ticketOwner.bio || "no bio set",
    country: ticketOwner.country || "no country set",
  };
}

export async function loadTickets(
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

export async function refreshMessages(
  ticketId: string,
  userRole: string,
): Promise<MessageUserTs[]> {
  const result = await getMessage({
    ticketId: ticketId,
    userRole: userRole,
  });

  if (result.success) {
    // Convert Date to string for createdAt
    const formattedMessages: MessageUserTs[] = result.messages.map((msg: MessageWithDate) => ({
      ...msg,
      createdAt: msg.createdAt instanceof Date 
        ? msg.createdAt.toISOString() 
        : typeof msg.createdAt === 'string' 
        ? msg.createdAt 
        : new Date(msg.createdAt).toISOString(),
    }));
    return formattedMessages;
  } else {
    toast.error(result.error);
    return [];
  }
}

