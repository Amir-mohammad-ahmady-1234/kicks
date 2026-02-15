"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ChatUser, MessageUserTs, SuppurtChatProps } from "../../../assets/types/ChatTypes";
import {
  convertTicketOwnerToChatUser,
  loadMessages,
  refreshMessages,
  sendMessage,
} from "../../../utils/chatUtils";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

function SuppurtChat({ id, userRole }: SuppurtChatProps) {
  const params = useParams();
  const ticketId = params.id as string;
  const [messages, setMessages] = useState<MessageUserTs[]>([]);
  const [loading, setLoading] = useState(true);
  const [otherUser, setOtherUser] = useState<ChatUser | null>(null);

  useEffect(() => {
    const loadChatData = async () => {
      setLoading(true);
      const result = await loadMessages(ticketId, userRole);

      if (result.success) {
        setMessages(result.messages);
        const chatUser = convertTicketOwnerToChatUser(result.ticketOwner);
        setOtherUser(chatUser);
      }
      setLoading(false);
    };

    loadChatData();
  }, [ticketId, userRole]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || !id) return;

    const result = await sendMessage(content, ticketId, userRole);

    if (result.success) {
      const updatedMessages = await refreshMessages(ticketId, userRole);
      setMessages(updatedMessages);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-foreground w-full rounded-2xl">
      <ChatHeader otherUser={otherUser} />
      <MessageList messages={messages} currentUserId={id} loading={loading} />
      <ChatInput onSendMessage={handleSendMessage} disabled={!id} />
    </div>
  );
}

export default SuppurtChat;
