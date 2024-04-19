import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/middleware")) {
    console.log("Hit middleware");

    request.nextUrl.searchParams.set("foo", "bar");

    return NextResponse.rewrite(request.nextUrl);
  }
}
