import BannerImage from "@/app/components/bannerImage/bannerImage";
import NavBar from "@/app/components/navbar/NavBar";
import TournamentComponent from "@/app/components/tournament/tournamentComponent";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale, slug }, // Include slug in the parameters
}: {
  params: { locale: any; slug: any };
}) {
  const t = await getTranslator(locale, slug);

  if (!t("title")) {
    throw new Error("Invalid Page");
  }

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations(params.slug);

  const getImage = () => {
    switch (params.slug) {
      case "2023-topspin-bilkent-winter-league":
        return {
          src: "/images/winter.jpeg",
          width: 4096,
          height: 2305,
        };
      case "2023-topspin-cankaya-winter-league":
        return {
          src: "/images/cankayawinter.jpeg",
          width: 1600,
          height: 900,
        };
      case "2023-topspin-summer-cankaya-league":
        return {
          src: "/images/kdj.png",
          width: 1920,
          height: 587,
        };
      case "100th-anniversary-of-the-republic":
        return {
          src: "/images/100th.jpeg",
          width: 2215,
          height: 1407,
        };
      case "2023-topspin-bilkent-autumn-singles-tournament":
        return {
          src: "/images/singles.jpeg",
          width: 1600,
          height: 900,
        };
      case "tta-2023-singles-and-doubles-spring-tournament":
        return {
          src: "/images/tta.jpeg",
          width: 4096,
          height: 2306,
        };

      default:
        break;
    }
  };

  return (
    <>
      <NavBar
        page={params.slug}
        imageData={{
          width: getImage()?.width,
          src: getImage()?.src,
          alt: "background image",
          height: getImage()?.height,
        }}
        lang={params.locale}
      />
      <TournamentComponent page={params.slug} translated={t.raw("content")} />
      <BannerImage width={1600} height={810} src="/images/bannerFooter(update).jpeg" />
    </>
  );
}

export default Page;
