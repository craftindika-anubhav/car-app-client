"use client";
import React, { useRef, useState, useEffect } from "react";
const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [zip, setZip] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className=" my-12 ">
      <form
        // data-aos="fade-down"
        name="form"
        method="POST"
        acceptCharset="UTF-8"
        className=" max-w-[450px] relative"
      >
        <div className=" mb-6 max-[400px]:mb-5 relative">
          <label htmlFor="name" className="ml-1 text-lg max-[400px]:text-base">
            Your Name
          </label>
          <input
            type="text"
            required
            name="Name_First"
            placeholder="Enter your First Name"
            id="name"
            className="w-full p-3 max-[400px]:text-xs outline-none border-2 border-gray-500 rounded-md bg-transparent text-sm"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className=" mb-6 max-[400px]:mb-5 relative">
          <label htmlFor="email" className="ml-1 text-lg max-[400px]:text-base">
            Your Email
          </label>
          <input
            type="email"
            required
            name="Email"
            id="email"
            placeholder="Enter your Email "
            className="w-full p-3 outline-none border-2 border-gray-500 rounded-md bg-transparent text-sm max-[400px]:text-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flexBetween mb-6 max-[400px]:mb-5">
          <div className=" relative mr-2">
            <label
              htmlFor="make"
              className="ml-1 text-lg max-[400px]:text-base"
            >
              Make
            </label>
            <input
              type="text"
              required
              name="Make"
              id="make"
              placeholder="Enter make "
              className="w-full p-3 outline-none border-2 border-gray-500 rounded-md bg-transparent text-sm max-[400px]:text-xs"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </div>
          <div className="  relative ml-2">
            <label
              htmlFor="model"
              className="ml-1 text-lg max-[400px]:text-base"
            >
              Model
            </label>
            <input
              type="text"
              required
              name="Model"
              id="model"
              placeholder="Enter model"
              className="w-full p-3 outline-none border-2 border-gray-500 rounded-md bg-transparent text-sm max-[400px]:text-xs"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
        </div>
        <div className="flexBetween ">
          <div className=" mb-10 max-[400px]:mb-5 relative mr-2">
            <label
              htmlFor="year"
              className="ml-1 text-lg max-[400px]:text-base"
            >
              Desired Year
            </label>
            <input
              type="number"
              required
              name="Year"
              id="make"
              placeholder="Enter desired year "
              className="w-full p-3 outline-none border-2 border-gray-500 rounded-md bg-transparent text-sm max-[400px]:text-xs"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className=" mb-10 max-[400px]:mb-5 relative ml-2">
            <label htmlFor="zip" className="ml-1 text-lg max-[400px]:text-base">
              Zip Code
            </label>
            <input
              type="text"
              required
              name="Zip"
              id="zip"
              placeholder="Enter zip code"
              className="w-full p-3 outline-none border-2 border-gray-500 rounded-md bg-transparent text-sm max-[400px]:text-xs"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" value="Send" className="">
          <div className="btn_next w-full -mb-10 -ml-1 hover:shadow-sm shadow-md shadow-gray-900 duration-500 ">
            Next
          </div>
        </button>
      </form>
    </div>
  );
};

export default Form;
