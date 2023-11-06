import React from "react";
import classes from "./hero.module.scss";
import Image from "next/image";
import Link from "next/link";

function Hero({ content }: { content: string[] }) {
  return (
    <section className={classes.heroSection}>
      <span />
      <video loop src={"/videos/Hero.webm"} autoPlay={true} />
      <div>
        <div>
          <h2>{content[0]} </h2>
          <p>{content[1]}</p>
          <Link className="button" href={""}>
            {content[2]}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
