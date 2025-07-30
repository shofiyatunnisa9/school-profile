import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Cek apakah mengakses route admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Skip untuk halaman login
    if (request.nextUrl.pathname === "/login") {
      return NextResponse.next();
    }

    // Untuk admin routes, biarkan ProtectedRoute menangani autentikasi
    // karena localStorage hanya tersedia di client-side
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
