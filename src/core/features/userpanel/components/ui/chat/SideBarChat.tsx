"use client";

import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { useEffect, useState } from "react";
import { SideBarChatProps, Ticket } from "../../../assets/types/ChatTypes";
import { loadTickets } from "../../../utils/chatUtils";
import ChatSearch from "./ChatSearch";
import MobileChatToggle from "./MobileChatToggle";
import TicketItem from "./TicketItem";

function SideBarChat({ userId, userRole }: SideBarChatProps) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChatTickets = async () => {
      const result = await loadTickets(userId, userRole);
      if (result.success) {
        setTickets(result.tickets);
        if (result.tickets.length > 0) {
          setSelectedTicketId(result.tickets[0].id);
        }
      }
      setLoading(false);
    };

    loadChatTickets();
  }, [userId, userRole]);

  const filteredTickets = tickets.filter((ticket) =>
    ticket.user.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelectTicket = (ticketId: string) => {
    setSelectedTicketId(ticketId);
    setMobileMenuOpen(false);
  };

  const basePath = userRole === "ADMIN" ? "/admin/suppurt" : "/userpanel/suppurt";

  return (
    <>
      <MobileChatToggle
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

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

          <ChatSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
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
              <TicketItem
                key={ticket.id}
                ticket={ticket}
                selectedTicketId={selectedTicketId}
                onSelectTicket={handleSelectTicket}
                basePath={basePath}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default SideBarChat;
