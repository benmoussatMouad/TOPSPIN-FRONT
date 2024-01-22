"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import classes from "./popup.module.scss";
import Image from "next/image";
import { setCookie } from "@/app/utils/function";
import { Link } from "@/app/utils/navigation";
import { useQuery } from "@tanstack/react-query";

function Popup({
  locale,
  setOpenPopup,
  button,
  news,
}: {
  locale: string;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  button: string;
  news: string;
}) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 2);

  const { data, error, isLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/ui/popup`).then((res) =>
        res.json()
      ),
  });

  if (isLoading || !data?.popup) {
    // Show loading state or return null when data is loading or not available yet
    return null;
  }

  

  if (error) {
    throw new Error(error.message);
  }

  const uint8Array = new Uint8Array(data.popup.imageData.data);
  const base64Image = `data:image/png;base64,${Buffer.from(uint8Array).toString('base64')}`;

  return (
    <>
      {data?.popup ? (
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
                  {locale === "en" ? (
                    <Image
                      loading="lazy"
                      width={50}
                      height={50}
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
                  src={`${base64Image}`}
                />
              </div>
              <div>
                <h3>
                  {locale === "tr"
                    ? data?.popup?.headerTurkish
                    : data?.popup.headerEnglish}{" "}
                </h3>
                <div className={classes.textContent}>
                  {data?.popup?.text.map(
                    (el: {
                      id: number;
                      englishTranslation: string;
                      turkishTranslation: string;
                    }) => (
                      <p key={el.id}>
                        {locale === "tr"
                          ? el.turkishTranslation
                          : el.englishTranslation}
                      </p>
                    )
                  )}
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
      ) : (
        ""
      )}
    </>
  );
}

export default Popup;
