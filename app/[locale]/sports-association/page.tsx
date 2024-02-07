import BannerImage from "@/app/components/bannerImage/bannerImage";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import classes from "./sports.module.scss";
import NavBar from "@/app/components/navbar/NavBar";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "Association");

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("Association");

  return (
    <>
      <NavBar page={"Association"} lang={params.locale} />
      <section className={classes.pageContent}>
        <div>
          <p>{t("content.header")}</p>
          <h3>{t("content.ul.header")}</h3>
          <ul>
            {t.raw("content.ul.li").map((el: string, index: number) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
      </section>
      <BannerImage width={1600} height={810} src="/images/bannerFooter(update).jpeg" />
    </>
  );
}

export default Page;
