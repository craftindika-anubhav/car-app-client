import Image from "next/image";
import React from "react";
import image from "@/public/images/12.jpg";
import image1 from "@/public/images/1.jpg";
import image2 from "@/public/images/2.jpg";
import image3 from "@/public/images/3.jpg";
import PopularSearches from "./PopularSearches";
const images = [image1, image2, image3];
const content = [
  {
    title: "Pickups Under",
    price: "$ 10,000",
  },
  {
    title: "Sedans Under",
    price: "$ 50,000",
  },
  {
    title: "Fast Coupes Under",
    price: "$ 15,000",
  },
];
const Trending = () => {
  return (
    <div className="w-full ">
      <PopularSearches />
      <div className=" absolute top-0 -mt-[500px] opacity-30 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnssvgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 1422 800"
        >
          <g
            strokeWidth="3"
            stroke="hsl(230, 3%, 32%)"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M 0 1032 Q 355.5 400 711 400 Q 1066.5 400 1422 1032"></path>
            <path d="M 0 1008 Q 355.5 400 711 400 Q 1066.5 400 1422 1008"></path>
            <path d="M 0 984 Q 355.5 400 711 400 Q 1066.5 400 1422 984"></path>
            <path d="M 0 960 Q 355.5 400 711 400 Q 1066.5 400 1422 960"></path>
            <path d="M 0 936 Q 355.5 400 711 400 Q 1066.5 400 1422 936"></path>
            <path d="M 0 912 Q 355.5 400 711 400 Q 1066.5 400 1422 912"></path>
            <path d="M 0 888 Q 355.5 400 711 400 Q 1066.5 400 1422 888"></path>
            <path d="M 0 864 Q 355.5 400 711 400 Q 1066.5 400 1422 864"></path>
            <path d="M 0 840 Q 355.5 400 711 400 Q 1066.5 400 1422 840"></path>
            <path d="M 0 816 Q 355.5 400 711 400 Q 1066.5 400 1422 816"></path>
            <path d="M 0 792 Q 355.5 400 711 400 Q 1066.5 400 1422 792"></path>
            <path d="M 0 768 Q 355.5 400 711 400 Q 1066.5 400 1422 768"></path>
            <path d="M 0 744 Q 355.5 400 711 400 Q 1066.5 400 1422 744"></path>
            <path d="M 0 720 Q 355.5 400 711 400 Q 1066.5 400 1422 720"></path>
            <path d="M 0 696 Q 355.5 400 711 400 Q 1066.5 400 1422 696"></path>
            <path d="M 0 672 Q 355.5 400 711 400 Q 1066.5 400 1422 672"></path>
            <path d="M 0 648 Q 355.5 400 711 400 Q 1066.5 400 1422 648"></path>
            <path d="M 0 624 Q 355.5 400 711 400 Q 1066.5 400 1422 624"></path>
            <path d="M 0 600 Q 355.5 400 711 400 Q 1066.5 400 1422 600"></path>
            <path d="M 0 576 Q 355.5 400 711 400 Q 1066.5 400 1422 576"></path>
            <path d="M 0 552 Q 355.5 400 711 400 Q 1066.5 400 1422 552"></path>
            <path d="M 0 528 Q 355.5 400 711 400 Q 1066.5 400 1422 528"></path>
            <path d="M 0 504 Q 355.5 400 711 400 Q 1066.5 400 1422 504"></path>
            <path d="M 0 480 Q 355.5 400 711 400 Q 1066.5 400 1422 480"></path>
            <path d="M 0 456 Q 355.5 400 711 400 Q 1066.5 400 1422 456"></path>
            <path d="M 0 432 Q 355.5 400 711 400 Q 1066.5 400 1422 432"></path>
            <path d="M 0 408 Q 355.5 400 711 400 Q 1066.5 400 1422 408"></path>
            <path d="M 0 384 Q 355.5 400 711 400 Q 1066.5 400 1422 384"></path>
            <path d="M 0 360 Q 355.5 400 711 400 Q 1066.5 400 1422 360"></path>
            <path d="M 0 336 Q 355.5 400 711 400 Q 1066.5 400 1422 336"></path>
            <path d="M 0 312 Q 355.5 400 711 400 Q 1066.5 400 1422 312"></path>
            <path d="M 0 288 Q 355.5 400 711 400 Q 1066.5 400 1422 288"></path>
            <path d="M 0 264 Q 355.5 400 711 400 Q 1066.5 400 1422 264"></path>
            <path d="M 0 240 Q 355.5 400 711 400 Q 1066.5 400 1422 240"></path>
            <path d="M 0 216 Q 355.5 400 711 400 Q 1066.5 400 1422 216"></path>
            <path d="M 0 192 Q 355.5 400 711 400 Q 1066.5 400 1422 192"></path>
            <path d="M 0 168 Q 355.5 400 711 400 Q 1066.5 400 1422 168"></path>
            <path d="M 0 144 Q 355.5 400 711 400 Q 1066.5 400 1422 144"></path>
            <path d="M 0 120 Q 355.5 400 711 400 Q 1066.5 400 1422 120"></path>
            <path d="M 0 96 Q 355.5 400 711 400 Q 1066.5 400 1422 96"></path>
            <path d="M 0 72 Q 355.5 400 711 400 Q 1066.5 400 1422 72"></path>
            <path d="M 0 48 Q 355.5 400 711 400 Q 1066.5 400 1422 48"></path>
          </g>
        </svg>
      </div>
      <div className="w-[95%] max-lg:w-[98%] flexCenter relative flex-col m-auto pt-16">
        <h2 className=" text-6xl mb-9 font-medium w-[95%] m-auto text-center max-[400px]:text-5xl">
          Trending Searches
        </h2>
        <div className=" relative w-full h-[400px] max-[500px]:h-[300px] group overflow-hidden rounded-xl shadow-lg shadow-black">
          <Image
            src={image}
            alt="trending"
            placeholder="blur"
            loading="lazy"
            fill
            sizes="w-full h-full"
            className=" object-cover object-center rounded-xl fixed group-hover:scale-110 duration-300 overflow-hidden "
          />
          <div className="rounded-xl absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          <div className=" text-white absolute top-5 left-5 w-full h-full z-10">
            <h3 className="py-2 text-4xl max-[500px]:text-2xl font-semibold w-fit border-b-[1px] border-white">
              $ 10,000
            </h3>
            <h2 className=" font-semibold text-3xl max-[500px]:text-xl  my-4 max-[500px]:my-2 max-[350px]:text-lg">
              Family Vehicles Under
            </h2>
          </div>
        </div>
        <div className="w-full flexBetween flex-wrap  max-md:flexCenter ">
          {content.map((ele, i) => (
            <div
              key={i * 4.2}
              className={` relative w-[32.8%]  group rounded-lg mt-2 h-[300px] max-lg:h-[250px] max-md:h-[300px] max-[500px]:w-full max-md:w-[49%] ${
                i === 2 && "max-md:w-full"
              } overflow-hidden shadow-lg shadow-black`}
            >
              <Image
                src={images[i]}
                alt="trending"
                placeholder="blur"
                loading="lazy"
                fill
                sizes="w-full h-full"
                className=" object-cover   rounded-lg object-center fixed group-hover:scale-110 duration-300 overflow-hidden "
              />
              <div className="rounded-lg absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
              <div className=" text-white absolute top-5 left-5 w-full h-full z-10">
                <h3 className="py-2 text-2xl font-semibold w-fit border-b-[1px] border-white">
                  {ele.price}
                </h3>
                <h2 className=" font-semibold text-xl my-3">{ele.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
