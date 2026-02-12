import { FileText, Info, Mail, ShoppingBag } from "lucide-react";
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

      <Link
        href="/blog"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <FileText className="h-4 w-4" />
        Blog
      </Link>

      <Link
        href="/contact"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <Mail className="h-4 w-4" />
        Contact
      </Link>
      <Link
        href="/about"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <Info className="h-4 w-4" />
        About
      </Link>
    </nav>
  );
}

export default NavItemsHeaderDesktop;
