import React from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
   const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
   <div className='fixed top-0 left-0 right-0 z-50 bg-[#141c27] h-[80px] md:mx-[90px] flex items-center justify-between shadow-md overflow-hidden'>
  {/* Logo */}
  <a href='#' className="flex flex-col items-center justify-center group scale-[1.3] w-[190px]   hover:scale-105 transition-transform duration-300 cursor-pointer font-bold text-5xl text-black" >
          <img src="logo.png" alt="" className='' />
  </a>
{/* <div className="menuitems">
    <ul className="hidden md:flex items-center justify-center  text-white font-poppins">
        <a href="#" className='p-[32px_20px] electro-link'>Home</a>
        <a href="#about" className='p-[32px_20px] electro-link'>About Me</a>
        <a href="#skills" className='p-[32px_20px] electro-link'>Skills</a>
        <a href="#projects" className='p-[32px_20px] electro-link'>Projects</a>
        <a href="#contact" className='p-[32px_20px] electro-link'>Contact</a>
    </ul>
</div> */}
 <div className="menuitems">
        <ul className="hidden md:flex items-center justify-center text-white font-poppins">
          <button onClick={() => handleScroll("home")} className='p-[32px_20px] electro-link'>Home</button>
          <button onClick={() => handleScroll("about")} className='p-[32px_20px] electro-link'>About Me</button>
          <button onClick={() => handleScroll("skills")} className='p-[32px_20px] electro-link'>Skills</button>
          <button onClick={() => handleScroll("projects")} className='p-[32px_20px] electro-link'>Projects</button>
          <button onClick={() => handleScroll("contact")} className='p-[32px_20px] electro-link'>Contact</button>
        </ul>
      </div>
  {/* Menu */}
  <div className="flex items-center justify-center bg-[#55e6a4] size-[80px] cursor-pointer">
  <span className='text-5xl'><IoMenu /></span>

  </div>
</div>

  )
}

export default Navbar