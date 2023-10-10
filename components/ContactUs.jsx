import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';
import { MdCancelPresentation } from 'react-icons/md';
import { BsSend } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const ContactUs = (props) => {
  const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = axios.post(`${SERVER_DOMAIN}/api/form/contact`, {
        name,
        email,
        msg,
      });
      toast.info('Please Wait!!', {
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
      toast.success('Form Submitted!!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setTimeout(() => {
        props.show(false);
      }, 3000);
    } catch (err) {
      toast.error('Something Went Wrong, Please try again', {
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
    <div className="form flex flex-col  justify-center items-center fixed bg-black opacity-90  text-white  top-0 left-0 w-full h-[100vh] z-[1000]">
      <ToastContainer />
      <div
        data-aos="fade-down"
        className="  text-2xl   w-[600px] max-[680px]:w-[90%] flex justify-end    "
      >
        <MdCancelPresentation
          onClick={() => props.show()}
          className="hover:text-red-600 duration-300 cursor-pointer"
        />
      </div>
      <h2 data-aos="fade-down" className="mb-8 text-3xl">
        Contact Us{' '}
      </h2>
      <form
        onSubmit={handleFormSubmit}
        data-aos="fade-down"
        name="form"
        className="w-[90%] max-w-[600px] "
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
        <div className=" mb-14 relative">
          <input
            type="text"
            required
            name="msg"
            id="msg"
            placeholder=" "
            className="w-full p-4 outline-none border-2 border-white bg-transparent text-sm"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <label
            htmlFor="msg"
            className=" h-full absolute flex items-center  left-0 top-0 p-3 text-white cursor-text"
          >
            <AiOutlineMessage className="m-2 text-lg" />
            Your Message
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
    </div>
  );
};

export default ContactUs;
