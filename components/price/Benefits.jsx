import React from "react";
import { benefits } from "./priceData";
import { TfiCheckBox } from "react-icons/tfi";
const Benefits = () => {
  return (
    <div className="spikesb relative z-10 ">
      <h2 className=" text-5xl tracking-wide text-center py-14  font-semibold text-[#323232]">
        Your Membership Benefits
      </h2>
      <div className=" w-[85%] m-auto flexBetween flex-wrap ">
        {benefits.map((ele, i) => (
          <div key={i * 2} className="my-2 flex items-start w-[550px]">
            <TfiCheckBox className=" text-lg mr-1 w-1/12 mt-1 text-green-700" />
            <p className=" w-11/12 text-lg ">{ele}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
