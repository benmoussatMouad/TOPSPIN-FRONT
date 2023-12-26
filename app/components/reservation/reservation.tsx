import React from "react";
import classes from "../../styles/league.module.scss";
import Image from "next/image";
import Link from "next/link";

interface TcanKaya {
  cankaya: {
    desc: string[];
    button: string;
  };
  bilkent: {
    desc: string[];
    button: string;
  };
}

function Reservation({ tCanKaya }: { tCanKaya: TcanKaya }) {
  return (
    <div className={classes.content}>
      <div className={classes.containerBox}>
        <Image
          loading="lazy"
          width={4096}
          height={2421}
          alt="Topspin Cankaya"
          src={"/images/aboutus.jpeg"}
        />
        <div>
          <h2>TopSpin Çankaya</h2>

          <Link
            className="button"
            href={"http://topspin.ten-is.com/Online/Login/?ReturnUrl=/Online"}
          >
            {tCanKaya.cankaya.button}
          </Link>
        </div>
      </div>
      <div className={classes.containerBox}>
        <Image
          loading="lazy"
          width={5472}
          height={3078}
          alt="Topspin Cankaya"
          src={"/images/footerBanner.JPG"}
        />
        <div>
          <h2>TopSpin Bilkent</h2>
          <Link className="button" href={"https://sibertenis.com/TOPSPIN"}>
            {tCanKaya.bilkent.button}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
