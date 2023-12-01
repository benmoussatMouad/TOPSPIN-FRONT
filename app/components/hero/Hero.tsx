"use client";
import React, { useEffect, useState } from "react";
import classes from "./hero.module.scss";
import Link from "next/link";

function Hero({
  content,
  page,
  tPage,
}: {
  content: string[];
  page: string;
  tPage: any;
}) {
  const [video, setVideo] = useState("");

  useEffect(() => {
    const heroSection = () => {
      switch (page) {
        case "HomePage":
          setVideo("/videos/Hero.webm");
          break;
        case "LeagueInfo":
          setVideo("/videos/League.webm");
          break;
        case "Academy":
          setVideo("/videos/Academy.webm");
          break;
        default:
          break;
      }
    };
    heroSection();
  }, [page]);

  return (
    <section
      className={`${classes.heroSection} ${
        page !== "HomePage" ? classes.maxHight : ""
      }`}
    >
      <span />
      <video loop src={video} preload="auto" muted autoPlay={true} />
      {page === "HomePage" ? (
        <div>
          <div>
            <h2>{content[0]} </h2>
            <p>{content[1]}</p>
            <Link className="button" href={""}>
              {content[2]}
            </Link>
          </div>
        </div>
      ) : (
        <div className={classes.centredContent}>
          <h2>{tPage}</h2>
        </div>
      )}
    </section>
  );
}

export default Hero;
