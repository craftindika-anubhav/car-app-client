'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
const Form = (props) => {
  const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [zip, setZip] = useState('');
  const [year, setYear] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    if (name && email && make && model && zip && year) {
      try {
        let response = axios.post(`${SERVER_DOMAIN}/api/form/submit`, {
          first_name: name,
          email: email,
          make: make,
          model: model,
          desired_year: year,
          zip_code: zip,
        });
        toast.info('Submitting!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        response = await response;
        toast.success('Submitted!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        localStorage.setItem('userid', response.data.id);
        setTimeout(() => {
          router.push('/price');
        }, 1000);
      } catch (err) {
        toast.error('Something went wrong!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } else {
      toast.warn('Please fill all the fields!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <div className=" my-12 ">
      <ToastContainer />
      <form
        // data-aos="fade-down"
        onSubmit={submitForm}
        name="form"
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
