import React from "react";
import classes from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={classes.footer}>
      <div>
        <ul>
          <li>
            <h3>{t("Links.highPerformance.header")}</h3>
            <Link href={"/academy"}>
              {t("Links.highPerformance.firstLink")}
            </Link>
            <Link href={"/our-mission"}>
              {t("Links.highPerformance.secondLink")}
            </Link>
            <Link href={"/private-lessons"}>
              {t("Links.highPerformance.thirdLink")}
            </Link>
          </li>
          <li>
            <h3>{t("Links.league.header")}</h3>
            <Link href={"/league-information"}>
              {t("Links.league.firstLink")}
            </Link>
            <Link href={"/general-information"}>
              {t("Links.league.secondLink")}
            </Link>
          </li>
          <li>
            <h3>{t("Links.court.header")}</h3>
            <Link
              href={"http://topspin.ten-is.com/Online/Login/?ReturnUrl=/Online"}
            >
              {t("Links.court.firstLink")}
            </Link>
            <Link href={"https://sibertenis.com/TOPSPIN"}>
              {t("Links.court.secondLink")}
            </Link>
          </li>
          <li>
            <h3>{t("Links.helpfulLinks.header")}</h3>
            <Link href={"/contact"}>{t("Links.helpfulLinks.firstLink")}</Link>
            <Link href={"/category-rubrics"}>
              {t("Links.helpfulLinks.secondLink")}
            </Link>
            <Link href={"/sports-association"}>
              {t("Links.helpfulLinks.thirdLink")}
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={""}>
              <Image
                width={25}
                height={25}
                alt="facebook logo"
                src={"/assets/facebook.svg.svg"}
              />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image
                width={25}
                height={25}
                alt="instagram logo"
                src={"/assets/insta.svg.svg"}
              />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image
                width={25}
                height={25}
                alt="twitter logo"
                src={"/assets/twitter.svg.svg"}
              />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image
                width={25}
                height={25}
                alt="email logo"
                src={"/assets/mail.svg"}
              />
            </Link>
          </li>
        </ul>
        <div>
          <p>Üniversiteler, İhsan Doğramacı Blv no:1, 06800 Çankaya/Ankara</p>
          <p>Tel : +90 312 909 3333</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
