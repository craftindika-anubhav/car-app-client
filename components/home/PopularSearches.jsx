import React from "react";
import { popularSearch } from "./HomeData";
import Image from "next/image";
import wave from "@/public/images/w1.png";
const PopularSearches = () => {
  return (
    <div className="w-full relative ">
      <Image
        src={wave}
        alt="wave"
        width={"100%"}
        height={"100%"}
        className=" absolute h-fit w-full -bottom-24 max-[567px]:-bottom-16  object-cover"
      />
      <div className="  w-[90%] max-[1115px]:w-[95%] max-[430px]:w-[98%] m-auto flex justify-center items-center max-[860px]:flex-col max-[860px]:justify-center ">
        <div className="border-l-2 border-white mr-14  pl-8 pt-3 max-[860px]:pt-0 max-[430px]:pl-6 max-[860px]:mr-0">
          {popularSearch
            .slice(0, popularSearch.length / 2)
            .map((ele, index) => (
              <div
                data-aos="zoom-out"
                key={index * 2.2343}
                className=" bg-white rounded-md relative triangle text-[#323232] mb-5  p-5 max-[430px]:pr-2 w-[450px] max-[860px]:w-[450px] max-[1085px]:w-[350px] max-[550px]:w-[350px] max-[430px]:w-[220px]"
              >
                <h2 className=" text-3xl max-[860px]:text-3xl max-[1085px]:text-xl max-[550px]:text-xl max-[430px]:text-base">
                  {ele.title}
                </h2>
                <div className="mt-2">
                  {ele.sup.map((e, i) => (
                    <div
                      key={i * 3.2343}
                      className="flex ml-1 my-1 max-[860px]:text-base max-[1085px]:text-sm max-[550px]:text-sm max-[430px]:text-xs  "
                    >
                      <span className="-ml-1 mr-1">-</span>
                      <p>{e}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div className="border-l-2 border-white   pl-8 pt-3 max-[860px]:pt-0 max-[430px]:pl-6 max-[1085px]:mr-0">
          {popularSearch
            .slice(popularSearch.length / 2, popularSearch.length)
            .map((ele, index) => (
              <div
                data-aos="zoom-out"
                key={index * 2.2343}
                className=" bg-white relative rounded-md triangle text-[#323232] mb-5  p-5 max-[430px]:pr-2 w-[450px] max-[860px]:w-[450px] max-[1085px]:w-[350px] max-[550px]:w-[350px] max-[430px]:w-[220px]"
              >
                <h2 className="  text-3xl max-[860px]:text-3xl max-[1085px]:text-xl max-[550px]:text-xl max-[430px]:text-base">
                  {ele.title}
                </h2>
                <div className="mt-2">
                  {ele.sup.map((e, i) => (
                    <div
                      key={i * 7.2343}
                      className="flex ml-1 my-1 max-[860px]:text-base max-[1085px]:text-sm max-[550px]:text-sm max-[430px]:text-xs "
                    >
                      <span className="-ml-1 mr-1">-</span>
                      <p>{e}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSearches;
