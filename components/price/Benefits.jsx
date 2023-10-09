import React from "react";
import { benefits } from "./priceData";
import { TfiCheckBox } from "react-icons/tfi";
import Image from "next/image";
import wave from "@/public/images/w1.png";
const Benefits = () => {
  return (
    <div className="relative  overflow-hidden pb-44">
      <Image
        src={wave}
        alt="wave"
        width={"100%"}
        height={"100%"}
        className=" absolute h-fit w-full   bottom-0  object-cover opacity-30"
      />
      <h2
        data-aos="fade-up"
        className=" text-5xl max-sm:text-3xl mx-5 mb-10 tracking-wide text-center   font-semibold text-white"
      >
        Your Membership Benefits
      </h2>
      <div className=" w-[90%] max-sm:w-[95%]  text-white m-auto flexCenter flex-wrap ">
        {benefits.map((ele, i) => (
          <div
            data-aos="fade-up"
            key={i * 2}
            className="my-2 mx-4 max-sm:mx-2 flex items-start w-[550px] max-sm:w-fit"
          >
            <TfiCheckBox className=" text-2xl  mr-1 w-10 mt-1 text-green-500" />

            <p className=" w-11/12 text-lg max-[420px]:text-sm">{ele}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
