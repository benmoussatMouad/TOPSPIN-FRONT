import React from "react";
import classes from "./sponsors.module.scss";
import Image from "next/image";

interface TranslatedContent {
  header: string;
  description: string[];
}

function Sponsors({
  translatedContent,
}: {
  translatedContent: TranslatedContent;
}) {
  return (
    <section className={classes.sponsorsSection}>
      <div>
        <h4>{translatedContent.header}</h4>
        <p>
          {translatedContent.description[0]}
          {translatedContent.description[1]} <br/>
          {translatedContent.description[2]}
          {translatedContent.description[3]}
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
