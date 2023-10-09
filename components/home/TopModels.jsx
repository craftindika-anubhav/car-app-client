"use client";
import React, { useState } from "react";
import { topModels } from "./HomeData";
let l = 0;
const TopModels = () => {
  const [show, setShow] = useState(false);
  if (!show ? (l = topModels.length / 2) : (l = topModels.length))
    return (
      <div
        className={`bg-white spikesb -mt-1 relative  duration-300 text-[#323232]  overflow-hidden`}
      >
        <h2
          data-aos="fade-left"
          className="w-[95%] m-aauto mt-24 text-center relative z-[1] mb-10  text-5xl max-sm:text-3xl font-semibold"
        >
          TOP MODELS BY YEAR
        </h2>
        <div
          className={`flexCenter py-10  w-[83%] max-xl:w-[90%]  m-auto  mb-8 flex-wrap relative z-[2] overflow-hidden duration-300`}
        >
          {topModels.slice(0, l).map((ele, i) => (
            <div
              data-aos="zoom-in"
              key={i * 73.3}
              className="w-[260px] h-[100px] hover:scale-110 duration-300 cursor-pointer rounded-lg text-lg  flexCenter flex-col my-2 mx-2 px-3 text-center font-medium bg-slate-700 shadow-lg shadow-black"
            >
              <p className=" tracking-wide text-white">{ele}</p>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          className="w-full text-black flexCenter cursor-pointer mb-14 -mt-5 text-center text-2xl   relative z-10"
        >
          <p
            className="border-b-2 border-black hover:tracking-wider w-fit hover:text-red-700 hover:border-red-700 duration-200"
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

export default TopModels;
