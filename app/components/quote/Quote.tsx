import React from "react";
import classes from "./quote.module.scss";
import Image from "next/image";

function Quote({ translatedContent }: { translatedContent: string }) {
  return (
    <section className={classes.quoteSection}>
      <Image
        width={1920}
        height={587}
        alt="quote image"
        src={"/images/quotedesktop.png"}
      />
      <h3>{translatedContent}</h3>
    </section>
  );
}

export default Quote;
