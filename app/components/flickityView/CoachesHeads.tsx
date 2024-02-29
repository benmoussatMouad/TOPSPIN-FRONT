"use client";
import React from "react";
import classes from "./flickityviewport.module.scss";
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
      case "Corp":
      case "Managements":
        return (
          <>
            {data.map((el) => (
              <SwiperSlide key={el.id} className={classes.carouselCellManagement}>
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
              <Cell data={data[0]} page="Academy" />
            </SwiperSlide>
            <SwiperSlide className={classes.carouselCell}>
              <Cell data={data[2]} page="Academy"/>
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
          className={(page == "Managements" || page == "Cankaya" || page == "Corp")? classes.mainCarouselManagement :classes.mainCarousel}
          modules={[Navigation]}
          centeredSlides={page!="OurMission" && page != "Academy" && page!="Managements"}
          // initialSlide={page === "Managements" ? 1 : 1}
          breakpoints={{
            640: {
              initialSlide: (page == "Managements") ? 3: 0,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: (page=="OurMission"  || page == "Academy")? 2 : 3,
              initialSlide:( page == "Cankaya")? 3: 2,
              spaceBetween: 20,
            },
            1024: {
              initialSlide: (page == "Managements")? 1: 1,
              slidesPerView: (page=="OurMission" || page == "Academy")? 2: 5,
              spaceBetween: 20,
            },
          }}
          navigation={{
            nextEl: "#rightButtonFlickty",
            prevEl: "#leftButtonFlickty",
          }}
          loop={page=="Managements"}
        >
          {renderCoaches()}
        </Swiper>
      </div>
    </section>
  );
}

export default FlickityViewPortSection;
