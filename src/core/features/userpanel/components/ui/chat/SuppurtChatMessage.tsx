import { MessageSquare } from "lucide-react";
import MessageList from "./MessageList";

function SuppurtChatMessage({ loading, messages, otherUser, id }) {
  const NoMessages = !loading && messages.length === 0;

  return (
    <>
      {NoMessages ? (
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">
          <div className="absolute w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full top-1/3 left-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative mb-8">
            <div className="w-28 h-28 rounded-3xl bg-linear-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm shadow-xl">
              <MessageSquare className="w-12 h-12 text-indigo-400" />
            </div>

            <span className="absolute -bottom-2 -right-2 flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md animate-pulse">
              Online
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
            {otherUser ? `Chat with ${otherUser.name}` : "Start a Conversation"}
          </h3>

          <p className="text-gray-400 max-w-md leading-relaxed">
            No messages in this conversation yet.
            <br />
            Send the first message to start connecting.
          </p>

          <div className="mt-10 text-sm text-gray-500 flex items-center gap-3">
            <div className="h-px w-12 bg-gray-700" />
            <span>Waiting for your message</span>
            <div className="h-px w-12 bg-gray-700" />
          </div>
        </div>
      ) : (
        <MessageList messages={messages} userId={id} loading={loading} />
      )}
    </>
  );
}

export default SuppurtChatMessage;
