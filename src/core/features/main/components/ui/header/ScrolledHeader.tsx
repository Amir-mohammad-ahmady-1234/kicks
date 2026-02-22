import { LogInIcon, Menu, Search, User } from "lucide-react";
import Logo from "../Logo";

import { Button } from "@/core/components/shadcn/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/core/components/shadcn/ui/sheet";
import NavItemsHeaderDesktop from "./NavItemsHeaderDesktop";
import NavItemsHeaderMobile from "./NavItemsHeaderMobile";

import { ModeToggle } from "@/core/components/custom/ui/ModeToggle";
import Link from "next/link";
import { useHeader } from "../../../context/HeaderContext";

export default function ScrolledHeader({ isSignUp }: { isSignUp: boolean }) {
  const { open, setOpen, scrolled, setSearchModalOpen } = useHeader();

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "top-4 opacity-100 visible translate-y-0"
          : "top-0 opacity-0 invisible -translate-y-10"
      }`}
    >
      <div className="pages-container">
        <div className="bg-linear-to-r from-gray-200 to-black/40 pages-container mx-5 rounded-xl flex items-center justify-between relative shadow-2xl border border-gray-300/50 backdrop-blur-md">
          <div className="flex justify-between items-center gap-2 lg:hidden">
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
              <Button
                variant="ghost"
                size="icon"
                className=" text-white hover:bg-white/20"
                onClick={() => setSearchModalOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              <SheetContent side="left" className="w-72 p-0 flex flex-col">
                <SheetHeader className="p-6 border-b">
                  <SheetTitle className="flex items-center gap-2">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>

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
          </div>

          <div className="hidden lg:block">
            <NavItemsHeaderDesktop />
          </div>

          <div className="absolute transform left-1/2 -translate-x-1/2">
            <div className="bg-white/10 px-6 py-1 rounded-full backdrop-blur-sm border border-white/20">
              <Logo />
            </div>
          </div>

          <div className="flex items-center sm:gap-4 gap-2">
            <Button
              variant="ghost"
              size="icon"
              className=" text-white hover:bg-white/20 sm:flex hidden"
              onClick={() => setSearchModalOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <ModeToggle istophead={true} />

            <Link
              className="text-white"
              href={isSignUp ? "/userpanel" : "/auth"}
            >
              {isSignUp ? (
                <User className="h-5 w-5" />
              ) : (
                <LogInIcon className="h-5 w-5" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
