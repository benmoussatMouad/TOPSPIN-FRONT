import Image from "next/image";
import React from "react";
import classes from "./quote.module.scss";

function Background() {
  return (
    <div className={classes.topspinBackground}>
      <Image
        loading="lazy"
        className={classes.BackgroundImage}
        fill
        alt="topspin team"
        src={"/images/academy.jpeg"}
      />
    </div>
  );
}

export default Background;
