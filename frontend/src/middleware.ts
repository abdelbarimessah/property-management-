import { NextRequest, NextResponse } from "next/server";
import { redirect } from "./common";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("authorization");
  if (!cookie) return redirect("/SignIn");
  const backendUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch('http://localhost:3000/user/me', {
    headers: {
      Cookie: `authorization=${cookie.value}`,
    },
    credentials: "include",
  });

  if (!res.ok) return redirect("/SignIn");

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/Dashboard/:path*",
  ],
};

