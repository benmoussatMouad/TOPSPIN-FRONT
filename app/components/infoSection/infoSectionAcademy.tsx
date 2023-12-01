import Image from "next/image";
import React from "react";
import classes from "./infoSectionAcademy.module.scss";

function InfoSectionAcademy() {
  return (
    <section className={classes.infoSection}>
      <div>
        <div className={classes.infoContainer}>
          <Image
            alt="topspin players"
            width={2305}
            height={4096}
            src={"/images/academy-players.jpeg"}
            className={classes.playersImage}
          />
          <p className={classes.infoText}>
            <span>Topspin Tennis Academy </span>
            is a sports club established in 2010 and operating in two different
            locations in Ankara.Topspin is a pioneering tennis club in tennis
            education, growing with big brand collaborations, with 43 years of
            tennis experience behind it. The experience from the past brings
            with it the knowledge and experience needed to build the future.
            With this knowledge, our club offers a fun, friendly and
            professional environment for everyone who loves to play tennis. The
            mission of our club is to popularise the sport of tennis, to train
            successful athletes and to prepare our youth for the future. To
            raise individuals who are educated with science-supported methods,
            up-to-date, questioning, researching, researching, developing,
            capturing potential, having competitive values. To teach values such
            as respect, struggle, patience and tolerance by improving their
            tennis performance, to ensure that they are ready for a world where
            they can compete by following their physical and mental growth,
            intellectual, emotional and social development. Our club offers you
            the best possible tennis experience with 26 spacious, lighted and
            air-conditioned courts in two different regions in Ankara. Our club
            has training programmes for both amateur and professional tennis
            players. With a staff of 40 professional coaches, we provide
            training for all ages and levels. Our coaches apply the training
            modules required by the new generation and changing tennis
            approaches and follow the development of our tennis players. Our
            club also organises Topspin Leagues and Tournaments, creating an
            atmosphere of competition and friendship among our members. The
            achievements of our club cannot be ignored. We are proud to be a
            club that has won national team and international championships and
            has made a name for itself in many tournaments throughout Turkey.We
            would be happy to see you in our club, which serves 2500 members in
            two different regions with 26 courts!
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoSectionAcademy;
