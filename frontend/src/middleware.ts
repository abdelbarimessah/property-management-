import { NextRequest, NextResponse } from "next/server";
import { redirect } from "./common";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("authorization");
  if (!cookie) return redirect("/SignIn");
  const backendUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${backendUrl}/user/me`, {
    headers: {
      Cookie: `authorization=${cookie.value}`,
    },
    credentials: "include",
  });

  console.log({ response: res });

  if (!res.ok) return redirect("/SignIn");

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/Home/:path*",
  ],
};

