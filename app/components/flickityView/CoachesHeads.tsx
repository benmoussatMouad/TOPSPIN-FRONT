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
}: {
  data: SectionData[];
  H2: string;
}) {

  return (
    <section className={classes.flickityViewSection}>
      <h2>{H2}</h2>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className={classes.mainCarousel}
          modules={[Navigation]}
          centeredSlides
          centeredSlidesBounds
          initialSlide={data.length / 2}
        >
          <SwiperSlide className={classes.carouselCell}>
            <Cell data={data[12]} />
          </SwiperSlide>
          <SwiperSlide className={classes.carouselCell}>
            <Cell data={data[11]} />
          </SwiperSlide>
          <SwiperSlide className={classes.carouselCell}>
            <Cell data={data[13]} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default FlickityViewPortSection;
