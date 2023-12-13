"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import classes from "./popup.module.scss";
import Image from "next/image";
import { usePathname } from "next-intl/client";
import { setCookie } from "@/app/utils/function";
import { Link } from "@/app/utils/navigation";

function Popup({
  locale,
  popupHeader,
  popupText,
  setOpenPopup,
}: {
  locale: string;
  popupHeader: string;
  popupText: string[];
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
}) {
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
              <Link locale="en" href={"/"}>
                EN
              </Link>
              <Link locale="tr" href={"/"}>
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
            <h3>{popupHeader} </h3>
            <div className={classes.textContent}>
              {popupText.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.footer}></div>
      </div>
    </section>
  );
}

export default Popup;
