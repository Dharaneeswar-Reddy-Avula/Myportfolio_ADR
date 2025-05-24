import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticleCursor from "./ParticleCursor";
import { useRef, useEffect, useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
const App = () => {
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

  // Animation loop for smooth movement
  const animate = () => {
    // Interpolate position for smooth movement
    posX.current += (mouseX.current - posX.current) * 0.15; // 0.15 is the easing factor
    posY.current += (mouseY.current - posY.current) * 0.15;

    if (cursorRef.current) {
      cursorRef.current.style.left = posX.current + "px";
      cursorRef.current.style.top = posY.current + "px";

      // Scale with transition in CSS
      cursorRef.current.style.transform = isHovering
        ? "translate(-50%, -50%) scale(2.8)"
        : "translate(-50%, -50%) scale(1)";
      cursorRef.current.style.backgroundColor = isHovering
        ? "rgba(255,255,255, 0.2)" // Semi-transparent background on hover
        : "transparent"; // Fully transparent when not hovering

      cursorRef.current.style.border = isHovering
        ? "0px" // Remove border on hover
        : "2px solid gray"; // Gray border when not hovering im ge
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Update mouse position on move
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    // Detect hover on interactive elements
    const handleMouseOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const interactiveTags = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "label",
        "Link",
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
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isHovering]);

  return (
    <div className="bg-[#09101a] min-h-screen relative overflow-hidden">
      {/* <Navbar />
      <Hero /> */}
      {/* <ParticleCursor /> */}
      {/* <About />


      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer/> */}
      <Navbar />

<div id="home"  className="scroll-mt-[50px]"><Hero /></div>
<div id="about"  className="scroll-mt-[0px]"><About /></div>
<div id="skills"  className="scroll-mt-[70px]"><Skills /></div>
<div id="projects"  className="scroll-mt-[50px]"><Projects /></div>
<div id="contact"  className="scroll-mt-[100px]"><ContactForm /></div>

<Footer />

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="cursor fixed w-4 h-4  rounded-full pointer-events-none z-50"
      ></div>
    </div>
  );
};

export default App;
