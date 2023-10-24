import InfoSection from "../components/infoSection/InfoSection";
import Quote from "../components/quote/Quote";
import data from "../utils/pageContent.json";
import FlickityViewPort from "../components/flickityView/FlickityViewPort";
import FlickityViewPortSection from "../components/professionalPlayersSection/flickityViewPortSection";
import Whatsapp from "../components/whatsAppSection/whatsapp";
import Sponsors from "../components/sponsors/sponsors";
import BannerImage from "../components/bannerImage/bannerImage";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <InfoSection
        data={data.infoSection[0]}
        rowReverser={false}
        maxWidthH3={true}
      />
      <Quote />
      <InfoSection data={data.infoSection[1]} rowReverser={true} />
      <FlickityViewPort data={data.flickityView} />
      <InfoSection data={data.infoSection[2]} rowReverser={false} />
      <FlickityViewPortSection
        H2="Our professional players"
        data={data.players}
        leftButton={"leftButtonPlayers"}
        rightButton={"rightButtonPlayers"}
      />
      <InfoSection data={data.infoSection[3]} rowReverser={true} />
      <FlickityViewPortSection
        H2="Our Coaches"
        data={data.coaches}
        leftButton={"leftButtonCoaches"}
        rightButton={"rightButtonCoaches"}
      />
      <InfoSection data={data.infoSection[4]} rowReverser={false} />
      <Whatsapp />
      <Sponsors />
      <BannerImage />
    </>
  );
}
