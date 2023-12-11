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
}: {
  lang: string;
  page: string;
  link?: string;
  links: any;
  links2: any;
  title: string;
  linksMenuNav: any;
}) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Nav setOpenMenu={setOpenMenu} links={links} lang={lang} />
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
        imageData={{
          width: 4096,
          src: "/images/contactusImage.jpeg",
          alt: "background image",
          height: 2305,
        }}
        link={link}
      />
    </>
  );
}

export default ExtraLayer;
