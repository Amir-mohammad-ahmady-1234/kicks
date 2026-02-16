import { getIdByTicket } from "@/core/api-route/admin/handlers/messages/getIdByTicket";
import SuppurtChat from "@/core/features/userpanel/components/ui/chat/SuppurtChat";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id: ticketId } = await params;
  const id = await getIdByTicket({ ticketId });
  return (
    <div className="mt-2 w-full h-full">
      <SuppurtChat id={id.id} userRole={"ADMIN"} />
    </div>
  );
}

export default page;
