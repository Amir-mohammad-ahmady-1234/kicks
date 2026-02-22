import { ModeToggle } from "@/core/components/custom/ui/ModeToggle";
import { Button } from "@/core/components/shadcn/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/core/components/shadcn/ui/sheet";
import { LogInIcon, Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { useHeader } from "../../../context/HeaderContext";
import Logo from "../Logo";
import NavItemsHeaderDesktop from "./NavItemsHeaderDesktop";
import NavItemsHeaderMobile from "./NavItemsHeaderMobile";

export default function TopHeader({ isSignUp }: { isSignUp: boolean }) {
  const { open, setOpen, scrolled, setSearchModalOpen } = useHeader();

  return (
    <header
      className={`pages-container fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled
          ? "opacity-0 invisible -translate-y-10"
          : "opacity-100 visible translate-y-0"
      }`}
    >
      <div className="bg-background/80 backdrop-blur-md pages-container m-5 rounded-md flex items-center justify-between relative shadow-sm border border-gray-300/50 dark:border-gray-300/50">
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchModalOpen(true)}
            >
              <Search className="h-8 w-8 scale-120" />
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

        <NavItemsHeaderDesktop />

        <div className="absolute transform left-1/2 -translate-x-1/2">
          <Logo />
        </div>

        <div className="flex items-center sm:gap-4 gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchModalOpen(true)}
          >
            <Search className="h-8 w-8 scale-120 sm:flex hidden" />
          </Button>
          <ModeToggle istophead={true} textcolor={"text-black"} />

          <Link href={isSignUp ? "/userpanel/profile" : "/auth"}>
            {isSignUp ? (
              <User className="h-5 w-5" />
            ) : (
              <LogInIcon className="h-5 w-5" />
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
