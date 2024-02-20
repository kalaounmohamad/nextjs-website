"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";
import { ServiceData } from "../constants/projects";
import { RxArrowTopRight, RxArrowLeft, RxArrowRight } from "react-icons/rx";

export default function SwiperComponent() {
  return (
    <main className="justify-center items-center text-center">
      <h1>Our projects</h1>
      <p className="text-xl pb-8 pt-4">Each crafted with passion</p>
      <div className="flex flex-row justify-between h-[250px] sm:h-[300px] lg:h-[400px]">
        <RxArrowLeft className="swiper-button-prev hidden sm:block text-7xl self-center mr-3 cursor-pointer hover:scale-110" />
        <Swiper
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            830: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          freeMode={true}
          modules={[Pagination, FreeMode, Navigation]}
          className="mySwiper  "
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <Link href={`/projects#${item.id}`}>
                <div className="flex flex-col group relative shadow-lg text-white rounded-xl px-6 py-8 h-full overflow-hidden cursor-pointer">
                  <Image
                    src={item.backgroundImage}
                    alt="Project Image"
                    layout="fill"
                    objectFit="cover"
                  />

                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3 h-full">
                    <item.icon className="text-white group-hover:text-green-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 " />
                    <div className="absolute top-1/2  -translate-y-1/2 ">
                      <h1 className="text-white text-xl lg:text-2xl mb-3">
                        {item.title}
                      </h1>
                      <p className=" lg:text-lg leading-5 md:leading-6 lg:leading-7  ">
                        {/* <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-lg "> */}

                        {item.content}
                      </p>
                    </div>
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9  text-white group-hover:text-green-500 group-hover:rotate-45 duration-100" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <RxArrowRight className="swiper-button-next hidden sm:block text-7xl self-center ml-3 cursor-pointer hover:scale-110" />
      </div>
      <div className="custom-pagination mt-6"></div>
    </main>
  );
}
