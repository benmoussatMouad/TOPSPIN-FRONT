import React from "react";
import classes from "./flickityviewport.module.scss";
import Cell from "./carousel-cell/Cell";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

function FlickityViewPort() {
  return (
    <section className={classes.sliderSection}>
      <button id="leftButton" className={classes.leftButton}>
        <Image width={20} height={20} alt="arrow" src={"/assets/arrow.svg"} />
      </button>
      <button id="rightButton" className={classes.rightButton}>
        <Image width={20} height={20} alt="arrow" src={"/assets/arrow.svg"} />
      </button>
      <Swiper
        effect="coverflow"
        spaceBetween={10}
        slidesPerView={2}
        loop
        grabCursor={true}
        modules={[EffectCoverflow, Navigation]}
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          modifier: 0.4,
        }}
        breakpoints={{
          900: {
            coverflowEffect: {
              modifier: 0,
            },
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: "#rightButton",
          prevEl: "#leftButton",
        }}
      >
        <SwiperSlide className={classes.swiperSlide}>
          <Cell />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Cell />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Cell />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Cell />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Cell />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Cell />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Cell />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <Cell />
        </SwiperSlide>
      </Swiper>
   
    </section>
  );
}

export default FlickityViewPort;
