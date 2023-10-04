import React from "react";
import Image from "next/image";
import image from "@/public/images/Hero.jpg";
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
        <div className="h-[25%] ml-10  w-fit  items-center flex justify-center flex-col">
          <h2 className=" text-4xl my-2 tracking-wide">Auto Trading Genius</h2>
          <p className="text-xl border-white border-b-[1px] tracking-wide">
            The Art Of Buying Cars Cheapy
          </p>
        </div>
        <div className=" m-auto h-[75vh] w-[740px] flexCenter -mt-6  flex-col">
          <h2 className="text-7xl  text-center ">
            Buy Your Dream Car At 70% Less
          </h2>
          <p className="text-xl text-center mt-4">
            Find your dream car with us. Wide selection, easy browsing, and
            expert help. Start now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
