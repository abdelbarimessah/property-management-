import { NextResponse } from "next/server";


export function redirect(pathname: string) {
    const url = new URL(pathname, process.env.NEXT_PUBLIC_FRONTEND_URL);

    return NextResponse.redirect(url);
}