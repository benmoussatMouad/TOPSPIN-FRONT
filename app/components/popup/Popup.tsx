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
  button,
  news,
}: {
  locale: string;
  popupHeader: string;
  popupText: string[];
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  button: string;
  news: string;
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
          <div>
            <Image
              loading="lazy"
              width={652}
              height={297}
              alt="logo"
              src={"/assets/logowhiteblack.jpeg"}
              className={classes.logo}
            />
          </div>
          <h3>{news}</h3>
          <div>
            <div className={classes.langSwitcher}>
              {locale === "tr" ? (
                <Image
                  loading="lazy"
                  width={2048}
                  height={2048}
                  alt="lang switcher"
                  src={"/images/turkey-flag-circular-17766.png"}
                  className={classes.langFlag}
                />
              ) : (
                <Image
                  loading="lazy"
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
        </div>
        <div className={classes.popupContent}>
          <div>
            <Image
              loading="lazy"
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
        <div className={classes.footer}>
          <button
            onClick={() => {
              setCookie({
                name: "popup-cookies",
                value: "true",
                expires: expirationDate,
              }),
                setOpenPopup(false);
            }}
            className="button"
          >
            {button}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Popup;
