import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className='relative'>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#141c27] h-[80px] md:mx-[90px] flex items-center justify-between shadow-md overflow-hidden">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col items-center justify-center group scale-[1.3] w-[190px] hover:scale-105 transition-transform duration-300 cursor-pointer font-bold text-5xl text-black"
        >
          <img src="logo.png" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center justify-center text-white font-poppins">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className="p-[32px_20px] electro-link hover:text-[#55e6a4] transition-colors duration-200"
              >
                {section === 'about' ? 'About Me' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="flex items-center justify-center bg-[#55e6a4] size-[80px] cursor-pointer"
          onClick={toggleMenu}
        >
          <span className="text-5xl text-black">
           <IoMenu />
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[80px] left-0 w-full z-[50] bg-[#141c27] transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center text-white font-poppins pb-4">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section)}
              className="p-4 text-lg w-full text-center hover:bg-[#1e2a3a] hover:text-[#55e6a4] transition-colors duration-200"
            >
              {section === 'about' ? 'About Me' : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
