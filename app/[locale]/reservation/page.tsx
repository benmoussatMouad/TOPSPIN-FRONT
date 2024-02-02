import BannerImage from "@/app/components/bannerImage/bannerImage";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import Reservation from "@/app/components/reservation/reservation";
import NavBar from "@/app/components/navbar/NavBar";


export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "ReservationPage");

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}

export default function Home({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("HomePage");
  const tCanKaya = useTranslations("ReservationPage");

  return (
    <>
      <NavBar page={"ReservationPage"} lang={params.locale} />
      <Reservation tCanKaya={tCanKaya.raw("data")} />
      <BannerImage width={1536} height={1023} src="/images/cankayabg.jpeg" />
    </>
  );
}
