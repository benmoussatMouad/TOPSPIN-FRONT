import React from "react";
import Link from "next/link";
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
}

function Cell({ data }: { data: SectionData }) {
  return (
    <Link href={""}>
      <Image
        width={data.Image.width}
        height={data.Image.height}
        alt={data.Image.alt}
        src={data.Image.src}
      />
      <div>
        <h3>{data.h3}</h3>
      </div>
      <span />
    </Link>
  );
}

export default Cell;
