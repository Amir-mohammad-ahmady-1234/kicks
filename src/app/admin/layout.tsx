import HeaderDashboard from "@/core/components/custom/ui/headerdashboard/HeaderDashboard";
import SidebarDashboard from "@/core/components/custom/ui/sidebar/SidebarDashboard";
import { getUserId } from "@/core/utils/getUserId";
import { isLogin } from "@/core/utils/isLogin";
import React from "react";
import Forbidden from "../forbidden";

async function layout({ children }: { children: React.ReactNode }) {
  const login = await isLogin();
  const userid = await getUserId();
  if (!login) {
    return Forbidden();
  }
  return (
    <main className="relative flex gap-1 w-full h-screen overflow-hidden">
      <SidebarDashboard userid={userid} />
      <section className="flex-col flex flex-1 overflow-hidden">
        <HeaderDashboard />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </section>
    </main>
  );
}

export default layout;
