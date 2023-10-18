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
    <div style={{ position: "relative", height: "100vh" }}>
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
          <ul className={classes.socialMediaLinks} id="TOPSPIN SOCIAL MEDIA">
            <li>
              <Link href={""}>
                <Image
                  width={23}
                  height={23}
                  src={"/assets/facebook.svg.svg"}
                  alt="Facebook logo"
                />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <Image
                  width={23}
                  height={23}
                  src={"/assets/insta.svg.svg"}
                  alt="Instagram logo"
                />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <Image
                  width={23}
                  height={23}
                  src={"/assets/twitter.svg.svg"}
                  alt="Twitter logo"
                />
              </Link>
            </li>
          </ul>
          <div className={classes.reservationSection}>
            <a>
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/assets/icon_stage.svg.svg"}
                  alt="Reserve a court logo"
                />
              </div>
              <h3> Reserve a Court </h3>
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
              <h3> Join the Tennis Academy </h3>
            </a>
          </div>
          <div className={classes.menuSection}>
            <div className={classes.langSwitcher}>
              <Image
                width={38}
                height={38}
                alt="lang switcher"
                src={"/assets/lang-switcher.svg"}
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
