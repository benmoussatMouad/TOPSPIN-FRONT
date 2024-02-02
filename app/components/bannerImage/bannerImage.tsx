import Image from "next/image";
import React from "react";

function BannerImage({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) {
  return (
    <section
      className="bannerFooter"
      style={{ display: "flex", width: "100%" }}
    >
      <Image
        width={width}
        height={height}
        alt="footer banner image"
        src={src}
        loading="lazy"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </section>
  );
}

export default BannerImage;
