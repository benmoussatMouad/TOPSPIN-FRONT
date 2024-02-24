import BannerImage from "@/app/components/bannerImage/bannerImage";
import NavBar from "@/app/components/navbar/NavBar";
import data from "../../utils/pageContent.json";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "../../styles/league.module.scss";
import InfoSection from "../../components/infoSection/InfoSection";

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

function InfoSectionWithIndex({
  data,
  locale,
  index,
}: {
  data: any;
  locale: any;
  index: number;
}) {
  const t = useTranslations("LeagueInfo");
  return (
    <InfoSection
      data={data.leagueInfo.infoSection}
      rowReverser={false}
      maxWidthH3={index === 2 ? false : true}
      translatedContent={t.raw("PlayerRankingInfo")}
      locale={locale}
    />
  );
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
            width={1197}
            height={1007}
            alt="Topspin Cankaya"
            src={"/images/kjdCankaya.jpeg"}
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
            width={1536}
            height={1023}
            alt="Topspin Cankaya"
            src={"/images/resort1.jpeg"}
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
      <div style={{marginTop: "-15%"}}>
      {<InfoSectionWithIndex data={data} locale={false} index={2} />}

      </div>

      {/*<TournamentComponent translated={t.raw("tournaments")} />*/}

      <BannerImage width={1600} height={810} src="/images/bannerFooter(update).jpeg" />
    </>
  );
}

export default Page;
