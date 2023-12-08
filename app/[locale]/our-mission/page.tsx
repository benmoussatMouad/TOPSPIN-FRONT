import InfoSectionAcademy from "@/app/components/infoSection/infoSectionAcademy";
import NavBar from "@/app/components/navbar/NavBar";
import Sponsors from "@/app/components/sponsors/sponsors";
import Whatsapp from "@/app/components/whatsAppSection/whatsapp";
import { useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";
import React from "react";
import FlickityViewPortSection from "../../components/flickityView/CoachesHeads";
import data from "../../utils/pageContent.json";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "OurMission");

  return {
    title: t("title"),
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  const t = useTranslations("OurMission");
  const tHomePage = useTranslations("HomePage");

  return (
    <>
      <NavBar page={"OurMission"} lang={params.locale} />
      <InfoSectionAcademy page={"OurMission"} content={t.raw("infoSection")} />
      <FlickityViewPortSection page="OurMission" H2={t('coaches.header')} data={data.homepage.coaches} />
      <div style={{ paddingTop: "100px " }}>
        <Whatsapp translatedContent={tHomePage.raw("whatsupSection")} />
      </div>
      <Sponsors translatedContent={tHomePage.raw("sponsors")} />
    </>
  );
}

export default Page;
