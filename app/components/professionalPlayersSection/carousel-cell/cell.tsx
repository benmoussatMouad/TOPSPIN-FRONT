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
  points?: string;
  university?: string
}


function Cell({ data, information, type }: { data: SectionData, information?:string, type:string }) {
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
        {(type=="coaches") && information && <p className="italicText">{information}</p>}
        {(type=="players") && data?.points ? <p className="italicText">{data?.points ? data?.points : "Itf points: N/A"}</p>: ""}
        {(type=="players") && data?.university ? (<p className="italicText">{data?.university}</p>): ""}
      </div>
      <span />
    </a>
  );
}

export default Cell;
