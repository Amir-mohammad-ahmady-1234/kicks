"use client";

import { Input } from "@/core/components/shadcn/ui/input";
import { Search } from "lucide-react";

type ChatSearchProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
};

function ChatSearch({
  searchTerm,
  onSearchChange,
  placeholder = "Search users...",
}: ChatSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        className="pl-9"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default ChatSearch;

