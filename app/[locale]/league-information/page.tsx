import InfoSection from "@/app/components/infoSection/InfoSection";
import NavBar from "@/app/components/navbar/NavBar";
import TournamentComponent from "@/app/components/tournament/tournamentComponent";
import { useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";
import React from "react";
import data from "../../utils/pageContent.json";

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
      <TournamentComponent />
      <InfoSection
        translatedContent={t.raw("infoSection")[0]}
        data={data.leagueInfo.infoSection}
        rowReverser={false}
      />
    </>
  );
}

export default Page;
