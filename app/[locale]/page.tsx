import InfoSection from "../components/infoSection/InfoSection";
import Quote from "../components/quote/Quote";
import data from "../utils/pageContent.json";
import FlickityViewPort from "../components/flickityView/FlickityViewPort";
import FlickityViewPortSection from "../components/professionalPlayersSection/flickityViewPortSection";
import Whatsapp from "../components/whatsAppSection/whatsapp";
import Sponsors from "../components/sponsors/sponsors";
import BannerImage from "../components/bannerImage/bannerImage";
import { useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";

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

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <InfoSection
        data={data.infoSection[0]}
        rowReverser={false}
        maxWidthH3={true}
        translatedContent={t.raw("infoSection")[0]}
      />
      <Quote translatedContent={t("quote")} />
      <InfoSection
        translatedContent={t.raw("infoSection")[1]}
        data={data.infoSection[1]}
        rowReverser={true}
      />
      {<FlickityViewPort data={t.raw("flickityView")} />}
      <InfoSection
        translatedContent={t.raw("infoSection")[2]}
        data={data.infoSection[2]}
        rowReverser={false}
      />
      <FlickityViewPortSection
        H2={t("proPlayerSection")}
        data={data.players}
        leftButton={"leftButtonPlayers"}
        rightButton={"rightButtonPlayers"}
      />
      <InfoSection
        translatedContent={t.raw("infoSection")[3]}
        data={data.infoSection[3]}
        rowReverser={true}
      />
      <FlickityViewPortSection
        H2={t("coachesSection")}
        data={data.coaches}
        leftButton={"leftButtonCoaches"}
        rightButton={"rightButtonCoaches"}
      />
      <InfoSection
        translatedContent={t.raw("infoSection")[4]}
        data={data.infoSection[4]}
        rowReverser={false}
      />
      <Whatsapp translatedContent={t.raw("whatsupSection")} />
      <Sponsors translatedContent={t.raw("sponsors")} />
      <BannerImage />
    </>
  );
}
