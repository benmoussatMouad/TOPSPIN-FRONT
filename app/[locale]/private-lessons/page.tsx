import InfoSectionAcademy from "@/app/components/infoSection/infoSectionAcademy";
import Sponsors from "@/app/components/sponsors/sponsors";
import Whatsapp from "@/app/components/whatsAppSection/whatsapp";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import data from "../../utils/pageContent.json";
import FlickityViewPortSection from "@/app/components/professionalPlayersSection/flickityViewPortSection";
import NavBar from "@/app/components/navbar/NavBar";


export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "PrivateLessons");

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("PrivateLessons");
  const tHomePage = useTranslations("HomePage");

  return (
    <>
      <NavBar page={"PrivateLessons"} lang={params.locale} />
      <InfoSectionAcademy page={"PrivateLessons"} text={t.raw("infoSection")} />
      <FlickityViewPortSection
        H2={tHomePage("coachesSection")}
        data={data.homepage.coaches}
        leftButton={"leftButtonCoaches"}
        rightButton={"rightButtonCoaches"}
      />
      <div style={{ paddingTop: "50px " }}>
        <Whatsapp translatedContent={tHomePage.raw("whatsupSection")} />
      </div>
      <Sponsors translatedContent={tHomePage.raw("sponsors")} />
    </>
  );
}

export default Page;
