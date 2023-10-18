import React from "react";
import classes from "./sponsors.module.scss";
import Image from "next/image";

function Sponsors() {
  return (
    <section className={classes.sponsorsSection}>
      <div>
        <h4>Join our Tennis Academy</h4>
        <p>
          Topspin Tennis Academy is one of the leading tennis academies in
          Turkey, and we are always looking for talented players to join our
          team. If you are serious about improving your tennis game and
          achieving your goals, we <br/> encourage you to apply to join our academy. <br/>
          At Topspin Tennis Academy, we offer a variety of programs to meet the
          needs of players of all skill levels. Whether <br /> you are a beginner just
          starting out or a seasoned pro looking to take your game to the next
          level, we have a program that is right for you.
        </p>
        <Image
          width={1386}
          height={112}
          alt="sponsors"
          src={"/images/sponsors.png"}
        />
      </div>
    </section>
  );
}

export default Sponsors;
