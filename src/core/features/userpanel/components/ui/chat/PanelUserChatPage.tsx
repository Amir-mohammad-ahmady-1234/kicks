"use client";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import SuppurtChatMessage from "./SuppurtChatMessage";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ChatUser, MessageUserTs } from "../../../assets/types/ChatTypes";
import { convertChatUser } from "../../../utils/convertChatUser";
import { loadMessages } from "../../../utils/loadMessages";
import { sendMessage } from "../../../utils/sendMessage";
function PanelUserChatPage({ params }) {
  const ticketId = params.id as string;
  const [messages, setMessages] = useState<MessageUserTs[]>([]);
  const [loading, setLoading] = useState(true);
  const [otherUser, setOtherUser] = useState<ChatUser | null>(null);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    async function loadChatData() {
      setLoading(true);
      const result = await loadMessages(ticketId, userRole);

      if (result.success) {
        setMessages(result.messages);
        const chatUser = convertChatUser(result.ticketOwner);
        setOtherUser(chatUser);
      }
      setLoading(false);
    }

    loadChatData();
  }, [ticketId, userRole, refresh]);

  async function handleSendMessage(content: string) {
    const result = await sendMessage(content, ticketId, userRole);
    if (result.success) {
      setRefresh((prev) => prev + 1);
    } else {
      toast.error(result.error);
    }
  }
  return (
    <div className="flex-1 flex flex-col h-full bg-foreground w-full rounded-2xl">
      <ChatHeader otherUser={otherUser} />

      <SuppurtChatMessage
        messages={messages}
        loading={loading}
        id={id}
        otherUser={otherUser}
      />

      <ChatInput sendMessage={handleSendMessage} disabled={!id} />
    </div>
  );
}

export default PanelUserChatPage;
