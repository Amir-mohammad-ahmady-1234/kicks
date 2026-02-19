"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  ChatUser,
  MessageUserTs,
  SuppurtChatTs,
} from "../../../assets/types/ChatTypes";
import { convertChatUser } from "../../../utils/convertChatUser";
import { loadMessages } from "../../../utils/loadMessages";
import { sendMessage } from "../../../utils/sendMessage";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { MessageSquare } from "lucide-react";

function SuppurtChat({ id, userRole }: SuppurtChatTs) {
  const params = useParams();
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

  const hasNoMessages = !loading && messages.length === 0;

  return (
    <div className="flex-1 flex flex-col h-full bg-foreground w-full rounded-2xl">
      <ChatHeader otherUser={otherUser} />

      {hasNoMessages ? (
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">
          <div className="absolute w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full top-1/3 left-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative mb-8">
            <div className="w-28 h-28 rounded-3xl bg-linear-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm shadow-xl">
              <MessageSquare className="w-12 h-12 text-indigo-400" />
            </div>

            <span className="absolute -bottom-2 -right-2 flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md animate-pulse">
              آنلاین
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
            {otherUser ? `گفتگو با ${otherUser.name}` : "شروع یک گفتگو"}
          </h3>

          <p className="text-gray-400 max-w-md leading-relaxed">
            هنوز پیامی در این گفتگو وجود ندارد.
            <br />
            اولین پیام را ارسال کنید تا ارتباط برقرار شود.
          </p>

          <div className="mt-10 text-sm text-gray-500 flex items-center gap-3">
            <div className="h-px w-12 bg-gray-700" />
            <span>منتظر پیام شما هستیم</span>
            <div className="h-px w-12 bg-gray-700" />
          </div>
        </div>
      ) : (
        <MessageList messages={messages} userId={id} loading={loading} />
      )}

      <ChatInput sendMessage={handleSendMessage} disabled={!id} />
    </div>
  );
}

export default SuppurtChat;
