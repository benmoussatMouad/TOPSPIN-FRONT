"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";
import MobileMenu from "../mobileMenu/MobileMenu";

function Nav({ lang, links }: { lang: string; links: string[] }) {
  /*
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 90) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isSticky
    ? `${classes.navbar} ${classes.sticky}`
    : classes.navbar;
*/

  const [isMobileMenuOn, setIsMobileMenuOn] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOn(true);
  };

  return (
    <>
      <MobileMenu
        links={links}
        setIsMobileMenuOn={setIsMobileMenuOn}
        isMobileMenuOn={isMobileMenuOn}
      />
      <nav id="navbar" className={classes.navbar}>
        <Link href={`/${lang}`} className={classes.logo}>
          <Image
            width={300}
            height={39}
            alt="TOPSPIN LOGO"
            src={"/images/logo.svg"}
          />
        </Link>
        <div className={classes.navSection}>
          <div className={classes.reservationSection}>
            <Link href={`/${lang}/league-information`}>
              <p> {links[0]} </p>
            </Link>
            <span>|</span>
            <a>
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/assets/icon_stage.svg.svg"}
                  alt="Reserve a court logo"
                />
              </div>
              <p> {links[1]} </p>
            </a>
            <span>|</span>
            <a>
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/assets/icon_tennis-etude.svg.svg"}
                  alt="Join team logo"
                />
              </div>
              <p> {links[2]} </p>
            </a>
          </div>
          <div className={classes.menuSection}>
            <div className={classes.langSwitcher}>
              {lang === "tr" ? (
                <Image
                  width={34}
                  height={35}
                  alt="lang switcher"
                  src={"/assets/turkFlag.png"}
                />
              ) : (
                <Image
                  width={34}
                  height={35}
                  alt="lang switcher"
                  src={"/assets/en.png"}
                />
              )}
              <div className={classes.langMenu}>
                <Link href={"/en"}>EN</Link>
                <Link href={"/tr"}>TR</Link>
              </div>
            </div>
            <div className={classes.menuButton}>
              <Image
                width={45}
                height={45}
                alt="Menu button"
                src={"/assets/Button → menu.svg.svg"}
              />
            </div>
            <div></div>
            <div onClick={openMobileMenu} className={classes.menuButtonMobile}>
              <Image
                width={35}
                height={35}
                alt="Menu button"
                src={"/assets/menu_mobile.svg"}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;