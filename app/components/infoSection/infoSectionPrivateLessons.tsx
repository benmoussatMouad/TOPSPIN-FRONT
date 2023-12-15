import Image from "next/image";
import classes from "./infoSection.module.scss";
import Link from "next/link";

interface Info {
  Image: {
    width: number;
    height: number;
    alt: string;
    src: string;
  };
  Link: {
    url: string;
  };
}

interface TranslatedContent {
  header: string;
  description: string;
  link: string;
}

function InfoSection({
  rowReverser,
  data,
  maxWidthH3,
  translatedContent,
  locale,
  isYoutube,
  isAboutPage,
}: {
  rowReverser: boolean;
  data: Info;
  maxWidthH3?: boolean;
  translatedContent: TranslatedContent;
  locale?: string;
  isYoutube?: boolean;
  isAboutPage?: boolean;
}) {
  return (
    <section className={classes.infoSection}>
      <div className={rowReverser ? classes.rowReverser : ""}>
        <div>
          {isYoutube ? (
            <Link
              href={locale ? `/${locale}${data.Link.url}` : `${data.Link.url}`}
            >
              <Image
                loading="lazy"
                fill
                alt={data.Image.alt}
                src={data.Image.src}
              />
            </Link>
          ) : (
            <Image
              loading="lazy"
              fill
              alt={data.Image.alt}
              src={data.Image.src}
            />
          )}
        </div>
        <h3>{translatedContent.header}</h3>
        <div className={rowReverser ? classes.rowReverseMargin : ""}>
          <h3
            style={{
              maxWidth: maxWidthH3 ? "300px" : "100%",
              margin: `${isAboutPage ? "0em 0 0  0em" : ""}`,
            }}
          >
            {translatedContent.header}
          </h3>
          <p style={{ margin: `${isAboutPage ? ".5em 0em" : ""}` }}>
            {translatedContent.description}
          </p>
          {translatedContent.link ? (
            <div style={{ margin: `${isAboutPage ? ".8em 0em" : ""}` }}>
              <Link
                className="button"
                href={`${
                  locale ? `/${locale}${data.Link.url}` : `${data.Link.url}`
                }`}
              >
                {translatedContent.link}
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
