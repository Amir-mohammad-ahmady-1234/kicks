"use client";

import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { useEffect, useState } from "react";
import { SideBarChatTs, Ticket } from "../../../assets/types/ChatTypes";
import { loadTicketsList } from "../../../utils/loadTicketsList";
import ChatSearch from "./ChatSearch";
import MobileChatToggle from "./MobileChatBtn";
import TicketItem from "./TicketItem";

function SideBarChat({ userId, userRole }: SideBarChatTs) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadChatTickets() {
      const result = await loadTicketsList(userId, userRole);
      if (result.success) {
        setTickets(result.tickets);
        if (result.tickets.length > 0) {
          setSelectedTicketId(result.tickets[0].id);
        }
      }
      setLoading(false);
    }

    loadChatTickets();
  }, [userId, userRole]);

  const filteredTickets = tickets.filter((ticket) =>
    ticket.user.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleSelectTicket(ticketId: string) {
    setSelectedTicketId(ticketId);
    setisOpen(false);
  }

  const basePath =
    userRole === "ADMIN" ? "/admin/suppurt" : "/userpanel/suppurt";

  return (
    <>
      <MobileChatToggle isclick={() => setisOpen(!isOpen)} />

      <div
        className={`
          fixed lg:relative inset-y-0 left-0 z-40
          w-80 bg-white border-l border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <TypographyH3 className="text-xl font-bold">Chats</TypographyH3>
          </div>

          <ChatSearch searchTerm={searchTerm} SearchChange={setSearchTerm} />
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
