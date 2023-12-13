import BannerImage from "@/app/components/bannerImage/bannerImage";
import NavBar from "@/app/components/navbar/NavBar";
import { useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";
import React from "react";
import classes from "./sports.module.scss";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "Association");

  return {
    title: t("title"),
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
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
      <BannerImage width={1943} height={626} src="/images/footer.png" />
    </>
  );
}

export default Page;
