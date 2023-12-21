"use client";
import React from "react";
import classes from "../professionalPlayersSection/flickityViewPortSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Cell from "./carousel-cell/Cell";
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

function FlickityViewPortSection({
  data,
  H2,
  page,
}: {
  data: SectionData[];
  H2: string;
  page: string;
}) {
  const renderCoaches = () => {
    switch (page) {
      case "OurMission":
        return (
          <>
            {data.map((el) => (
              <SwiperSlide key={el.id} className={classes.carouselCell}>
                <Cell page={page} data={el} />
              </SwiperSlide>
            ))}
          </>
        );
      case "Cankaya":
        return (
          <>
            <SwiperSlide className={classes.carouselCell}>
              <Cell data={data[0]} />
            </SwiperSlide>
            <SwiperSlide className={classes.carouselCell}>
              <Cell data={data[1]} />
            </SwiperSlide>
            <SwiperSlide className={classes.carouselCell}>
              <Cell data={data[2]} />
            </SwiperSlide>
          </>
        );
      case "Academy":
        return (
          <>
            <SwiperSlide className={classes.carouselCell}>
              <Cell data={data[0]} />
            </SwiperSlide>
            <SwiperSlide className={classes.carouselCell}>
              <Cell data={data[1]} />
            </SwiperSlide>
            <SwiperSlide className={classes.carouselCell}>
              <Cell data={data[2]} />
            </SwiperSlide>
          </>
        );

      default:
        break;
    }
  };

  return (
    <section className={classes.flickityViewSection}>
      <h2>{H2}</h2>
      <div
        className={`${
          page === "Cankaya" || page === "OurMission" || page === "Academy"
            ? classes.displayFlex
            : ""
        }  `}
      >
        {page === "OurMission" ? (
          <>
            <button id="leftButtonFlickty" className={classes.leftButton}>
              <Image
                loading="lazy"
                width={20}
                height={20}
                alt="arrow"
                src={"/assets/arrow.svg"}
              />
            </button>
            <button id="rightButtonFlickty" className={classes.rightButton}>
              <Image
                loading="lazy"
                width={20}
                height={20}
                alt="arrow"
                src={"/assets/arrow.svg"}
              />
            </button>
          </>
        ) : (
          ""
        )}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className={classes.mainCarousel}
          modules={[Navigation]}
          centeredSlides
          initialSlide={page === "OurMission" ? 2 : 1}
          breakpoints={{
            900: {
              initialSlide: data.length / (page === "OurMission" ? 3 : 2),
              centeredSlidesBounds: true,
            },
          }}
          navigation={{
            nextEl: "#rightButtonFlickty",
            prevEl: "#leftButtonFlickty",
          }}
        >
          {renderCoaches()}
        </Swiper>
      </div>
    </section>
  );
}

export default FlickityViewPortSection;
