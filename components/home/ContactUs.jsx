'use client';
import { useState } from 'react';
import ContactUsForm from '../ContactUs';
const ContactUs = () => {
  const [showContact, setShowContact] = useState(false);
  const showContactHandler = () => {
    setShowContact(!showContact);
  };
  return (
    <div className="bg-[#242424] spikesn text-white relative overflow-hidden">
      <div
        data-aos="zoom-out"
        className="text-center border-2 my-28 border-white rounded-xl py-14 px-8 w-[70%] max-xl:w-[90%] m-auto flexCenter flex-col relative"
      >
        <h2 className=" text-5xl max-md:text-3xl max-[350px]:text-2xl mb-5 font-medium">
          Get In Touch With Us
        </h2>
        <p className=" mb-16 max-sm:text-sm">
          We look forward to hearing from you and assisting you with all of your
          car buying needs!
        </p>
        <div
          onClick={showContactHandler}
          className="btn_home font-medium shadow-md shadow-black "
        >
          Contact Us
        </div>
      </div>
      {showContact && <ContactUsForm show={showContactHandler} />}
    </div>
  );
};

export default ContactUs;
