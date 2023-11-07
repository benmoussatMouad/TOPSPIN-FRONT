import React, { Dispatch, SetStateAction } from "react";
import classes from "../../styles/menu.module.scss";
import Image from "next/image";
import Link from "next/link";

function MobileMenu({
  isMobileMenuOn,
  setIsMobileMenuOn,
  links,
}: {
  isMobileMenuOn: boolean;
  setIsMobileMenuOn: Dispatch<SetStateAction<boolean>>;
  links: string[];
}) {
  const closeMobileMenu = () => {
    setIsMobileMenuOn(false);
  };

  return (
    <div
      className={`${classes.mobileMenu} ${
        isMobileMenuOn ? classes.mobileMenuOn : ""
      }`}
    >
      <div className={classes.closeBtn}>
        <Image
          width={40}
          height={40}
          alt="xmark"
          src={"/assets/xmark-solid.svg"}
          onClick={closeMobileMenu}
        />
      </div>
      <ul className={classes.mobileLinks}>
        <li>
          <Link href={"#"}> {links[0]} </Link>
        </li>
        <li>
          <Link href={"#"}> {links[1]}</Link>
        </li>
        <li>
          <Link href={"#"}>{links[2]}</Link>
        </li>
      </ul>
      <div className={classes.langSwitcher}>
        <Link href={"/en"}>
          <Image
            width={35}
            height={35}
            alt="english lang"
            src={"/assets/en.png"}
          />
        </Link>
        <Link href={"/tr"}>
          <Image
            width={35}
            height={35}
            alt="turkish lang"
            src={"/assets/turkFlag.png"}
          />
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
