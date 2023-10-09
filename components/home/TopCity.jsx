"use client";
import React, { useState } from "react";
import { topCity } from "./HomeData";
let l = 0;
const TopCity = () => {
  const [show, setShow] = useState(true);
  if (!show ? (l = topCity.length / 2) : (l = topCity.length))
    return (
      <div
        className={`bg-[#191919] relative  duration-300 text-white  overflow-hidden`}
      >
        <h2
          data-aos="fade-right"
          className="w-[95%] m-auto  text-center relative z-[1] mb-14 text-5xl max-sm:text-3xl font-semibold"
        >
          TOP MODELS BY CITY
        </h2>
        <div
          className={`flexCenter py-10 -mt-10 w-[83%] max-xl:w-[90%]  m-auto  mb-8 flex-wrap relative z-[2]  duration-300`}
        >
          {topCity.slice(0, l).map((ele, i) => (
            <div
              data-aos="zoom-in"
              key={i * 73.3}
              className="w-[260px] h-[100px] hover:scale-110 duration-300 cursor-pointer rounded-lg text-lg  flexCenter flex-col my-2 mx-2 px-3 text-center font-medium bg-slate-700 shadow-lg shadow-black"
            >
              <p className=" tracking-wide">{ele}</p>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          className="w-full flexCenter cursor-pointer mb-14 -mt-5 text-center text-2xl   relative z-10"
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

export default TopCity;
