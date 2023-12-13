import Quote from "../components/quote/Quote";
import data from "../utils/pageContent.json";
import FlickityViewPort from "../components/flickityView/FlickityViewPort";
import Whatsapp from "../components/whatsAppSection/whatsapp";
import Sponsors from "../components/sponsors/sponsors";
import BannerImage from "../components/bannerImage/bannerImage";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import NavBar from "../components/navbar/NavBar";
import dynamic from "next/dynamic";

const InfoSectionLazy = dynamic(
  () => import("../components/infoSection/InfoSection"),
  { ssr: false }
);

const FlickityViewPortSection = dynamic(
  () =>
    import("../components/professionalPlayersSection/flickityViewPortSection"),
  { ssr: false }
);

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "HomePage");

  return {
    title: t("title"),
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
      <InfoSectionLazy
        data={data.homepage.infoSection[0]}
        rowReverser={false}
        maxWidthH3={true}
        translatedContent={t.raw("infoSection")[0]}
        locale={params.locale}
      />
      <Quote translatedContent={t("quote")} />
      <InfoSectionLazy
        translatedContent={t.raw("infoSection")[1]}
        data={data.homepage.infoSection[1]}
        rowReverser={true}
        locale={params.locale}
      />
      {<FlickityViewPort data={t.raw("flickityView")} />}
      <InfoSectionLazy
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
      <InfoSectionLazy
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
      <InfoSectionLazy
        translatedContent={t.raw("infoSection")[4]}
        data={data.homepage.infoSection[4]}
        rowReverser={false}
        isYoutube={true}
      />
      <Whatsapp translatedContent={t.raw("whatsupSection")} />
      <Sponsors translatedContent={t.raw("sponsors")} />
      <BannerImage width={1943} height={626} src="/images/footer.png" />
    </>
  );
}
