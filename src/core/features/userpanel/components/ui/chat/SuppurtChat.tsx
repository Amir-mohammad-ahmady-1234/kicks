"use client";

import { createMessage } from "@/core/api-route/admin/handlers/messages/createmessage/createMessage";
import { getMessage } from "@/core/api-route/admin/handlers/messages/getmessage/getMessage";
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
  Mail,
  MoreVertical,
  Paperclip,
  Phone,
  Send,
  Smile,
  UserCircle,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type User = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  email: string;
  bio: string;
  phone: string;
  country: string;
};
type MessageUserTs = {
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

function SuppurtChat({ id, userRole }) {
  const params = useParams();
  const ticketId = params.id as string;
  const [messages, setMessages] = useState<MessageUserTs[]>([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [otherUser, setOtherUser] = useState<User | null>(null);
  useEffect(() => {
    const loadMessages = async () => {
      setLoading(true);
      const result = await getMessage({
        ticketId: ticketId,
        userRole: userRole,
      });
      console.log(result);
      if (result.success) {
        setMessages(result.messages);

        if (result.ticketOwner) {
          setOtherUser({
            id: result.ticketOwner.id,
            name: result.ticketOwner.name,
            avatar: result.ticketOwner.image || "",
            role: result.ticketOwner.role,
            email: result.ticketOwner.email || "defult@gmail.com",
            phone: result.ticketOwner.phone || "no phone set",
            bio: result.ticketOwner.bio || "no bio set",
            country: result.ticketOwner.country || "no country set",
          });
        }
      } else {
        toast.error(result.error);
      }
      setLoading(false);
    };

    loadMessages();
  }, [ticketId, id, userRole]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !id) return;

    const result = await createMessage({
      content: newMessage,
      ticketId: ticketId,
      userRole: userRole,
    });

    if (result.success) {
      const updated = await getMessage({
        ticketId: ticketId,
        userRole: userRole,
      });
      if (updated.success) {
        setMessages(updated.messages);
      }
      setNewMessage("");
    } else {
      toast.error(result.error);
    }
  };
  console.log(otherUser, "sdffdff");
  const UserInfoDropdown = ({ user }: { user: User }) => (
    <DropdownMenuContent className="w-80" align="end">
      <DropdownMenuLabel className="flex items-center gap-3 p-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <TypographyP className="font-semibold">{user.name}</TypographyP>
          <TypographyP className="text-xs text-muted-foreground">
            <Badge variant="secondary" className="text-[10px] h-5">
              {user.role}
            </Badge>
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
            <TypographyP className="text-sm">{user.email}</TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Phone
            </TypographyP>
            <TypographyP className="text-sm">{user.phone}</TypographyP>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Bio
            </TypographyP>
            <TypographyP className="text-sm">{user.bio}</TypographyP>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              country
            </TypographyP>
            <TypographyP className="text-sm">{user.country}</TypographyP>
          </div>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
  return (
    <div className="flex-1 flex flex-col h-full bg-foreground w-full rounded-2xl">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={otherUser?.avatar || ""} />
            <AvatarFallback>
              {otherUser?.name?.slice(0, 2) || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <TypographyH4 className="font-semibold text-white">
              {otherUser?.name || "User"}
            </TypographyH4>
            <TypographyP className="text-xs text-muted-foreground">
              Online
            </TypographyP>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            {otherUser && <UserInfoDropdown user={otherUser} />}
          </DropdownMenu>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          messages.map((message) => {
            const isMe = message.user.id === id;
            return (
              <div
                key={message.id}
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                {!isMe && (
                  <Avatar className="h-8 w-8 mr-2 shrink-0">
                    <AvatarImage src={message.user.image || ""} />
                    <AvatarFallback>
                      {message.user.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                )}

                <div
                  className={`
                    max-w-[70%] rounded-lg p-3
                    ${
                      isMe
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-gray-100 rounded-bl-none"
                    }
                  `}
                >
                  <TypographyP className="text-sm wrap-break-words">
                    {message.content}
                  </TypographyP>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs opacity-70">
                      {new Date(message.createdAt).toLocaleTimeString()}
                    </span>

                    {message.user.role === "ADMIN" && !isMe && (
                      <Badge variant="outline" className="text-[10px] h-5">
                        Support
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="p-4 border-t border-gray-200 flex-shrink-0 bg-background">
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
    </div>
  );
}

export default SuppurtChat;
