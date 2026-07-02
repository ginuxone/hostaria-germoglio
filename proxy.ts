import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "./lib/translations";

// Detects the locale from the URL and forwards it as a request header so
// the root layout (which owns the single <html> tag for the whole app)
// can set the correct `lang` attribute per locale.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, maybeLocale] = pathname.split("/");
  const locale = (locales as readonly string[]).includes(maybeLocale)
    ? maybeLocale
    : "it";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next|images|favicon.ico|.*\\..*).*)"],
};
