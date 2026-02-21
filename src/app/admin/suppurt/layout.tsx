import SideBarChat from "@/core/features/userpanel/components/ui/chat/SideBarChat";
import { getUserId } from "@/core/utils/getUserId";
import type { ReactNode } from "react";
async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const userId = await getUserId();
  return (
    <div className="flex bg-gray-50 h-full overflow-hidden rounded-xl mt-1">
      <SideBarChat userId={userId} userRole={"ADMIN"} />
      <div className="flex-1 overflow-auto bg-foreground rounded-xl">
        {children}
      </div>
    </div>
  );
}

export default Layout;
