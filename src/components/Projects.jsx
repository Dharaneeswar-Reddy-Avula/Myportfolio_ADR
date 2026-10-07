import React, { useState, useEffect } from "react";
import {
  FaArrowUpRightFromSquare,
  FaPlay,
  FaFolderOpen,
  FaLaptopCode,
  FaLayerGroup,
  FaShieldHalved,
  FaCircleInfo,
  FaXmark,
} from "react-icons/fa6";

const categories = [
  { id: "all", label: "All Projects", icon: FaLayerGroup },
  { id: "fullstack", label: "Full-Stack & Platforms", icon: FaLaptopCode },
  { id: "ai-gov", label: "AI & GovTech", icon: FaShieldHalved },
  { id: "tools", label: "Frontend & Web Apps", icon: FaFolderOpen },
];

const projectsData = [
  {
    id: 1,
    name: "Teckzite 2K25",
    category: "fullstack",
    badge: "Annual Fest Portal",
    role: "Frontend & Web Team",
    description:
      "Official web platform for South India's premier annual techno-management fest at RGUKT, handling thousands of registrations and live schedules.",
    note: "As the official fest platform is redesigned and redeployed annually for each edition, live deployment links are not permanently maintained. A recorded walkthrough demonstrating key features is provided.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "MERN"],
    link: "/tzvideo.mp4",
    videoUrl: "/tzvideo.mp4",
    image: "/tz.png",
    isLogo: false,
    ctaText: "Watch Feature",
    isVideo: true,
  },
  {
    id: 2,
    name: "Project Dharma",
    category: "ai-gov",
    badge: "ETV News Featured",
    role: "AP Police · AI Intern",
    description:
      "State-level AI case management and legal document analysis system for Andhra Pradesh Police, featured prominently on ETV News.",
    stack: ["FastAPI", "Python", "PostgreSQL", "RAG / AI"],
    link: "https://youtu.be/NAM-bnox9_Y?si=GGyZSRqSDZjyEswf",
    image: "Dharma.png",
    isLogo: false,
    ctaText: "Watch Feature",
    isVideo: true,
  },
  {
    id: 3,
    name: "SabbaFarm",
    category: "fullstack",
    badge: "Client Production",
    role: "Frontend & SEO Specialist",
    description:
      "Modern responsive smart agriculture platform engineered with full-spectrum technical SEO optimization and clean React component architecture.",
    stack: ["React.js", "MERN Stack", "Tailwind CSS", "SEO"],
    link: "https://sabbafarm.com",
    image: "/sb.png",
    isLogo: true,
    ctaText: "Visit Website",
  },
  {
    id: 4,
    name: "Alumni Connect",
    category: "fullstack",
    badge: "Community Platform",
    role: "Full-Stack Developer",
    description:
      "Centralized university alumni networking platform enabling graduate directory search, mentorship pairing, and community discussions.",
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://alumni-repo.vercel.app/",
    image: "/al.png",
    isLogo: false,
    ctaText: "Explore Portal",
  },
  {
    id: 5,
    name: "Database Dashboard",
    category: "tools",
    badge: "Developer Tool",
    role: "Frontend Developer",
    description:
      "Interactive schema creation tool featuring dynamic column types, instant field validation, and real-time SQL generation.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    link: "https://database-dashboard-seven.vercel.app/",
    image: "/db.png",
    isLogo: false,
    ctaText: "Open App",
  },
  
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveVideoModal(null);
    };
    if (activeVideoModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideoModal]);

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full bg-[#141c27] font-poppins pt-16 pb-20 px-2 sm:px-4 md:px-[90px]">
      {/* Section Header */}
      <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-80px] md:before:left-[-100px] mx-1 sm:mx-3 md:mx-5 pl-4 sm:pl-[30px] mb-2 uppercase tracking-wider font-semibold">
        Featured Projects
      </h1>
      <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-1 sm:mx-3 md:mx-5 pl-4 sm:pl-[30px] mb-7">
        Production applications, AI systems, and high-performance web engineering.
      </p>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 mx-1 sm:mx-3 md:mx-5 p-1 bg-[#101824] border border-slate-700/60 rounded-xl w-fit">
        {categories.map(({ id, label, icon: Icon }) => {
          const isActive = activeCategory === id;
          return (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#55e6a5] text-[#141c27] shadow-sm font-bold"
                  : "text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer"
              }`}
            >
              <Icon className={isActive ? "text-[#141c27]" : "text-[#55e6a5]"} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* 2-Column Balanced Projects Grid (Compact & Modern) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-1 sm:mx-3 md:mx-5 max-w-6xl">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#182332]/90 border border-slate-700/70 hover:border-[#55e6a5]/50 transition-all duration-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl flex flex-col group"
          >
            {/* Compact Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#101824] border-b border-slate-700/70">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-red-500/70 inline-block" />
                <span className="size-2 rounded-full bg-yellow-500/70 inline-block" />
                <span className="size-2 rounded-full bg-green-500/70 inline-block" />
                <span className="text-[11px] text-slate-400 font-mono ml-2">
                  {project.role}
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#55e6a5] bg-[#55e6a5]/10 px-2 py-0.5 rounded border border-[#55e6a5]/30">
                {project.badge}
              </span>
            </div>

            {/* Compact Preview Image */}
            <div
              onClick={() => project.videoUrl && setActiveVideoModal(project)}
              className={`relative h-44 sm:h-48 w-full overflow-hidden bg-[#0c141f] ${
                project.videoUrl ? "cursor-pointer" : ""
              }`}
            >
              {project.isLogo ? (
                <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#101925] via-[#142233] to-[#0c1520]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="max-h-24 max-w-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#182332] via-transparent to-transparent opacity-85 pointer-events-none" />

              {/* Play Overlay Indicator for Video Projects */}
              {project.videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="size-12 rounded-full bg-[#55e6a5] text-[#141c27] flex items-center justify-center shadow-lg shadow-[#55e6a5]/40 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <FaPlay className="text-base ml-0.5" />
                  </span>
                </div>
              )}
            </div>

            {/* Compact Card Content */}
            <div className="p-5 flex flex-col flex-1 justify-between gap-3">
              <div>
                <h3 className="text-white text-lg md:text-xl font-bold tracking-tight group-hover:text-[#55e6a5] transition duration-200 mb-1.5">
                  {project.name}
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Professional Note (e.g. for dynamic annual fest portals) */}
                {project.note && (
                  <div className="mt-3 p-2.5 rounded-xl bg-[#101824]/90 border border-slate-700/70 flex items-start gap-2 text-slate-300 text-[11px] sm:text-xs leading-relaxed shadow-sm">
                    <FaCircleInfo className="text-[#55e6a5] text-sm mt-0.5 flex-shrink-0" />
                    <p>
                      <span className="font-semibold text-[#55e6a5]">Note: </span>
                      {project.note}
                    </p>
                  </div>
                )}
              </div>

              {/* Tech Stack Chips & Action Button in One Compact Footer Row */}
              <div className="pt-3 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium text-slate-300 bg-[#101824] border border-slate-700/80 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.videoUrl ? (
                  <button
                    type="button"
                    onClick={() => setActiveVideoModal(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#55e6a5] hover:bg-[#43ca8f] text-[#141c27] font-bold text-xs shadow-sm hover:shadow transition-all duration-200 flex-shrink-0 cursor-pointer"
                  >
                    <span>{project.ctaText}</span>
                    <FaPlay className="text-[10px]" />
                  </button>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#55e6a5] hover:bg-[#43ca8f] text-[#141c27] font-bold text-xs shadow-sm hover:shadow transition-all duration-200 flex-shrink-0"
                  >
                    <span>{project.ctaText}</span>
                    {project.isVideo ? (
                      <FaPlay className="text-[10px]" />
                    ) : (
                      <FaArrowUpRightFromSquare className="text-[10px]" />
                    )}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Video Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="bg-[#141c27] border border-slate-700/80 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#101824] border-b border-slate-700/70">
              <div className="flex items-center gap-2.5">
                <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="size-2.5 rounded-full bg-green-500/80 inline-block" />
                <h3 className="text-white font-bold text-sm sm:text-base ml-2">
                  {activeVideoModal.name} — Feature Walkthrough
                </h3>
                <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#55e6a5] bg-[#55e6a5]/10 px-2 py-0.5 rounded border border-[#55e6a5]/30">
                  {activeVideoModal.badge}
                </span>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="size-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close video modal"
              >
                <FaXmark className="text-sm" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative bg-black flex items-center justify-center overflow-hidden flex-1 min-h-[260px] max-h-[65vh]">
              <video
                src={activeVideoModal.videoUrl || activeVideoModal.link}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#101824] border-t border-slate-700/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              {activeVideoModal.note ? (
                <div className="flex items-start gap-2 text-slate-300 text-xs leading-relaxed max-w-2xl">
                  <FaCircleInfo className="text-[#55e6a5] text-sm mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-semibold text-[#55e6a5]">Note: </span>
                    {activeVideoModal.note}
                  </p>
                </div>
              ) : (
                <p className="text-slate-400 text-xs">
                  {activeVideoModal.description}
                </p>
              )}

              <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                <a
                  href={activeVideoModal.videoUrl || activeVideoModal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
                >
                  <span>Open Full Video</span>
                  <FaArrowUpRightFromSquare className="text-[10px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
