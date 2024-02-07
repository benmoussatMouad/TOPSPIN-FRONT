import React from "react";
import classes from "../../styles/league.module.scss";
import Image from "next/image";
import Link from "next/link";

interface buttons {
  title: string;
  link: string;
}

interface TranslatedContent {
  header: string;
  description: string[];
  buttons: buttons[];
}

function LeagueTournament({
  league,
  tournament,
  slug,
}: {
  league: TranslatedContent;
  tournament: TranslatedContent;
  slug: string;
}) {
  return (
    <div className={classes.content}>
      <div className={classes.containerBox}>
        <Image
          loading="lazy"
          width={4096}
          height={slug === "bilkent" ? 2305 : 2421}
          alt="Topspin Cankaya"
          src={
            slug === "bilkent" ? "/images/lessons.jpeg" : "/images/aboutus.jpeg"
          }
        />
        <div>
          <h2>{league.header}</h2>
          <p>
            {league.description[0]}
            <br /> {league.description[1]}{" "}
          </p>
          <div className={classes.links}>
            {league.buttons.map((el, index) => (
              <Link key={index} className="button" href={el.link}>
                {el.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.containerBox}>
        <Image
          loading="lazy"
          width={slug !== "bilkent" ? 900 : 1536}
          height={slug !== "bilkent" ? 1600 : 1023}
          alt="Topspin Cankaya"
          src={
            slug !== "bilkent"
              ? "/images/cankaya.jfif"
              : "/images/cankayabg.jpeg"
          }
        />
        <div>
          <h2>{tournament.header}</h2>
          <p>
            {tournament.description[0]}
            <br /> {tournament.description[1]} <br />
            {tournament.description[2]}
          </p>
          <div className={classes.links}>
            {tournament.buttons.map((el, index) => (
              <Link key={index} className="button" href={el.link}>
                {el.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeagueTournament;
