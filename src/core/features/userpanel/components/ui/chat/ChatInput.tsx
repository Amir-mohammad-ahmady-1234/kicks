"use client";

import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import { Send, Smile } from "lucide-react";
import { useState } from "react";

type ChatInputTs = {
  sendMessage: (message: string) => void;
  disabled?: boolean;
};

function ChatInput({ sendMessage, disabled = false }: ChatInputTs) {
  const [newMessage, setNewMessage] = useState("");

  function handleSend() {
    if (!newMessage.trim() || disabled) return;
    sendMessage(newMessage);
    setNewMessage("");
  }

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="p-4 border-t border-gray-200 shrink-0 bg-background">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
          <Smile className="h-5 w-5" />
        </Button>
        <Input
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleEnter}
          className="flex-1"
          disabled={disabled}
        />
        <Button
          onClick={handleSend}
          size="icon"
          className="h-9 w-9 shrink-0"
          disabled={!newMessage.trim() || disabled}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default ChatInput;
