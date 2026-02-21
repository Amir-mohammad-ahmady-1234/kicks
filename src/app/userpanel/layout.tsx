import HeaderDashboard from "@/core/components/custom/ui/headerdashboard/HeaderDashboard";
import SidebarDashboard from "@/core/components/custom/ui/sidebar/SidebarDashboard";
import type { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex gap-1 w-full h-screen overflow-hidden">
      <SidebarDashboard />
      <section className="flex-col flex flex-1 overflow-hidden">
        <HeaderDashboard />
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </section>
    </main>
  );
}

export default layout;
