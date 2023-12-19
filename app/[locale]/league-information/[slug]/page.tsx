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

  return (
    <>
      <NavBar page={params.slug} lang={params.locale} />
      <TournamentComponent page={params.slug} translated={t.raw("content")} />
      <BannerImage width={1943} height={626} src="/images/footer.png" />
    </>
  );
}

export default Page;
