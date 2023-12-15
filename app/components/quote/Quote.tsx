"use client";
import React, { useRef, useEffect } from "react";
import classes from "./quote.module.scss";

function Quote({ translatedContent }: { translatedContent: string }) {
  return (
    <section className={classes.quoteSection}>
      <span className={classes.overlay} />
      <video
        playsInline
        loop
        autoPlay
        preload="auto" // Set preload to "none" to prevent automatic loading
        muted
      >
        <source src="/videos/Quote.mp4" type="video/mp4" />
      </video>
      <h3>{translatedContent}</h3>
    </section>
  );
}

export default Quote;
