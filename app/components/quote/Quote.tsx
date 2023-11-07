"use client";
import React, { useRef } from "react";
import classes from "./quote.module.scss";

function Quote({ translatedContent }: { translatedContent: string }) {
  return (
    <section className={classes.quoteSection}>
      <video loop autoPlay preload="auto" muted src="/videos/Quote.webm" />
      <h3>{translatedContent}</h3>
    </section>
  );
}

export default Quote;
