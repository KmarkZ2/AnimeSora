"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Parallax } from "swiper/modules";
import { Anime } from "@/types/types";
import NewsCard from "./Components/News/NewsCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/effect-coverflow";

export default function Slider({ animeList }: { animeList: Anime[] }) {
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
        {animeList.map((item, index) => (
          <SwiperSlide key={`${index}`} className="">
            <div className="flex justify-center items-center mx-auto">
              <NewsCard anime={item} />
            </div>
          </SwiperSlide>
        ))}
        <div className="news-pagination mt-10 flex justify-center" />
      </Swiper>
    </div>
  );
}
