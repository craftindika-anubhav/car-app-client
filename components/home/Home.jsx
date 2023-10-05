import React from "react";
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
const Home = () => {
  return (
    <div className="max-w-[1500px] m-auto overflow-hidden">
      <Hero />
      <div className="w-full bg-[#191919] ">
        <h2 className="w-[640px] py-14  text-white m-auto text-5xl text-center ">
          Get The Car You Want This Week
        </h2>
        <Search />
      </div>
      {/* <Trending /> */}
      {/* <Cheaper /> */}
      <CarTypes />
      <Brands />
      <Price />
      <Popular />
      <Cities />
      <TopModels />
      <TopCity />
      <Search spikes={"spikesb"} />
      <ContactUs />
    </div>
  );
};

export default Home;
