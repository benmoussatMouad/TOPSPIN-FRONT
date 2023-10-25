import Image from "next/image";
import classes from "./infoSection.module.scss";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";

interface Info {
  Image: {
    width: number;
    height: number;
    alt: string;
    src: string;
  };
  Link: {
    url: string;
  };
}

interface TranslatedContent {
  header: string;
  description: string;
  link: string;
}

function InfoSection({
  rowReverser,
  data,
  maxWidthH3,
  translatedContent,
}: {
  rowReverser: boolean;
  data: Info;
  maxWidthH3?: boolean;
  translatedContent: TranslatedContent;
}) {
  
  return (
    <section className={classes.infoSection}>
      <div className={rowReverser ? classes.rowReverser : ""}>
        <div>
          <Image
            width={data.Image.width}
            height={data.Image.height}
            alt={data.Image.alt}
            src={data.Image.src}
          />
        </div>
        <h3>{translatedContent.header}</h3>
        <div className={rowReverser ? classes.rowReverseMargin : ""}>
          <h3 style={{ maxWidth: maxWidthH3 ? "300px" : "100%" }}>
            {translatedContent.header}
          </h3>
          <p>{translatedContent.description}</p>
          <div>
            <Link className="button" href={data.Link.url}>
              {translatedContent.link}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
