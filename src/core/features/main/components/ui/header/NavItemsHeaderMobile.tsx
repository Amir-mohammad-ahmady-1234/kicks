import { FileText, Info, Mail, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
function NavItemsHeaderMobile() {
  return (
    <nav className="flex flex-col p-4 space-y-0">
      <Link
        href="/shop"
        className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors py-2.5 border-b border-border/50 last:border-b-0"
      >
        <ShoppingBagIcon className="h-4 w-4" />
        Shop
      </Link>

      <Link
        href="/blog"
        className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors py-2.5 border-b border-border/50 last:border-b-0"
      >
        <FileText className="h-4 w-4" />
        Blogs
      </Link>

      <Link
        href="/about"
        className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors py-2.5 border-b border-border/50 last:border-b-0"
      >
        <Info className="h-4 w-4" />
        About
      </Link>

      <Link
        href="/contact"
        className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors py-2.5 border-b border-border/50 last:border-b-0"
      >
        <Mail className="h-4 w-4" />
        Contact
      </Link>
    </nav>
  );
}

export default NavItemsHeaderMobile;
