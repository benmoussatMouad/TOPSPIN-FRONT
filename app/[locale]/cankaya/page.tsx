import BannerImage from "@/app/components/bannerImage/bannerImage";
import InfoSection from "@/app/components/infoSection/InfoSection";
import NavBar from "@/app/components/navbar/NavBar";
import Quote from "@/app/components/quote/Quote";
import Sponsors from "@/app/components/sponsors/sponsors";
import Whatsapp from "@/app/components/whatsAppSection/whatsapp";
import { useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";
import data from "../../utils/pageContent.json";
import FlickityViewPortSection from "../../components/flickityView/CoachesHeads";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "CankayaPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home({ params }: { params: any }) {
  const t = useTranslations("HomePage");
  const tCanKaya = useTranslations("CankayaPage");

  return (
    <>
      <NavBar page={"CankayaPage"} lang={params.locale} />
      <InfoSection
        data={data.cankaya.infoSection[0]}
        rowReverser={false}
        maxWidthH3={true}
        translatedContent={tCanKaya.raw("infoSection")[0]}
      />
      <Quote translatedContent={t("quote")} />
      <InfoSection
        data={data.cankaya.infoSection[1]}
        rowReverser={true}
        maxWidthH3={false}
        translatedContent={tCanKaya.raw("infoSection")[1]}
      />
      <FlickityViewPortSection
        page={"Cankaya"}
        H2={tCanKaya("coaches.header")}
        data={data.homepage.coaches}
      />
      <div style={{ marginTop: "50px" }}>
        <Whatsapp translatedContent={t.raw("whatsupSection")} />
      </div>
      <Sponsors translatedContent={t.raw("sponsors")} />
      <BannerImage
        width={4096}
        height={2304}
        src="/images/CankayaBanner.jpeg"
      />
    </>
  );
}
