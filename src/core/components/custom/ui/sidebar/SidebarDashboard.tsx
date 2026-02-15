"use client";
import { TypographySmall } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import Logo from "@/core/features/main/components/ui/Logo";
import { useIsMobile } from "@/core/utils/useIsMobile";
import {
  BlendIcon,
  Heart,
  LayoutDashboard,
  List,
  Newspaper,
  SquareArrowRightIcon,
  UserRoundPen,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const itemsDashboardAdmin = [
  {
    name: "dashboard",
    icon: <LayoutDashboard />,
  },
  { name: "order", icon: <List /> },
  { name: "blog", icon: <BlendIcon /> },
  { name: "news", icon: <Newspaper /> },
];
const itemsDashboardUser = [
  { name: "favorite", icon: <Heart /> },
  { name: "profile", icon: <UserRoundPen /> },
];
function SidebarDashboard() {
  const isMobile = useIsMobile();
  const path = usePathname();

  const [show, setshow] = useState(false);

  async function handelShowSlide() {
    setshow(true);
  }
  const isUserPanel = path.startsWith("/userpanel");
  const items = isUserPanel ? itemsDashboardUser : itemsDashboardAdmin;
  const baseurl = isUserPanel ? "userpanel" : "admin";
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
              {items.map((items) => (
                <Button key={items.name} className="w-full">
                  <Link
                    href={`/${baseurl}/${items.name}`}
                    className=" rounded-md text-white  w-full flex items-center gap-1 "
                  >
                    {items.icon}

                    <TypographySmall>{items.name}</TypographySmall>
                  </Link>
                </Button>
              ))}
              {show === true && (
                <Button className="w-full flex " onClick={() => setshow(false)}>
                  <X />
                </Button>
              )}
            </div>{" "}
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

export default SidebarDashboard;
