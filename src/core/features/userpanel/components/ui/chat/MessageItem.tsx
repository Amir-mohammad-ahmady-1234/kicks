"use client";

import { TypographyP } from "@/core/components/custom/ui/Typography";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/core/components/shadcn/ui/avatar";
import { Badge } from "@/core/components/shadcn/ui/badge";
import { MessageUserTs } from "../../../assets/types/ChatTypes";
import { formatMessageTime } from "../../../utils/loadMessages";

type MessageItemTs = {
  message: MessageUserTs;
  userId: string;
};

function MessageItem({ message, userId }: MessageItemTs) {
  const isMe = message.user.id === userId;

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      {!isMe && (
        <Avatar className="h-8 w-8 mr-2 shrink-0">
          <AvatarImage src={message.user.image || ""} />
          <AvatarFallback>{message.user.name.slice(0, 2)}</AvatarFallback>
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
            {formatMessageTime(message.createdAt)}
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
}

export default MessageItem;
