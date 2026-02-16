"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/core/components/shadcn/ui/avatar";
import { Badge } from "@/core/components/shadcn/ui/badge";
import Link from "next/link";
import { Ticket } from "../../../assets/types/ChatTypes";
import { formatLastSeen } from "../../../utils/loadMessages";

type TicketItemProps = {
  ticket: Ticket;
  selectedTicketId: string | null;
  onSelectTicket: (ticketId: string) => void;
  basePath: string;
};

function TicketItem({
  ticket,
  selectedTicketId,
  onSelectTicket,
  basePath,
}: TicketItemProps) {
  return (
    <Link
      href={`${basePath}/${ticket.id}`}
      onClick={() => onSelectTicket(ticket.id)}
      className={`
        flex items-center gap-3 p-4 cursor-pointer transition-colors
        hover:bg-gray-100
        ${selectedTicketId === ticket.id ? "bg-gray-100" : ""}
        border-b border-gray-100
      `}
    >
      <div className="relative">
        <Avatar className="h-12 w-12">
          <AvatarImage src={ticket.user.image || ""} />
          <AvatarFallback>
            {ticket.user.name?.slice(0, 2) || "U"}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold truncate">
            {ticket.user.name}
            {ticket.user.role === "ADMIN" && (
              <Badge variant="outline" className="ml-2 text-[10px]">
                Support
              </Badge>
            )}
          </h3>
          <span className="text-xs text-muted-foreground">
            {formatLastSeen(ticket.lastMessageAt)}
          </span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-muted-foreground truncate max-w-37.5">
            {ticket.lastMessage || "No messages yet"}
          </p>
          {ticket.unreadCount > 0 && (
            <Badge
              variant="default"
              className="rounded-full h-5 min-w-5 flex items-center justify-center"
            >
              {ticket.unreadCount}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
}

export default TicketItem;
