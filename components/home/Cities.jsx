"use client";
import React, { useState } from "react";
import { cities } from "./HomeData";
import Image from "next/image";
import wave from "@/public/images/w1.png";
let l = 0;
const Cities = () => {
  const [show, setShow] = useState(false);
  if (!show ? (l = cities.length / 2) : (l = cities.length))
    return (
      <div
        className={`bg-[#191919] relative pb-20  duration-300 text-white  overflow-hidden`}
      >
        <Image
          src={wave}
          alt="wave"
          width={"100%"}
          height={"100%"}
          className=" absolute h-fit w-full   -bottom-0  object-cover"
        />
        <h2 className="w-[92%]  m-auto flex items-center mt-16 text-left  tracking-wider relative z-[1] mb-10 text-5xl max-sm:text-3xl ">
          <span
            data-aos="fade-right"
            className="w-12 mr-2 h-[1px] bg-white"
          ></span>
          <p data-aos="fade-right" className="title font-bold text-6xl">
            {" "}
            Cities
          </p>
        </h2>
        <div
          className={`flexCenter w-[83%] max-xl:w-[90%]  m-auto  mb-8 flex-wrap relative z-[2] overflow-hidden duration-300`}
        >
          {cities.slice(0, l).map((ele, i) => (
            <div
              data-aos="zoom-in"
              key={i * 733.3}
              className="w-[260px] relative group h-[280px] border-2 overflow-hidden rounded-lg border-white  cursor-pointer  text-lg  flexCenter flex-col my-2 mx-2 px-3 text-center font-medium hover:scale-105 duration-200 shadow-md shadow-gray-800"
            >
              <Image
                src={ele.image}
                alt={ele.title}
                placeholder="blur"
                loading="lazy"
                fill
                sizes="w-full h-full"
                className=" object-cover object-center scale-105 group-hover:scale-125 duration-300 overflow-hidden "
              />
              <p className=" tracking-wide  absolute z-[2] group-hover:-mt-44 duration-300 w-full text-2xl h-full flexCenter">
                {ele.title}
              </p>
              <div className="absolute top-0 left-0 h-full w-full  bg-black opacity-40 group-hover:opacity-20 duration-100 z-[1]"></div>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          className="w-full flexCenter cursor-pointer mb-10 text-center text-2xl   relative z-10"
        >
          <p
            className="border-b-2 hover:tracking-wider w-fit hover:text-red-700 hover:border-red-700 duration-200"
            onClick={() => {
              setShow(!show);
            }}
          >
            Show {show ? "Less" : "More"}
          </p>
        </div>
      </div>
    );
};

export default Cities;
