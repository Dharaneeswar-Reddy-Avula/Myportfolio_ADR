// src/components/FancyCursor.jsx
import React, { useEffect, useRef } from "react";

const ParticleCursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Particle logic
      particles.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.life / 100})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "white";
        ctx.fill();

        if (p.life <= 0) {
          particles.current.splice(i, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const spawnParticle = (x, y) => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 2;
      particles.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 2 + 1,
        life: 100,
      });
    };

    const mouseMoveHandler = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      for (let i = 0; i < 5; i++) {
        spawnParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    />
  );
};

export default ParticleCursor;
