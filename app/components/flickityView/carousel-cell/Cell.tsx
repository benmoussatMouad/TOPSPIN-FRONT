import React from "react";
import Image from "next/image";

interface SectionData {
  id: number;
  Image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  h3: string;
  desc?: string;
}

function Cell({ data }: { data?: SectionData }) {
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
        <p>{data?.desc}</p>
      </div>
      <span />
    </a>
  );
}

export default Cell;
