import { NextRequest, NextResponse } from "next/server";
import { verify } from "./common/jwt";
//import { verify } from "jsonwebtoken";
//import { spawn } from 'child_process'

const secret = process.env.SECRET || ("" as string);
const auth = process.env.AUTH || false
export async function middleware(req: NextRequest) {
  /* if (process.version) {
    spawn('ls', ['-lh'])
  } */
  const { cookies } = req;
  const url = req.nextUrl;
  const urlPath = req.url;

  const isNextPath = url.pathname.includes("_next");
  const isPublicPath = url.pathname.includes("_next");
  // @ts-ignore
  const jwt = cookies.get("OursiteJWwT");
  // console.log(jwt)
  const nextUrl = req.nextUrl.clone();
  const signIn = "/sign-in";
  const publicRoutes = ["/sign-in", "/sign-up"];
  nextUrl.pathname = signIn;

  if (
    !isNextPath &&
    !url.pathname.includes(".") &&
    !url.pathname.startsWith("/api") &&
    req.headers.get("sec-fetch-user")
    && auth
  ) {
    if (!jwt) {
      if (publicRoutes.includes(url.pathname)) {
        if (!urlPath.includes(signIn) && !publicRoutes.includes(url.pathname)) {
          return NextResponse.redirect(nextUrl);
        }
        return NextResponse.next();
      }
    } else {
      if (publicRoutes.includes(url.pathname)) {
        try {
          if (urlPath.includes(signIn)) {
            await verify(jwt, secret);
            return NextResponse.redirect("/");
          } else {
            return NextResponse.next();
          }
        } catch (e) {
          return NextResponse.next();
        }
      }

      try {
        await verify(jwt, secret); // <---- ERROR COMES FROM HERE
        return NextResponse.next();
      } catch (error) {
        return NextResponse.redirect(nextUrl);
      }
    }
    return NextResponse.next();  
  }
}