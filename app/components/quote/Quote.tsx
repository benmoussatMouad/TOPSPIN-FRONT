"use client";
import React, { useRef, useEffect } from "react";
import classes from "./quote.module.scss";

function Quote({ translatedContent }: { translatedContent: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.src = "/videos/Quote.webm"; // Set the actual video source
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold based on your preference
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect(); // Cleanup the observer when the component unmounts
    };
  }, []);

  return (
    <section className={classes.quoteSection}>
      <video
        ref={videoRef}
        playsInline
        loop
        autoPlay
        preload="none" // Set preload to "none" to prevent automatic loading
        muted
      >
        <source src="/videos/Quote.webm" type="video/webm" />
      </video>
      <h3>{translatedContent}</h3>
    </section>
  );
}

export default Quote;
