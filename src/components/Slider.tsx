"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";
import SliderScreen from "./SliderScreen";

type Props = {};

const Slider = (props: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className=""
    >
      <SwiperSlide>
        <SliderScreen />
      </SwiperSlide>
      <SwiperSlide>
        <SliderScreen />
      </SwiperSlide>
      <SwiperSlide>
        <SliderScreen />
      </SwiperSlide>
      <SwiperSlide>
        <SliderScreen />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
