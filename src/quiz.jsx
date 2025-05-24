import React, { useEffect, useState } from "react";
import "./App.css"; // You can keep this for any custom styles
import { useRef } from "react";
import ParticleCursor from "./ParticleCursor";
const Quiz = () => {
  const [offenseCount, setOffenseCount] = useState(0);
  const maxOffenses = 3;

  const handleOffense = (message) => {
    alert(`${message} (Warning ${offenseCount + 1}/${maxOffenses})`);
    const newCount = offenseCount + 1;
    setOffenseCount(newCount);

    if (newCount >= maxOffenses) {
      alert("Quiz Ended Due to Policy Violation");
      // Redirect or auto-submit quiz logic goes here
    }
  };

//  useEffect(() => {
//   const handleCopy = (e) => {
//     e.preventDefault();
//     handleOffense("Copying is not allowed");
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     handleOffense("Pasting is not allowed");
//   };

//   const handleContextMenu = (e) => {
//     e.preventDefault();
//     handleOffense("Right-click is disabled");
//   };

//   const handleSelectStart = (e) => {
//     e.preventDefault();
//   };

//   const handleBlur = () => {
//     handleOffense("Tab switching is not allowed");
//   };

//   const handleFullScreenChange = () => {
//     if (!document.fullscreenElement) {
//       handleOffense("You exited fullscreen mode");
//     }
//   };

//   const handleResize = () => {
//     // If window height is significantly less than screen height, assume restore down or exit fullscreen
//     const threshold = 100; // Adjust as needed
//     if (screen.height - window.innerHeight > threshold) {
//       handleOffense("You resized or restored the window");
//     }
//   };

//   document.addEventListener("copy", handleCopy);
//   document.addEventListener("paste", handlePaste);
//   document.addEventListener("contextmenu", handleContextMenu);
//   document.addEventListener("selectstart", handleSelectStart);
//   window.addEventListener("blur", handleBlur);
//   document.addEventListener("fullscreenchange", handleFullScreenChange);
//   window.addEventListener("resize", handleResize); // 👈 key addition

//   // Force fullscreen on start
//   if (document.documentElement.requestFullscreen) {
//     document.documentElement.requestFullscreen();
//   }

//   return () => {
//     document.removeEventListener("copy", handleCopy);
//     document.removeEventListener("paste", handlePaste);
//     document.removeEventListener("contextmenu", handleContextMenu);
//     document.removeEventListener("selectstart", handleSelectStart);
//     window.removeEventListener("blur", handleBlur);
//     document.removeEventListener("fullscreenchange", handleFullScreenChange);
//     window.removeEventListener("resize", handleResize);
//   };
// }, [offenseCount]);
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
        ? "translate(-50%, -50%) scale(2)"
        : "translate(-50%, -50%) scale(1)";
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
      const interactiveTags = ["a", "button", "input", "textarea", "select", "label","div"];
      if (interactiveTags.includes(tag)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const interactiveTags = ["a", "button", "input", "textarea", "select", "label"];
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
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#09101a]">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          📘 Quiz In Progress
        </h2>
{/* <ParticleCursor/> */}
        <div className="space-y-4">
          <p className="text-gray-700 text-center">
            Please stay focused and avoid switching tabs or copying content.
          </p>

          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-center">
            Current Warnings: <strong>{offenseCount}</strong> / {maxOffenses}
          </div>
      <div ref={cursorRef} className="cursor"></div>
          {/* Replace below with actual quiz questions */}
          <div className="border border-dashed border-gray-300 p-4 rounded-lg bg-gray-50 text-gray-600 text-center">
            Your quiz questions will appear here...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
