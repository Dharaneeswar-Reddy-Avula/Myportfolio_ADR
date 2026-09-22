import React, { useState, useEffect } from "react";
import {
  FaAward,
  FaTrophy,
  FaFilePdf,
  FaVideo,
  FaArrowUpRightFromSquare,
  FaPlay,
  FaXmark,
  FaEye,
  FaShieldHalved,
  FaLayerGroup,
} from "react-icons/fa6";

const achievementsData = [
  {
    id: 1,
    title: "Project Dharma",
    subtitle: "AI-Powered Case Management System",
    primaryBadge: "Featured AI Initiative",
    metaText: "AP Police · Law Enforcement",
    secondaryBadge: "ETV News Featured",
    isSecondaryRed: true,
    category: "ai-gov",
    type: "video",
    description:
      "An intelligent case management system developed for modern law enforcement workflows to automate case record indexing, entity resolution, and streamline investigation tracking.",
    contribution:
      "Contributed to backend workflow services, API integrations with Python & FastAPI, and assisted in AI document indexing logic.",
    stack: ["Python", "FastAPI", "AI/ML", "React.js", "MongoDB", "REST APIs"],
    thumbnail: "/dharma_etv_hq.jpg",
    mediaUrl: "https://youtu.be/NAM-bnox9_Y?si=GGyZSRqSDZjyEswf",
    link: "https://youtu.be/NAM-bnox9_Y?si=GGyZSRqSDZjyEswf",
    ctaText: "Watch ETV Feature",
    ctaType: "video",
  },
  {
    id: 2,
    title: "E-Summit'25 IIT Roorkee",
    subtitle: "National Innovation & Entrepreneurship Summit",
    primaryBadge: "National Recognition",
    metaText: "IIT Roorkee · E-Cell",
    secondaryBadge: "Verified Certificate",
    isSecondaryRed: false,
    category: "certificate",
    type: "certificate",
    description:
      "Recognized in prestigious national entrepreneurship and technical challenges at IIT Roorkee's flagship annual summit, competing among top engineering students nationwide.",
    contribution:
      "Formulated technological solution architecture and presented full-stack product feasibility models to institutional mentors and evaluators.",
    stack: ["System Architecture", "Innovation", "Product Strategy", "Technical Pitching"],
    thumbnail: "/IITR CERT.png",
    mediaUrl: "/IITR CERT.png",
    link: "https://certificate.givemycertificate.com/c/8d5f91eb-f915-43a9-a996-15df918dcbd3",
    ctaText: "View Certificate",
    ctaType: "link",
  },
 
  {
    id: 5,
    title: "Teckzite 2K25 Web Platform",
    subtitle: "South India's Premier Techno-Management Fest",
    primaryBadge: "Institutional Leadership",
    metaText: "RGUKT Nuzvid",
    secondaryBadge: "Production Web Team",
    isSecondaryRed: false,
    category: "platform",
    type: "social",
    description:
      "Architected and deployed the central digital portal for RGUKT's massive annual fest, coordinating multi-event registrations and real-time scheduling for thousands of attendees.",
    contribution:
      "Developed high-traffic responsive registration interfaces, interactive landing pages, and responsive schedule dashboards using the MERN stack and Tailwind CSS.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "MERN Stack", "UI/UX"],
    thumbnail: "/tz.png",
    mediaUrl: "/tz.png",
    link: "https://teckzite.org",
    ctaText: "Visit Platform",
    ctaType: "link",
  },
];

const filterTabs = [
  { id: "all", label: "All Highlights", icon: FaLayerGroup },
  { id: "ai-gov", label: "AI & State Security", icon: FaShieldHalved },
  { id: "certificate", label: "Certifications", icon: FaAward },
  { id: "platform", label: "Platforms & Tech", icon: FaTrophy },
];

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredItems =
    activeFilter === "all"
      ? achievementsData
      : achievementsData.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedMedia(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="bg-[#141c27] min-h-screen px-4 md:px-[90px] pt-20 pb-28 font-poppins">
      {/* Section Header */}
      <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-80px] md:before:left-[-100px] mx-5 pl-[30px] mb-3 uppercase tracking-wider font-semibold">
        Achievements & Highlights
      </h1>
      <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-5 pl-[30px] mb-8">
        Major project initiatives, state security recognitions, national summits, and verified
        certifications.
      </p>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 mx-5 p-1 bg-[#101824] border border-slate-700/60 rounded-xl w-fit">
        {filterTabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeFilter === id;
          return (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#55e6a5] text-[#141c27] shadow-sm font-bold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className={isActive ? "text-[#141c27]" : "text-[#55e6a5]"} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Display Cards matching the user's reference design */}
      <div className="flex flex-col gap-10 mx-5 max-w-6xl">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#55e6a5]/30 bg-[#0d1624]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-[#55e6a5]/60 flex flex-col lg:flex-row gap-8 items-center"
          >
            {/* Left Content Column */}
            <div className="flex-1 w-full flex flex-col justify-between">
              {/* Header Badges Row */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {/* Primary Emerald Badge */}
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#55e6a5] bg-[#55e6a5]/10 border border-[#55e6a5]/40">
                  {item.primaryBadge}
                </span>

                {/* Metadata Separator Text */}
                <span className="text-slate-400 text-xs font-medium font-mono">
                  {item.metaText}
                </span>

                {/* Secondary Badge (Crimson for ETV, or Dark Slate) */}
                {item.secondaryBadge && (
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      item.isSecondaryRed
                        ? "text-red-400 bg-red-500/10 border-red-500/30"
                        : "text-[#55e6a5] bg-[#55e6a5]/10 border-[#55e6a5]/30"
                    }`}
                  >
                    {item.secondaryBadge}
                  </span>
                )}
              </div>

              {/* Main Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
                {item.title}
              </h2>

              {/* Subtitle */}
              <h3 className="text-[#55e6a5] font-semibold text-base sm:text-lg mb-4">
                {item.subtitle}
              </h3>

              {/* Main Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* My Engineering Contribution Inset Box */}
              <div className="bg-[#09101a] border border-slate-700/60 rounded-xl p-4 sm:p-5 mb-6">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                  My Engineering Contribution:
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.contribution}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-medium text-slate-300 bg-[#121c2a] border border-slate-700/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div>
                {item.ctaType === "video" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#e50914] hover:bg-[#c90712] text-white font-bold text-sm shadow-lg shadow-red-600/30 hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FaPlay className="text-xs" />
                    <span>{item.ctaText}</span>
                    <FaArrowUpRightFromSquare className="text-[11px] ml-0.5" />
                  </a>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#55e6a5] hover:bg-[#43ca8f] text-[#141c27] font-bold text-sm shadow-md shadow-[#55e6a5]/20 hover:shadow-[#55e6a5]/30 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>{item.ctaText}</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Media Preview Column */}
            <div className="w-full lg:w-[440px] flex-shrink-0">
              <div
                onClick={() => setSelectedMedia(item)}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/70 bg-black/40 group cursor-pointer aspect-video flex items-center justify-center"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:opacity-75 transition-opacity" />

                {/* Hover Play / Preview Button Overlay */}
                <div className="absolute inset-0 m-auto size-12 rounded-full bg-[#55e6a5] text-[#141c27] flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {item.type === "video" ? (
                    <FaPlay className="text-base ml-0.5" />
                  ) : (
                    <FaEye className="text-base" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative bg-[#101824] border border-[#55e6a5]/40 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/70 bg-[#0c131d]">
              <div>
                <h3 className="text-white font-bold text-base md:text-lg">
                  {selectedMedia.title}
                </h3>
                <p className="text-xs text-[#55e6a5]">{selectedMedia.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedMedia(null)}
                className="size-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <FaXmark className="text-lg" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 max-h-[75vh] overflow-y-auto flex flex-col items-center justify-center">
              {selectedMedia.type === "video" ? (
                <div className="w-full aspect-video rounded-xl overflow-hidden relative group bg-black shadow-inner">
                  <img
                    src={selectedMedia.thumbnail}
                    alt={selectedMedia.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40 flex flex-col items-center justify-center p-6 text-center">
                    <a
                      href={selectedMedia.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-16 rounded-full bg-[#e50914] hover:bg-[#c90712] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-200 mb-4"
                    >
                      <FaPlay className="text-2xl ml-1" />
                    </a>
                    <h4 className="text-white font-bold text-lg mb-1.5">
                      Watch ETV News Feature on YouTube
                    </h4>
                    <p className="text-slate-300 text-xs max-w-md mb-5 leading-relaxed">
                      ETV Andhra Pradesh official news coverage on Project Dharma — AI-powered case
                      management system for law enforcement.
                    </p>
                    <a
                      href={selectedMedia.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#e50914] hover:bg-[#c90712] text-white font-bold text-sm shadow-lg shadow-red-600/40 hover:-translate-y-0.5 transition-all"
                    >
                      <FaPlay className="text-xs" />
                      <span>Play on YouTube</span>
                      <FaArrowUpRightFromSquare className="text-xs ml-1" />
                    </a>
                  </div>
                </div>
              ) : selectedMedia.type === "document" && selectedMedia.mediaUrl?.endsWith(".pdf") ? (
                <div className="w-full h-[60vh] rounded-xl overflow-hidden bg-black/50 border border-slate-700/70">
                  <iframe
                    src={selectedMedia.mediaUrl}
                    title={selectedMedia.title}
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="max-h-[60vh] overflow-hidden rounded-xl">
                  <img
                    src={selectedMedia.mediaUrl || selectedMedia.thumbnail}
                    alt={selectedMedia.title}
                    className="max-h-[60vh] w-auto object-contain rounded-xl border border-[#55e6a5]/30"
                  />
                </div>
              )}

              {/* Modal Footer Info */}
              <div className="w-full mt-4 p-4 bg-[#09101a] rounded-xl border border-slate-700/70 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <p className="text-[#55e6a5] text-xs font-semibold uppercase tracking-wider">
                    {selectedMedia.primaryBadge} • {selectedMedia.metaText}
                  </p>
                  <p className="text-slate-300 text-xs mt-1">
                    {selectedMedia.contribution}
                  </p>
                </div>
                {selectedMedia.link && (
                  <a
                    href={selectedMedia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#55e6a5] text-[#141c27] rounded-xl font-bold text-xs hover:bg-[#43ca8f] transition flex-shrink-0"
                  >
                    <span>Open External Link</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
