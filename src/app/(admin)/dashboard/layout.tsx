import HeaderAdmin from "@/core/features/admin/components/blocks/header/HeaderAdmin";
import SidebarAdmin from "@/core/features/admin/components/blocks/sidebar/SidebarAdmin";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex gap-1">
      <SidebarAdmin />
      <section className="flex-col w-full">
        <HeaderAdmin />
        {children}
      </section>
    </main>
  );
}

export default layout;
