import BannerImage from "@/app/components/bannerImage/bannerImage";
import GeneralInfo from "@/app/components/generalInfo/GeneralInfo";
import NavBar from "@/app/components/navbar/NavBar";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "GeneralInfo");

  return {
    title: t("title"),
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("GeneralInfo");

  return (
    <>
      <NavBar
        page={"GeneralInfo"}
        imageData={{
          width: 4096,
          src: "/images/general.jpeg",
          alt: "background image",
          height: 2305,
        }}
        lang={params.locale}
      />
      <GeneralInfo
        buttons={t.raw("buttons")}
        rules={t.raw("rules")}
        general={t.raw("ethics")}
      />
      <BannerImage width={1943} height={626} src="/images/footer.png" />
    </>
  );
}

export default Page;
