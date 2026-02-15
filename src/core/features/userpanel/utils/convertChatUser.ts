import { ChatUser } from "../assets/types/ChatTypes";

export function convertChatUser(
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
