// src/pages/LayoutGridDemo.js
import React from "react";
import { LayoutGrid } from "./layout-grid";
const projects = [
  {
    name: "Teckzite",
    description: "Tech fest project",
    link: "#",
    Role: "Frontend",
    stack: "MERN Stack",
    image: "/tz.png",
  },
  {
    name: "Alumni",
    description: "Alumni network platform",
    link: "#",
    Role: "Frontend",
    stack: "MERN Stack",
    image: "al.png",
  },
  {
    name: "Portfolio",
    description: "My personal portfolio",
    link: "#",
    Role: "Frontend",
    stack: "MERN Stack",
    image: "prof.png",
  },
  {
    name: "Martex",
    description: "Marketing website (Cloned Website)",
    link: "#",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "martex.png",
  },
  {
    name: "Gigo",
    description: "Cloned Website",
    link: "#",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "gigo.png",
  },
  {
    name: "Stocker",
    description: "Cloned the Stocker Websites just Frontend",
    link: "#",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "stocker.png",
  },
  {
    name: "Dashboard",
    description: "Table creation dashboard UI",
    link: "#",
    Role: "Frontend",
    stack: "HTML, CSS, JS, Tailwindcss",
    image: "db.png",
  },
  // {
  //   name: "Sabbafarm",
  //   description: "Smart farming solution",
  //   link: "#",
  //   Role: "Frontend, SEO",
  //   stack: "MERN Stack",
  //   image: "https://via.placeholder.com/300x180?text=Sabbafarm",
  // },
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
    <div className="bg-black/10  w-full  rounded-md backdrop-blur-lg flex flex-col justify-center">
      <p className="text-white font-bold text-2xl backdrop-blur-lg bg-black/30 rounded-md p-2 mb-1">{project.name}</p>
      <p className="text-md text-white font-bold backdrop-blur-lg bg-black/30 rounded-md p-2 mb-1">{project.description}</p>
      <p className="text-md text-white font-bold backdrop-blur-lg bg-black/30 rounded-md p-2 mb-1">Role: {project.Role}</p>
      <p className="text-md text-white font-bold backdrop-blur-lg bg-black/30 rounded-md p-2 mb-1">Stack: {project.stack}</p>
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
