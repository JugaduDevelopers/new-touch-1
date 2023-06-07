"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import BannerSliderImage from "../../public/images/bannersliderImage.png";

type Props = {};

const Slider = (props: Props) => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          {/* <div className="bg-blue-400 flex flex-col justify-center md:flex">
            <div className="p-5">
              <p>SkinCare - Assistt</p>
              <h1>Now looking Beautiful is just a click away</h1>
              <p>Count on us for expert guidance on your skin care journey.</p>
              <div className="flex gap-3 ">
                <button className="bg-redX px-2 flex-1 text-xs py-2 rounded-sm text-whiteX">
                  Get Consultation
                </button>
                <button className="bg-whiteX px-2 flex-1 text-xs py-2 rounded-sm text-redX border-2 border-redX">
                  Special Offers
                </button>
              </div>
            </div>
            <div>
              <div className="max-h-[600px]  lg:max-h-[400px] xl:min-h-[450px] aspect-square">
                <Image
                  src={BannerSliderImage}
                  alt="bannerSliderImage"
                  className=""
                ></Image>
              </div>
            </div>
          </div> */}
          <div className="bg-blue-300  p-5 flex flex-col justify-center ">
            <div className="">
              <p>SkinCare - Assistt</p>
              <h1>Now looking Beautiful is just a click away</h1>
              <p>Count on us for expert guidance on your skin care journey.</p>
              <div className="flex gap-3 ">
                <button className="bg-redX px-2 flex-1 text-xs py-2 rounded-sm text-whiteX">
                  Get Consultation
                </button>
                <button className="bg-whiteX px-2 flex-1 text-xs py-2 rounded-sm text-redX border-2 border-redX">
                  Special Offers
                </button>
              </div>
            </div>
            <div>
              <Image
                src={BannerSliderImage}
                alt="bannerSliderImage"
                className="max-h-[400px] aspect-square"
              ></Image>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-none h-screen flex items-center justify-center">
            Slide2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-none h-screen flex items-center justify-center">
            Slide3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-none h-screen flex items-center justify-center">
            Slide4
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
