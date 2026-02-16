"use client";

import { MessageUserTs } from "../../../assets/types/ChatTypes";
import MessageItem from "./MessageItem";

type MessageListProps = {
  messages: MessageUserTs[];
  userId: string;
  loading: boolean;
};

function MessageList({ messages, userId, loading }: MessageListProps) {
  if (loading) {
    return (
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} userId={userId} />
      ))}
    </div>
  );
}

export default MessageList;
