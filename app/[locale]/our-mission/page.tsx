import Sponsors from "@/app/components/sponsors/sponsors";
import Whatsapp from "@/app/components/whatsAppSection/whatsapp";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import FlickityViewPortSection from "../../components/flickityView/CoachesHeads";
import InfoSectionAcademy from "@/app/components/infoSection/infoSectionAcademy";
import NavBar from "@/app/components/navbar/NavBar";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "OurMission");

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("OurMission");
  const tHomePage = useTranslations("HomePage");

  return (
    <>
      <NavBar page={"OurMission"} lang={params.locale} />
      <InfoSectionAcademy page={"OurMission"} content={t.raw("infoSection")} />
      <FlickityViewPortSection
      
        page="OurMission"
        H2={t("coaches.header")}
        data={t.raw("coaches.images")}
      />
      <div style={{ paddingTop: "50px " }}>
        <Whatsapp translatedContent={tHomePage.raw("whatsupSection")} />
      </div>
      <Sponsors translatedContent={tHomePage.raw("sponsors")} />
    </>
  );
}

export default Page;
