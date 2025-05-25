import React from "react";
import { MdFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  const downloadFile = () => {
    const fileUrl = `/Dharaneeswar Reddy Resume.pdf`; // Export as PPTX
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.target = "_blank"; // Opens in a new tab (optional)
    anchor.rel = "noopener noreferrer";
    anchor.click();
  };
  return (
    <div className="bg-[#141c27] min-h-screen md:px-[90px] flex flex-col gap-10">
      <h1 className="text-5xl relative md:text-7xl font-bold uppercase text-center text-transparent [text-stroke:_2px_#55e6a5] [-webkit-text-stroke:_2px_#55e6a5] tracking-wider before:h-[2px] before:w-[70px] md:before:w-[250px] before:bg-[#55e6a5] before:absolute before:top-7 before:left-0 after:h-[2px] after-w-[70px] md:after:w-[250px] after:bg-[#55e6a5] after:absolute after:top-7 after:right-0 after:z-20 mb-4">
        GET IN TOUCH
      </h1>
      <div className="flex  lg:flex-row flex-col justify-between">
        <div className="bg-gray-900 p-7 rounded-lg md:h-[400px] md:w-[500px]">
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
          <div
            onClick={downloadFile}
            className="cv bg-[#55e6a5] text-black p-[20px_30px] mr-[20px] w-full hover:bg-[#141c27] hover:text-white flex gap-2 items-center justify-center transition-all ease-linear duration-300"
          >
            <span className="whitespace-nowrap">Download CV</span>{" "}
            <span className="text-lg">
              <MdFileDownload />
            </span>
          </div>
          <div className="social-media">
            <h2 className="text-white text-2xl mt-4">Contact</h2>
            <div className="icons text-white text-3xl md:text-5xl mt-5 flex justify-around flex-wrap">
              <a
                href="https://github.com/Dharaneeswar-Reddy-Avula"
                className="flex flex-col"
              >
                <FaGithub />
                <span className="text-[12px] md:text-xl">Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dharaneeswar-reddy-avula-6600912aa/"
                className="flex flex-col"
              >
                {" "}
                <FaLinkedin />
                <span className="text-[12px] md:text-xl">LinkedIn</span>
              </a>
              <a
                href="mailto:avuladharaniswarreddy@gmail.com"
                className="flex flex-col items-center"
              >
                <FaEnvelope />
                <span className="text-[12px] md:text-xl">Email</span>
              </a>

              <a href="https://x.com/Dharaneeswar_" className="flex flex-col">
                <FaXTwitter />
                <span className="text-[12px] md:text-xl">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
