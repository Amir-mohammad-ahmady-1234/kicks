import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/core/components/shadcn/ui/dropdown-menu";
import {
  ChevronDown,
  FileText,
  User,
  Users,
  Shirt,
  ShoppingBag,
  Tags,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

function NavItemsHeaderDesktop() {
  return (
    <nav className="hidden lg:flex items-center gap-4 font-medium text-sm">
      <Link
        href="/shop"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <ShoppingBag className="h-4 w-4" />
        Shop
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors">
          Categories
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-background p-3 rounded-md shadow-xl border min-w-45">
          <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer hover:bg-muted rounded-md transition">
            <User className="h-4 w-4 text-primary" />
            <Link href="/shop/men" className="w-full">
              Men
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer hover:bg-muted rounded-md transition">
            <Shirt className="h-4 w-4 text-primary" />
            <Link href="/shop/women" className="w-full">
              Women
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer hover:bg-muted rounded-md transition">
            <Users className="h-4 w-4 text-primary" />
            <Link href="/shop/kids" className="w-full">
              Children
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer  rounded-md transition">
            <Tags className="h-4 w-4 text-accent" />
            <Link
              href="/sale"
              className="w-full text-destructive font-semibold"
            >
              Sale 🔥
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        href="/blog"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <FileText className="h-4 w-4" />
        Blog
      </Link>

      <Link
        href="/new"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <Sparkles className="h-4 w-4" />
        New Arrivals
      </Link>
    </nav>
  );
}

export default NavItemsHeaderDesktop;
