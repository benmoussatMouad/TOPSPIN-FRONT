import React from "react";
import classes from "./reservation.module.scss";
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
    <div className={classes.reservation}>
      <div className={classes.reservationBox}>
        <Image
          width={674}
          height={536}
          alt="Topspin Cankaya"
          src={"/images/TopspinÇankaya.png"}
        />
        <div>
          <h2>TopSpin Çankaya</h2>
          <p>
            {tCanKaya.cankaya.desc[0]}
            <br /> {tCanKaya.cankaya.desc[1]} <br />
            {tCanKaya.cankaya.desc[2]} <br /> {tCanKaya.cankaya.desc[3]} <br />{" "}
            {tCanKaya.cankaya.desc[4]}
          </p>
          <Link
            className="button"
            href={"http://topspin.ten-is.com/Online/Login/?ReturnUrl=/Online"}
          >
            {tCanKaya.cankaya.button}
          </Link>
        </div>
      </div>
      <div className={classes.reservationBox}>
        <Image
          width={674}
          height={536}
          alt="Topspin Cankaya"
          src={"/images/academyDrone.jpeg"}
        />
        <div>
          <h2>TopSpin Bilkent</h2>
          <p>{tCanKaya.bilkent.desc[0]}</p>
          <Link className="button" href={"https://sibertenis.com/TOPSPIN"}>
            {tCanKaya.bilkent.button}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
