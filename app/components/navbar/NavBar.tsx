"use client";
import React, { useEffect, useState } from "react";
import classes from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Hero from "../hero/Hero";

function NavBar() {
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

  return (
    <div style={{ position: "relative" }}>
      <nav id="navbar" className={navbarClass}>
        <div className={classes.logo}>
          <Image
            width={210}
            height={39}
            alt="TOPSPIN LOGO"
            src={"/images/logo.svg"}
          />
        </div>
        <div className={classes.navSection}>
          <div className={classes.reservationSection}>
            <a href="">
              <p> League information </p>
            </a>
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
              <p> Reserve a Court </p>
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
              <p> Join the Tennis Academy </p>
            </a>
          </div>
          <div className={classes.menuSection}>
            <div className={classes.langSwitcher}>
              <Image
                width={34}
                height={35}
                alt="lang switcher"
                src={"/assets/en.png"}
              />
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
            <div className={classes.menuButtonMobile}>
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
      <Hero />
    </div>
  );
}

export default NavBar;
