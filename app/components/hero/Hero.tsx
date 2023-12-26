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
          setVideo(
            "https://res.cloudinary.com/dn3nigoi4/video/upload/f_auto:video,q_auto/v1/videos/d6yn8cclrpprboni6s65"
          );
          break;
        case "LeagueInfo":
          imageData?.src ? setImage(imageData) : "";
          break;
        case "Academy":
          setVideo(
            "https://res.cloudinary.com/dn3nigoi4/video/upload/f_auto:video,q_auto/v1/videos/slqflu50tutsa9cbb8sw"
          );
          break;
        case "OurMission":
          setVideo(
            "https://res.cloudinary.com/dn3nigoi4/video/upload/f_auto:video,q_auto/v1/videos/otzxueyaxsrvsb37s3tf"
          );
          break;
        case "ContactPage":
          imageData?.src ? setImage(imageData) : "";
          break;
        case "CankayaPage":
          setVideo(
            "https://res.cloudinary.com/dn3nigoi4/video/upload/f_auto:video,q_auto/v1/videos/v3mb3epj0zcdyjhuxq2b"
          );
          break;
        case "ReservationPage":
          setVideo(
            "https://res.cloudinary.com/dn3nigoi4/video/upload/f_auto:video,q_auto/v1/videos/tqaqhf6iyoxcre8hf8jw"
          );
          break;
        case "Association":
          setVideo(
            "https://res.cloudinary.com/dn3nigoi4/video/upload/f_auto:video,q_auto/v1/videos/lwlfomp6tov7qma3zyyu"
          );
          break;
        case "PrivateLessons":
          setVideo(
            "https://res.cloudinary.com/dn3nigoi4/video/upload/f_auto:video,q_auto/v1/videos/otzxueyaxsrvsb37s3tf"
          );
          break;
        case "GeneralInfo":
          imageData?.src ? setImage(imageData) : "";
          break;
        case "Rubrics":
          imageData?.src ? setImage(imageData) : "";
          break;
        case "2023-topspin-summer-bilkent-league":
          setVideo(
            "https://res.cloudinary.com/dn3nigoi4/video/upload/f_auto:video,q_auto/v1/videos/lwlfomp6tov7qma3zyyu"
          );
          break;
        case "Managements":
          setVideo(
            "https://res.cloudinary.com/dn3nigoi4/video/upload/f_auto:video,q_auto/v1/videos/lwlfomp6tov7qma3zyyu"
          );
          break;
        default:
          imageData?.src ? setImage(imageData) : "";
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
          preload="auto"
          muted
          autoPlay={true}
        >
          <source src={video} />
        </video>
      )}
      {page === "HomePage" ? (
        <div className={classes.marginHomePage}>
          <div>
            <h2>{content[0]} </h2>
            <p>{content[1]}</p>
            <div>
              <Link className="button" href={"/academy"}>
                BILKENT
              </Link>
              <Link className="button" href={"/cankaya"}>
                ÇANKAYA
              </Link>
            </div>
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
