import React from 'react';
import { carType } from './HomeData';
import Image from 'next/image';
import Cheaper from './Cheaper';
import Brands from './Brands';
import wave from '@/public/images/w1.png';
const CarTypes = () => {
  return (
    <div className={`bg-[#191919]  relative pb-24 duration-300  text-white   `}>
      <Cheaper />
      <Image
        src={wave}
        alt="wave"
        width={'100%'}
        height={'100%'}
        className=" absolute h-fit w-full bottom-0  object-cover"
      />
      <h2
        data-aos="fade-left"
        className="w-[95%]  m-auto flexcenter mt-16 text-center tracking-wider relative z-[1] mb-10 text-5xl max-sm:text-3xl "
      >
        All Car Types Available
      </h2>
      <div
        className={`flexCenter w-[80%] max-xl:w-[98%] group  m-auto  pb-8 flex-wrap relative z-[2] overflow-hidden duration-300`}
      >
        {carType.map((ele, i) => (
          <div
            data-aos="zoom-in"
            key={i * 733.3}
            className="w-[280px] bg-[#191919] relative   h-[230px] overflow-hidden  cursor-pointer   text-lg  flexBetween flex-col m-4 text-center font-medium duration-300 shadow-lg shadow-black"
          >
            <div className="w-full  block h-16 border-white border-dashed border-2 border-b-0 absolute "></div>
            <div className="w-full h-24 border-red-600  border-2 border-y-0 absolute top-[50%] translate-y-[-50%]"></div>
            <div className="felxCenter mt-10 ">
              <p className=" tracking-wide italic  w-full     text-white duration-300  -mt-1 mb-0  text-2xl py-3    flexCenter">
                {ele.title}
              </p>
              <div className="w-[230px] h-[130px] relative ">
                <Image
                  src={ele.image}
                  alt={ele.title}
                  placeholder="blur"
                  loading="lazy"
                  fill
                  sizes="w-full h-full"
                  className=" absolute z-10"
                />
              </div>
            </div>
            <div className="w-full  block h-16 border-white border-dashed border-2 border-t-0 absolute bottom-0  "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarTypes;
