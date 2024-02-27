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
      case "Managements":
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
        
      >
        {page === "Managements" ? (
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
          slidesPerView={2}
          spaceBetween={20}
          className={classes.mainCarousel}
          modules={[Navigation]}
          centeredSlides={page=="OurMission" || page == "Cankaya" || page == "Academy"}
          // initialSlide={page === "Managements" ? 1 : 1}
          breakpoints={{
            640: {
              initialSlide: 3,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              initialSlide: 2,
              spaceBetween: 20,
            },
            1024: {
              initialSlide: 1,
              slidesPerView: 5,
              spaceBetween: 20,
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
