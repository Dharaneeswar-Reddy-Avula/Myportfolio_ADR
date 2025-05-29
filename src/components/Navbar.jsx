import React, { useState, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdClose } from "react-icons/md";
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to section
  const handleScrollTo = (section) => {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      navigate(`#${section}`); // update the URL hash
      setIsMenuOpen(false); // close mobile menu after click
    }
  };

  // On load, check if there's a hash and scroll there
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace('#', '');
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(section);
      }
    }
  }, [location]);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const target = document.getElementById(section);
        if (
          target &&
          target.offsetTop <= scrollPosition &&
          target.offsetTop + target.offsetHeight > scrollPosition
        ) {
          setActiveSection((prev) => {
            if (prev !== section) {
              navigate(`#${section}`); // update URL when section changes
            }
            return section;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigate, sections]);

  return (
    <div className='relative'>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#141c27] h-[80px] md:mx-[90px] flex items-center justify-between shadow-md overflow-hidden">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col items-center justify-center group scale-[1.3] w-[190px] hover:scale-105 transition-transform duration-300 cursor-pointer font-bold text-5xl text-black ml-[20px]"
        >
          <img src="logo.png" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center justify-center text-white font-poppins">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScrollTo(section)}
                className={`p-[32px_20px] electro-link hover:text-[#55e6a4] transition-colors duration-200 ${
                  activeSection === section ? 'text-[#55e6a4]' : 'text-white'
                }`}
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
             {isMenuOpen ? <MdClose /> : <IoMenu />}
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
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleScrollTo(section)}
              className={`p-4 text-lg w-full text-center hover:bg-[#1e2a3a] hover:text-[#55e6a4] transition-colors duration-200 ${
                activeSection === section ? 'text-[#55e6a4]' : 'text-white'
              }`}
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
