import { TypographyP } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { ArrowLeft, Home, ShieldAlert, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Forbidden() {
  return (
    <section className="fixed w-full h-full bg-linear-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-ping opacity-20">
            <ShieldAlert className="w-24 h-24 mx-auto text-red-500" />
          </div>
          <ShieldAlert className="w-24 h-24 mx-auto text-red-500 relative" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Access Forbidden
        </h1>

        <TypographyP className="text-gray-600 mb-2">
          Oops! It seems you do not have permission to access this page.
        </TypographyP>

        <TypographyP className="text-sm text-gray-500 mb-8">
          This area is restricted to authorized personnel only.
        </TypographyP>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-left">
          <div className="flex items-start gap-3">
            <ShoppingBag className="w-5 h-5 text-amber-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-1">
                While you are here...
              </h3>
              <TypographyP className="text-sm text-amber-700">
                Check out our latest sneaker collection!
                <Link
                  href="/shop"
                  className="block mt-2 text-amber-900 underline underline-offset-2 hover:text-amber-950"
                >
                  Browse New Arrivals →
                </Link>
              </TypographyP>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="default"
            className="bg-red-500 hover:bg-red-600 text-white"
            asChild
          >
            <Link href="/auth">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Login with Different Account
            </Link>
          </Button>

          <Button variant="outline" className="border-gray-300" asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
          </Button>
        </div>

        <TypographyP className="mt-8 text-xs text-gray-400">
          Error 403 | Forbidden Access
        </TypographyP>
      </div>
    </section>
  );
}
