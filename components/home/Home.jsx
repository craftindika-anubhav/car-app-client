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
const Home = () => {
  return (
    <div className="max-w-[1500px] m-auto overflow-hidden">
      {/* <Hero /> */}
      {/* <Trending /> */}
      <CarTypes />
      <Brands />
      <Price />
      <Popular />
      <Cities />
      <TopModels />
      <TopCity />
      <Search />
      <ContactUs />
    </div>
  );
};

export default Home;
