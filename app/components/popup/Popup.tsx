"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import classes from "./popup.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next-intl/client";
import { setCookie } from "@/app/utils/function";

function Popup({
  locale,
  setOpenPopup,
}: {
  locale: string;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
}) {
  const path = usePathname();

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 2);

  return (
    <section className={classes.PopupContainer}>
      <div
        onClick={() => {
          setCookie({
            name: "popup-cookies",
            value: "true",
            expires: expirationDate,
          }),
            setOpenPopup(false);
        }}
        className={classes.closeOverLay}
      ></div>
      <div className={classes.popup}>
        <div className={classes.popupNav}>
          <Image
            width={652}
            height={297}
            alt="logo"
            src={"/assets/logowhiteblack.jpeg"}
            className={classes.logo}
          />
          <h3>News</h3>
          <div className={classes.langSwitcher}>
            {locale === "tr" ? (
              <Image
                width={2048}
                height={2048}
                alt="lang switcher"
                src={"/images/turkey-flag-circular-17766.png"}
                className={classes.langFlag}
              />
            ) : (
              <Image
                width={34}
                height={35}
                alt="lang switcher"
                src={"/assets/en.png"}
                className={classes.langFlag}
              />
            )}
            <div className={classes.langMenu}>
              <Link locale="en" href={"/en" + path}>
                EN
              </Link>
              <Link locale="tr" href={"/tr" + path}>
                TR
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.popupContent}>
          <div>
            <Image
              width={674}
              height={536}
              alt="Topspin Cankaya"
              src={"/images/TopspinÇankaya.png"}
            />
          </div>
          <div>
            <h3>Expansion and Innovation: </h3>
            <div className={classes.textContent}>
              <p>
                To accommodate our growing community and enhance player
                development, Topspin Academy is thrilled to announce the
                expansion of its facilities with [Describe the expansion or
                addition]. This will provide even more opportunities for players
                to train and compete at the highest level.
              </p>
              <p>
                Stay tuned for more exciting news and updates from Topspin
                Tennis Academy!
              </p>
            </div>
          </div>
        </div>
        <div className={classes.footer}></div>
      </div>
    </section>
  );
}

export default Popup;
