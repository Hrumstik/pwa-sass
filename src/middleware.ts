import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de", "uk", "fr", "nl", "es", "it", "pl", "pt"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(de|en|uk|fr|nl|es|it|pl|pt)/:path*"],
};
