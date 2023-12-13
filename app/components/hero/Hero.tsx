"use client";
import React, { useEffect, useState } from "react";
import classes from "./hero.module.scss";
import Link from "next/link";
import Image from "next/image";

interface ImageData {
  src: string;
  width: number;
  height: number;
  alt: string;
}

function Hero({
  content,
  page,
  tPage,
  imageData,
  link,
}: {
  content: string[];
  page: string;
  tPage: any;
  imageData?: ImageData;
  link?: string;
}) {
  const [video, setVideo] = useState("");
  const [image, setImage] = useState({
    src: "",
    width: 0,
    height: 0,
    alt: "",
  });

  useEffect(() => {
    const heroSection = async () => {
      switch (page) {
        case "HomePage":
          setVideo("/videos/Hero.webm");
          break;
        case "LeagueInfo":
          setVideo("/videos/leagues.webm");
          break;
        case "Academy":
          setVideo("/videos/Academy.webm");
          break;
        case "OurMission":
          setVideo("/videos/Quote.webm");
          break;
        case "ContactPage":
          imageData?.src ? setImage(imageData) : "";
          break;
        case "CankayaPage":
          setVideo("/videos/Cankaya.webm");
          break;
        case "ReservationPage":
          setVideo("/videos/Cankaya.webm");
          break;
        case "Association":
          setVideo("/videos/leagues.webm");
          break;
        case "PrivateLessons":
          setVideo("/videos/Quote.webm");
          break;
        default:
          break;
      }
    };
    heroSection();
  }, [page, imageData]);

  return (
    <section
      className={`${classes.heroSection} ${
        page !== "HomePage" ? classes.maxHight : ""
      }`}
    >
      <span />
      {image.src ? (
        <Image
          loading="lazy"
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          className={classes.imageBackground}
        />
      ) : (
        <video
          playsInline
          loop
          src={video}
          preload="metadata"
          muted
          autoPlay={true}
        />
      )}
      {page === "HomePage" ? (
        <div>
          <div>
            <h2>{content[0]} </h2>
            <p>{content[1]}</p>
            <Link className="button" href={link || ""}>
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
