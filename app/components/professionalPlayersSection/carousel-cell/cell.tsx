import Image from "next/image";
import React from "react";
import classes from "../flickityViewPortSection.module.scss"


interface SectionData {
  id: number;
  Image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  h3: string;
  information?: string;
  points?: string
}


function Cell({ data, type }: { data: SectionData, type:string }) {
  return (
    <a>
      {data ? (
        <Image
          fill
          sizes="(max-width:768px) 400px , 700px"
          alt={data?.Image.alt}
          src={data?.Image.src}
        />
      ) : (
        ""
      )}
      <div>
        <h3>{data?.h3}</h3>
        {data?.information && <p className={classes.informationText}>{data?.information}</p>}
        {(type=="players") && <p className="italicText">{data?.points ? data?.points : "Itf points: N/A"}</p>}
      </div>
      <span />
    </a>
  );
}

export default Cell;
