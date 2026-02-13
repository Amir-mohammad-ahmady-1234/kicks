// app/support/[id]/page.tsx
"use client";

import {
  TypographyH4,
  TypographyP,
} from "@/core/components/custom/ui/Typography";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/core/components/shadcn/ui/avatar";
import { Badge } from "@/core/components/shadcn/ui/badge";
import { Button } from "@/core/components/shadcn/ui/button";
import { Card, CardContent } from "@/core/components/shadcn/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/core/components/shadcn/ui/dropdown-menu";
import { Input } from "@/core/components/shadcn/ui/input";
import {
  Ban,
  Calendar,
  Check,
  CheckCheck,
  Clock,
  Download,
  FileText,
  Flag,
  Mail,
  MoreVertical,
  Paperclip,
  Phone,
  Send,
  Shield,
  Smile,
  Tag,
  Ticket,
  Trash2,
  UserCircle,
  Users,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastSeen: string;
  unreadCount: number;
  online: boolean;
  typing?: boolean;
  email?: string;
  phone?: string;
  role?: string;
  tickets?: number;
  joinedDate?: string;
  department?: string;
};

type Message = {
  id: number;
  userId: number;
  text: string;
  time: string;
  isMe: boolean;
  status: "sent" | "delivered" | "read";
};

// Just one user
const users: User[] = [
  {
    id: 1,
    name: "Ali Mohammadi",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "When will you deliver the project?",
    lastSeen: "now",
    unreadCount: 3,
    online: true,
    email: "ali.mohammadi@email.com",
    phone: "+98 912 345 6789",
    role: "Premium User",
    tickets: 5,
    joinedDate: "2023-04-05",
    department: "Technical Support",
  },
];

const messagesData: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      userId: 1,
      text: "Hi, how are you?",
      time: "10:30",
      isMe: false,
      status: "read",
    },
    {
      id: 2,
      userId: 1,
      text: "I'm good, thanks! You?",
      time: "10:31",
      isMe: true,
      status: "read",
    },
    {
      id: 3,
      userId: 1,
      text: "When will you deliver the project?",
      time: "10:32",
      isMe: false,
      status: "read",
    },
    {
      id: 4,
      userId: 1,
      text: "It will be ready by the end of the week",
      time: "10:33",
      isMe: true,
      status: "delivered",
    },
    {
      id: 5,
      userId: 1,
      text: "OK, thanks 👍",
      time: "10:34",
      isMe: false,
      status: "read",
    },
  ],
};

function SupportChatPage() {
  const params = useParams();
  const userId = parseInt(params.id as string);

  const [selectedUser, setSelectedUser] = useState<User | null>(
    users.find((u) => u.id === userId) || users[0],
  );

  const [messages, setMessages] = useState<Message[]>(
    messagesData[userId] || messagesData[1] || [],
  );
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedUser) return;

    const newMsg: Message = {
      id: messages.length + 1,
      userId: selectedUser.id,
      text: newMessage,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      isMe: true,
      status: "sent",
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  useEffect(() => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      setSelectedUser(user);
      setMessages(messagesData[userId] || []);
    }
  }, [userId]);

  const MessageStatusIcon = ({ status }: { status: string }) => {
    if (status === "sent")
      return <Clock className="h-3 w-3 text-muted-foreground" />;
    if (status === "delivered")
      return <Check className="h-3 w-3 text-muted-foreground" />;
    if (status === "read")
      return <CheckCheck className="h-3 w-3 text-blue-500" />;
    return null;
  };

  const UserInfoDropdown = ({ user }: { user: User }) => (
    <DropdownMenuContent className="w-80" align="end">
      <DropdownMenuLabel className="flex items-center gap-3 p-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <TypographyP className="font-semibold">{user.name}</TypographyP>
          <TypographyP className="text-xs text-muted-foreground flex items-center gap-1">
            <Badge
              variant={user.online ? "default" : "secondary"}
              className="text-[10px] h-5"
            >
              {user.online ? "Online" : "Offline"}
            </Badge>
            {user.role && <span>• {user.role}</span>}
          </TypographyP>
        </div>
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <UserCircle className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Username
            </TypographyP>
            <TypographyP className="text-sm">{user.name}</TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Email
            </TypographyP>
            <TypographyP className="text-sm">
              {user.email || "example@email.com"}
            </TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Phone
            </TypographyP>
            <TypographyP className="text-sm">
              {user.phone || "+98 912 345 6789"}
            </TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Join Date
            </TypographyP>
            <TypographyP className="text-sm">
              {user.joinedDate || "2023-01-01"}
            </TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Tag className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              User Role
            </TypographyP>
            <TypographyP className="text-sm">
              {user.role || "Regular User"}
            </TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Department
            </TypographyP>
            <TypographyP className="text-sm">
              {user.department || "Support"}
            </TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Ticket className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Active Tickets
            </TypographyP>
            <TypographyP className="text-sm">
              {user.tickets || "2"} tickets
            </TypographyP>
          </div>
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem className="cursor-pointer">
          <FileText className="h-4 w-4 mr-2" />
          <span>View Files</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Download className="h-4 w-4 mr-2" />
          <span>Download Chat History</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Flag className="h-4 w-4 mr-2" />
          <span>Report User</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem className="cursor-pointer text-amber-600">
          <Ban className="h-4 w-4 mr-2" />
          <span>Block User</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-600">
          <Trash2 className="h-4 w-4 mr-2" />
          <span>Delete Conversation</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );

  return (
    <div className="flex-1 flex flex-col bg-background">
      {selectedUser ? (
        <>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={selectedUser.avatar} />
                <AvatarFallback>{selectedUser.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <TypographyH4 className="font-semibold">
                  {selectedUser.name}
                </TypographyH4>
                <TypographyP className="text-xs text-muted-foreground">
                  {selectedUser.online ? "Online" : selectedUser.lastSeen}
                </TypographyP>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <UserInfoDropdown user={selectedUser} />
              </DropdownMenu>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
                    max-w-[70%] rounded-lg p-3 relative group
                    ${
                      message.isMe
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-gray-100 rounded-bl-none"
                    }
                  `}
                >
                  <TypographyP className="text-sm">{message.text}</TypographyP>
                  <div
                    className={`
                      flex items-center gap-1 mt-1 text-xs
                      ${message.isMe ? "justify-end" : "justify-start"}
                      ${message.isMe ? "text-primary-foreground/70" : "text-muted-foreground"}
                    `}
                  >
                    <span>{message.time}</span>
                    {message.isMe && (
                      <MessageStatusIcon status={message.status} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                <Smile className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="h-9 w-9 shrink-0"
                disabled={!newMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <Card className="w-96">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <TypographyH4 className="text-lg font-semibold mb-2">
                No User Selected
              </TypographyH4>
              <TypographyP className="text-sm text-muted-foreground">
                Select a user from the list to start chatting
              </TypographyP>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default SupportChatPage;
