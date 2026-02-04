"use client";
import { Menu, Search, User } from "lucide-react";
import { useState } from "react";
import Logo from "../../ui/Logo";

import { Button } from "@/core/components/shadcn/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/core/components/shadcn/ui/sheet";
import NavItemsHeaderDesktop from "../../ui/header/NavItemsHeaderDesktop";
import NavItemsHeaderMobile from "../../ui/header/NavItemsHeaderMobile";

import { Input } from "@/core/components/shadcn/ui/input";
import Link from "next/link";
import ActionHeader from "../../ui/header/ActionHeader";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pages-container relative">
      <div className=" bg-background pages-container m-5 rounded-md flex  items-center justify-between relative">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-72 p-0 flex flex-col">
            <SheetHeader className="p-6 border-b">
              <SheetTitle className="flex items-center gap-2">
                <Logo />
              </SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-2 p-4 border-b">
              <Search className="text-stone-600" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-md"
              />
            </div>

            <div className=" flex-1 overflow-y-auto">
              <NavItemsHeaderMobile />
            </div>

            <div className="p-4 border-t bg-linear-to-r from-black via-zinc-800 to-black text-white rounded-t-xl">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  🔥 Special Member Deal
                </h3>
                <p className="text-sm text-gray-300">
                  Sign in now and get{" "}
                  <span className="font-bold text-white">10% OFF</span>
                  your first order + access to exclusive drops.
                </p>

                <Button className="w-full bg-white text-black hover:bg-gray-200 mt-3">
                  Become a Member
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <NavItemsHeaderDesktop />
        <div className="absolute transform left-1/2 -translate-x-1/2">
          <Logo />
        </div>
        <div className="flex items-center">
          <div className="mr-3">
            <ActionHeader />
          </div>
          <Link href={"/auth"}>
            <User />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
