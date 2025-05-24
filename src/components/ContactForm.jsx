import React from "react";
import { MdFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="bg-[#141c27] min-h-screen md:px-[90px] flex flex-col gap-10">
      <h1 className="text-5xl relative md:text-7xl font-bold uppercase text-center text-transparent [text-stroke:_2px_#55e6a5] [-webkit-text-stroke:_2px_#55e6a5] tracking-wider before:h-[2px] before:w-[70px] md:before:w-[250px] before:bg-[#55e6a5] before:absolute before:top-7 before:left-0 after:h-[2px] after-w-[70px] md:after:w-[250px] after:bg-[#55e6a5] after:absolute after:top-7 after:right-0 after:z-20 mb-4">
        GET IN TOUCH
      </h1>
      <div className="flex  lg:flex-row flex-col justify-between">
        <div className="bg-gray-900 p-7 rounded-lg h-[400px] md:w-[500px]">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="bg-gray-900 text-white placeholder-gray-400 border-b border-gray-600 focus:outline-none focus:border-gray-400 py-2"
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-gray-900 text-white placeholder-gray-400 border-b border-gray-600 focus:outline-none focus:border-gray-400 py-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                placeholder="PHONE NUMBER"
                className="bg-gray-900 text-white placeholder-gray-400 border-b border-gray-600 focus:outline-none focus:border-gray-400 py-2"
              />
              <input
                type="url"
                placeholder="YOUR WEBSITE"
                className="bg-gray-900 text-white placeholder-gray-400 border-b border-gray-600 focus:outline-none focus:border-gray-400 py-2"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="MESSAGE"
                className="w-full bg-gray-900 text-white placeholder-gray-400 border-b border-gray-600 focus:outline-none focus:border-gray-400 py-2 resize-none"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#55e6a5] text-gray-800 font-bold uppercase py-3 rounded hover:bg-cyan-500 transition"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
        <div className="bg-gray-900 p-7 rounded-lg h-[250px] md:w-[500px]">
          <div className="cv bg-[#55e6a5] text-black p-[20px_30px] mr-[20px] w-full hover:bg-[#141c27] hover:text-white flex gap-2 items-center justify-center transition-all ease-linear duration-300">
            <span className="whitespace-nowrap">Download CV</span>{" "}
            <span className="text-lg">
              <MdFileDownload />
            </span>
          </div>
          <div className="social-media">
            <h2 className="text-white text-3xl mt-2">Contact</h2>
            <div className="icons text-white text-5xl mt-5 flex justify-around">
              <div className="flex flex-col">
                <FaGithub />
                <span className="text-xl">Github</span>
              </div>
              <div className="flex flex-col">
                {" "}
                <FaLinkedin />
                <span className="text-xl">LinkedIn</span>
              </div>
              <div className="flex flex-col">
                <FaWhatsapp />
                <span className="text-xl">Whats'app</span>
              </div>
              <div className="flex flex-col">
                <FaXTwitter />
                <span className="text-xl">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
