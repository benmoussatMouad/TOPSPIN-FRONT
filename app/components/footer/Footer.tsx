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
            <h3>{t("Links.ourCamps.header")}</h3>
            <Link href={""}>{t("Links.ourCamps.firstLink")}</Link>
            <Link href={""}>{t("Links.ourCamps.secondLink")}</Link>
            <Link href={""}>{t("Links.ourCamps.thirdLink")}</Link>
            <Link href={""}>{t("Links.ourCamps.forthLink")}</Link>
          </li>
          <li>
            <h3>{t("Links.ourValue.header")}</h3>
            <Link href={""}>{t("Links.ourValue.firstLink")}</Link>
            <Link href={""}>{t("Links.ourValue.secondLink")}</Link>
          </li>
          <li>
            <h3>{t("Links.highPerformance.header")}</h3>
            <Link href={""}>{t("Links.highPerformance.firstLink")}</Link>
            <Link href={""}>{t("Links.highPerformance.secondLink")}</Link>
          </li>
          <li>
            <h3>{t("Links.helpfulLinks.header")}</h3>
            <Link href={"/academy"}>{t("Links.helpfulLinks.firstLink")}</Link>
            <Link href={"/contact"}>{t("Links.helpfulLinks.secondLink")}</Link>
            <Link href={""}>{t("Links.helpfulLinks.thirdLink")}</Link>
            <Link href={"/league-information"}>{t("Links.helpfulLinks.forthLink")}</Link>
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
        <ul>
          <li>
            <Link href={""}>{t("websiteReference.sitemap")}</Link>
          </li>
          <li>
            <Link href={""}>{t("websiteReference.terms")}</Link>
          </li>
          <li>
            <Link href={""}>{t("websiteReference.privacy")}</Link>
          </li>
          <li>
            <Link href={"/contact"}>{t("websiteReference.contact")}</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
