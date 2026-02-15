"use client";

import { getTickets } from "@/core/api-route/admin/handlers/messages/gettickets/getTickets";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/core/components/shadcn/ui/avatar";
import { Badge } from "@/core/components/shadcn/ui/badge";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import { Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
type Ticket = {
  id: string;
  lastMessage: string | null;
  lastMessageAt: Date | null;
  unreadCount: number;
  user: {
    id: string;
    name: string | null;
    image: string | null;
    role: string;
  };
};

function SideBarChat({ userId, userRole }) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTickets = async () => {
      if (!userId) return;
      const result = await getTickets({
        userId,
        userRole,
      });
      if (result.success) {
        setTickets(result.tickets);

        if (result.tickets.length > 0) {
          setSelectedTicketId(result.tickets[0].id);
        }
      }
      setLoading(false);
    };

    loadTickets();
  }, [userId, userRole]);
  const filteredTickets = tickets.filter((ticket) =>
    ticket.user.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelectTicket = (ticketId: string) => {
    setSelectedTicketId(ticketId);
    setMobileMenuOpen(false);
  };

  const formatLastSeen = (date: Date | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString();
  };
  return (
    <>
      <div className="lg:hidden fixed bottom-10 left-20  z-50">
        <Button
          variant="outline"
          size="lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-white"
        >
          <User className="h-10 w-10" />
        </Button>
      </div>

      <div
        className={`
            fixed lg:relative inset-y-0 left-0 z-40
          w-80 bg-white border-l border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <TypographyH3 className="text-xl font-bold">Chats</TypographyH3>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-y-auto h-screen">
          {loading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : filteredTickets.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              No chats found
            </div>
          ) : (
            filteredTickets.map((ticket) => (
              <Link
                key={ticket.id}
                href={`/admin/suppurt/${ticket.id}`}
                onClick={() => handleSelectTicket(ticket.id)}
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

                <div className="flex-1 min-w-0 ">
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
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default SideBarChat;
