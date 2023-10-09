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
    <div className="w-full pt-16">
      <PopularSearches />

      <div className="w-[95%] max-lg:w-[98%] flexCenter relative flex-col m-auto pt-16">
        <h2
          data-aos="fade-up"
          className=" text-6xl mb-9 font-medium w-[95%] m-auto text-center max-[400px]:text-5xl"
        >
          Trending Searches
        </h2>
        <div
          data-aos="fade-up"
          className=" relative w-full h-[400px] max-[500px]:h-[300px] group overflow-hidden rounded-md shadow-lg shadow-black"
        >
          <Image
            src={image}
            alt="trending"
            placeholder="blur"
            loading="lazy"
            fill
            sizes="w-full h-full"
            className=" object-cover object-center rounded-md fixed group-hover:scale-110 duration-300 overflow-hidden "
          />
          <div className="rounded-md absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
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
              data-aos="fade-right"
              key={i * 4.2}
              className={` relative w-[32.8%]  group rounded-md mt-2 h-[300px] max-lg:h-[250px] max-md:h-[300px] max-[500px]:w-full max-md:w-[49%] ${
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
                className=" object-cover   rounded-md object-center fixed group-hover:scale-110 duration-300 overflow-hidden "
              />
              <div className="rounded-md absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
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
