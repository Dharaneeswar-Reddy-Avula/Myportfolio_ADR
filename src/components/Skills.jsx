import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  SiFlutter,
  SiFirebase,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiFigma,
  SiOpencv,
  SiPython,
  SiC,
  SiN8N,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiRedux,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaNetworkWired,
  FaBrain,
  FaMicrochip,
  FaEye,
  FaLaptopCode,
} from "react-icons/fa6";
import { TbSql, TbBinaryTree, TbHierarchy, TbApi } from "react-icons/tb";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend & Mobile" },
  { id: "backend", label: "Backend & APIs" },
  { id: "core-cs", label: "Core CS" },
  { id: "databases", label: "Databases" },
  { id: "cloud-tools", label: "Cloud & Tools" },
  { id: "ai", label: "AI & Automation" },
];

const allSkills = [
  // Programming Languages
  { name: "Java", category: "languages", icon: FaJava },
  { name: "Python", category: "languages", icon: SiPython },
  { name: "JavaScript", category: "languages", logo: "/JS.png", icon: SiJavascript },
  { name: "C", category: "languages", icon: SiC },

  // Frontend & Mobile
  { name: "React.js", category: "frontend", logo: "/React.png", icon: SiReact },
  { name: "Flutter", category: "frontend", icon: SiFlutter },
  { name: "Tailwind CSS", category: "frontend", logo: "/tailwind.svg", icon: SiTailwindcss },
  { name: "HTML5", category: "frontend", logo: "/html.png", icon: SiHtml5 },
  { name: "CSS3", category: "frontend", logo: "/css.webp", icon: SiCss3 },
  { name: "Redux State Management", category: "frontend", logo: "/Redux.svg", icon: SiRedux },
  { name: "Bootstrap", category: "frontend", logo: "/Bootstrap.svg", icon: SiBootstrap },

  // Backend & APIs
  { name: "Node.js", category: "backend", logo: "/NodeJs.svg", icon: SiNodedotjs },
  { name: "Express.js", category: "backend", logo: "/ExpressJs.png", icon: SiExpress },
  { name: "FastAPI", category: "backend", icon: SiFastapi },
  { name: "REST APIs", category: "backend", icon: TbApi },

  // Core Computer Science
  { name: "Data Structures & Algorithms (DSA)", category: "core-cs", icon: TbBinaryTree },
  { name: "Object-Oriented Programming (OOP)", category: "core-cs", icon: FaLaptopCode },
  { name: "Database Management Systems (DBMS)", category: "core-cs", icon: FaDatabase },
  { name: "Operating Systems", category: "core-cs", icon: FaMicrochip },
  { name: "Computer Networks", category: "core-cs", icon: FaNetworkWired },
  { name: "System Design Fundamentals", category: "core-cs", icon: TbHierarchy },

  // Databases
  { name: "MongoDB", category: "databases", icon: SiMongodb },
  { name: "PostgreSQL", category: "databases", icon: SiPostgresql },
  { name: "SQL", category: "databases", icon: TbSql },
  { name: "Firebase Firestore", category: "databases", icon: SiFirebase },

  // Cloud & Tools
  { name: "Docker", category: "cloud-tools", icon: SiDocker },
  { name: "Google Cloud Run", category: "cloud-tools", icon: SiGooglecloud },
  { name: "Git", category: "cloud-tools", icon: SiGit },
  { name: "GitHub", category: "cloud-tools", icon: SiGithub },
  { name: "Postman", category: "cloud-tools", icon: SiPostman },
  { name: "Vercel", category: "cloud-tools", icon: SiVercel },
  { name: "Render", category: "cloud-tools", icon: SiRender },
  { name: "Figma", category: "cloud-tools", icon: SiFigma },
  { name: "SEO", category: "cloud-tools", logo: "/seo.jpg" },

  // AI & Automation
  { name: "Object Detection (YOLO)", category: "ai", icon: FaEye },
  { name: "Machine Learning", category: "ai", icon: SiOpencv },
  { name: "Deep Learning", category: "ai", icon: FaBrain },
  {name:"Rag", category:"ai", icon:FaBrain},
  { name: "N8N Automation", category: "ai", icon: SiN8N },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-[#141c27] min-h-screen px-3 md:px-[90px] pt-[50px] pb-[50px]">
      <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-100px] lg:mx-5 pl-[30px] mb-[35px]">
        Hands-on Experience In
      </h1>

      {/* Category Tabs */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 border ${
              activeCategory === cat.id
                ? "bg-[#55e6a5] text-[#141c27] shadow-lg shadow-[#55e6a5]/20 font-semibold"
                : "bg-transparent text-white border-[#55e6a5]/40 hover:border-[#55e6a5]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#1b2735]/80 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-xl hover:border-[#55e6a5]/60 hover:-translate-y-1 transition-all duration-300 group border border-[#55e6a5]/20"
            >
              {skill.logo ? (
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="h-12 w-12 rounded-md object-contain border border-[#55e6a5]/40 p-1.5 bg-black/30 group-hover:scale-110 transition duration-300"
                />
              ) : IconComponent ? (
                <div className="h-12 w-12 rounded-md flex items-center justify-center border border-[#55e6a5]/40 p-1.5 bg-black/30 group-hover:scale-110 transition duration-300 text-[#55e6a5] text-2xl">
                  <IconComponent />
                </div>
              ) : null}

              <div className="flex flex-col flex-1 min-w-0">
                <div className="text-white text-base font-semibold group-hover:text-[#55e6a5] transition duration-200">
                  {skill.name}
                </div>
                <div className="text-xs text-gray-400 capitalize">
                  {skill.category.replace("-", " ")}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
