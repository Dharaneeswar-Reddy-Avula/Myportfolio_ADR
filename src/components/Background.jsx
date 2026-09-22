import React, { useState, useEffect } from "react";
import "./background.css";
import {
  FaShieldHalved,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaCheck,
  FaForwardFast,
  FaTv,
  FaBuildingColumns,
} from "react-icons/fa6";

const profileMilestones = [
  {
    phase: "PHASE 01 / 05",
    category: "ACADEMIC FOUNDATION",
    badge: "Computer Science Engineering",
    icon: FaGraduationCap,
    title: "Dharaneeswar Reddy Avula",
    subtitle: "RGUKT (IIIT Nuzvid) · B.Tech Computer Science & Engineering",
    details:
      "Full-stack software engineer with strong foundations in algorithmic problem solving, scalable distributed systems, and modern web application development.",
    skills: ["B.Tech CSE", "RGUKT Nuzvid", "Data Structures", "System Design", "JavaScript"],
  },
  {
    phase: "PHASE 02 / 05",
    category: "ENGINEERING STACK",
    badge: "Core Technical Architecture",
    icon: FaCode,
    title: "FastAPI, Python & MERN Architecture",
    subtitle: "High-Throughput REST APIs, PostgreSQL & Generative AI",
    details:
      "Architecting production backend microservices, robust relational/NoSQL databases, and state-of-the-art RAG (Retrieval-Augmented Generation) document indexing pipelines.",
    skills: ["FastAPI", "Python", "PostgreSQL", "React.js", "MongoDB", "RAG / AI", "REST APIs"],
  },
  {
    phase: "PHASE 03 / 05",
    category: "STATE POLICE COMMENDATION",
    badge: "Official Police Commendation",
    icon: FaShieldHalved,
    title: "AP Police SafeStay & Drone Monitoring (CDMP)",
    subtitle: "Honoured by DGP Sri Harish Kumar Gupta, I.P.S. & Guntur SP Sri Vakul Jindal, I.P.S.",
    details:
      "Awarded official Certificate of Appreciation by the Andhra Pradesh Police Department for engineering the SafeStay hotel guest verification portal and central drone surveillance infrastructure.",
    skills: ["AP Police", "DGP Commendation", "SafeStay", "CDMP Drone Portal", "GovTech Security"],
  },
  {
    phase: "PHASE 04 / 05",
    category: "AI INNOVATION & SUMMITS",
    badge: "Media & National Recognition",
    icon: FaTv,
    title: "Project Dharma & IIT Roorkee E-Summit'25",
    subtitle: "ETV News Featured AI Case Management · National Summit Recognition",
    details:
      "Developed AI-powered case management and legal entity indexing for law enforcement workflows, featured on ETV News. Competed and recognized at IIT Roorkee's flagship summit.",
    skills: ["Project Dharma", "ETV News Featured", "IIT Roorkee", "AI Legal Indexing", "E-Cell"],
  },
  {
    phase: "PHASE 05 / 05",
    category: "PRODUCTION DEPLOYMENT",
    badge: "Production Web Platforms",
    icon: FaLaptopCode,
    title: "Teckzite 2K25 & Enterprise Web Platforms",
    subtitle: "High-Traffic Fest Portal for 10,000+ Registrations · Client Production",
    details:
      "Engineered the central digital platform for RGUKT's premier techno-management fest handling massive real-time traffic, alongside modern client platforms including SabbaFarm.",
    skills: ["Teckzite 2K25", "SabbaFarm", "Technical SEO", "High-Traffic Scale", "Production"],
  },
];

const timelineSteps = [
  { label: "RGUKT CSE", step: "01" },
  { label: "FastAPI / Python", step: "02" },
  { label: "AP Police (DGP & SP)", step: "03" },
  { label: "Dharma (ETV News)", step: "04" },
  { label: "Teckzite 2K25", step: "05" },
];

const Background = ({ onSkip }) => {
  const [progress, setProgress] = useState(0);
  const [currentMilestoneIdx, setCurrentMilestoneIdx] = useState(0);

  // Smooth progressive countdown strictly synchronized over 10 seconds (9.4s count + 0.6s hold)
  useEffect(() => {
    const startTime = Date.now();
    const countDuration = 9400; // 9.4 seconds to reach 100%

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / countDuration) * 100));

      setProgress(rawProgress);

      // Phase distribution across the 100% countdown
      if (rawProgress < 20) {
        setCurrentMilestoneIdx(0);
      } else if (rawProgress < 42) {
        setCurrentMilestoneIdx(1);
      } else if (rawProgress < 65) {
        setCurrentMilestoneIdx(2);
      } else if (rawProgress < 85) {
        setCurrentMilestoneIdx(3);
      } else {
        setCurrentMilestoneIdx(4);
      }

      if (rawProgress >= 100) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const activeMilestone = profileMilestones[currentMilestoneIdx];
  const MilestoneIcon = activeMilestone.icon;

  // Circular progress stroke calculation
  const circleRadius = 78;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-[999] w-full h-full cyber-bg flex flex-col justify-between p-3.5 sm:p-7 font-mono select-none overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-70 pointer-events-none" />

      {/* Sweeping Laser Scanner */}
      <div className="cyber-scanner pointer-events-none" />

      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 cyber-scanlines opacity-45 pointer-events-none" />

      {/* Cyber Glow Accents */}
      <div className="absolute top-1/4 left-1/4 size-72 sm:size-96 rounded-full bg-[#55e6a5]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 size-72 sm:size-96 rounded-full bg-[#00e5ff]/10 blur-[100px] pointer-events-none" />

      {/* TOP TELEMETRY BAR */}
      <header className="relative z-10 flex items-center justify-between border-b border-[#55e6a5]/20 pb-3 sm:pb-3.5">
        {/* Candidate Identity */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#55e6a5]/10 border border-[#55e6a5]/40 text-[#55e6a5] text-xs font-bold tracking-wider">
            <span className="size-2 rounded-full bg-[#55e6a5] animate-pulse" />
            <span>DHARANEESWAR REDDY AVULA</span>
          </div>
          <span className="hidden md:inline-block text-slate-400 text-xs font-mono">
            // Full-Stack &amp; AI Engineer
          </span>
        </div>

        {/* System Status & Skip Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/50 border border-slate-700/80 text-xs text-slate-300">
            <span className="text-[#55e6a5] font-bold">10s PROFILE VERIFICATION</span>
          </div>

          {onSkip && (
            <button
              onClick={onSkip}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#55e6a5]/15 hover:bg-[#55e6a5] text-[#55e6a5] hover:text-[#09101a] border border-[#55e6a5]/40 font-bold text-xs transition cursor-pointer"
              title="Skip intro directly"
            >
              <span>SKIP INTRO</span>
              <FaForwardFast className="text-[10px]" />
            </button>
          )}
        </div>
      </header>

      {/* MAIN CONTENT: HUD CORE & PROFILE MILESTONES */}
      <main className="relative z-10 flex flex-col items-center justify-center my-auto py-2 sm:py-4 w-full max-w-4xl mx-auto">
        {/* Top Segment: HUD Circular Core with Real Progress */}
        <div className="relative size-44 sm:size-52 flex items-center justify-center mb-4">
          {/* Outer Dashed Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#55e6a5]/30 cyber-spin-cw" />

          {/* Secondary Counter-Clockwise Segmented Ring */}
          <div className="absolute inset-2 sm:inset-3 rounded-full border border-[#00e5ff]/25 cyber-spin-ccw border-t-transparent border-b-transparent" />

          {/* Crosshair Markers */}
          <span className="absolute top-0.5 text-[9px] font-bold text-[#55e6a5]/60">▲</span>
          <span className="absolute bottom-0.5 text-[9px] font-bold text-[#55e6a5]/60">▼</span>
          <span className="absolute left-0.5 text-[9px] font-bold text-[#55e6a5]/60">◄</span>
          <span className="absolute right-0.5 text-[9px] font-bold text-[#55e6a5]/60">►</span>

          {/* SVG Animated Neon Progress Circle */}
          <svg className="absolute inset-0 size-full -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r={circleRadius}
              className="stroke-slate-800/80 fill-transparent"
              strokeWidth="4"
            />
            <circle
              cx="50%"
              cy="50%"
              r={circleRadius}
              className="stroke-[#55e6a5] fill-transparent transition-all duration-75"
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 10px #55e6a5)" }}
            />
          </svg>

          {/* Center Digital Percentage Counter */}
          <div className="relative flex flex-col items-center justify-center text-center z-10">
            <span className="text-[10px] tracking-widest text-[#55e6a5] font-bold">
              VERIFYING
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight cyber-glow-text leading-none my-0.5">
              {progress}
              <span className="text-xl sm:text-2xl text-[#55e6a5] font-light ml-0.5">%</span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono text-slate-300 font-semibold px-2 py-0.5 rounded bg-black/60 border border-[#55e6a5]/30 mt-0.5 truncate max-w-[130px]">
              {activeMilestone.category}
            </span>
          </div>
        </div>

        {/* Center Segment: Real Profile Milestone Showcase Card */}
        <div className="w-full bg-[#0d1624]/95 border border-[#55e6a5]/40 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md cyber-glow-box mb-4 transition-all duration-300">
          {/* Card Header with Phase and Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-lg bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center text-[#55e6a5] text-xs">
                <MilestoneIcon />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#55e6a5] uppercase">
                  {activeMilestone.phase}
                </span>
                <span className="text-slate-400 text-xs font-semibold ml-2">
                  // {activeMilestone.badge}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <span className="text-[#55e6a5] font-bold">{progress}%</span>
              <span>COMPLETED</span>
            </div>
          </div>

          {/* Milestone Main Title & Subtitle */}
          <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight mb-1 flex items-center gap-2">
            <span>{activeMilestone.title}</span>
            {progress >= 100 && <FaCheck className="text-[#55e6a5] text-base" />}
          </h2>

          <h3 className="text-xs sm:text-sm font-semibold text-[#55e6a5] mb-2.5 leading-snug">
            {activeMilestone.subtitle}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3.5">
            {activeMilestone.details}
          </p>

          {/* Genuine Skill / Credential Pills */}
          <div className="flex flex-wrap gap-1.5">
            {activeMilestone.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-200 bg-[#142030] border border-[#55e6a5]/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 5-Stage Visual Timeline Progress Checklist */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2">
          {timelineSteps.map((step, idx) => {
            const isDone = currentMilestoneIdx > idx || progress >= 100;
            const isCurrent = currentMilestoneIdx === idx && progress < 100;

            return (
              <div
                key={idx}
                className={`p-2 rounded-xl border text-center transition-all duration-200 ${
                  isCurrent
                    ? "bg-[#55e6a5]/10 border-[#55e6a5] ring-1 ring-[#55e6a5]/50"
                    : isDone
                    ? "bg-[#09111c] border-[#55e6a5]/40"
                    : "bg-[#080d16] border-slate-800 text-slate-600 opacity-60"
                }`}
              >
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  {isDone ? (
                    <FaCheck className="text-[10px] text-[#55e6a5]" />
                  ) : (
                    <span className="text-[9px] font-mono text-slate-400 font-bold">
                      {step.step}
                    </span>
                  )}
                  <span
                    className={`text-[11px] font-bold truncate ${
                      isCurrent || isDone ? "text-white" : "text-slate-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-1">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isDone
                        ? "w-full bg-[#55e6a5]"
                        : isCurrent
                        ? "w-1/2 bg-[#00e5ff] animate-pulse"
                        : "w-0"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Access Granted Banner at 100% */}
        {progress >= 100 && (
          <div className="w-full mt-3 p-3 rounded-xl bg-[#55e6a5]/15 border border-[#55e6a5] flex items-center justify-between text-xs font-bold text-[#55e6a5] animate-pulse shadow-lg">
            <div className="flex items-center gap-2">
              <FaCheck className="text-sm" />
              <span>PROFILE VERIFIED · ACCESS GRANTED — WELCOME</span>
            </div>
            <span className="text-[#00e5ff] font-mono">[ENTERING PORTFOLIO...]</span>
          </div>
        )}
      </main>

      {/* BOTTOM TELEMETRY FOOTER */}
      <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#55e6a5]/20 pt-3 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-[#55e6a5] font-semibold flex items-center gap-1.5">
            <FaBuildingColumns className="text-xs" />
            Andhra Pradesh, India · RGUKT Nuzvid
          </span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="hidden sm:inline-block text-slate-400">
            avuladharaniswarreddy@gmail.com
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-slate-500">STATUS:</span>
          <span className="text-[#55e6a5] font-bold">OPEN FOR SOFTWARE ROLES</span>
        </div>
      </footer>
    </div>
  );
};

export default Background;
