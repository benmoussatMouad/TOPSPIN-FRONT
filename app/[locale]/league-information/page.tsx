import BannerImage from "@/app/components/bannerImage/bannerImage";
import TournamentComponent from "@/app/components/tournament/tournamentComponent";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import React from "react";

const NavBar = dynamic(() => import("../../components/navbar/NavBar"), {
  ssr: false,
});

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
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("LeagueInfo");

  return (
    <>
      <NavBar page={"LeagueInfo"} lang={params.locale} />
      <TournamentComponent translated={t.raw("tournaments")} />
      <BannerImage width={1943} height={626} src="/images/footer.png" />
    </>
  );
}

export default Page;
