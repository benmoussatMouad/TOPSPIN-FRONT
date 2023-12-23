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

export default function Home({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("HomePage");

  return (
    <>
      <NavBar
        link={`/${params.locale}/academy`}
        page={"HomePage"}
        lang={params.locale}
      />
      <InfoSection
        data={data.homepage.infoSection[0]}
        rowReverser={false}
        maxWidthH3={true}
        translatedContent={t.raw("infoSection")[0]}
        locale={params.locale}
      />
      <Quote translatedContent={t("quote")} />
      <InfoSection
        translatedContent={t.raw("infoSection")[1]}
        data={data.homepage.infoSection[1]}
        rowReverser={true}
        locale={params.locale}
      />
      {<FlickityViewPort data={t.raw("flickityView")} />}
      <InfoSection
        translatedContent={t.raw("infoSection")[2]}
        data={data.homepage.infoSection[2]}
        rowReverser={false}
      />
      <FlickityViewPortSection
        H2={t("proPlayerSection")}
        data={data.homepage.players}
        leftButton={"leftButtonPlayers"}
        rightButton={"rightButtonPlayers"}
      />
      <InfoSection
        translatedContent={t.raw("infoSection")[3]}
        data={data.homepage.infoSection[3]}
        rowReverser={true}
        locale={params.locale}
      />
      <FlickityViewPortSection
        H2={t("coachesSection")}
        data={data.homepage.coaches}
        leftButton={"leftButtonCoaches"}
        rightButton={"rightButtonCoaches"}
      />
      <InfoSection
        translatedContent={t.raw("infoSection")[4]}
        data={data.homepage.infoSection[4]}
        rowReverser={false}
        isYoutube={true}
      />
      <Whatsapp translatedContent={t.raw("whatsupSection")} />
      <Sponsors translatedContent={t.raw("sponsors")} />
      <BannerImage width={5472} height={3078} src="/images/footerBanner.JPG" />
    </>
  );
}
