import React from "react";
import Trending from "./Trending";
import Popular from "./Popular";
const price = [
  "1,000",
  "2,000",
  "3,000",
  "4,000",
  "5,000",
  "10,000",
  "15,000",
  "20,000",
];
import wave from "@/public/images/w1.png";
import Image from "next/image";
const Price = () => {
  return (
    <div
      className={`bg-black relative spikesn py-10 duration-300 text-white  overflow-hidden`}
    >
      <Trending />
      <Image
        src={wave}
        alt="wave"
        width={"100%"}
        height={"100%"}
        className=" absolute h-fit w-full mt-52 max-[567px]:-bottom-16  object-cover"
      />
      <h2
        data-aos="fade-right"
        className="w-[95%]  m-auto flex items-center mt-16 text-left  tracking-wider relative z-[1] mb-10 text-5xl max-sm:text-3xl "
      >
        <span className="w-12 mr-2 h-[1px] bg-white"></span>
        <p className="title font-bold text-6xl"> Price</p>
      </h2>
      <div
        className={`flexCenter w-[98%] max-xl:w-[90%] max-sm:w-[100%] m-auto  mb-8 flex-wrap relative z-[2] overflow-hidden duration-300`}
      >
        {price.map((ele, i) => (
          <div
            data-aos="fade-up"
            key={i * 733.3}
            className="w-[310px] max-[350px]:w-[250px] relative group h-[260px] border-2 overflow-hidden rounded-lg border-gray-900 gr cursor-pointer my-2 mx-2 p-4  font-medium hover:scale-105 duration-200 shadow-sm shadow-gray-800"
          >
            <h2 className="text-3xl font-medium max-[350px]:text-2xl">
              Under $ {ele}
            </h2>
            <h3 className="text-[#DF2935] max-[350px]:text-xs font-semibold my-2">
              PICKUP TRUCKS UNDER ${ele}
            </h3>
            <div className=" flex items-center  ">
              <span className="w-2 h-2 mr-2 bg-white rounded-full"></span>
              <p className="max-[350px]:text-sm">SUVS UNDER ${ele}</p>
            </div>
            <div className=" flex items-center my-1 ">
              <span className="w-2 h-2 mr-2 bg-white rounded-full"></span>
              <p className="max-[350px]:text-sm">MINIVANS UNDER ${ele}</p>
            </div>
            <p className=" mt-10 border-b-[1px] text-[#DF2935] border-[#DF2935] w-fit text-xl max-[350px]:text-base">
              All Cars Under ${ele}
            </p>
          </div>
        ))}
      </div>
      <Popular />
    </div>
  );
};

export default Price;
