"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./infoSectionAcademy.module.scss";

interface Content {
  header: string;
  p: string;
  li: string[];
}

function InfoSectionAcademy({
  span,
  text,
  page,
  content,
}: {
  span?: string;
  text?: any;
  page: string;
  content?: Content[];
}) {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const renderImage = () => {
      switch (page) {
        case "Academy":
          setImgSrc("/images/academyDrone.jpeg");
          break;
        case "OurMission":
          setImgSrc("/images/academy-players.jpeg");
          break;
        case "PrivateLessons":
          setImgSrc("/images/lessons.jpeg");
          break;
        default:
          break;
      }
    };
    renderImage();
  }, [page]);

  return (
    <section className={classes.infoSection}>
      <div>
        <div
          className={`${classes.infoContainer} ${
            page === "OurMission" ? "" : ""
          }`}
        >
          <Image
            alt="topspin players"
            width={1140}
            height={855}
            src={imgSrc}
            className={
              page === "PrivateLessons"
                ? classes.playersImagePrivate
                : classes.playersImage
            }
          />
          {page === "PrivateLessons" ? (
            <div className={classes.infoTextPrivate}>
              {text.p.map((el: string, index: number) => (
                <p key={index}>{el}</p>
              ))}
            </div>
          ) : page === "Academy" ? (
            <p className={classes.infoText}>
              <span>{span} </span>
              {text}
            </p>
          ) : (
            <>
              <div className={classes.infoTextMobile}>
                <p className={classes.infoText}>
                  <span>{content?.length ? content[0].header : ""}</span>
                </p>
                <p className={classes.infoTextDescription}>
                  {content?.length ? content[0].p : ""}
                </p>
                {content?.length ? (
                  <ul className={classes.list}>
                    {content[0].li.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
                <p className={classes.infoText}>
                  <span>{content?.length ? content[1].header : ""}</span>
                </p>
                {content?.length ? (
                  <ul>
                    {content[1].li.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </div>
              <div className={classes.infoTextDeskTop}>
                <p className={classes.infoText}>
                  <span>{content?.length ? content[0].header : ""}</span>
                </p>
                <p className={classes.infoTextDeskTopDescription}>
                  {content?.length ? content[0].p : ""}
                </p>
                {content?.length ? (
                  <ul className={classes.infoTextDeskToplist}>
                    <li>{content[0].li[0]}</li>
                    <li>{content[0].li[1]}</li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
        {page === "PrivateLessons" ? (
          ""
        ) : (
          <div className={classes.infoTextDeskTop}>
            {content?.length ? (
              <ul className={classes.infoTextDeskToplist}>
                <li>{content[0].li[2]}</li>
                <li>{content[0].li[3]}</li>
              </ul>
            ) : (
              ""
            )}
            <p className={classes.infoText}>
              <span>{content?.length ? content[1].header : ""}</span>
            </p>
            {content?.length ? (
              <ul className={classes.infoTextDeskToplist}>
                {content[1].li.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default InfoSectionAcademy;
