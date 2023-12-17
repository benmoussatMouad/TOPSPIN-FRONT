"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Address() {
  let path = usePathname();
  path = path.split("/")[2];

  const [footerAddress, setFooterAddress] = useState({
    address: "Üniversiteler, İhsan Doğramacı Blv no:1, 06800 Çankaya/Ankara",
    tel: "Tel : +90 312 909 3333",
  });

  useEffect(() => {
    switch (path) {
      case "cankaya":
        setFooterAddress({
          address:
            "İlkbahar Mahallesi, Güneypark Küme Evleri, No 78, Ankara, Ankara 06550",
          tel: "Tel : +90 312 544 5641",
        });
        break;

      default:
        setFooterAddress({
          address:
            "Üniversiteler, İhsan Doğramacı Blv no:1, 06800 Çankaya/Ankara",
          tel: "Tel : +90 312 909 3333",
        });
        break;
    }
  }, [path]);

  return (
    <div>
      <p>{footerAddress.address}</p>
      <p>{footerAddress.tel}</p>
    </div>
  );
}

export default Address;
