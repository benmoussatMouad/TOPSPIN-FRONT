"use client";
import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { getCookie } from "@/app/utils/function";

function ExtraLayer({
  children,
  locale,
  popupHeader,
  popupText,
}: {
  children: React.ReactNode;
  locale: string;
  popupHeader: string;
  popupText: string[];
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
