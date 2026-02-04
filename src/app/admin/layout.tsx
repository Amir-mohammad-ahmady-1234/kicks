import HeaderAdmin from "@/core/features/admin/components/blocks/header/HeaderAdmin";
import SidebarAdmin from "@/core/features/admin/components/blocks/sidebar/SidebarAdmin";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex gap-1 w-full h-screen overflow-hidden">
      <SidebarAdmin />
      <section className="flex-col flex flex-1 overflow-hidden">
        <HeaderAdmin />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </section>
    </main>
  );
}

export default layout;
