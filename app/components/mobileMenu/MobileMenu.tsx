import React, { Dispatch, SetStateAction } from "react";
import classes from "../../styles/menu.module.scss";
import Image from "next/image";
import { Link, pathnames } from "../../utils/navigation";
import { usePathname } from "next-intl/client";

function MobileMenu({
  isMobileMenuOn,
  setIsMobileMenuOn,
  links,
  lang,
}: {
  isMobileMenuOn: boolean;
  setIsMobileMenuOn: Dispatch<SetStateAction<boolean>>;
  links: string[];
  lang: string;
}) {
  const closeMobileMenu = () => {
    setIsMobileMenuOn(false);
  };

  const path: string = usePathname();

  return (
    <div
      className={`${classes.mobileMenu} ${
        isMobileMenuOn ? classes.mobileMenuOn : ""
      }`}
    >
      <div className={classes.closeBtn}>
        <Image
          loading="lazy"
          width={40}
          height={40}
          alt="xmark"
          src={"/assets/xmark-solid.svg"}
          onClick={closeMobileMenu}
        />
      </div>
      <ul className={classes.mobileLinks}>
        <div>
          <li>
            <Link href={`/academy`}> {links[0]} </Link>
          </li>
          <li>
            <Link href={`/our-mission`}> {links[1]}</Link>
          </li>
          <li>
            <Link href={`/league-information`}>{links[3]}</Link>
          </li>
          <li>
            <Link href={`/reservation`}>{links[4]}</Link>
          </li>
          <li>
            <Link href={`/management`}>{links[5]}</Link>
          </li>
          <li>
            <Link href={`#`}>{links[6]}</Link>
          </li>
          <li>
            <Link href={`/contact`}>{links[7]}</Link>
          </li>
        </div>
      </ul>
      <div className={classes.langSwitcher}>
        <Link locale="en" href={path ? `/${path}` : "/"}>
          <Image
            loading="lazy"
            width={35}
            height={35}
            alt="english lang"
            src={"/assets/en.png"}
          />
        </Link>
        <Link locale="tr" href={path ? `/${path}` : "/"}>
          <Image
            loading="lazy"
            width={35}
            height={35}
            alt="turkish lang"
            src={"/images/turkey-flag-circular-17766.png"}
          />
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
