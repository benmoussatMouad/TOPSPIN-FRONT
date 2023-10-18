import Image from "next/image";
import React from "react";

function BannerImage() {
  return (
    <section style={{ display: "flex", width: "100%" }}>
      <Image
        width={1943}
        height={600}
        alt="footer banner image"
        src={"/images/footer.png"}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </section>
  );
}

export default BannerImage;
