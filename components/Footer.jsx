"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuFacebook, LuTwitter, LuInstagram } from "react-icons/lu";
import ContactUs from "./ContactUs";
const d = new Date();
let year = d.getFullYear();
const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const showContactHandler = () => {
    setShowContact(!showContact);
  };
  return (
    <div className="bg-[#323232]  text-white pt-12 pb-6">
      <div className="w-[90%] m-auto">
        <div className="flexBetween max-sm:flex-col max-sm:items-start">
          <div className=" max-sm:mb-4">
            <h2
              data-aos="fade-right"
              className=" text-3xl  tracking-wide max-[360px]:text-2xl"
            >
              Auto Trading Genius
            </h2>
            <p
              data-aos="fade-right"
              className="   mt-[2px] tracking-wide max-[360px]:text-sm text-[#DF2935]"
            >
              The Art Of Buying Cars Cheapy
            </p>
          </div>
          <div className="flexBetween">
            <div data-aos="fade-down" className="mx-10 max-sm:ml-0">
              <h2 className="mb-2 font-medium">Navigation</h2>
              <div className="mb-2 text-[#9FA1A3] hover:text-white duration-200 text-sm">
                <Link href="#">Home</Link>
              </div>
              <div className="mb-2  text-[#9FA1A3] hover:text-white duration-200 text-sm">
                <Link href="#">About Us</Link>
              </div>
            </div>
            <div data-aos="fade-up" className="">
              <h2 className="mb-2 font-medium">Support Us</h2>
              <div
                onClick={showContactHandler}
                className="mb-2 cursor-pointer text-[#9FA1A3] hover:text-white duration-200 text-sm"
              >
                <p>Contact Us</p>
              </div>
              <div className="mb-2 text-[#9FA1A3] hover:text-white duration-200 text-sm">
                <Link href="#">Support Center</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flexBetween max-[550px]:flex-col max-[550px]:items-start  border-t-[1px] text-[#9FA1A3] text-sm border-[#9FA1A3] mt-12 pt-4">
          <div className=" max-[550px]:mb-4">
            <div className="flex items-center max-[360px]:flex-col max-[360px]:items-start mb-1">
              <p>Terms & Conditions</p>
              <div className="flexCenter max-[360px]:mt-2">
                <span className="w-[6px] h-[6px] rounded-full bg-[#9FA1A3]  mx-2"></span>
                <p>Privacy Policy</p>
              </div>
              <div className="flexCenter max-[360px]:my-2">
                <span className="w-[6px] h-[6px] rounded-full bg-[#9FA1A3]  mx-2"></span>
                <p>Sitemap</p>
              </div>
            </div>
            <p>© Design {year} All Right Reserved.</p>
          </div>
          <div className="flex">
            <Link href="#">
              {" "}
              <LuFacebook className="text-2xl mx-2 hover:text-white hover:scale-110 duration-200" />
            </Link>
            <Link href="#">
              {" "}
              <LuInstagram className="text-2xl mx-2 hover:text-white hover:scale-110 duration-200" />
            </Link>
            <Link href="#">
              {" "}
              <LuTwitter className="text-2xl mx-2 hover:text-white hover:scale-110 duration-200" />
            </Link>
          </div>
        </div>
      </div>
      {showContact && <ContactUs show={showContactHandler} />}
    </div>
  );
};

export default Footer;
