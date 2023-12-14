// Import necessary types
import { type Metadata as NextMetadata } from "next";

// Define extended metadata type
type Metadata = NextMetadata & {
  instagram?: {
    profile: {
      handle: string;
    };
  };
  youtube?: {
    profile: {
      username: string;
    };
    videos: {
      url: string;
    };
  };
};

export const websiteBasePath = `https://www.tta.com.tr`;

export const defaultSiteName = "TOPSPIN ACADEMY";
const defaultDescription =
  "Topspin Academy'nin amacı, tüm tenis oyuncularının kendilerini aşmalarını ve aynı zamanda tenis oynamanın keyfini çıkarmalarını sağlamak için insani, aile odaklı ve verimli bir çerçeve sunmaktır.";
const defaultTitle = `${defaultSiteName} | Topspin Academy'nin amacı, tüm tenis oyuncularının kendilerini aşmalarını ve aynı zamanda tenis oynamanın keyfini çıkarmalarını sağlamak için insani, aile odaklı ve verimli bir çerçeve sunmaktır.`;

const SEODefaults: Metadata = {
  metadataBase: new URL(websiteBasePath),
  description: defaultDescription,
  title: defaultTitle,
  themeColor: "white",
  openGraph: {
    type: "website",
    locale: "tr",
    url: `${websiteBasePath}/`,
    description: defaultDescription,
    title: defaultTitle,
    images: [
      {
        url: `/images/logo.svg`,
        width: 238,
        height: 50,
        alt: "TOPSPIN Logo",
      },
    ],
  },
  creator: "TOPSPIN",
  applicationName: defaultSiteName,
  robots: "index, follow",
};

// Add Instagram metadata
SEODefaults.instagram = {
  profile: {
    handle: "@topspintenisakademisi", // Replace with your Instagram username
  },
};

// Add YouTube metadata
SEODefaults.youtube = {
  profile: {
    username: "UCx7bbsrsqOHooVp9DIs6Z9g", // Replace with your YouTube username
  },
  videos: {
    url: "https://www.youtube.com/channel/UCx7bbsrsqOHooVp9DIs6Z9g", // Replace with your YouTube channel URL
  },
};

export default SEODefaults;
