import React from "react";
import { benefits } from "./priceData";
import { TfiCheckBox } from "react-icons/tfi";
const Benefits = () => {
  return (
    <div className="spikesb relative z-10 ">
      <h2
        data-aos="fade-down"
        className=" text-5xl max-sm:text-3xl mx-5 tracking-wide text-center py-14  font-semibold text-[#323232]"
      >
        Your Membership Benefits
      </h2>
      <div className=" w-[85%] m-auto flexBetween flex-wrap ">
        {benefits.map((ele, i) => (
          <div
            key={i * 2}
            className="my-2 flex items-start w-[550px] max-sm:w-fit"
          >
            <TfiCheckBox
              data-aos="fade-right"
              className=" text-lg mr-1 w-1/12 mt-1 text-green-700"
            />
            <p
              data-aos="fade-up"
              className=" w-11/12 text-lg max-[420px]:text-sm"
            >
              {ele}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
