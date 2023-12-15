import React from "react";
import classes from "./whatsapp.module.scss";
import Link from "next/link";
import Image from "next/image";

interface TranslatedContent {
  header: string;
  contactBox: {
    header: string[];
    description: string;
    Link: string;
  };
}

const Whatsapp = ({
  translatedContent,
}: {
  translatedContent: TranslatedContent;
}) => {
  return (
    <section className={classes.contactUsSection}>
      <h2>{translatedContent.header}</h2>
      <div className={classes.contactBox}>
        <span className={classes.topOverlay} />
        <div>
          <Image
            loading="lazy"
            alt="tennis"
            fill
            sizes="(max-width:768px) 500px , 500px"
            src={"/images/tennisball.png"}
          />
          <h3>
            {translatedContent.contactBox.header[0]} <br />{" "}
            {translatedContent.contactBox.header[1]} <br />{" "}
            {translatedContent.contactBox.header[2]}
          </h3>
          <p>{translatedContent.contactBox.description}</p>
          <div>
            <Link
              href="https://wa.me/+905317037069?text=Hello%20there!"
              target="_blank"
              className="button"
            >
              {translatedContent.contactBox.Link}
            </Link>
          </div>
        </div>
        <span className={classes.bottomOverlay} />
      </div>
    </section>
  );
};

export default Whatsapp;
