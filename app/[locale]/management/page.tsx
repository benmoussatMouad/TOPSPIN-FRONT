import BannerImage from "@/app/components/bannerImage/bannerImage";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import NavBar from "@/app/components/navbar/NavBar";
import InfoSection from "../../components/infoSection/InfoSection";
import data from "../../utils/pageContent.json";
import Whatsapp from "@/app/components/whatsAppSection/whatsapp";
import Sponsors from "@/app/components/sponsors/sponsors";
import FlickityViewPortSection from "@/app/components/flickityView/CoachesHeads";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "Managements");

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}

export default function Home({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("HomePage");
  const tManagements = useTranslations("Managements");

  return (
    <>
      <NavBar page={"Managements"} lang={params.locale} />
      <InfoSection
        data={data.Management.infoSection}
        rowReverser={false}
        translatedContent={tManagements.raw("infoSection")}
        locale={params.locale}
        page="Managements"
      />
      <FlickityViewPortSection
        page="Managements"
        H2={tManagements("managers.header")}
        data={tManagements.raw("managers.content")}
      />
      <div style={{ paddingTop: "50px " }}>
        <Whatsapp translatedContent={t.raw("whatsupSection")} />
      </div>
      <Sponsors translatedContent={t.raw("sponsors")} />
      <BannerImage width={1600} height={810} src="/images/bannerFooter(update).jpeg" />
    </>
  );
}
