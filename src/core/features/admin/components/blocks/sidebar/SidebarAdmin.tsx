import React from "react";
import Logo from "@/core/features/main/components/ui/Logo";
import { LayoutDashboard, List } from "lucide-react";
import Link from "next/link";
function SidebarAdmin() {
  return (
    <>
      <div className="flex-col flex items-center justify-center">
        <Logo width={150} />
        <hr className="text-accent w-full mt-3 mb-3" />
      </div>
      <div className="flex-col flex items-center justify-center gap-y-3">
        <Link
          href={"/dashboard"}
          className="bg-primary rounded-md text-white p-2 m-1 w-full flex items-center hover:bg-background hover:border hover:border-primary hover:text-primary transition duration-300 "
        >
          <LayoutDashboard />
          Dashboard
        </Link>
        <Link
          href={"/order"}
          className="bg-primary rounded-md text-white p-2 m-1 w-full flex items-center hover:bg-background hover:border hover:border-primary hover:text-primary transition duration-300 "
        >
          <List />
          order
        </Link>
      </div>
    </>
  );
}

export default SidebarAdmin;
