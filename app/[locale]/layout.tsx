import "../styles/globals.css";
import Footer from "../components/footer/Footer";
import localFont from "next/font/local";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { notFound } from "next/navigation";
import Providers from "../utils/provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ExtraLayer from "../components/popup/ExtraLayer";
import { useTranslations } from "next-intl";

const locales = ["en", "tr"];

const Mont = localFont({
  src: [
    {
      path: "../fonts/Mont/Mont-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Mont/Mont-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mont",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const isValidLocale = locales.some((cur) => cur === params.locale);
  if (!isValidLocale) notFound();

  const t = useTranslations("Popup");

  return (
    <html lang={params.locale} className={`${Mont.variable}`}>
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="any"
          href="/images/logo.svg"
        />
      </head>
      <body>
        <Providers>
          <main>
            <SpeedInsights />
            <ExtraLayer
              popupHeader={t("header")}
              popupText={t.raw("p")}
              button={t("button")}
              news={t("news")}
              locale={params.locale}
            >
              {children}
            </ExtraLayer>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
