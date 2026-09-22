import React, { useState, useEffect } from "react";
import {
  FaAward,
  FaTrophy,
  FaArrowUpRightFromSquare,
  FaPlay,
  FaXmark,
  FaEye,
  FaShieldHalved,
  FaLayerGroup,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaBuildingColumns,
} from "react-icons/fa6";

const achievementsData = [
  {
    id: "ap-police-safestay",
    title: "AP Police Department — Certificate of Appreciation",
    subtitle: "Honoured by DGP Sri Harish Kumar Gupta, I.P.S. & Guntur SP Sri Vakul Jindal, I.P.S.",
    primaryBadge: "State Police Commendation",
    metaText: "Government of Andhra Pradesh · AP Police",
    secondaryBadge: "SafeStay Project Initiative",
    isSecondaryRed: false,
    category: "ai-gov",
    categories: ["ai-gov", "certificate"],
    type: "gallery",
    dignitaries: [
      {
        name: "Sri Harish Kumar Gupta, I.P.S.",
        designation: "Honourable Director General of Police (DGP)",
        department: "Andhra Pradesh Police Department",
      },
      {
        name: "Sri Vakul Jindal, I.P.S.",
        designation: "Superintendent of Police (SP)",
        department: "Guntur District Police",
      },
    ],
    description:
      "Awarded the prestigious official Certificate of Appreciation by the Government of Andhra Pradesh Police Department for valuable software engineering contributions to state security initiatives, specifically the SafeStay guest verification portal and central law enforcement surveillance infrastructure.",
    contribution:
      "Engineered backend microservices, REST APIs, and database architecture for the SafeStay portal and Centralised Drone Monitoring Portal (CDMP), automating hotel guest logging, enabling real-time verification, and enhancing public safety and security workflows statewide.",
    stack: [
      "Python",
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "SafeStay Portal",
      "CDMP Drone Portal",
      "Law Enforcement Tech",
    ],
    thumbnail: "/safestay.jpeg",
    mediaUrl: "/safestay.jpeg",
    gallery: [
      {
        src: "/safestay.jpeg",
        title: "Certificate Handover with Honourable DGP Sri Harish Kumar Gupta, I.P.S.",
        subtitle: "Official Award Ceremony · AP Police Leadership",
        caption:
          "Sri Dharaneeswar Reddy Avula receiving the Certificate of Appreciation directly from the Honourable DGP of Andhra Pradesh, Sri Harish Kumar Gupta, I.P.S., in recognition of valuable software engineering contributions to the AP Police SafeStay initiative.",
        badge: "DGP Certificate Handover",
        shortLabel: "Award Handover",
      },
      {
        src: "/safestaygrp.jpeg",
        title: "Official SafeStay Launch Delegation with Hon'ble DGP Sir",
        subtitle: "Techies AP & CTech Team with State Police Leadership",
        caption:
          "Group delegation with the Honourable DGP Sri Harish Kumar Gupta, I.P.S., senior police officers, and the Techies AP & CTech engineering team during the official launch of the AP Safe Stay initiative.",
        badge: "State Police Delegation",
        shortLabel: "Team with DGP",
      },
      {
        src: "/guntursp.jpeg",
        title: "Felicitation by Guntur SP Sri Vakul Jindal, I.P.S.",
        subtitle: "Review & Commendation · Guntur District Police Headquarters",
        caption:
          "Commended and felicitated by Guntur Superintendent of Police Sri Vakul Jindal, I.P.S., at the District Police Office during high-level strategic review of police automation applications.",
        badge: "Guntur SP Office",
        shortLabel: "With Guntur SP",
      },
    ],
    ctaText: "View Commendation Gallery (3 Photos)",
    ctaType: "gallery",
  },
  {
    id: 1,
    title: "Project Dharma",
    subtitle: "AI-Powered Case Management System",
    primaryBadge: "Featured AI Initiative",
    metaText: "AP Police · Law Enforcement",
    secondaryBadge: "ETV News Featured",
    isSecondaryRed: true,
    category: "ai-gov",
    categories: ["ai-gov"],
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
    categories: ["certificate"],
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
    categories: ["platform"],
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
  const [modalPhotoIndex, setModalPhotoIndex] = useState(0);
  const [activeCardPhotos, setActiveCardPhotos] = useState({});

  const filteredItems =
    activeFilter === "all"
      ? achievementsData
      : achievementsData.filter(
          (item) =>
            item.category === activeFilter ||
            (Array.isArray(item.categories) && item.categories.includes(activeFilter))
        );

  const openModal = (item, initialIndex = 0) => {
    setSelectedMedia(item);
    setModalPhotoIndex(initialIndex);
  };

  const handleNextPhoto = () => {
    if (selectedMedia?.gallery) {
      setModalPhotoIndex((prev) => (prev + 1) % selectedMedia.gallery.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedMedia?.gallery) {
      setModalPhotoIndex(
        (prev) => (prev - 1 + selectedMedia.gallery.length) % selectedMedia.gallery.length
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedMedia(null);
      } else if (e.key === "ArrowRight") {
        handleNextPhoto();
      } else if (e.key === "ArrowLeft") {
        handlePrevPhoto();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia]);

  return (
    <section className="bg-[#141c27] min-h-screen px-2 sm:px-4 md:px-[90px] pt-20 pb-28 font-poppins">
      {/* Section Header */}
      <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-80px] md:before:left-[-100px] mx-1 sm:mx-3 md:mx-5 pl-4 sm:pl-[30px] mb-3 uppercase tracking-wider font-semibold">
        Achievements & Highlights
      </h1>
      <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-1 sm:mx-3 md:mx-5 pl-4 sm:pl-[30px] mb-8">
        Major project initiatives, state security recognitions, official police commendations,
        and verified certifications.
      </p>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 mx-1 sm:mx-3 md:mx-5 p-1 bg-[#101824] border border-slate-700/60 rounded-xl w-fit">
        {filterTabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeFilter === id;
          return (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
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

      {/* Display Cards */}
      <div className="flex flex-col gap-10 mx-1 sm:mx-3 md:mx-5 max-w-6xl">
        {filteredItems.map((item) => {
          const currentGalleryIdx = activeCardPhotos[item.id] || 0;
          const currentPhoto = item.gallery ? item.gallery[currentGalleryIdx] : null;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-[#55e6a5]/30 bg-[#0d1624]/95 backdrop-blur-xl p-4 sm:p-6 lg:p-10 shadow-2xl transition-all duration-300 hover:border-[#55e6a5]/60 flex flex-col lg:flex-row gap-6 sm:gap-8 items-center"
            >
              {/* Left Content Column */}
              <div className="flex-1 w-full flex flex-col justify-between">
                {/* Header Badges Row */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {/* Primary Emerald Badge */}
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#55e6a5] bg-[#55e6a5]/10 border border-[#55e6a5]/40 flex items-center gap-1.5">
                    <FaAward className="text-[11px]" />
                    <span>{item.primaryBadge}</span>
                  </span>

                  {/* Metadata Separator Text */}
                  <span className="text-slate-400 text-xs font-medium font-mono">
                    {item.metaText}
                  </span>

                  {/* Secondary Badge */}
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

                {/* Dignitaries Callout Box for High-Level Recognitions */}
                {item.dignitaries && (
                  <div className="mb-5 p-3.5 sm:p-4 rounded-xl bg-[#09101a] border border-[#55e6a5]/30">
                    <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                      <FaBuildingColumns className="text-[#55e6a5]" />
                      <span>Distinguished Police Dignitaries Presenting Commendation:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {item.dignitaries.map((dig, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 p-2 rounded-lg bg-[#111a28] border border-slate-700/60"
                        >
                          <div className="size-7 rounded-md bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center text-[#55e6a5] flex-shrink-0 mt-0.5">
                            <FaAward className="text-xs" />
                          </div>
                          <div>
                            <p className="text-white text-xs font-bold leading-snug">
                              {dig.name}
                            </p>
                            <p className="text-[#55e6a5] text-[11px] font-medium leading-snug">
                              {dig.designation}
                            </p>
                            <p className="text-slate-400 text-[10px] leading-snug">
                              {dig.department}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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
                  ) : item.ctaType === "gallery" ? (
                    <button
                      onClick={() => openModal(item, currentGalleryIdx)}
                      className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#55e6a5] hover:bg-[#43ca8f] text-[#141c27] font-bold text-sm shadow-md shadow-[#55e6a5]/20 hover:shadow-[#55e6a5]/30 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <FaImages className="text-sm" />
                      <span>{item.ctaText}</span>
                      <FaEye className="text-xs ml-0.5" />
                    </button>
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
              <div className="w-full lg:w-[460px] flex-shrink-0 flex flex-col gap-3">
                {/* Main Media Box */}
                <div
                  onClick={() => openModal(item, currentGalleryIdx)}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/70 bg-black/50 group cursor-pointer aspect-video flex items-center justify-center"
                >
                  <img
                    src={currentPhoto ? currentPhoto.src : item.thumbnail}
                    alt={currentPhoto ? currentPhoto.title : item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Overlay Badge for Multi-Image Items */}
                  {item.gallery && (
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold text-white bg-black/70 backdrop-blur-md border border-white/20">
                        {currentPhoto?.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold text-[#55e6a5] bg-[#141c27]/85 backdrop-blur-md border border-[#55e6a5]/40">
                        {currentGalleryIdx + 1} / {item.gallery.length}
                      </span>
                    </div>
                  )}

                  {/* Left / Right Chevron Overlay Controls for Gallery */}
                  {item.gallery && item.gallery.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCardPhotos((prev) => ({
                            ...prev,
                            [item.id]:
                              (currentGalleryIdx - 1 + item.gallery.length) % item.gallery.length,
                          }));
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/60 hover:bg-[#55e6a5] text-white hover:text-[#141c27] flex items-center justify-center transition backdrop-blur-md opacity-80 group-hover:opacity-100 z-10"
                        title="Previous Photo"
                      >
                        <FaChevronLeft className="text-xs" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCardPhotos((prev) => ({
                            ...prev,
                            [item.id]: (currentGalleryIdx + 1) % item.gallery.length,
                          }));
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/60 hover:bg-[#55e6a5] text-white hover:text-[#141c27] flex items-center justify-center transition backdrop-blur-md opacity-80 group-hover:opacity-100 z-10"
                        title="Next Photo"
                      >
                        <FaChevronRight className="text-xs" />
                      </button>
                    </>
                  )}

                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 group-hover:opacity-60 transition-opacity" />

                  {/* Hover Play / Preview Button Overlay */}
                  <div className="absolute inset-0 m-auto size-12 rounded-full bg-[#55e6a5] text-[#141c27] flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none z-10">
                    {item.type === "video" ? (
                      <FaPlay className="text-base ml-0.5" />
                    ) : item.type === "gallery" ? (
                      <FaImages className="text-base" />
                    ) : (
                      <FaEye className="text-base" />
                    )}
                  </div>
                </div>

                {/* 3-Photo Interactive Thumbnails Selector for Gallery Items */}
                {item.gallery && item.gallery.length > 1 && (
                  <div className="grid grid-cols-3 gap-2">
                    {item.gallery.map((photo, pIdx) => {
                      const isCurrent = currentGalleryIdx === pIdx;
                      return (
                        <button
                          key={pIdx}
                          onClick={() =>
                            setActiveCardPhotos((prev) => ({
                              ...prev,
                              [item.id]: pIdx,
                            }))
                          }
                          className={`group/thumb text-left p-1.5 rounded-xl border transition-all duration-200 ${
                            isCurrent
                              ? "bg-[#55e6a5]/10 border-[#55e6a5] ring-2 ring-[#55e6a5]/40"
                              : "bg-[#0a121e] border-slate-700/70 hover:border-slate-500 hover:bg-[#111c2c]"
                          }`}
                        >
                          <div className="relative aspect-video rounded-lg overflow-hidden mb-1">
                            <img
                              src={photo.src}
                              alt={photo.title}
                              className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                            />
                            {isCurrent && (
                              <div className="absolute inset-0 border-2 border-[#55e6a5] rounded-lg pointer-events-none" />
                            )}
                          </div>
                          <p
                            className={`text-[11px] font-semibold truncate ${
                              isCurrent ? "text-[#55e6a5]" : "text-slate-300"
                            }`}
                          >
                            {photo.shortLabel}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative bg-[#101824] border border-[#55e6a5]/40 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/70 bg-[#0c131d]">
              <div>
                <h3 className="text-white font-bold text-base md:text-lg leading-tight">
                  {selectedMedia.gallery
                    ? selectedMedia.gallery[modalPhotoIndex]?.title
                    : selectedMedia.title}
                </h3>
                <p className="text-xs text-[#55e6a5] mt-0.5">
                  {selectedMedia.gallery
                    ? selectedMedia.gallery[modalPhotoIndex]?.subtitle || selectedMedia.subtitle
                    : selectedMedia.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedMedia(null)}
                className="size-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition flex-shrink-0 ml-3"
                title="Close (Esc)"
              >
                <FaXmark className="text-lg" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 overflow-y-auto flex flex-col items-center justify-center">
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
              ) : selectedMedia.gallery ? (
                /* Multi-Photo Gallery Modal View */
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full max-h-[58vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/60 border border-slate-700/60 p-1">
                    <img
                      src={selectedMedia.gallery[modalPhotoIndex].src}
                      alt={selectedMedia.gallery[modalPhotoIndex].title}
                      className="max-h-[56vh] w-auto max-w-full object-contain rounded-lg"
                    />

                    {/* Nav Prev / Next buttons inside modal */}
                    {selectedMedia.gallery.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevPhoto}
                          className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/70 hover:bg-[#55e6a5] text-white hover:text-[#141c27] flex items-center justify-center shadow-xl backdrop-blur-md transition"
                          title="Previous Photo"
                        >
                          <FaChevronLeft className="text-sm" />
                        </button>
                        <button
                          onClick={handleNextPhoto}
                          className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/70 hover:bg-[#55e6a5] text-white hover:text-[#141c27] flex items-center justify-center shadow-xl backdrop-blur-md transition"
                          title="Next Photo"
                        >
                          <FaChevronRight className="text-sm" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Modal Photo Caption & Details */}
                  <div className="w-full mt-3.5 p-3.5 bg-[#09101a] rounded-xl border border-slate-700/70">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-[#55e6a5] bg-[#55e6a5]/10 border border-[#55e6a5]/30">
                        {selectedMedia.gallery[modalPhotoIndex].badge}
                      </span>
                      <span className="text-slate-400 text-xs font-mono font-medium">
                        Photo {modalPhotoIndex + 1} of {selectedMedia.gallery.length}
                      </span>
                    </div>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                      {selectedMedia.gallery[modalPhotoIndex].caption}
                    </p>
                  </div>

                  {/* Modal Gallery Thumbnails Strip */}
                  {selectedMedia.gallery.length > 1 && (
                    <div className="flex gap-2.5 mt-3 w-full justify-center">
                      {selectedMedia.gallery.map((photo, gIdx) => {
                        const isCurrentModal = modalPhotoIndex === gIdx;
                        return (
                          <button
                            key={gIdx}
                            onClick={() => setModalPhotoIndex(gIdx)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition ${
                              isCurrentModal
                                ? "bg-[#55e6a5] text-[#141c27] border-[#55e6a5] shadow-md"
                                : "bg-[#111a28] text-slate-300 border-slate-700 hover:border-slate-500"
                            }`}
                          >
                            <img
                              src={photo.src}
                              alt=""
                              className="size-5 rounded object-cover"
                            />
                            <span>{photo.shortLabel}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
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

              {/* Modal Footer Info (for non-gallery items) */}
              {!selectedMedia.gallery && (
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
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
