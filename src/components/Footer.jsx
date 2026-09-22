import React from "react";
import {
  FaMapLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b121c] border-t border-slate-800 font-poppins text-white">
      {/* Top Brand & Quick Links Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-[90px] pt-14 pb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="size-8 rounded-lg bg-[#55e6a5] text-[#141c27] font-extrabold flex items-center justify-center text-sm shadow-md shadow-[#55e6a5]/20">
                D
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Dharaneeswar Reddy Avula
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Associate Software Engineer <span className="text-[#55e6a5]">@ Ziplflex Technologies</span> · Full-Stack &amp; AI
            </p>
          </div>

          
        </div>

        {/* Info Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {/* Location */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0e1724] border border-slate-800/80 hover:border-[#55e6a5]/40 transition duration-300">
            <div className="size-11 rounded-xl bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center text-[#55e6a5] text-lg flex-shrink-0">
              <FaMapLocationDot />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Current Location</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Kadapa, Andhra Pradesh, India
              </p>
              <span className="inline-block mt-1 text-[11px] text-[#55e6a5] font-mono">
                Open to Relocation / Hybrid
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0e1724] border border-slate-800/80 hover:border-[#55e6a5]/40 transition duration-300">
            <div className="size-11 rounded-xl bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center text-[#55e6a5] text-lg flex-shrink-0">
              <FaPhone />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Direct Phone</h4>
              <a
                href="tel:+918790756930"
                className="text-slate-300 text-xs hover:text-[#55e6a5] transition font-mono block"
              >
                +91 8790756930
              </a>
              <span className="inline-block mt-1 text-[11px] text-slate-400">
                Calls &amp; WhatsApp Available
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0e1724] border border-slate-800/80 hover:border-[#55e6a5]/40 transition duration-300">
            <div className="size-11 rounded-xl bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center text-[#55e6a5] text-lg flex-shrink-0">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Developer Email</h4>
              <a
                href="mailto:avuladharaniswarreddy@gmail.com"
                className="text-slate-300 text-xs hover:text-[#55e6a5] transition truncate block max-w-[220px]"
              >
                avuladharaniswarreddy@gmail.com
              </a>
              <span className="inline-block mt-1 text-[11px] text-[#55e6a5] font-mono">
                Quick Response Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials, Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dharaneeswar Reddy Avula. Built with React &amp; Tailwind CSS.</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Dharaneeswar-Reddy-Avula"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#55e6a5] hover:text-[#55e6a5] flex items-center justify-center transition"
                title="GitHub"
              >
                <FaGithub className="text-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/dharaneeswar-reddy-avula-6600912aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#55e6a5] hover:text-[#55e6a5] flex items-center justify-center transition"
                title="LinkedIn"
              >
                <FaLinkedin className="text-sm" />
              </a>
              <a
                href="https://x.com/Dharaneeswar_"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#55e6a5] hover:text-[#55e6a5] flex items-center justify-center transition"
                title="Twitter/X"
              >
                <FaXTwitter className="text-sm" />
              </a>
              <a
                href="mailto:avuladharaniswarreddy@gmail.com"
                className="size-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#55e6a5] hover:text-[#55e6a5] flex items-center justify-center transition"
                title="Email"
              >
                <FaEnvelope className="text-sm" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="size-8 rounded-lg bg-[#55e6a5]/10 border border-[#55e6a5]/40 hover:bg-[#55e6a5] text-[#55e6a5] hover:text-[#141c27] flex items-center justify-center transition-all duration-200 ml-2"
              title="Back to Top"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;