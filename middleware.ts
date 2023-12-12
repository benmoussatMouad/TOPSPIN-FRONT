import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./app/utils/navigation";

export default createMiddleware({
  defaultLocale: "tr",
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
