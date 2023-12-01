import Image from "next/image";
import React from "react";
import classes from "./infoSectionAcademy.module.scss";

function InfoSectionAcademy({span , text}:{ span:string , text:string}) {
  return (
    <section className={classes.infoSection}>
      <div>
        <div className={classes.infoContainer}>
          <Image
            alt="topspin players"
            width={2305}
            height={4096}
            src={"/images/academy-players.jpeg"}
            className={classes.playersImage}
          />
          <p className={classes.infoText}>
            <span>{span} </span>
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoSectionAcademy;
