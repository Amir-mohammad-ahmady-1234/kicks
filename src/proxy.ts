import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtectedPath =
    pathname.startsWith("/userpanel") || pathname.startsWith("/admin");

  if (!isProtectedPath) {
    return NextResponse.next();
  }
  const licenseCookie = request.cookies.get("license")?.value;

  if (!licenseCookie) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/userpanel/:path*", "/admin/:path*"],
};
