import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {

    // Token check
    const token = await getToken({ 
        req: request, 
        secret: process.env.NEXTAUTH_SECRET 
    });
    
  

    if (!token) {
       
        return NextResponse.redirect(new URL("/login", request.url));
    }

    
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};