import BannerImage from "@/app/components/bannerImage/bannerImage";
import LeagueTournament from "@/app/components/leagueTournament/LeagueTournament";
import NavBar from "@/app/components/navbar/NavBar";
import TournamentComponent from "@/app/components/tournament/tournamentComponent";
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
        league={t.raw("league")}
        tournament={t.raw("tournament")}
      />
      {/*<TournamentComponent translated={t.raw("tournaments")} />*/}
      <BannerImage width={1536} height={1023} src="/images/cankayabg.jpeg" />
    </>
  );
}

export default Page;
