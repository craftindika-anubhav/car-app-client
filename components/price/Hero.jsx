import React from 'react';
import Image from 'next/image';
import image from '@/public/images/Hero.png';
import image1 from '@/public/images/Hero2.png';
import { GiSpiralArrow } from 'react-icons/gi';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className=" w-screen h-[100vh] overflow-x-hidden">
      <div className=" w-full h-full relative max-sm:hidden">
        <Image
          src={image}
          alt="hero image"
          sizes="w-full h-full"
          placeholder="blur"
          loading="lazy"
          fill
          className=" object-cover object-left"
        />
      </div>
      <div className=" w-full h-full relative sm:hidden">
        <Image
          src={image1}
          alt="hero image"
          sizes="w-full h-full"
          placeholder="blur"
          loading="lazy"
          fill
          className=" object-cover object-left"
        />
        <div className=" absolute top-0 h-full w-full left-0 bg-black opacity-50"></div>
      </div>
      <div className=" absolute z-10 text-white w-full h-full top-0">
        <div className="h-[20%] max-sm:h-[16%] ml-8 max-sm:ml-4  w-fit   items-center flex justify-center flex-col">
          <h2
            data-aos="fade-up"
            className=" text-2xl max-sm:text-xl tracking-wide"
          >
            Auto Trading Genius
          </h2>
          <p
            data-aos="fade-up"
            className=" text-sm max-sm:text-xs border-white border-b-[1px] mt-[2px] tracking-wide"
          >
            The Art Of Buying Cars Cheapy
          </p>
        </div>
        <div className=" m-auto h-[70vh] w-[740px] max-md:w-[80%] max-sm:w-[90%] text-center flex justify-center items-center -mt-5 max-md:mt-0  flex-col">
          <div>
            <h2
              data-aos="fade-up"
              className="text-7xl max-md:text-5xl max-[500px]:text-4xl text-center  mt-28 max-md:mt-36 font-semibold max-[370px]:text-3xl"
            >
              Welcome to Auto Trading Genius
            </h2>
            <p
              data-aos="fade-up"
              className="text-3xl max-md:text-2xl max-[500px]:text-xl max-[500px]:w-[90%] m-auto font-medium text-center mt-6 max-sm:mt-2 max-[370px]:text-lg max-[370px]:w-[80%] "
            >
              Choose Your Membership Type
            </p>
          </div>
          <div
            data-aos="fade-up"
            className=" animate-bounce text-5xl mt-10 cursor-pointer"
          >
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
