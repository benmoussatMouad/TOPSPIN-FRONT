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
}

function FlickityViewPort({ data }: { data: SectionData[] }) {
  return (
    <section className={classes.sliderSection}>
      <button id="leftButton" className={classes.leftButton}>
        <Image width={20} height={20} alt="arrow" src={"/assets/arrow.svg"} />
      </button>
      <button id="rightButton" className={classes.rightButton}>
        <Image width={20} height={20} alt="arrow" src={"/assets/arrow.svg"} />
      </button>
      <div>
        <Swiper
          effect="coverflow"
          spaceBetween={10}
          slidesPerView={"auto"}
          grabCursor={true}
          modules={[EffectCoverflow, Navigation]}
          centeredSlides
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
              spaceBetween: 40,
              centeredSlides: false,
            },
          }}
          navigation={{
            nextEl: "#rightButton",
            prevEl: "#leftButton",
          }}
          className="swiper"
        >
          {data.map((el) => (
            <SwiperSlide key={el.id} className={classes.swiperSlide}>
              <Cell data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FlickityViewPort;
