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
        <source
          src="https://res.cloudinary.com/dn3nigoi4/video/upload/f_auto:video,q_auto/v1/videos/otzxueyaxsrvsb37s3tf"
        />
      </video>
      <h3>{translatedContent}</h3>
    </section>
  );
}

export default Quote;
