import React from "react";
import Image from "next/image";
import image from "@/public/images/Hero.jpg";
import { GiSpiralArrow } from "react-icons/gi";
import Link from "next/link";
const Hero = () => {
  return (
    <div className=" w-screen h-[100vh]">
      <div className=" w-full h-full relative">
        <Image
          src={image}
          alt="hero image"
          sizes="w-full h-full"
          placeholder="blur"
          loading="lazy"
          fill
          className=" object-cover object-center"
        />
      </div>
      <div className=" absolute z-10 text-white w-full h-full top-0">
        <div className="h-[20%] ml-8  w-fit  items-center flex justify-center flex-col">
          <h2 className=" text-2xl  tracking-wide">Auto Trading Genius</h2>
          <p className=" text-sm border-white border-b-[1px] mt-[2px] tracking-wide">
            The Art Of Buying Cars Cheapy
          </p>
        </div>
        <div className=" m-auto h-[70vh] w-[740px] flex justify-between items-center -mt-5  flex-col">
          <div>
            <h2 className="text-7xl  text-center mt-28 font-semibold">
              Welcome to Auto Trading Genius
            </h2>
            <p className="text-3xl font-medium text-center mt-6">
              Choose Your Membership Type
            </p>
          </div>
          <div className=" animate-bounce text-5xl cursor-pointer">
            <Link href="#membership">
              <GiSpiralArrow className=" rotate-45 hover:text-red-600 duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
