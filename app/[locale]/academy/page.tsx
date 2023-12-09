import InfoSectionAcademy from "@/app/components/infoSection/infoSectionAcademy";
import NavBar from "@/app/components/navbar/NavBar";
import Background from "@/app/components/quote/Background";
import Sponsors from "@/app/components/sponsors/sponsors";
import Whatsapp from "@/app/components/whatsAppSection/whatsapp";
import { useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";
import FlickityViewPort from "../../components/flickityView/FlickityViewPort";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "Academy");

  return {
    title: t("title"),
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
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
      <div style={{ paddingTop: "100px " }}>
        <Whatsapp translatedContent={tHomePage.raw("whatsupSection")} />
      </div>
      <Sponsors translatedContent={tHomePage.raw("sponsors")} />
      <Background />
    </>
  );
}

export default Page;
