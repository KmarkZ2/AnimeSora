"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/effect-coverflow";

export default function SliderNewsSkeleton() {
  return (
    <div className="w-full">
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay, Parallax]}
        effect="coverflow"
        centeredSlides
        slidesPerView={3}
        spaceBetween={32}
        grabCursor
        loop
        slideToClickedSlide
        parallax={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1,
          slideShadows: false,
        }}
        className="py-10 news-slider"
      >
        {Array.from({ length: 5 }).map((el, index) => {
          return (
            <SwiperSlide key={`${index}`} className="">
              <div className="flex justify-center items-center mx-auto">
                <NewsSkeleton />
              </div>
            </SwiperSlide>
          );
        })}
        <div className="news-pagination mt-10 flex justify-center" />
      </Swiper>
    </div>
  );
}

function NewsSkeleton() {
  return (
    <div className="relative rounded-2xl h-[300px] w-[240px] overflow-hidden animate-pulse border border-white rounded-2xl overflow-hidden shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]"></div>
  );
}
