import React from "react";
import image from "@/public/images/car.png";
import Image from "next/image";
import Form from "./Form";
const Search = () => {
  return (
    <div className="spikesb">
      <div className="w-[90%]  m-auto pb-10  pt-20  flexBetween max-[900px]:flex-col">
        <div className="w-1/2 max-[900px]:w-full">
          <h2 className="text-5xl max-[400px]:text-2xl max-[400px]:w-full text-center font-bold text-[#323232]">
            Search For Vehicle
          </h2>
          <Form />
        </div>
        <div className="w-1/2 h-[500px] max-xl:h-[400px] max-sm:h-[300px] max-[400px]:hidden max-[900px]:w-full ml-5 max-[900px]:ml-0 relative ">
          <Image
            src={image}
            alt="car map"
            fill
            placeholder="blur"
            loading="lazy"
            sizes="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
