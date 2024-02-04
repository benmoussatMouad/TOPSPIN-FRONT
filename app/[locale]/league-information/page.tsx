import BannerImage from "@/app/components/bannerImage/bannerImage";
import NavBar from "@/app/components/navbar/NavBar";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "../../styles/league.module.scss";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "LeagueInfo");

  return {
    title: t("title") + " | Topspin Tennis Academy",
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("LeagueInfo");

  return (
    <>
      <NavBar
        page={"LeagueInfo"}
        imageData={{
          width: 4096,
          src: "/images/rubric.jpeg",
          alt: "background image",
          height: 2305,
        }}
        lang={params.locale}
      />
      <div className={classes.content}>
        <div className={classes.containerBox}>
          <Image
            loading="lazy"
            width={4096}
            height={2421}
            alt="Topspin Cankaya"
            src={"/images/aboutus.jpeg"}
          />
          <div>
            <h2>Topspin Çankaya</h2>
            <Link
              className="button"
              href={"/league-information/leagues-tournament/cankaya"}
            >
              {t("button")}
            </Link>
          </div>
        </div>
        <div className={classes.containerBox}>
          <Image
            loading="lazy"
            width={5472}
            height={3078}
            alt="Topspin Cankaya"
            src={"/images/footerBanner.JPG"}
          />
          <div>
            <h2>Topspin Bilkent</h2>
            <Link
              className="button"
              href={"/league-information/leagues-tournament/bilkent"}
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
      {/*<TournamentComponent translated={t.raw("tournaments")} />*/}
      <BannerImage width={1536} height={1023} src="/images/cankayabg.jpeg" />
    </>
  );
}

export default Page;
