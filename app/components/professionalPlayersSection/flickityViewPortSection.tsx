"use client";
import React from "react";
import classes from "./flickityViewPortSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Cell from "./carousel-cell/cell";
import Image from "next/image";
import { Navigation } from "swiper/modules";

interface SectionData {
  id: number;
  Image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  h3: string;
  information?: string;
  points?: string;
  university?: string;
}
interface TranslatedContent {
  information?: string;
}

function FlickityViewPortSection({
  data,
  H2,
  leftButton,
  rightButton,
  translatedContent,
  type,
}: {
  leftButton: string;
  rightButton: string;
  data: SectionData[];
  translatedContent: TranslatedContent[];
  H2: string;
  type: string;
}) {
  return (
    <section className={classes.flickityViewSection}>
      <h2>{H2}</h2>
      <div>
        <button id={leftButton} className={classes.leftButton}>
          <Image
            loading="lazy"
            width={20}
            height={20}
            alt="arrow"
            src={"/assets/arrow.svg"}
          />
        </button>
        <button id={rightButton} className={classes.rightButton}>
          <Image
            loading="lazy"
            width={20}
            height={20}
            alt="arrow"
            src={"/assets/arrow.svg"}
          />
        </button>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className={classes.mainCarousel}
          modules={[Navigation]}
          centeredSlides
          initialSlide={data.length / 2}
          navigation={{
            nextEl: `#${rightButton}`,
            prevEl: `#${leftButton}`,
          }}
          breakpoints={{
            1440: {
              loopedSlides:data.length / 3,
            },
          }}
          loop
        >
          {data.map((el, index) => {
            return (
              <SwiperSlide key={el.id} className={classes.carouselCell}>
                <Cell
                  data={el}
                  information={translatedContent[index]?.information}
                  type={type}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default FlickityViewPortSection;
