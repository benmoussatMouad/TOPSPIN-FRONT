import NavBar from "@/app/components/navbar/NavBar";
import TournamentComponent from "@/app/components/tournament/tournamentComponent";
import { useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "LeagueInfo");

  return {
    title: t("title"),
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  const t = useTranslations("LeagueInfo");

  return (
    <>
      <NavBar page={"LeagueInfo"} lang={params.locale} />
      <TournamentComponent translated={t.raw("tournaments")} />
    </>
  );
}

export default Page;
