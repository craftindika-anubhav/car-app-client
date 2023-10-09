"use client";
import { useEffect } from "react";
import Hero from "./Hero";
import ContactUs from "./ContactUs";
import Search from "./Search";
import TopCity from "./TopCity";
import TopModels from "./TopModels";
import Cities from "./Cities";
import Popular from "./Popular";
import Price from "./Price";
import Trending from "./Trending";
import Brands from "./Brands";
import CarTypes from "./CarsTypes";
import Cheaper from "./Cheaper";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="max-w-[1500px] m-auto overflow-hidden">
      <Hero />
      <div className="w-full bg-[#191919] shadow-md shadow-black">
        <h2
          data-aos="fade-right"
          className="w-[640px]  max-md:w-[85%] py-14  text-white m-auto text-5xl max-md:text-4xl max-[350px]:text-3xl text-center "
        >
          Get The Car You Want This Week
        </h2>
        <div className=" w-full spikesb">
          <Search />
        </div>
      </div>
      <CarTypes />
      <Brands />
      <Search />
      <Price />
      {/* <Popular /> */}
      <Cities />
      <TopCity />
      <TopModels />

      <Search />
      <ContactUs />
    </div>
  );
};

export default Home;
