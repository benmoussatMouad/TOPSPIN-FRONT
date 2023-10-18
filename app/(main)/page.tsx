"use client";
import { useEffect, useState } from "react";
import InfoSection from "../components/infoSection/InfoSection";
import Quote from "../components/quote/Quote";
import data from "../utils/pageContent.json";
import FlickityViewPort from "../components/flickityView/FlickityViewPort";
import FlickityViewPortSection from "../components/professionalPlayersSection/flickityViewPortSection";
import Whatsapp from "../components/whatsAppSection/whatsapp";
import Sponsors from "../components/sponsors/sponsors";
import BannerImage from "../components/bannerImage/bannerImage";
export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 90) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <InfoSection
        h3={
          <h3>
            A HUMAN & <br /> PERFORMING <br /> ENVIRONMENT
          </h3>
        }
        data={data.infoSection[0]}
        rowReverser={false}
      />
      <Quote />
      <InfoSection data={data.infoSection[1]} rowReverser={true} />
      <FlickityViewPort />
      <InfoSection data={data.infoSection[2]} rowReverser={false} />
      <FlickityViewPortSection
        H2="Our professional players"
        data={data.players}
      />
      <InfoSection data={data.infoSection[3]} rowReverser={true} />
      <FlickityViewPortSection H2="Our Coaches" data={data.coaches} />
      <InfoSection data={data.infoSection[4]} rowReverser={false} />
      <Whatsapp />
      <Sponsors />
      <BannerImage />
    </>
  );
}
