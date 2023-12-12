"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import classes from "./navbar.module.scss";
import { Link } from "../../utils/navigation";
import MobileMenu from "../mobileMenu/MobileMenu";
import { usePathname } from "next-intl/client";

function Nav({
  lang,
  links,
  setOpenMenu,
}: {
  lang: string;
  links: string[];
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) {
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

  const path = usePathname();

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
        lang={lang}
      />
      <nav id="navbar" className={classes.navbar}>
        <Link href={`/`} className={classes.logo}>
          <Image
            width={300}
            height={39}
            alt="TOPSPIN LOGO"
            src={"/images/logo.svg"}
          />
        </Link>
        <div className={classes.navSection}>
          <div className={classes.reservationSection}>
            <Link href={`/league-information`}>
              <p> {links[0]} </p>
            </Link>
            <span>|</span>
            <Link href={`/reservation`}>
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/assets/icon_stage.svg.svg"}
                  alt="Reserve a court logo"
                />
              </div>
              <p> {links[1]} </p>
            </Link>
            <span>|</span>
            <Link href={`/academy`}>
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/assets/icon_tennis-etude.svg.svg"}
                  alt="Join team logo"
                />
              </div>
              <p> {links[2]} </p>
            </Link>
          </div>
          <div className={classes.menuSection}>
            <div className={classes.langSwitcher}>
              {lang === "tr" ? (
                <Image
                  width={2048}
                  height={2048}
                  alt="lang switcher"
                  src={"/images/turkey-flag-circular-17766.png"}
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
                <Link locale="en" href={"/"}>
                  EN
                </Link>
                <Link locale="tr" href={"/"}>
                  TR
                </Link>
              </div>
            </div>
            <div className={classes.menuButton}>
              <Image
                width={45}
                height={45}
                alt="Menu button"
                src={"/assets/Button → menu.svg.svg"}
                onClick={() => setOpenMenu(true)}
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
