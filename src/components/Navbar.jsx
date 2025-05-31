import React, { useState, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdClose } from "react-icons/md";
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false); // Flag to track click navigation
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
      setIsNavigating(true); 
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      navigate(`#${section}`, { replace: true }); // Update URL hash without scrolling
      setIsMenuOpen(false); 

      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    }
  };

  // On load, check if there's a hash and scroll there
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace('#', '');
      if (sections.includes(section)) {
        const target = document.getElementById(section);
        if (target) {
          setIsNavigating(true); // Disable observer during initial load
          target.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(section);
          setTimeout(() => {
            setIsNavigating(false);
          }, 1000);
        }
      } else {
        // Default to 'home' if no valid hash
        navigate('#home', { replace: true });
        setActiveSection('home');
      }
    } else {
      // Ensure 'home' is active if no hash
      navigate('#home', { replace: true });
      setActiveSection('home');
    }
  }, [location, navigate]);

  // Update active section on scroll using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isNavigating) return; // Skip observer updates during click navigation

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId && sections.includes(sectionId) && activeSection !== sectionId) {
            setActiveSection(sectionId);
            // Update URL hash without triggering scroll
            window.history.replaceState(null, '', `#${sectionId}`);
          }
        }
      });
    }, observerOptions);

    const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean);

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, [activeSection, sections, isNavigating]);

  return (
    <div className='relative'>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#141c27] h-[80px] md:mx-[90px] flex items-center justify-between shadow-md overflow-hidden">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo('home');
          }}
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