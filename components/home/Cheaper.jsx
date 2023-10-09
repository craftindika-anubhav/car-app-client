import React from "react";
import { cheaper } from "./HomeData";
import Image from "next/image";
import wave from "@/public/images/w1.png";
const Cheaper = () => {
  return (
    <div className="pt-20  spikesn relative  h-fit pb-10 ">
      <Image
        src={wave}
        alt="wave"
        width={"100%"}
        height={"100%"}
        className=" absolute h-fit w-full -bottom-24 max-[567px]:-bottom-16  object-cover"
      />
      <div className="flexCenter flex-wrap px-20 max-xl:px-0">
        <div className="mx-3 w-[500px] max-[819px]:mb-8">
          <h2
            data-aos="fade-right"
            className=" text-3xl max-[500px]:text-xl mb-1 "
          >
            Why Do You Get <span className="text-[#DF2935]">Cars Cheaper</span>{" "}
            Using Auto Trading Genius
          </h2>
          <p data-aos="fade-right">We Are Expert At Buying Cars Cheaper At :</p>
        </div>
        {cheaper.map((ele, i) => (
          <div
            data-aos="zoom-in"
            key={i * 2.4}
            className=" cursor-pointer w-[250px] h-[150px] rounded-lg p-4 flexBetween flex-col bg-[#43454E] m-3 shadow-md shadow-black"
          >
            <h2 className="w-full  text-xl">{ele.title}</h2>
            <p className="text-xs">{ele.sup}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cheaper;
