import React from "react";
import { data } from "./priceData";
import Link from "next/link";
import { WiStars } from "react-icons/wi";
import { TfiCheckBox } from "react-icons/tfi";
const Membership = () => {
  return (
    <div id="membership" className=" bg-[#323232]  ">
      <div className="flex justify-evenly  items-center flex-wrap w-[1170px] m-auto  relative">
        {data.map((ele, i) => (
          <div
            key={i}
            className="w-[350px] h-[482px] group/i per cursor-pointer mb-16 text-[#323232] "
          >
            <div
              className={`bg-white h-[482px]   flex flex-col justify-start    rounded-md ${
                ele.title === "Most popular"
                  ? "border-2 border-[#DF2935] boxShadowp"
                  : "boxShadow"
              }`}
            >
              {ele.title === "Most popular" && (
                <div className="bg-[#DF2935] rounded-t-lg text-white w-full flexCenter py-2">
                  <h2 className="text-xl font-semibold capitalize">
                    {ele.title}
                  </h2>
                  <WiStars className="text-4xl " />
                </div>
              )}
              <div className=" flexCenter  flex-col h-[125px]  py-16">
                <h3 className="text-center  w-full text-2xl font-medium ">
                  {ele.duration}
                </h3>
                <div className=" flexCenter  ">
                  <h2 className=" text-4xl font-semibold font-serif">
                    {ele.price}
                    <span className=" text-3xl">\</span>
                  </h2>
                  <p className="text-xl ml-2 mt-3 text-gray-400">
                    {ele.price_}
                  </p>
                </div>
              </div>
              <div className="bg-[#F5F5F5] flex flex-col justify-between items-end h-full rounded-md p-5 spikes">
                <div className="h-full flex flex-col justify-center ">
                  {ele.sup.map((e, ind) => (
                    <div key={ind * 2} className="my-2 flex items-start">
                      <TfiCheckBox className=" text-lg mr-1 w-1/12 mt-1 text-green-700" />
                      <p className=" w-11/12 text-lg ">{e}</p>
                    </div>
                  ))}
                </div>
                <div className="  rounded-md w-full  text-center  text-lg">
                  <Link
                    href={ele.url}
                    className={`border-2 rounded-md duration-300 btn group border-[#DF2935] px-20 py-2 `}
                  >
                    <span className="group-hover/i:text-white font-medium relative duration-300 group-hover/i:z-10">
                      Get started
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
