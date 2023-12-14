"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MenuNav from "./MenuNav";
import Hero from "../hero/Hero";

function ExtraLayer({
  lang,
  page,
  link,
  links,
  links2,
  title,
  linksMenuNav,
  imageData,
}: {
  lang: string;
  page: string;
  link?: string;
  links: any;
  links2: any;
  title: string;
  linksMenuNav: any;
  imageData?: any;
}) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Nav
        linksMenuNav={linksMenuNav}
        setOpenMenu={setOpenMenu}
        links={links}
        lang={lang}
      />
      <MenuNav
        linksMenuNav={linksMenuNav}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        lang={lang}
      />
      <Hero
        page={page}
        content={links2}
        tPage={title}
        imageData={imageData}
        link={link}
      />
    </>
  );
}

export default ExtraLayer;
