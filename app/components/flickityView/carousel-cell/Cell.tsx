import React from "react";
import Link from "next/link";
import Image from "next/image";
function Cell() {
  return (
    <>
      <Image
        width={380}
        height={480}
        alt=""
        src={"/images/flickityViewport/summer-tour-1.png"}
      />
      <div>
        <Link href={""}>Half-day adult camp</Link>
      </div>
    </>
  );
}

export default Cell;
