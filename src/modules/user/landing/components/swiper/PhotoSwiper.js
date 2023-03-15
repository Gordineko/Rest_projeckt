import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./PhotoSwiper.css";

// import required modules
import { Pagination } from "swiper";

export default function PhotoSwiper() {
  return (
    <>
      <Swiper
        pagination={true}
        loop={true}
        modules={[Pagination]}
        className="mySwipe"
      >
        <SwiperSlide className="sliderOne"></SwiperSlide>
        <SwiperSlide className="sliderTwo"></SwiperSlide>
        <SwiperSlide className="sliderThree"></SwiperSlide>
      </Swiper>
    </>
  );
}
