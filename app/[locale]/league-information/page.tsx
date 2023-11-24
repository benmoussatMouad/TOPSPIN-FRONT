import InfoSection from "@/app/components/infoSection/InfoSection";
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

async function getTournamentData() {
  try {
    const res = await fetch(`https://lablabee.online/schedule`, {
      cache: "no-store",
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    if (error) {
      throw new Error("Failed to fetch data");
    }
  }
}

function Page({ params }: { params: any }) {
  const t = useTranslations("LeagueInfo");

  return (
    <>
      <NavBar page={"LeagueInfo"} lang={params.locale} />
      <TournamentComponent
        matchSchedules={t.raw("tournaments.matchSchedule")}
        resulte={t.raw("tournaments.resulte")}
        getTournamentData={getTournamentData}
      />
    </>
  );
}

export default Page;
