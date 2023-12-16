"use client";
import React from "react";
import classes from "../professionalPlayersSection/flickityViewPortSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Cell from "./carousel-cell/Cell";

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
            <SwiperSlide className={classes.carouselCell}>
              <Cell data={data[6]} />
            </SwiperSlide>
            <SwiperSlide className={classes.carouselCell}>
              <Cell data={data[7]} />
            </SwiperSlide>
            <SwiperSlide className={classes.carouselCell}>
              <Cell data={data[8]} />
            </SwiperSlide>
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

      default:
        break;
    }
  };

  return (
    <section className={classes.flickityViewSection}>
      <h2>{H2}</h2>
      <div
        className={`${
          page === "Cankaya" || page === "OurMission" ? classes.displayFlex : ""
        }  `}
      >
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className={classes.mainCarousel}
          modules={[Navigation]}
          centeredSlides
          initialSlide={1}
          breakpoints={{
            900: {
              initialSlide: data.length / 2,
              centeredSlidesBounds: true,
            },
          }}
        >
          {renderCoaches()}
        </Swiper>
      </div>
    </section>
  );
}

export default FlickityViewPortSection;
