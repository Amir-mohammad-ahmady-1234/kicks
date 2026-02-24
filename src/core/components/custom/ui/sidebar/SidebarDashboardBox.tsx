"use client";
import { LogOutUser } from "@/core/api-route/site/handlers/logout/LogOutUser";
import {
  itemsDashboardAdmin,
  itemsDashboardUser,
} from "@/core/assets/mock/sidebar";
import { TypographySmall } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import Logo from "@/core/features/main/components/ui/Logo";
import { useIsMobile } from "@/core/utils/useIsMobile";
import { LogOut, SquareArrowRightIcon, X } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
function SidebarDashboardBox({ userid }) {
  const isMobile = useIsMobile();

  const path = usePathname();

  const [show, setshow] = useState(false);

  async function handelShowSlide() {
    setshow(true);
  }

  const isUserPanel = path.startsWith("/userpanel");
  const issuppurt = path.startsWith("/suppurt");
  const items =
    isUserPanel || issuppurt ? itemsDashboardUser : itemsDashboardAdmin;
  const baseurl = isUserPanel ? "userpanel" : "admin";
  const getSuppurtLink = () => {
    if (isUserPanel) {
      return `/${baseurl}/suppurt/${userid}`;
    } else {
      return `/${baseurl}/suppurt`;
    }
  };
  async function handelLogoty(userid) {
    const logput = await LogOutUser(userid);
    if (logput.success === true) {
      toast.message(logput.message);
      redirect("/");
    } else {
      return toast.error(logput.error || "Error logging out");
    }
  }
  return isMobile === false || show === true ? (
    <>
      <aside
        className={`${
          isMobile ? "bg-accent-foreground/60 inset-0 z-10 fixed w-full" : ""
        }  `}
      >
        <div
          className={`bg-background p-4${
            show === true ? "translate-x-0" : "translate-x-full"
          } fixed inset-y-0 left-0 z-50 w-44 h-screen transition-transform duration-300 md:static md:translate-0 md:shrink-0 md:z-auto`}
        >
          <div className="p-2">
            <div className="flex-col flex items-center justify-center">
              <Logo width={150} />
              <hr className="text-accent w-full mt-3 mb-3" />
            </div>
            <div className="flex-col  flex items-center justify-center gap-y-3">
              {items.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start hover:bg-accent hover:text-accent-foreground"
                >
                  <Link
                    href={
                      item.name === "suppurt"
                        ? getSuppurtLink()
                        : `/${baseurl}/${item.name}`
                    }
                    className="w-full flex items-center gap-2"
                  >
                    {item.icon}
                    <TypographySmall>{item.name}</TypographySmall>
                  </Link>
                </Button>
              ))}
              {show === true && (
                <Button className="w-full flex " onClick={() => setshow(false)}>
                  <X />
                </Button>
              )}
            </div>
            <Button
              className="w-full flex mt-4"
              onClick={() => handelLogoty(userid)}
            >
              <LogOut /> Log Out
            </Button>
          </div>
        </div>
      </aside>
    </>
  ) : (
    <section className="fixed bottom-10 left-4 z-10">
      <Button variant="outline" size="lg" onClick={() => handelShowSlide()}>
        <SquareArrowRightIcon />
      </Button>
    </section>
  );
}

export default SidebarDashboardBox;
