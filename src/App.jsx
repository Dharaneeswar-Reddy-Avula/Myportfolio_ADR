import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Background from "./components/Background";

const App = () => {
  // State to control when to show the main website
  const [showMainSite, setShowMainSite] = useState(false);
  // State to trigger wipe-up animation
  const [startWipeUp, setStartWipeUp] = useState(false);
    const [startWipedown, setStartWipedown] = useState(false);


  const cursorRef = useRef(null);
  const requestRef = useRef(null);

  // Track actual mouse position (from event)
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Track the displayed cursor position (interpolated)
  const posX = useRef(0);
  const posY = useRef(0);

  // Scale state
  const [isHovering, setIsHovering] = useState(false);

  const animate = () => {
    posX.current += (mouseX.current - posX.current) * 0.15;
    posY.current += (mouseY.current - posY.current) * 0.15;

    if (cursorRef.current) {
      cursorRef.current.style.left = posX.current + "px";
      cursorRef.current.style.top = posY.current + "px";

      cursorRef.current.style.transform = isHovering
        ? "translate(-50%, -50%) scale(2.8)"
        : "translate(-50%, -50%) scale(1)";
      cursorRef.current.style.backgroundColor = isHovering
        ? "rgba(255,255,255, 0.2)"
        : "transparent";

      cursorRef.current.style.border = isHovering ? "0px" : "2px solid gray";
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start cursor animation
    requestRef.current = requestAnimationFrame(animate);

    // Trigger wipe-up animation after 2.5 seconds, then show main site after 3 seconds
    const wipeTimer = setTimeout(() => {
      setStartWipeUp(true);
    }, 2500);

    const timer = setTimeout(() => {
      setShowMainSite(true);
    }, 3000);

    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const handleMouseOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const interactiveTags = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "label",
        "link",
      ];
      if (interactiveTags.includes(tag)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const interactiveTags = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "label",
      ];
      if (interactiveTags.includes(tag)) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      clearTimeout(wipeTimer);
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isHovering]);

  return (
    <div className="bg-[#09101a] min-h-screen relative overflow-hidden">
      {!showMainSite && (
        // Apply wipe-up animation class conditionally
        <div className={`preloader-container ${startWipeUp ? 'wipe-up' : ''}`}>
          <Background />
        </div>
      )}
      {showMainSite && (
        // Show the full website after preloader
        <div className={`main-container ${startWipedown ? 'wipe-down' : ''}`}>
          <Navbar />
          <div id="home" className="scroll-mt-[50px]">
            <Hero />
          </div>
          <div id="about" className="scroll-mt-[0px]">
            <About />
          </div>
          <div id="skills" className="scroll-mt-[70px]">
            <Skills />
          </div>
          <div id="projects" className="scroll-mt-[50px]">
            <Projects />
          </div>
          <div id="contact" className="scroll-mt-[100px]">
            <ContactForm />
          </div>
          <Footer />
          {/* Custom Cursor */}
          <div
            ref={cursorRef}
            className="cursor fixed w-4 h-4 rounded-full pointer-events-none z-50"
          ></div>
        </div>
      )}
    </div>
  );
};

export default App;