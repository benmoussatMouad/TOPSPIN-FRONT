import BannerImage from "@/app/components/bannerImage/bannerImage";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import Reservation from "@/app/components/reservation/reservation";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../../components/navbar/NavBar"), {
  ssr: false,
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "ReservationPage");

  return {
    title: t("title"),
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
      <BannerImage width={1943} height={626} src="/images/footer.png" />
    </>
  );
}
