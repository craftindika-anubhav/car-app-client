"use client";
import { useEffect } from "react";
import Benefits from "./Benefits";
import Hero from "./Hero";
import Membership from "./Membership";
import Testimonials from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
const Price = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="max-w-[1500px] overflow-x-hidden m-auto ">
      <Hero />
      <Membership />
      <Benefits />
      <Testimonials />
    </div>
  );
};

export default Price;
