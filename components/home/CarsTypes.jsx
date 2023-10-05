"use client";
import React, { useState } from "react";
import { carType } from "./HomeData";
import Image from "next/image";
const CarTypes = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`bg-[#191919] relative spikesn  duration-300 text-white  overflow-hidden`}
    >
      <h2 className="w-[95%]  m-auto flexcenter mt-16 text-center tracking-wider relative z-[1] mb-10 text-5xl max-sm:text-3xl ">
        All Cars Types Available
      </h2>
      <div
        className={`flexCenter ${
          show ? "h-auto" : "h-[83vh]"
        } w-[90%] max-xl:w-[90%]  m-auto  mb-8 flex-wrap relative z-[2] overflow-hidden duration-300`}
      >
        {carType.map((ele, i) => (
          <div
            key={i * 733.3}
            className="w-[300px] bg-[#191919]  group h-[230px] overflow-hidden rounded-lg cursor-pointer  text-lg  flexBetween flex-col m-3 text-center font-medium hover:scale-110 duration-300 shadow-lg shadow-black"
          >
            <p className=" tracking-wide w-full bg-white text-[#323232] duration-300  text-3xl h-[70px] flexCenter">
              {ele.title}
            </p>
            <div className="w-[200px] h-[120px] relative">
              <Image
                src={ele.image}
                alt={ele.title}
                placeholder="blur"
                loading="lazy"
                fill
                sizes="w-full h-full"
                className=" "
              />
            </div>
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

export default CarTypes;
