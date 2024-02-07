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
          width={900}
          height={1600}
          alt="Topspin Cankaya"
          src={"/images/cankaya.jfif"}
        />
        <div>
          <h2>Topspin Çankaya</h2>

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
          src={"/images/resort1.jpeg"}
        />
        <div>
          <h2>Topspin Bilkent</h2>
          <Link className="button" href={"https://sibertenis.com/TOPSPIN"}>
            {tCanKaya.bilkent.button}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
