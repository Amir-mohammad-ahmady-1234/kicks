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
import { Button } from "@/core/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/core/components/shadcn/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { ChatUser } from "../../../assets/types/ChatTypes";
import UserInfoDropdown from "./UserInfoDropdown";

type ChatHeaderProps = {
  otherUser: ChatUser | null;
};

function ChatHeader({ otherUser }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={otherUser?.avatar || ""} />
          <AvatarFallback>{otherUser?.name?.slice(0, 2) || "U"}</AvatarFallback>
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
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          {otherUser && <UserInfoDropdown user={otherUser} />}
        </DropdownMenu>
      </div>
    </div>
  );
}

export default ChatHeader;
