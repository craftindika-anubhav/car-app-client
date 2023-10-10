import React from 'react';
import Image from 'next/image';
import image from '@/public/images/Hero.png';
import image1 from '@/public/images/Hero2.png';
const Hero = () => {
  return (
    <div className=" w-screen h-[100vh]  overflow-x-hidden">
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
            className=" text-xs max-sm:text-xs border-white border-b-[1px] mt-[2px] tracking-wide"
          >
            The Art Of Buying Cars Cheapy
          </p>
        </div>
        <div className=" m-auto h-[75vh] w-[740px] max-md:w-[85%] max-sm:w-[95%] flexCenter   flex-col">
          <h2
            data-aos="fade-up"
            className="text-7xl  text-center max-md:text-5xl max-[430px]:text-3xl"
          >
            Buy Your Dream Car at up to 70% Less
          </h2>
          <p
            data-aos="fade-up"
            className="text-xl text-center mt-4 max-md:w-[75%] max-[490px]:w-[90%] max-[430px]:text-base"
          >
            Find your dream car with us. Wide selection, easy browsing, and
            expert help. Start now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
