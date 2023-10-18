import React from "react";
import classes from "./hero.module.scss";
import Image from "next/image";
import Link from "next/link";

function Hero() {
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
          <h2>TOPSPIN TENNIS ACADEMY </h2>
          <p>
            Regardless of your age or level, join a unique training programme to
            maximise your potential.
          </p>
          <Link className="button" href={""}>READ MORE</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
