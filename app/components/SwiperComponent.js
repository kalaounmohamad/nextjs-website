"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper";

import Image from "next/image";
import { ServiceData } from "../constants";
import { RxArrowTopRight } from "react-icons/rx";

export default function SwiperComponent() {
  return (
    <main className="justify-center items-center text-center">
      <h1>Our projects</h1>
      <p className="text-xl pb-8 pt-4">Each crafted with passion</p>
      <Swiper
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        modules={[Pagination, FreeMode]}
        className="mySwiper  "
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col  group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] lg:h-[400px] lg:w-80 xl:w-96 overflow-hidden cursor-pointer">
              <Image
                src={item.backgroundImage}
                alt="Project Image"
                layout="fill"
                objectFit="cover"
              />

              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-8 h-8" />
                <h1 className="text-white text-xl lg:text-2xl">{item.title}</h1>
                <p className="lg:text-lg">{item.content}</p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-9 h-9 text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
