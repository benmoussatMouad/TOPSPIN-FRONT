"use client";
import React, { Dispatch, SetStateAction } from "react";
import classes from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

function MenuNav({
  lang,
  setOpenMenu,
  openMenu,
}: {
  lang: string;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  openMenu: boolean;
}) {
  return (
    <>
      <Image
        width={1140}
        height={855}
        alt="drone image"
        src={"/images/academyDrone.jpeg"}
        className={`${classes.image} ${openMenu ? classes.reset : ""}`}
      />
      <nav className={`${classes.nav} ${openMenu ? classes.reset : ""}`}>
        <div className={classes.closeBtn}>
          <Image
            width={40}
            height={40}
            alt="xmark"
            src={"/assets/xmark-solid.svg"}
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <ul className={classes.ul}>
          <Link href={`/${lang}/academy`}>
            <li>The Academy</li>
          </Link>
          <Link href={`/${lang}/our-mission`}>
            <li>Our mission </li>
          </Link>
          <Link href={`/${lang}/cankaya`}>
            <li>TopSpin Çankaya</li>
          </Link>
          <Link
            href={`https://docs.google.com/spreadsheets/d/1O9VTAuREy5HadTlPG_bNCFUz7Xx6SBwrh3Ox_PLshT4/edit#gid=0`}
          >
            <li>League Informations</li>
          </Link>
          <Link href={`/${lang}/contact`}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default MenuNav;
