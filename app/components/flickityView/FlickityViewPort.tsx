"use client";
import React from "react";
import classes from "./flickityviewport.module.scss";
import Cell from "./carousel-cell/Cell";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
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
  desc: string;
}

function FlickityViewPort({ data }: { data: SectionData[] }) {
  return (
    <section className={classes.sliderSection}>
      <button id="leftButtonAcademy" className={classes.leftButton}>
        <Image
          loading="lazy"
          width={20}
          height={20}
          alt="arrow"
          src={"/assets/arrow.svg"}
        />
      </button>
      <button id="rightButtonAcademy" className={classes.rightButton}>
        <Image
          loading="lazy"
          width={20}
          height={20}
          alt="arrow"
          src={"/assets/arrow.svg"}
        />
      </button>
      <div>
        <Swiper
          effect="coverflow"
          spaceBetween={20}
          slidesPerView={"auto"}
          grabCursor={true}
          centeredSlides
          initialSlide={data.length / 2}
          modules={[EffectCoverflow, Navigation]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            modifier: 0.4,
          }}
          loop
          breakpoints={{
            900: {
              coverflowEffect: {
                modifier: 0,
              },
              slidesPerView: 3,
            },
            1200: {
              coverflowEffect: {
                modifier: 0,
              },
              slidesPerView: 4,
            },
          }}
          navigation={{
            nextEl: "#rightButtonAcademy",
            prevEl: "#leftButtonAcademy",
          }}
          className={classes.swiper}
          loopedSlides={3}
        >
          <div>
            {data.map((el) => (
              <SwiperSlide key={el.id} className={classes.swiperSlide}>
                <Cell data={el}/>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default FlickityViewPort;
