import InfoSectionAcademy from "@/app/components/infoSection/infoSectionAcademy";
import Background from "@/app/components/quote/Background";
import Sponsors from "@/app/components/sponsors/sponsors";
import Whatsapp from "@/app/components/whatsAppSection/whatsapp";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import FlickityViewPort from "../../components/flickityView/FlickityViewPort";
import React from "react";
import NavBar from "@/app/components/navbar/NavBar";
import FlickityViewPortSection from "../../components/flickityView/CoachesHeads";
import data from "../../utils/pageContent.json";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "Academy");

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Academy");
  const tHomePage = useTranslations("HomePage");

  return (
    <>
      <NavBar page={"Academy"} lang={params.locale} />
      <InfoSectionAcademy
        page="Academy"
        span={t("infoSection.span")}
        text={t("infoSection.text")}
      />
      {<FlickityViewPort data={tHomePage.raw("flickityView")} />}
      <div className="HeadCoachesSectionAcdemy">
        <FlickityViewPortSection
          page="Academy"
          H2={t("coaches.header")}
          data={data.academy.coaches}
        />
      </div>
      <div style={{ paddingTop: "50px " }}>
        <Whatsapp translatedContent={tHomePage.raw("whatsupSection")} />
      </div>
      <Sponsors translatedContent={tHomePage.raw("sponsors")} />
      <Background />
    </>
  );
}

export default Page;
