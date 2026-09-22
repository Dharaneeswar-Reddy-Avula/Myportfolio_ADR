import React from "react";
import { MdFileDownload, MdArrowOutward, MdVerified } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiPython, SiFastapi, SiReact } from "react-icons/si";
import { LuSparkles } from "react-icons/lu";

const Hero = () => {
  const downloadFile = () => {
    const fileUrl = `/Dharaneeswar-Reddy-Avula-updated.pdf`;
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.click();
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 px-4 md:px-[90px] flex items-center justify-center overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#55e6a5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1 font-poppins">
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1b2735]/90 border border-[#55e6a5]/30 text-xs text-gray-200 w-fit mb-6 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55e6a5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#55e6a5]"></span>
            </span>
            <span className="font-medium text-white flex items-center gap-1">
              Associate Software Engineer <span className="text-[#55e6a5]">@ Ziplflex Technologies</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Hi, I'm <br />
            <span className="text-white">Dharaneeswar Reddy</span>
          </h1>

          {/* Subtitle / Role Focus */}
          <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-[#55e6a5] uppercase tracking-wider mb-5">
            <LuSparkles className="text-xl" />
            <span>Software Engineer · Full-Stack · AI/ML</span>
          </div>

          {/* Recruiter-Focused Value Proposition */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            Associate Software Engineer at <strong className="text-white">Ziplflex Technologies LLP</strong>, specialized in architecting production-grade backend APIs with <strong className="text-[#55e6a5]">FastAPI</strong> & <strong className="text-[#55e6a5]">Python</strong>, responsive full-stack applications with the <strong className="text-white">MERN stack</strong>, and modern AI solutions incorporating <strong className="text-[#55e6a5]">RAG</strong>, <strong className="text-white">Machine Learning</strong>, and intelligent workflows.
          </p>

          {/* CTAs & Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={downloadFile}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#55e6a5] hover:bg-[#43ca8f] text-[#141c27] font-bold text-sm shadow-xl shadow-[#55e6a5]/20 hover:shadow-[#55e6a5]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Download Resume</span>
              <MdFileDownload className="text-lg" />
            </button>

            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1b2735]/80 hover:bg-[#1b2735] text-white font-semibold text-sm border border-[#55e6a5]/30 hover:border-[#55e6a5] transition-all duration-200"
            >
              <span>View Projects</span>
              <MdArrowOutward className="text-base" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Socials & Highlights Bar */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-gray-400 text-xs">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Dharaneeswar-Reddy-Avula"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-lg bg-[#1b2735] border border-white/10 hover:border-[#55e6a5] text-white hover:text-[#55e6a5] flex items-center justify-center transition"
                title="GitHub Profile"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/dharaneeswar-reddy-avula-6600912aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-lg bg-[#1b2735] border border-white/10 hover:border-[#55e6a5] text-white hover:text-[#55e6a5] flex items-center justify-center transition"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>

            <div className="hidden sm:block h-6 w-px bg-white/10" />

            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-400">Proven Experience:</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200">
                AP Police Projects
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#55e6a5]/10 border border-[#55e6a5]/30 text-[#55e6a5]">
                Project Dharma
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Visual / Profile Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            {/* Card Frame with Glassmorphism */}
            <div className="relative bg-[#1b2735]/90 backdrop-blur-xl border border-[#55e6a5]/30 rounded-3xl p-5 shadow-2xl overflow-hidden group">
              {/* Profile Image Container */}
              <div className="relative h-[340px] sm:h-[380px] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#141c27] via-[#1b2735] to-[#141c27] border border-white/10 flex items-end justify-center">
                <img
                  src="/IMAGE.png"
                  alt="Dharaneeswar Reddy"
                  className="h-full w-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141c27] via-transparent to-transparent opacity-80" />

                {/* Name Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#141c27]/90 backdrop-blur-md p-3 rounded-xl border border-[#55e6a5]/30 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-sm flex items-center gap-1.5">
                      <span>Dharaneeswar Reddy</span>
                      <MdVerified className="text-[#55e6a5] text-base" />
                    </div>
                    <div className="text-xs text-[#55e6a5] font-mono">
                      Ziplflex Technologies LLP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2 bg-[#141c27]/95 backdrop-blur-md border border-[#55e6a5]/40 px-3.5 py-2 rounded-xl shadow-xl animate-bounce duration-1000">
              <SiFastapi className="text-[#55e6a5] text-lg" />
              <span className="text-xs text-white font-semibold font-mono">FastAPI & Python</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-4 -right-4 items-center gap-2 bg-[#141c27]/95 backdrop-blur-md border border-[#55e6a5]/40 px-3.5 py-2 rounded-xl shadow-xl">
              <SiReact className="text-cyan-400 text-lg" />
              <span className="text-xs text-white font-semibold font-mono">Full-Stack & RAG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
