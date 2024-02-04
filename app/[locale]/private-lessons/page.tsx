import InfoSectionAcademy from "@/app/components/infoSection/infoSectionAcademy";
import Sponsors from "@/app/components/sponsors/sponsors";
import Whatsapp from "@/app/components/whatsAppSection/whatsapp";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import data from "../../utils/pageContent.json";
import FlickityViewPortSection from "@/app/components/professionalPlayersSection/flickityViewPortSection";
import NavBar from "@/app/components/navbar/NavBar";
import { SectionData, TranslatedContent } from "@/app/utils/interface";


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

function CoachesSection({
  data,
  transaltedData,
}: {
  data: any;
  transaltedData: any;
}) {
  const t = useTranslations("HomePage");

  return (
    <FlickityViewPortSection
      type="coaches"
      H2={t("coachesSection")}
      data={data}
      leftButton={"leftButtonPlayers"}
      rightButton={"rightButtonPlayers"}
      translatedContent={transaltedData}
    />
  );
}

function Academy() {
  const t = useTranslations("PrivateLessons");

  return (
    <InfoSectionAcademy page={"PrivateLessons"} text={t.raw("infoSection")} />
  );
}

function WhatsappSection() {
  const tHomePage = useTranslations("HomePage");
  return (
    <div style={{ paddingTop: "50px " }}>
      <Whatsapp translatedContent={tHomePage.raw("whatsupSection")} />
    </div>
);
}

function SponsorsSection() {
  const tHomePage = useTranslations("HomePage");
  return (
    <Sponsors translatedContent={tHomePage.raw("sponsors")} />
  )
}


  async function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);

    // Get trainers' data
    const query = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trainers`);
    const response = await query.json();
  
    const trainersSectionData: SectionData[] = response.trainers.map((t: any) => {
      const data: SectionData = {
        h3: t.firstName + " " + t.lastName,
        Image: {
          alt: t.firstName + " " + t.lastName,
          height: 1223,
          width: 978,
          src: t.imageUrl,
        },
        information: t.informationEnglish,
        id: t.id,
      };
      return data;
    });
  
    const trainersSectionTranslatedData: TranslatedContent[] =
      response.trainers.map((t: any) => {
        if (params.locale == "tr")
          return {
            information: t.informationTurkish,
          };
        else
          return {
            information: t.informationEnglish,
          };
      });

  return (
    <>
      <NavBar page={"PrivateLessons"} lang={params.locale} />
      <Academy/>
      <CoachesSection
        data={trainersSectionData}
        transaltedData={trainersSectionTranslatedData}
      />
      <WhatsappSection/>
      <SponsorsSection/>
    </>
  );
}

export default Page;
