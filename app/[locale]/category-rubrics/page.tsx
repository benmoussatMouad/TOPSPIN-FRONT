import BannerImage from "@/app/components/bannerImage/bannerImage";
import Rubrics from "@/app/components/generalInfo/Rubrics";
import NavBar from "@/app/components/navbar/NavBar";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "Rubrics");

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Rubrics");

  return (
    <>
      <NavBar
        page={"Rubrics"}
        imageData={{
          width: 4096,
          src: "/images/rubric.jpeg",
          alt: "background image",
          height: 2305,
        }}
        lang={params.locale}
      />
      <Rubrics buttons={t.raw("buttons")} scoreSystem={t.raw("scoreSystem")} />
      <BannerImage width={1600} height={810} src="/images/bannerFooter(update).jpeg" />
      </>
  );
}

export default Page;
