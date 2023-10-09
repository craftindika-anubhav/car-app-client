import React, { useRef, useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { MdCancelPresentation } from "react-icons/md";
import { BsSend } from "react-icons/bs";
const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="form flex flex-col  justify-center items-center fixed bg-black opacity-90  text-white  top-0 left-0 w-full h-[100vh] z-[1000]">
      <h2 data-aos="fade-down" className="mb-8 text-3xl">
        Contact Us{" "}
      </h2>
      <form
        data-aos="fade-down"
        name="form"
        method="POST"
        accept-charset="UTF-8"
        className="w-[90%] max-w-[600px] "
        encType="multipart/form-data"
      >
        <div className=" mb-14 relative">
          <input
            type="text"
            required
            name="Name_First"
            placeholder=""
            id="name"
            className="w-full p-4 outline-none border-2 border-white bg-transparent text-sm"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label
            htmlFor="name"
            className=" h-full flex items-center  absolute left-0 top-0 p-3 text-white cursor-text"
          >
            <FiUser className="m-2 text-lg" />
            Your Name
          </label>
        </div>

        <div className=" mb-14 relative">
          <input
            type="email"
            required
            name="Email"
            id="email"
            placeholder=" "
            className="w-full p-4 outline-none border-2 border-white bg-transparent text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="email"
            className=" h-full absolute flex items-center  left-0 top-0 p-3 text-white cursor-text"
          >
            <AiOutlineMail className="m-2 text-lg" />
            Your Email
          </label>
        </div>
        <button
          type="submit"
          value="Send"
          className="w-full bg-transparent flex justify-center items-center  cursor-pointer p-3 hover:bg-green-700 duration-300 outline-none border-2 border-white"
        >
          <p>Send</p>
          <BsSend className="mx-4 text-xl" />
        </button>
      </form>
      <div
        data-aos="fade-down"
        className=" absolute text-2xl  top-24 w-[600px] max-[680px]:w-[90%] flex justify-end    "
      >
        <MdCancelPresentation
          onClick={() => props.show()}
          className="hover:text-red-600 duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ContactUs;
