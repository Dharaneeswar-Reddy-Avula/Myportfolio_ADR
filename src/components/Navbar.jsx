import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose, MdArrowOutward } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavigating, setIsNavigating] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = ["home", "about", "skills", "projects", "achievements", "contact"];

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Track scroll for navbar blur / shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const handleScrollTo = (section) => {
    const target = document.getElementById(section);
    if (target) {
      setIsNavigating(true);
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
      navigate(`#${section}`, { replace: true });
      setIsMenuOpen(false);

      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    }
  };

  // On load, check if there's a hash and scroll there
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      if (sections.includes(section)) {
        const target = document.getElementById(section);
        if (target) {
          setIsNavigating(true);
          target.scrollIntoView({ behavior: "smooth" });
          setActiveSection(section);
          setTimeout(() => {
            setIsNavigating(false);
          }, 1000);
        }
      } else {
        navigate("#home", { replace: true });
        setActiveSection("home");
      }
    } else {
      navigate("#home", { replace: true });
      setActiveSection("home");
    }
  }, [location, navigate]);

  // Update active section on scroll using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isNavigating) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId && sections.includes(sectionId) && activeSection !== sectionId) {
            setActiveSection(sectionId);
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        }
      });
    }, observerOptions);

    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, [activeSection, sections, isNavigating]);

  const getSectionTitle = (sec) => {
    if (sec === "about") return "About";
    if (sec === "skills") return "Skills";
    if (sec === "projects") return "Projects";
    if (sec === "achievements") return "Achievements";
    if (sec === "contact") return "Contact";
    return "Home";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] px-4 md:px-[90px] py-3.5 border-b transition-colors duration-300 ease-out ${
        scrolled
          ? "bg-[#0d1624]/90 backdrop-blur-xl border-slate-800/80 shadow-2xl shadow-black/50"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("home");
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="size-10 rounded-xl bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-[#55e6a5] font-extrabold text-xl font-mono">D</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-base tracking-wide group-hover:text-[#55e6a5] transition duration-200 font-poppins">
              Dharaneeswar
            </span>
            <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[#55e6a5] animate-pulse"></span>
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-[#101824]/90 p-1.5 rounded-xl border border-slate-700/60 shadow-inner">
          {sections.map((section) => {
            const isActive = activeSection === section;
            return (
              <button
                key={section}
                onClick={() => handleScrollTo(section)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? "text-[#141c27] bg-[#55e6a5] font-bold shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {getSectionTitle(section)}
              </button>
            );
          })}
        </div>

        {/* Recruiter / Direct Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleScrollTo("contact")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#55e6a5] hover:bg-[#43ca8f] text-[#141c27] text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#55e6a5]/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Let's Connect</span>
            <MdArrowOutward className="text-base" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            className="size-10 rounded-xl bg-[#55e6a5]/10 border border-[#55e6a5]/30 text-[#55e6a5] flex items-center justify-center text-2xl hover:bg-[#55e6a5] hover:text-[#141c27] transition duration-200"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <MdClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-[72px] left-3 right-3 z-[55] bg-[#0d1624]/95 backdrop-blur-2xl border border-[#55e6a5]/20 rounded-2xl shadow-2xl p-4 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 font-poppins">
          {sections.map((section) => {
            const isActive = activeSection === section;
            return (
              <button
                key={section}
                onClick={() => handleScrollTo(section)}
                className={`py-3 px-4 rounded-xl text-left text-base font-medium transition duration-200 flex items-center justify-between ${
                  isActive
                    ? "bg-[#55e6a5]/15 text-[#55e6a5] border border-[#55e6a5]/30 font-semibold"
                    : "text-gray-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{getSectionTitle(section)}</span>
                {isActive && <span className="size-2 rounded-full bg-[#55e6a5]"></span>}
              </button>
            );
          })}

          <button
            onClick={() => handleScrollTo("contact")}
            className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#55e6a5] text-[#141c27] font-bold text-sm shadow-lg hover:bg-[#43ca8f] transition"
          >
            <span>Let's Connect</span>
            <MdArrowOutward />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;