"use client";
import React, { useState } from "react";
import { cities } from "./HomeData";
import Image from "next/image";
const Cities = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`bg-black relative spikesn  duration-300 text-white  overflow-hidden`}
    >
      <h2 className="w-[92%]  m-auto flex items-center mt-16 text-left  tracking-wider relative z-[1] mb-10 text-5xl max-sm:text-3xl ">
        <span className="w-12 mr-2 h-[1px] bg-white"></span>
        <p className="title font-bold text-6xl"> Cities</p>
      </h2>
      <div
        className={`flexCenter ${
          show ? "h-auto" : "h-[96vh]"
        } w-[83%] max-xl:w-[90%]  m-auto  mb-8 flex-wrap relative z-[2] overflow-hidden duration-300`}
      >
        {cities.map((ele, i) => (
          <div
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
              className=" object-cover object-center group-hover:scale-110 duration-300 overflow-hidden "
            />
            <p className=" tracking-wide  absolute z-[2] group-hover:-mt-44 duration-300 w-full text-3xl h-full flexCenter">
              {ele.title}
            </p>
            <dir className="absolute top-0 left-0 h-full w-full  bg-black opacity-25 z-[1]"></dir>
          </div>
        ))}
      </div>
      <div className="w-full flexCenter cursor-pointer mb-10 text-center text-2xl   relative z-10">
        <p
          className="border-b-2 w-fit hover:text-red-700 hover:border-red-700 duration-200"
          onClick={() => setShow(!show)}
        >
          Show {show ? "Less" : "More"}
        </p>
      </div>
    </div>
  );
};

export default Cities;
