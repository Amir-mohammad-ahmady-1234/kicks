import SuppurtChat from "@/core/features/userpanel/components/ui/chat/SuppurtChat";
import { getUserId } from "@/core/utils/getUserId";

async function page() {
  const id = await getUserId();

  return (
    <div className="mt-1 h-full">
      <SuppurtChat id={id} userRole={"USER"} />
    </div>
  );
}

export default page;
