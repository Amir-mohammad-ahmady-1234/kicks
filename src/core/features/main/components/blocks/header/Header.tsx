"use client";

import { LogInIcon, Menu, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
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

function Header({ isSignUp }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`pages-container fixed top-0 left-0 right-0 z-40  transition-all duration-700 ${
          scrolled
            ? "opacity-0 invisible translate-y--10"
            : "opacity-100 visible translate-y-0"
        }`}
      >
        <div className="bg-background/80 backdrop-blur-md pages-container m-5  rounded-md flex items-center justify-between relative shadow-sm border border-gray-300/50 dark:border-gray-300/50">
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

              <div className="flex-1 overflow-y-auto">
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

                  <Button className="w-full bg-white text-black hover:bg-gray-300 mt-3">
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
            <Link href={isSignUp ? "/userpanel" : "/auth"}>
              {isSignUp ? <User /> : <LogInIcon />}
            </Link>
          </div>
        </div>
      </header>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "top-4 opacity-100 visible translate-y-0"
            : "top-0 opacity-0 invisible -translate-y-10"
        }`}
      >
        <div className="pages-container">
          <div className="bg-linear-to-r from-gray-200 to-black/40 pages-container mx-5 rounded-xl flex items-center justify-between relative shadow-2xl border border-gray-300/50 backdrop-blur-md">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                >
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
                  <Search className="text-stone-200" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full rounded-md"
                  />
                </div>

                <div className="flex-1 overflow-y-auto">
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

                    <Button className="w-full bg-white text-black hover:bg-gray-300 mt-3">
                      Become a Member
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <div className="hidden lg:block">
              <NavItemsHeaderDesktop />
            </div>

            <div className="absolute transform left-1/2 -translate-x-1/2">
              <div className="bg-white/10 px-6 py-1 rounded-full backdrop-blur-sm border border-white/20">
                <Logo />
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-3">
                <ActionHeader />
              </div>
              <Link href={isSignUp ? "/userpanel" : "/auth"}>
                <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                  {isSignUp ? (
                    <User className="text-white" />
                  ) : (
                    <LogInIcon className="text-white" />
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
