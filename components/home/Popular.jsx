"use client";
import React, { useState } from "react";
import { popular } from "./HomeData";
let l = 0;
const Popular = () => {
  const [show, setShow] = useState(false);
  if (!show ? (l = popular.length / 2) : (l = popular.length))
    return (
      <div
        className={` -mt-1 relative  duration-300 text-white  overflow-hidden`}
      >
        <h2
          data-aos="fade-up"
          className="w-[95%] font-bold m-auto mt-16 text-center relative z-[1] mb-10 text-6xl max-sm:text-5xl max-[350px]:text-4xl "
        >
          POPULAR
        </h2>
        <div
          className={`flexCenter  w-[90%] max-xl:w-[90%]  m-auto  mb-8 flex-wrap relative z-[2] overflow-hidden duration-300`}
        >
          {popular.slice(0, l).map((ele, i) => (
            <div key={i * 1.234} className="flexCenter">
              {/* <span className="w-10 h-[2px] -mr-[9px] -ml-3 mt-8 rotate-45 bg-white"></span> */}
              <div
                data-aos="zoom-in"
                key={i * 73.3}
                className="w-[180px] h-[70px] hover:scale-110 duration-300 cursor-pointer  rounded-md flex text-base  flexCenter flex-col my-2 mx-2  px-3 text-center font-medium  border-[3px]  border-white shadow-md "
              >
                <p className=" tracking-wide font-semibold text-white ">
                  {ele}
                </p>
              </div>
              {/* <span className="w-10 h-[2px] -ml-[9px] mt-8 -rotate-45 bg-white"></span> */}
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

export default Popular;
