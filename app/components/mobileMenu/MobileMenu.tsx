import React, { Dispatch, SetStateAction } from "react";
import classes from "../../styles/menu.module.scss";
import Image from "next/image";
import { Link } from "../../utils/navigation";
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

  const path = usePathname();

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
          <Link href={`/league-information`}> {links[0]} </Link>
        </li>
        <li>
          <Link href={`/reservation`}> {links[1]}</Link>
        </li>
        <li>
          <Link href={`/academy`}>{links[2]}</Link>
        </li>
      </ul>
      <div className={classes.langSwitcher}>
        <Link locale="en" href={"/"}>
          <Image
            width={35}
            height={35}
            alt="english lang"
            src={"/assets/en.png"}
          />
        </Link>
        <Link locale="tr" href={"/"}>
          <Image
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
