import { FileText, Home, Info, Mail, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function NavItemsHeaderDesktop() {
  const activeSegment = useSelectedLayoutSegment();
  console.log(activeSegment);
  return (
    <nav className="hidden lg:flex items-center gap-4 font-medium text-sm">
      <Link
        href="/"
        className={`flex items-center gap-1 hover:text-primary transition-colors ${
          activeSegment === null ? "text-blue-600" : ""
        }`}
      >
        <Home className="h-4 w-4" />
        home
      </Link>
      <Link
        href="/shop"
        className={`flex items-center gap-1 hover:text-primary transition-colors ${
          activeSegment === "shop" ? "text-blue-600" : ""
        }`}
      >
        <ShoppingBag className="h-4 w-4" />
        Shop
      </Link>

      <Link
        href="/blog"
        className={`flex items-center gap-1 hover:text-primary transition-colors ${
          activeSegment === "blog" ? "text-blue-600 " : ""
        }`}
      >
        <FileText className="h-4 w-4" />
        Blog
      </Link>

      <Link
        href="/contact"
        className={`flex items-center gap-1 hover:text-primary transition-colors ${
          activeSegment === "contact" ? "text-blue-600 " : ""
        }`}
      >
        <Mail className="h-4 w-4" />
        Contact
      </Link>

      <Link
        href="/about"
        className={`flex items-center gap-1 hover:text-primary transition-colors ${
          activeSegment === "about" ? "text-blue-600 " : ""
        }`}
      >
        <Info className="h-4 w-4" />
        About
      </Link>
    </nav>
  );
}

export default NavItemsHeaderDesktop;
