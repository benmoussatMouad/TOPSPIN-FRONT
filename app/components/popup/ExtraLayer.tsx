"use client";
import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { getCookie } from "@/app/utils/function";

function ExtraLayer({
  children,
  locale,
  popupHeader,
  popupText,
  button,
  news,
}: {
  children: React.ReactNode;
  locale: string;
  popupHeader: string;
  popupText: string[];
  button: string;
  news: string;
}) {
  const [openPopup, setOpenPopup] = useState(false);
  const popupCookie = getCookie("popup-cookies");

  useEffect(() => {
    if (popupCookie) {
      setOpenPopup(false);
    } else {
      setTimeout(() => {
        setOpenPopup(true);
      }, 5000);
    }
  }, [popupCookie]);

  return (
    <>
      {openPopup ? (
        <Popup
          popupHeader={popupHeader}
          popupText={popupText}
          setOpenPopup={setOpenPopup}
          locale={locale}
          button={button}
          news={news}
        />
      ) : (
        ""
      )}
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, { setOpenPopup })
      )}
    </>
  );
}

export default ExtraLayer;
