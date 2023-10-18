import React from "react";
import classes from "./quote.module.scss";
import Image from "next/image";

function Quote() {
  return (
    <section className={classes.quoteSection}>
      <Image
        width={1920}
        height={587}
        alt="quote image"
        src={"/images/quotedesktop.png"}
      />
      <h3>Unleash your potential at Topspin Tennis Academy.</h3>
    </section>
  );
}

export default Quote;
