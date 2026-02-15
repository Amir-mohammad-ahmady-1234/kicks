export type ChatUser = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  email: string;
  bio: string;
  phone: string;
  country: string;
};

export type MessageUserTs = {
  id: string;
  content: string;
  createdAt: string;
  userId: string;
  ticketId: string;
  user: {
    id: string;
    name: string;
    image: string | null;
    role: string;
  };
};

export type Ticket = {
  id: string;
  lastMessage: string | null;
  lastMessageAt: Date | null;
  unreadCount: number;
  user: {
    id: string;
    name: string | null;
    image: string | null;
    role: string;
  };
};

export type SuppurtChatProps = {
  id: string;
  userRole: string;
};

export type SideBarChatProps = {
  userId: string;
  userRole: string;
};

