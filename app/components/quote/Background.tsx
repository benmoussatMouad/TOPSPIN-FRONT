import Image from "next/image";
import React from "react";
import classes from "./quote.module.scss";

function Background() {
  return (
    <div className={classes.topspinBackground}>
      <Image
        className={classes.BackgroundImage}
        width={3936}
        height={2216}
        alt="topspin team"
        src={"/images/academy.jpeg"}
      />
    </div>
  );
}

export default Background;