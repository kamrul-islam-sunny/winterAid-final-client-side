import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper absolute rounded-xl md:h-96 h-72 shadow-xl shadow-sky-500"
      >
        <SwiperSlide className="">
          <img
            className="w-full h-full object-cover"
            src="https://sparbd.org/wp-content/uploads/2023/09/kids-with-lap-e1694859942474-1024x678.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide >
          <img className="w-full h-full object-cover"
            src="https://www.unicef.org.uk/wp-content/uploads/2015/02/winter-gloves-child-fyr-macedonia-1500x628.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
           className="w-full h-full object-cover"
            src="https://dkprodimages.gumlet.io/campaign/6248/atp5-01%20WINC.jpg?format=webp&w=400&dpr=2.6"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
           className="w-full h-full object-cover"
            src="https://wfad.se/wp-content/uploads/2022/01/MA-Khulna-Bangladesh-9-1-1024x768.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
           className="w-full h-full object-cover"
            src="https://sparbd.org/wp-content/uploads/2023/11/Sweater-03.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div class="absolute inset-0 bg-black opacity-50 z-20 rounded-xl"></div>
    </div>
  );
};

export default Slider;
