import React, { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaStar,
  FaCalendar,
  FaBuilding,
  FaLocationDot,
  FaArrowUpRightFromSquare,
  FaUserTie,
  FaLanguage,
  FaHandshake,
  FaClock,
  FaMicrophone,
  FaPuzzlePiece,
  FaUsers,
  FaCheck,
} from "react-icons/fa6";

/* ─── Work Experience Data ────────────────────────────────────────── */
const workExperience = [
  {
    role: "Associate Software Engineer",
    company: "Ziplflex Technologies LLP",
    duration: "Aug 2026 – Present",
    mode: "Hybrid",
    type: "Full-Time",
    current: true,
    highlights: [
      "Architecting and developing production backend microservices and high-throughput REST APIs using Python & FastAPI.",
      "Engineering full-stack web platforms and integrating Generative AI / RAG workflows for intelligent data retrieval.",
      "Collaborating on database modeling, scalable API design, and cloud deployments.",
    ],
    projects: [],
    stack: ["FastAPI", "Python", "MERN Stack", "RAG", "Generative AI", "REST APIs"],
  },
  {
    role: "Software Engineer Intern",
    company: "Andhra Pradesh Police",
    duration: "Oct 2025 – Aug 2026",
    mode: "Hybrid",
    type: "Internship",
    current: false,
    highlights: [
      "Honoured with Certificate of Appreciation by Honourable DGP Sri Harish Kumar Gupta, I.P.S. & Guntur SP Sri Vakul Jindal, I.P.S. for valuable contributions to the AP Police Department.",
      "Engineered backend services and AI integration for state law enforcement automation initiatives.",
      "Contributed to Project Dharma — an AI-powered case management and document indexing system featured on ETV News.",
      "Developed key features for SafeStay (guest registry portal) and Centralised Drone Monitoring Portal (CDMP).",
    ],
    projects: ["SafeStay (Commended by DGP & SP)", "Project Dharma (ETV Featured)", "CDMP Portal"],
    stack: ["FastAPI", "Python", "PostgreSQL", "Flutter", "React.js", "REST APIs"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "TechBuggy",
    duration: "Dec 2024 – Jan 2026",
    mode: "Remote",
    type: "Part-time",
    current: false,
    highlights: [
      "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Built responsive, accessible frontend interfaces with Tailwind CSS and modern React components.",
      "Designed database schemas, authentication middleware, and integrated client-facing REST APIs.",
    ],
    projects: [],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Freelance Frontend Developer & SEO",
    company: "SabbaFarm",
    duration: "Jan 2025 – Jun 2025",
    mode: "Remote",
    type: "Part-time",
    current: false,
    highlights: [
      "Engineered the complete responsive web platform for a smart agriculture enterprise using React and Tailwind CSS.",
      "Implemented full-spectrum technical SEO, meta structures, and performance optimizations for search ranking.",
      "Delivered clean component architecture and smooth cross-device user experiences.",
    ],
    projects: ["SabbaFarm Web Portal"],
    stack: ["React.js", "MERN Stack", "Tailwind CSS", "Material UI", "SEO"],
  },
  {
    role: "Frontend Developer",
    company: "Techzite 2K25",
    duration: "Jan 2025 – Mar 2025",
    mode: "On-site",
    type: "Part-time",
    current: false,
    highlights: [
      "Developed core web modules for South India's premier annual techno-management fest at RGUKT Nuzvid.",
      "Built interactive student event registration workflows, responsive schedules, and animated landing interfaces.",
    ],
    projects: ["Techzite 2K25 Portal"],
    stack: ["React.js", "Tailwind CSS", "JavaScript", "MERN"],
  },
];

/* ─── Education Data ──────────────────────────────────────────────── */
const educationList = [
  {
    degree: "B.Tech — Computer Science & Engineering (4th Year)",
    institution: "Rajiv Gandhi University of Knowledge Technologies (RGUKT), Nuzvid",
    duration: "July 2025 – April 2026",
    grade: "8.45 / 10 CGPA",
    status: "Currently Studying",
    description:
      "Undergraduate engineering program focusing on advanced computer science foundations, algorithm design, software architecture, and modern full-stack application development.",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Object-Oriented Programming (Java)",
      "FastAPI & Full-Stack Development",
    ],
  },
  {
    degree: "Pre-University Course (PUC — M.P.C)",
    institution: "Rajiv Gandhi University of Knowledge Technologies (RGUKT), Nuzvid",
    duration: "Nov 2021 – Aug 2023",
    grade: "9.72 / 10 CGPA",
    status: "Completed with High Distinction",
    description:
      "Two-year integrated pre-engineering program covering advanced Mathematics, Physics, and Chemistry. Admitted on state-level academic merit.",
    coursework: ["Advanced Mathematics", "Physics", "Chemistry", "Computer Science Fundamentals"],
  },
  {
    degree: "Secondary School Certificate (SSC — 10th Standard)",
    institution: "St. Antony's E.M High School, Kalasapadu, Kadapa (Dist)",
    duration: "June 2020 – April 2021",
    grade: "10.0 / 10 CGPA",
    status: "Perfect Score / School Topper",
    description:
      "Completed secondary school education with academic excellence and a perfect 10.0/10 CGPA.",
    coursework: ["General Sciences", "Mathematics", "Social Studies", "English & Languages"],
  },
];

/* ─── Certifications Data ─────────────────────────────────────────── */
const certificationsList = [
  {
    title: "E-Summit'25",
    issuer: "IIT Roorkee",
    year: "Jan 31 – Feb 2, 2025",
    image: "IITR CERT.png",
    link: "https://certificate.givemycertificate.com/c/8d5f91eb-f915-43a9-a996-15df918dcbd3",
    badge: "National Summit",
  },
  {
    title: "Java 3.1: Java Programming — Object-Oriented Design",
    issuer: "EdX & Codio",
    year: "July 1 – Dec 31, 2024",
    image: "edx.png",
    link: "https://courses.edx.org/certificates/4915929bff67427494aa4f1b20efcdba",
    badge: "Verified Certification",
  },
];

/* ─── Strengths Beyond Tech ───────────────────────────────────────── */
const softSkills = [
  { label: "Effective Communication", icon: FaMicrophone },
  { label: "Team Collaboration", icon: FaUsers },
  { label: "Creative Problem Solving", icon: FaPuzzlePiece },
  { label: "Adaptability & Agility", icon: FaStar },
  { label: "Time Management", icon: FaClock },
  { label: "Public Speaking & Demos", icon: FaMicrophone },
];

const cocurricular = [
  {
    activity: "National Service Scheme (NSS) Volunteer",
    org: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid",
    duration: "June 2024 – Present",
  },
  {
    activity: "Web Team Volunteer, Techzite 2K25",
    org: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid",
    duration: "January 2025 – March 2025",
  },
];

const languages = [
  { lang: "English", level: "Professional Working Proficiency", pct: 85 },
  { lang: "Telugu", level: "Native / Bilingual", pct: 100 },
  { lang: "Hindi", level: "Conversational", pct: 50 },
];

const tabs = [
  { id: "education", label: "My Education", icon: FaGraduationCap },
  { id: "experience", label: "Work Experience", icon: FaBriefcase },
  { id: "certifications", label: "Certifications", icon: FaAward },
  { id: "strengths", label: "Strengths Beyond Tech", icon: FaStar },
];

/* ─── Main Component ──────────────────────────────────────────────── */
const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="min-h-screen w-full bg-[#141c27] font-poppins pt-[120px] pb-[50px] px-4 md:px-[90px]">
      {/* Section Title */}
      <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-80px] md:before:left-[-100px] mx-5 pl-[30px] mb-8 uppercase tracking-wider font-semibold">
        Academics & Experience
      </h1>

      <div className="max-w-6xl">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8 p-1.5 bg-[#101824] border border-slate-700/60 rounded-xl w-fit">
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#55e6a5] text-[#141c27] shadow-md shadow-[#55e6a5]/20 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={isActive ? "text-[#141c27]" : "text-[#55e6a5]"} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* ─── TAB 1: EDUCATION ───────────────────────────────────────── */}
        {activeTab === "education" && (
          <div className="flex flex-col gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#182332]/90 border border-slate-700/70 hover:border-[#55e6a5]/50 transition-all duration-200 rounded-2xl p-6 md:p-7 shadow-xl"
              >
                {/* Header Row: Degree + Duration */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-4 border-b border-slate-700/60 mb-5">
                  <div>
                    <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">
                      {edu.degree}
                    </h2>
                    <p className="text-[#55e6a5] font-semibold text-sm md:text-base flex items-center gap-2">
                      <FaBuilding className="text-xs text-[#55e6a5]" />
                      <span>{edu.institution}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#101824] border border-slate-700/80 text-slate-200 text-xs font-mono">
                      <FaCalendar className="text-[11px] text-[#55e6a5]" />
                      {edu.duration}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#55e6a5]/15 border border-[#55e6a5]/40 text-[#55e6a5] text-xs font-bold font-mono">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-200 text-sm md:text-[15px] leading-relaxed mb-5">
                  {edu.description}
                </p>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5">
                    Core Coursework &amp; Specialization:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-medium text-slate-200 bg-[#101824] border border-slate-700/80 px-3 py-1 rounded-md hover:border-[#55e6a5]/40 transition"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── TAB 2: WORK EXPERIENCE ─────────────────────────────────── */}
        {activeTab === "experience" && (
          <div className="flex flex-col gap-6">
            {workExperience.map((job, idx) => (
              <div
                key={idx}
                className="bg-[#182332]/90 border border-slate-700/70 hover:border-[#55e6a5]/50 transition-all duration-200 rounded-2xl p-6 md:p-7 shadow-xl"
              >
                {/* Header Row: Role, Company, and Metadata */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 pb-4 border-b border-slate-700/60 mb-5">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                        {job.role}
                      </h2>
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#55e6a5]/15 border border-[#55e6a5]/40 text-[#55e6a5] text-[11px] font-bold font-mono">
                          <span className="size-1.5 rounded-full bg-[#55e6a5] animate-pulse" />
                          PRESENT
                        </span>
                      )}
                    </div>
                    <p className="text-[#55e6a5] font-semibold text-base md:text-lg flex items-center gap-2">
                      <FaBuilding className="text-xs text-[#55e6a5]" />
                      <span>{job.company}</span>
                    </p>
                  </div>

                  {/* Metadata Chips: Duration, Mode, Type */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#101824] border border-slate-700/80 text-slate-200 text-xs font-mono">
                      <FaCalendar className="text-[11px] text-[#55e6a5]" />
                      {job.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#101824] border border-slate-700/80 text-slate-300 text-xs">
                      <FaLocationDot className="text-[11px] text-slate-400" />
                      {job.mode}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Key Engineering Responsibilities / Highlights */}
                <div className="mb-5">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5">
                    Engineering Highlights &amp; Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {job.highlights.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 text-slate-200 text-sm md:text-[15px] leading-relaxed"
                      >
                        <span className="text-[#55e6a5] text-xs mt-1.5 flex-shrink-0">◆</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Notable Projects (if any) */}
                {job.projects.length > 0 && (
                  <div className="mb-5 p-3.5 rounded-xl bg-[#101824] border border-slate-700/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                      Key Projects:
                    </span>
                    {job.projects.map((proj, prIdx) => (
                      <span
                        key={prIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#55e6a5]/10 border border-[#55e6a5]/30 text-[#55e6a5]"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium text-slate-200 bg-[#101824] border border-slate-700/80 px-2.5 py-1 rounded-md hover:border-[#55e6a5]/40 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── TAB 3: CERTIFICATIONS ──────────────────────────────────── */}
        {activeTab === "certifications" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsList.map((cert, i) => (
              <div
                key={i}
                className="bg-[#182332]/90 border border-slate-700/70 hover:border-[#55e6a5]/50 transition-all duration-200 rounded-2xl overflow-hidden shadow-xl flex flex-col"
              >
                {/* Certificate Preview Image */}
                <div className="relative h-48 bg-[#0e1622] flex items-center justify-center p-4 border-b border-slate-700/60">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain rounded"
                  />
                  <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#55e6a5] text-[#141c27]">
                    {cert.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-[#55e6a5] font-semibold text-sm mb-1">{cert.issuer}</p>
                    <p className="text-slate-400 text-xs flex items-center gap-1.5 font-mono">
                      <FaCalendar className="text-[10px]" />
                      {cert.year}
                    </p>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#55e6a5]/10 hover:bg-[#55e6a5] text-[#55e6a5] hover:text-[#141c27] border border-[#55e6a5]/40 hover:border-[#55e6a5] font-semibold text-sm transition-all duration-200"
                  >
                    <span>View Certificate</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── TAB 4: STRENGTHS BEYOND TECH ───────────────────────────── */}
        {activeTab === "strengths" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Soft Skills Grid */}
            <div className="lg:col-span-7 bg-[#182332]/90 border border-slate-700/70 rounded-2xl p-6 md:p-7 shadow-xl">
              <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2.5">
                <FaUserTie className="text-[#55e6a5]" />
                <span>Professional Soft Skills</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {softSkills.map(({ label, icon: Icon }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#101824] border border-slate-700/80 hover:border-[#55e6a5]/40 transition duration-200"
                  >
                    <div className="size-9 rounded-lg bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#55e6a5] text-sm" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Co-Curricular & Languages */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Co-Curricular */}
              <div className="bg-[#182332]/90 border border-slate-700/70 rounded-2xl p-6 shadow-xl">
                <h2 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                  <FaHandshake className="text-[#55e6a5]" />
                  <span>Co-Curricular Leadership</span>
                </h2>
                <div className="flex flex-col gap-3.5">
                  {cocurricular.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#101824] border border-slate-700/80"
                    >
                      <p className="text-white font-semibold text-sm">{item.activity}</p>
                      <p className="text-slate-400 text-xs mt-1">{item.org}</p>
                      <p className="text-[#55e6a5] text-xs font-mono mt-1">{item.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-[#182332]/90 border border-slate-700/70 rounded-2xl p-6 shadow-xl">
                <h2 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                  <FaLanguage className="text-[#55e6a5]" />
                  <span>Languages Spoken</span>
                </h2>
                <div className="flex flex-col gap-4">
                  {languages.map(({ lang, level, pct }, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1.5 text-xs">
                        <span className="text-slate-200 font-semibold">{lang}</span>
                        <span className="text-slate-400">{level}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#55e6a5]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
