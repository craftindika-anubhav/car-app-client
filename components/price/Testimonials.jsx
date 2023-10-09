"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Navigation } from "swiper/modules";
import { testimonials } from "./priceData";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

import wave from "@/public/images/w1.png";
const Testimonials = () => {
  return (
    <div className="  pb-32 max-sm:pb-16 overflow-hidden  bg-[#191919]  relative text-white">
      <Image
        src={wave}
        alt="wave"
        width={"100%"}
        height={"100%"}
        className=" absolute h-fit w-full   bottom-0  object-cover "
      />
      <h2
        data-aos="fade-up"
        className="text-5xl max tracking-wide relative z-10 text-center pb-10 max-[400px]:pb-5 w-[600px] max-md:w-[350px] max-md:text-3xl max-[400px]:text-2xl max-[400px]:w-[95%]  m-auto  font-bold"
      >
        What Other Members are Saying
      </h2>
      <div className="ml-3 relative max-sm:mx-10 max-[450px]:mx-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            1115: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
          }}
          freeMode={true}
          loop="true"
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper "
        >
          {testimonials.map((ele, i) => (
            <SwiperSlide key={i * 43}>
              <div
                data-aos="fade-up"
                className="  my-10 relative  min-h-[380px] flex flex-col justify-between text-white rounded-xl boxShadowp cursor-pointer"
              >
                <div className="bg-black  w-full h-full absolute opacity-50 rounded-lg"></div>
                <div className=" flexBetween flex-col w-full h-full absolute z-10 p-5">
                  <div className=" ">
                    <FaQuoteLeft className="text-xl my-3 ml-5 text-[#DF2935]" />
                    <div className="flex items-center max-md:text-sm  min-h-[160px] max-[320px]:text-[13px] ">
                      <p className=" ">{ele.content}</p>
                    </div>
                  </div>
                  <div className="flex border-t-[1px] pt-4 w-[95%] mt-4">
                    <div className="w-[60px] h-[60px] max-[320px]:w-[40px] max-[320px]:h-[40px] rounded-full relative">
                      <Image
                        src={ele.image}
                        alt={ele.name}
                        placeholder="blur"
                        loading="lazy"
                        fill
                        sizes="w-full h-full "
                        className="rounded-full object-cover object-top"
                      />
                    </div>
                    <div className="ml-3 max-md:text-sm max-[350px]:text-xs">
                      <h2>{ele.name}</h2>
                      <h2>{ele.jop}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" max-sm:hidden flexCenter absolute  top-1/2 translate-y-[-50%] w-[70px] min-h-[380px] right-0 z-10  bg-black opacity-80"></div>
        <div className="next max-sm:hidden border-2 flexxCenter cursor-pointer w-10 h-10 mx-4  rounded-full  hover:bg-white duration-300 group  absolute right-0  top-1/2 translate-y-[-50%]  z-30">
          <BsArrowRightShort className=" text-4xl group-hover:text-black" />
        </div>
        <div className="  w-full sm:hidden flexCenter mt-5">
          <div className="prev  border-2 flexxCenter cursor-pointer w-10 h-10 mx-4 rounded-full hover:bg-white duration-300 group  ">
            <BsArrowLeftShort className=" text-4xl group-hover:text-black" />
          </div>
          <div className="next border-2 flexxCenter cursor-pointer w-10 h-10 mx-4  rounded-full  hover:bg-white duration-300 group  ">
            <BsArrowRightShort className=" text-4xl group-hover:text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
