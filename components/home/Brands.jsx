"use client";
import React, { useState } from "react";
import { brands } from "./HomeData";
import Image from "next/image";
let l = 0;
const Brands = () => {
  const [show, setShow] = useState(false);
  if (!show ? (l = brands.length / 2) : (l = brands.length))
    return (
      <div
        className={`bg-[#191919] relative   duration-300 text-white  overflow-hidden`}
      >
        <h2
          data-aos="fade-up"
          className="w-[90%] text-center flexCenter m-auto  tracking-wider relative z-[1] mb-10 text-5xl max-sm:text-3xl "
        >
          Our Available Brands
        </h2>
        <div
          className={`flexCenter w-[95%] max-xl:w-[90%]  m-auto  mb-8 pb-8 flex-wrap relative z-[2] overflow-hidden duration-300`}
        >
          {brands.slice(0, l).map((ele, i) => (
            <div
              data-aos="fade-up"
              key={i * 733.3}
              className="w-[150px] relative group h-[120px] bg-white border-2 overflow-hidden rounded-lg border-white  cursor-pointer  text-lg  flexCenter flex-col m-2  text-center font-medium hover:scale-110 duration-200 shadow-lg shadow-black"
            >
              <p className=" tracking-wide text-[#323232] duration-300 mt-1 w-full text-lg  flexCenter">
                {ele.title}
              </p>
              <div className=" relative w-[100px] h-[70px] ">
                <Image
                  src={ele.image}
                  alt={ele.title}
                  placeholder="blur"
                  loading="lazy"
                  fill
                  sizes="w-full h-full"
                  className=""
                />
              </div>
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

export default Brands;
