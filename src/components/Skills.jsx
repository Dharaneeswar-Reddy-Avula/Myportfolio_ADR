import React, { useState } from "react";
import {
  SiFirebase,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithub,
  SiPostman,
  SiVercel,
  SiPython,
  SiC,
  SiN8N,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaBrain,
  FaMicrochip,
  FaEye,
  FaLaptopCode,
  FaLayerGroup,
  FaCloud,
} from "react-icons/fa6";
import { TbSql, TbBinaryTree, TbApi } from "react-icons/tb";

const categories = [
  { id: "all", label: "All Skills", icon: FaLayerGroup },
  { id: "fullstack", label: "Full-Stack & Mobile", icon: FaLaptopCode },
  { id: "cloud-databases", label: "Cloud & Databases", icon: FaCloud },
  { id: "languages-core", label: "Languages & Core CS", icon: FaMicrochip },
  { id: "ai-automation", label: "AI & Automation", icon: FaBrain },
];

const skillGroups = [
  {
    id: "fullstack",
    title: "Full-Stack & Mobile Development",
    subtitle: "Frontend, mobile apps, and scalable API services",
    icon: FaLaptopCode,
    skills: [
      { name: "React.js", role: "Frontend UI", logo: "/React.png", icon: SiReact },
      { name: "React Native", role: "Mobile Development", logo: "/React.png", icon: SiReact },
      { name: "Node.js", role: "Runtime Environment", logo: "/NodeJs.svg", icon: SiNodedotjs },
      { name: "Express.js", role: "Backend Framework", logo: "/ExpressJs.png", icon: SiExpress },
      { name: "FastAPI", role: "High-Performance APIs", icon: SiFastapi },
      { name: "Tailwind CSS", role: "Modern Styling", logo: "/tailwind.svg", icon: SiTailwindcss },
      { name: "Redux", role: "State Management", logo: "/Redux.svg", icon: SiRedux },
      { name: "REST APIs", role: "Integration & Services", icon: TbApi },
      { name: "HTML5 & CSS3", role: "Semantic Web Standards", logo: "/html.png", icon: SiHtml5 },
    ],
  },
  {
    id: "cloud-databases",
    title: "Cloud, Databases & DevOps",
    subtitle: "Data storage, containerization, and deployment infrastructure",
    icon: FaCloud,
    skills: [
      { name: "Firebase", role: "Real-time DB & Cloud Store", icon: SiFirebase },
      { name: "PostgreSQL", role: "Relational Database", icon: SiPostgresql },
      { name: "MongoDB", role: "Document NoSQL", icon: SiMongodb },
      { name: "SQL", role: "Querying & Relational Models", icon: TbSql },
      { name: "Docker", role: "Containerization", icon: SiDocker },
      { name: "Git & GitHub", role: "Version Control & CI/CD", icon: SiGithub },
      { name: "Postman", role: "API Testing & Mocking", icon: SiPostman },
      { name: "Vercel", role: "Cloud Deployment", icon: SiVercel },
    ],
  },
  {
    id: "languages-core",
    title: "Programming Languages & Core CS",
    subtitle: "Solid programming fundamentals and computer science foundations",
    icon: FaMicrochip,
    skills: [
      { name: "Python", role: "Backend & Scripting", icon: SiPython },
      { name: "JavaScript", role: "Modern ES6+ Full-Stack", logo: "/JS.png", icon: SiJavascript },
      { name: "Java", role: "Object-Oriented Programming", icon: FaJava },
      { name: "C", role: "Systems Programming", icon: SiC },
      { name: "DSA", role: "Data Structures & Algorithms", icon: TbBinaryTree },
      { name: "OOP Principles", role: "Modular Architecture", icon: FaLaptopCode },
      { name: "DBMS Concepts", role: "Schema Design & ACID", icon: FaDatabase },
    ],
  },
  {
    id: "ai-automation",
    title: "Applied AI & Automation",
    subtitle: "Real-world AI integration, document workflows & automation pipelines",
    icon: FaBrain,
    skills: [
      { name: "RAG Architecture", role: "Document Indexing & Search", icon: FaBrain },
      { name: "Python AI Services", role: "FastAPI Backend Integrations", icon: SiFastapi },
      { name: "N8N Automation", role: "Workflow Automation Pipelines", icon: SiN8N },
      { name: "Computer Vision / YOLO", role: "Object Detection", icon: FaEye },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.id === activeCategory);

  return (
    <section className="w-full bg-[#141c27] font-poppins pt-16 pb-20 px-2 sm:px-4 md:px-[90px]">
      {/* Section Header */}
      <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-80px] md:before:left-[-100px] mx-1 sm:mx-3 md:mx-5 pl-4 sm:pl-[30px] mb-2 uppercase tracking-wider font-semibold">
        Technical Skills
      </h1>
      <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-1 sm:mx-3 md:mx-5 pl-4 sm:pl-[30px] mb-7">
        Hands-on technical stack organized by domain — built through production applications and core engineering.
      </p>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 mx-1 sm:mx-3 md:mx-5 p-1 bg-[#101824] border border-slate-700/60 rounded-xl w-fit">
        {categories.map(({ id, label, icon: Icon }) => {
          const isActive = activeCategory === id;
          return (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#55e6a5] text-[#141c27] shadow-sm font-bold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className={isActive ? "text-[#141c27]" : "text-[#55e6a5]"} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Grouped Skills Showcase */}
      <div className="space-y-8 mx-1 sm:mx-3 md:mx-5 max-w-6xl">
        {visibleGroups.map((group) => (
          <div
            key={group.id}
            className="bg-[#182332]/60 border border-slate-700/60 rounded-2xl p-5 sm:p-6 shadow-lg backdrop-blur-sm"
          >
            {/* Group Header */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-700/70">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center text-[#55e6a5] flex-shrink-0">
                  <group.icon className="text-base" />
                </div>
                <div>
                  <h2 className="text-white text-base sm:text-lg font-bold tracking-tight">
                    {group.title}
                  </h2>
                  <p className="text-slate-400 text-xs hidden sm:block">
                    {group.subtitle}
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#55e6a5] bg-[#55e6a5]/10 px-2.5 py-1 rounded border border-[#55e6a5]/30 flex-shrink-0">
                {group.skills.length} Technologies
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3.5">
              {group.skills.map((skill, sIdx) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 bg-[#111a26]/90 hover:bg-[#142234] border border-slate-700/70 hover:border-[#55e6a5]/50 rounded-xl p-3 transition-all duration-200 group hover:-translate-y-0.5 shadow-sm"
                  >
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="size-9 rounded-lg object-contain border border-slate-700/80 p-1 bg-black/40 group-hover:scale-105 group-hover:border-[#55e6a5]/40 transition duration-200 flex-shrink-0"
                      />
                    ) : IconComponent ? (
                      <div className="size-9 rounded-lg flex items-center justify-center border border-slate-700/80 p-1 bg-black/40 group-hover:scale-105 group-hover:border-[#55e6a5]/40 text-[#55e6a5] text-lg transition duration-200 flex-shrink-0">
                        <IconComponent />
                      </div>
                    ) : null}

                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="text-white text-xs sm:text-sm font-semibold truncate group-hover:text-[#55e6a5] transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-slate-400 truncate">
                        {skill.role}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
