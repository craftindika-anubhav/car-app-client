import React from "react";
import { data } from "./priceData";
import Link from "next/link";
import { WiStars } from "react-icons/wi";
import { TfiCheckBox } from "react-icons/tfi";
import Image from "next/image";
import wave from "@/public/images/w1.png";
import Benefits from "./Benefits";
const Membership = () => {
  return (
    <div className="bg-[#191919]">
      <div
        id="membership"
        className=" bg-[#191919] relative z-0  flexCenter py-[33px] pb-28 max-[1128px]:pt-[50px] overflow-hidden"
      >
        <Image
          src={wave}
          alt="wave"
          width={"100%"}
          height={"100%"}
          className=" absolute h-fit w-full   -bottom-0  object-cover opacity-30"
        />
        <div className="flex justify-center  items-center flex-wrap w-[1170px] max-[1180px]:w-fit m-auto mx-4 relative">
          {data.map((ele, i) => (
            <div
              data-aos="zoom-in"
              key={i}
              className="w-[350px] h-[482px] max-[500px]:w-[300px] max-[350px]:w-[240px] max-[500px]:h-[400px] max-[350px]:h-[310px] group/i per  cursor-pointer mb-8 max-[1127px]:mb-4  mx-1 text-[#323232] "
            >
              <div
                className={`bg-white h-full flex flex-col justify-start rounded-md ${
                  ele.title === "Most popular"
                    ? "border-2 border-[#DF2935] boxShadowp"
                    : "boxShadow"
                }`}
              >
                {ele.title === "Most popular" && (
                  <div className="bg-[#DF2935] rounded-t-lg text-white w-full flexCenter py-2">
                    <h2 className="text-xl max-[500px]:text-base max-[350px]:text-sm font-semibold capitalize">
                      {ele.title}
                    </h2>
                    <WiStars className="text-4xl max-[500px]:text-3xl max-[350px]:text-2xl" />
                  </div>
                )}
                <div className=" flexCenter  flex-col h-[125px] max-[500px]:pb-4 max-[500px]:pt-7 max-[350px]:pb-2 max-[350px]:pt-4  py-16">
                  <h3 className="text-center  w-full text-2xl max-[500px]:text-xl max-[3500px]:text-base font-medium ">
                    {ele.duration}
                  </h3>
                  <div className=" flexCenter  ">
                    <h2 className=" text-4xl max-[500px]:text-2xl max-[350px]:text-lg font-semibold font-serif">
                      {ele.price}
                      <span className=" text-3xl max-[500px]:text-2xl max-[350px]:text-sm">
                        \
                      </span>
                    </h2>
                    <p className="text-xl ml-2 mt-3 max-[350px]:mt-1 max-[500px]:text-base max-[350px]:text-sm text-gray-400">
                      {ele.price_}
                    </p>
                  </div>
                </div>
                <div className="bg-[#F5F5F5] flex flex-col justify-between items-end h-full rounded-md p-5 spikes">
                  <div className="h-full flex flex-col justify-center ">
                    {ele.sup.map((e, ind) => (
                      <div key={ind * 2} className="my-2 flex items-start">
                        <TfiCheckBox className=" text-lg mr-1 w-1/12 mt-1 text-green-700" />
                        <p className=" w-11/12 text-lg max-[500px]:text-base max-[350px]:text-xs ">
                          {e}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="  rounded-md w-full  text-center max-[500px]:my-3 max-[350px]:my-0 max-[350px]:mt-2  text-lg max-[500px]:text-xs">
                    <Link
                      href={ele.url}
                      className={`border-2 rounded-md duration-300 btn group border-[#DF2935] px-20 max-[500px]:px-5 max-[350px]:px-2 max-[350px]:py-1 py-2 `}
                    >
                      <span className=" btnw font-medium relative duration-300 ">
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
      <Benefits />
    </div>
  );
};

export default Membership;
