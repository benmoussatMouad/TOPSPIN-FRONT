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
  H3: string;
  P: string;
  Link: {
    text: string;
    url: string;
  };
}

function InfoSection({
  rowReverser,
  data,
  maxWidthH3,
}: {
  rowReverser: boolean;
  data: Info;
  maxWidthH3?: boolean;
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
        <h3>{data.H3}</h3>
        <div className={rowReverser ? classes.rowReverseMargin : ""}>
          <h3 style={{ maxWidth: maxWidthH3 ? "300px" : "100%" }}>{data.H3}</h3>
          <p>{data.P}</p>
          <div>
            <Link className="button" href={data.Link.url}>
              {data.Link.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
