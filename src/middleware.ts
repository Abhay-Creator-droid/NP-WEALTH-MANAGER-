import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { handleCorsPreflight, withCors } from "@/lib/cors";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/")) {
    const preflight = handleCorsPreflight(request);
    if (preflight) return preflight;
  }

  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  const response = NextResponse.next();
  if (pathname.startsWith("/api/")) {
    return withCors(response, request);
  }
  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};
