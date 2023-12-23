"use client";
import React, { useEffect, useState } from "react";
import { getCookie } from "@/app/utils/function";
import dynamic from "next/dynamic";

const PopupLazy = dynamic(() => import("./Popup"), { ssr: false });

function ExtraLayer({
  children,
  locale,
  button,
  news,
}: {
  children: React.ReactNode;
  locale: string;
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
        <PopupLazy
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
