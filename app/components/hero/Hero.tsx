import React from "react";
import classes from "./hero.module.scss";
import Image from "next/image";
import Link from "next/link";

function Hero({ content }: { content: string[] }) {
  return (
    <section className={classes.heroSection}>
      <Image
        width={1920}
        height={1043}
        alt="Banner expansion desktop"
        src={"/images/banner_expansion_desktop.png"}
      />
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
