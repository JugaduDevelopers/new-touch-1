"use client";

import TestimonialCard from "@/components/TestimonialCard";
import React from "react";
import "swiper/css/pagination";
import "swiper/css";
import "../app/testimonial.css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

type Props = {};

const TestimonialContainer = (props: Props) => {
  const swiper = useSwiper();

  return (
    <>
      <div className="bg-[#FFD7D7] py-10">
        <div className="container mx-auto">
          <p className="uppercase flex justify-center items-center text-darkred">
            Testimonial
          </p>
          <h3 className="flex justify-center items-center mb-10 max-sm:text-3xl">
            What Our Client Says
          </h3>

          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
            }}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="flex flex-wrap">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide> */}
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialContainer;
