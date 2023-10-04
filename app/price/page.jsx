"use client";
import Benefits from "@/components/price/Benefits";
import Hero from "@/components/price/Hero";
import Membership from "@/components/price/Membership";
import Testimonials from "@/components/price/Testimonials";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const page = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="max-w-[1500px] overflow-x-hidden m-auto ">
      {/* <Hero /> */}
      {/* <Membership /> */}
      {/* <Benefits /> */}
      <Testimonials />
    </div>
  );
};

export default page;
