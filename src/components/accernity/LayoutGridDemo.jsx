// src/pages/LayoutGridDemo.js
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowsTurnRight } from "react-icons/fa6";

import { LayoutGrid } from "./layout-grid";
const projects = [
  {
    name: "Teckzite",
    description: "Tech fest project",
    link: "https:teckzite.org",
    Role: "Frontend",
    stack: "MERN Stack",
    image: "/tz.png",

  },
  {
    name: "Alumni",
    description: "Alumni network platform",
    link: "https://alumni-repo.vercel.app/",
    Role: "Frontend",
    stack: "MERN Stack",
    image: "al.png",
   
  },
  {
    name: "Portfolio",
    description: "My personal portfolio",
    link: "https://myportfolio-adr.vercel.app/",
    Role: "Frontend",
    stack: "MERN Stack",
    image: "prof.png",
    
  },
  {
    name: "Martex",
    description: "Marketing website (Cloned Website)",
    link: "https://martex-clone.vercel.app/",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "martex.png",
    
  },
  {
    name: "Gigo",
    description: "Cloned Website",
    link: "https://gigo-gamma.vercel.app/",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "gigo.png",
    
  },
  {
    name: "Stocker",
    description: "Cloned the Stocker Websites just Frontend",
    link: "https://stocker-clone.vercel.app/",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "stocker.png",
    
  },
  {
    name: "Dashboard",
    description: "Table creation dashboard UI",
    link: "https://database-dashboard-seven.vercel.app/",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "db.png",
    
  },
  {
    name: "Sabbafarm",
    description: "Smart farming solution",
    link: "https:sabbafarm.com",
    Role: "Frontend, SEO",
    stack: "MERN Stack",
    image: "sb.png",
    
  },
  // {
  //   name: "EventArchitects",
  //   description: "Event planning tool",
  //   link: "#",
  //   Role: "Frontend, Backend",
  //   stack: "MERN Stack",
  //   image: "https://via.placeholder.com/300x180?text=EventArchitects",
  // },
];



const cards = projects.map((project, index) => ({
  id: index,
  content: (
    <div className="bg-[#1b2735] w-full p-3 md:h-[280px] rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row scale-[1.05] hover:scale-[1.1] hover:shadow-2xl transition-transform duration-300">

      {/* Project Image */}
      <Link to={project.link} target="_blank" className=" w-full h-[200px] md:h-auto ">
        <img
          src={project.image}
          alt={project.name}
          className="object-fit w-full h-full transition duration-300 hover:opacity-90 border border-[#55e6a5] rounded-lg p-2"
        />
      </Link>

      {/* Project Info */}
      <div className=" md:px-3 flex flex-col gap-2  w-full justify-between">
        <h3 className="text-2xl font-bold text-white">{project.name}</h3>

       
        <div className="flex flex-col gap-2">
           <p className="text-white text-sm font-medium bg-white/5 backdrop-blur-sm p-2 rounded-md border border-white/10">
          {project.description}
        </p>

          <p className="text-white text-sm bg-white/5 backdrop-blur-sm p-2 rounded-md border border-white/10">
            <span className="text-[#55e6a5] font-semibold">Role:</span> {project.Role}
          </p>
          <p className="text-white text-sm bg-white/5 backdrop-blur-sm p-2 rounded-md border border-white/10">
            <span className="text-[#55e6a5] font-semibold">Stack:</span> {project.stack}
          </p>
        </div>

        <Link
          to={project.link}
          target="_blank"
          className=" text-white text-sm font-semibold flex items-center gap-2 bg-gradient-to-r from-[#55e6a5]  hover:from-[#55e6a5] px-4 py-2 rounded-md transition duration-200"
        >
          Visit Website <FaArrowsTurnRight />
        </Link>
      </div>
    </div>
     
  ),
  className: "col-span-1",
}));




export const LayoutGridDemo = () => {
  return (
    <div className="min-h-screen py-20 w-full bg-[#141c27] px-3 md:px-[90px]">
      <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-100px] mx-5 pl-[30px]">
        PROJECTS
      </h1>
      <LayoutGrid cards={cards} />
    </div>
  );
};
