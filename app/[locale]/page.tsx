import Quote from "../components/quote/Quote";
import data from "../utils/pageContent.json";
import FlickityViewPort from "../components/flickityView/FlickityViewPort";
import Whatsapp from "../components/whatsAppSection/whatsapp";
import Sponsors from "../components/sponsors/sponsors";
import BannerImage from "../components/bannerImage/bannerImage";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import InfoSection from "../components/infoSection/InfoSection";
import FlickityViewPortSection from "../components/professionalPlayersSection/flickityViewPortSection";
import NavBar from "../components/navbar/NavBar";
import { useQuery } from "@tanstack/react-query";

interface SectionData {
  id: number;
  Image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  h3: string;
  information?: string;
  points?: string
}

interface TranslatedContent {
  information?: string;
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  
  
  const t = await getTranslator(locale, "HomePage");

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}
function InfoSectionWithIndex({data, locale, index} ) {
  const t = useTranslations("HomePage");
  return (<InfoSection
    data={data.homepage["infoSection"][index]}
    rowReverser={false}
    maxWidthH3={true}
    translatedContent={t.raw("infoSection")[index]}
    locale={locale}
  />)
}

function InfoSectionWithIndexAndYoutube({data, locale, index} ) {
  const t = useTranslations("HomePage");
  return (<InfoSection
    data={data.homepage["infoSection"][index]}
    rowReverser={false}
    maxWidthH3={true}
    translatedContent={t.raw("infoSection")[index]}
    locale={locale}
    isYoutube={true}
  />)
}

function Quote_() {
  const t = useTranslations("HomePage");

  return <Quote translatedContent={t("quote")} />
}

function Pages() {
  const t = useTranslations("HomePage");

 return <FlickityViewPort data={t.raw("flickityView")} />
}

function PlayersSection({data}) {
  const t = useTranslations("HomePage");

  return <FlickityViewPortSection
  type="players"
    H2={t("proPlayerSection")}
    data={data.homepage.players}
    leftButton={"leftButtonPlayers"}
    rightButton={"rightButtonPlayers"}
    translatedContent={t.raw("coaches")}
  />
}

function CoachesSection({data, transaltedData}) {
  const t = useTranslations("HomePage");

  return <FlickityViewPortSection
  type="coaches"
    H2={t("coachesSection")}
    data={data}
    leftButton={"leftButtonPlayers"}
    rightButton={"rightButtonPlayers"}
    translatedContent={transaltedData}
  />
}

function WhatsappSection() {
  const t = useTranslations("HomePage");

  return <Whatsapp translatedContent={t.raw("whatsupSection")} />
}

function SponsorsSection() {
  const t = useTranslations("HomePage");

  return <Sponsors translatedContent={t.raw("sponsors")} />
}

export default async function Home({ params, trainers }: { params: any, trainers:any }) {
  unstable_setRequestLocale(params.locale);

  console.log(params.locale)
  // Get trainers' data
  const query = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trainers`)
  const response = await query.json()

  const trainersSectionData : SectionData[] =  response.trainers.map((t) => {
    const data: SectionData = {
      h3: t.firstName + ' ' + t.lastName,
      Image: {
        alt: t.firstName + ' ' + t.lastName,
        height: 1223,
        width: 978,
        src: t.imageUrl
      },
      information: t.informationEnglish,
      id: t.id
    }
    return data
  })

  const trainersSectionTranslatedData : TranslatedContent[] =  response.trainers.map((t) => {
    if (params.locale == 'tr')
      return {
        information: t.informationTurkish,
      } 
    else
      return {
        information: t.informationEnglish,
      }
  })

  return (
    <>
      <NavBar
        link={`/${params.locale}/academy`}
        page={"HomePage"}
        lang={params.locale}
      />
      <InfoSectionWithIndex data={data} locale={params.locale} index={0} />
      <Quote_ />
      <InfoSectionWithIndex data={data} locale={params.locale} index={1}/>
      <Pages />
      {<InfoSectionWithIndex data={data} locale={params.locale} index={2}/>}
      
      <PlayersSection data={data} />

      {<InfoSectionWithIndex data={data} locale={params.locale} index={3}/>}

      <CoachesSection data={trainersSectionData} transaltedData={trainersSectionTranslatedData} />

      {<InfoSectionWithIndexAndYoutube data={data} locale={params.locale} index={4}/>}

      <WhatsappSection/>
      
      <SponsorsSection />

      <BannerImage width={5472} height={3078} src="/images/footerBanner.JPG" />
    </>
  );
}
