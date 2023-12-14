"use client";
import React, { useRef } from "react";
import classes from "./quote.module.scss";

function Quote({ translatedContent }: { translatedContent: string }) {
  return (
    <section className={classes.quoteSection}>
      <video
        playsInline
        loop
        autoPlay
        preload="auto"
        muted
      >
        <source src="/videos/Quote.webm" type="video/webm" />
      </video>
      <h3>{translatedContent}</h3>
    </section>
  );
}

export default Quote;
