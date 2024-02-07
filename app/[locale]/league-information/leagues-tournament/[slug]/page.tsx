import BannerImage from "@/app/components/bannerImage/bannerImage";
import LeagueTournament from "@/app/components/leagueTournament/LeagueTournament";
import NavBar from "@/app/components/navbar/NavBar";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "LeagueInfo");

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("LeagueInfo");

  return (
    <>
      <NavBar
        page={"LeagueInfo"}
        imageData={{
          width: 4096,
          src: "/images/rubric.jpeg",
          alt: "background image",
          height: 2305,
        }}
        lang={params.locale}
      />
      <LeagueTournament
        slug={params.slug}
        league={
          params.slug === "cankaya"
            ? t.raw("cankaya.leagues")
            : t.raw("bilkent.leagues")
        }
        tournament={
          params.slug === "cankaya"
            ? t.raw("cankaya.tournament")
            : t.raw("bilkent.tournament")
        }
      />
      {/*<TournamentComponent translated={t.raw("tournaments")} />*/}
      <BannerImage width={1600} height={810} src="/images/bannerFooter(update).jpeg" />
    </>
  );
}

export default Page;
