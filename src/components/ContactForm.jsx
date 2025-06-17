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
        <div className="bg-[#1b2735]/80 backdrop-blur-lg p-5 rounded-lg md:h-[400px] md:w-[500px] border border-[#55e6a5]/30 shadow-sm">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="bg-[#1b2735]/80 backdrop-blur-lg text-white   placeholder-gray-400 border border-[#55e6a5]/30 shadow-sm px-2 rounded-md focus:outline-none focus:border-gray-400 py-2"
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-[#1b2735]/80 backdrop-blur-lg text-white placeholder-gray-400 border border-[#55e6a5]/30 shadow-sm px-2 rounded-md focus:outline-none focus:border-gray-400 py-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                placeholder="PHONE NUMBER"
                className="bg-[#1b2735]/80 backdrop-blur-lg text-white placeholder-gray-400 border border-[#55e6a5]/30 shadow-sm px-2 rounded-md focus:outline-none focus:border-gray-400 py-2"
              />
              <input
                type="url"
                placeholder="YOUR WEBSITE"
                className="bg-[#1b2735]/80 backdrop-blur-lg text-white placeholder-gray-400 border border-[#55e6a5]/30 shadow-sm px-2 rounded-md focus:outline-none focus:border-gray-400 py-2"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="MESSAGE"
                className="w-full bg-[#1b2735]/80 backdrop-blur-lg text-white placeholder-gray-400 border border-[#55e6a5]/30 shadow-sm px-2 rounded-md focus:outline-none focus:border-gray-400 py-2 resize-none"
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
    <div className="bg-[#1b2735]/80 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-xl border border-[#55e6a5]/20 flex flex-col gap-6 w-full md:w-[500px] justify-center">
  {/* Download CV */}
  <div
    onClick={downloadFile}
    className="cursor-pointer bg-[#55e6a5] text-black text-center font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#141c27] hover:text-white border border-[#55e6a5]"
  >
    <div className="flex items-center justify-center gap-2 text-lg">
      <span>Download CV</span>
      <MdFileDownload className="text-xl" />
    </div>
  </div>

  {/* Contact Section */}
  <div className="social-media text-white">
    <h2 className="text-2xl font-semibold border-b border-[#55e6a5]/40 pb-2 mb-3">
      Contact
    </h2>

    <div className="flex justify-center items-center flex-wrap gap-6  pb-2 border-b border-[#55e6a5]/40">
      {/* Github */}
      <a
        href="https://github.com/Dharaneeswar-Reddy-Avula"
        className="flex flex-col items-center gap-1 hover:text-[#55e6a5] transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-3xl md:text-4xl" />
        <span className="text-sm md:text-base">Github</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/dharaneeswar-reddy-avula-6600912aa/"
        className="flex flex-col items-center gap-1 hover:text-[#55e6a5] transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-3xl md:text-4xl" />
        <span className="text-sm md:text-base">LinkedIn</span>
      </a>

      {/* Email */}
      <a
        href="mailto:avuladharaniswarreddy@gmail.com"
        className="flex flex-col items-center gap-1 hover:text-[#55e6a5] transition duration-300"
      >
        <FaEnvelope className="text-3xl md:text-4xl" />
        <span className="text-sm md:text-base">Email</span>
      </a>

      {/* Twitter/X */}
      <a
        href="https://x.com/Dharaneeswar_"
        className="flex flex-col items-center gap-1 hover:text-[#55e6a5] transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter className="text-3xl md:text-4xl" />
        <span className="text-sm md:text-base">Twitter</span>
      </a>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ContactForm;
