import React from "react";
import { cheaper } from "./HomeData";
const Cheaper = () => {
  return (
    <div className="">
      <div className="flexCenter flex-wrap ">
        <div className="mx-3 w-[500px]">
          <h2 className=" text-3xl mb-1">
            Why Do You Get <span className="text-[#DF2935]">Cars Cheaper</span>{" "}
            Using Auto Trading Genius
          </h2>
          <p>We Are Expert At Buying Cars Cheaper At :</p>
        </div>
        {cheaper.map((ele, i) => (
          <div
            key={i * 2.4}
            className="w-[250px] h-[150px] rounded-lg p-4 flexBetween flex-col bg-[#43454E] m-3 shadow-md shadow-black"
          >
            <h2 className="w-full  text-xl">{ele.title}</h2>
            <p className="text-xs">{ele.sup}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cheaper;
