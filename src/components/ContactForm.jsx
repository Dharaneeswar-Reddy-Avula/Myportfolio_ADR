import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaPaperPlane,
  FaFilePdf,
  FaCheck,
  FaCopy,
} from "react-icons/fa6";
import { MdFileDownload, MdArrowOutward } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const downloadResume = () => {
    const fileUrl = `/Dharaneeswar-Reddy-Avula-updated.pdf`;
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.click();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("avuladharaniswarreddy@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Construct mailto link with pre-filled subject and body
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:avuladharaniswarreddy@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 4000);
    }, 600);
  };

  return (
    <section className="bg-[#141c27] min-h-screen px-4 md:px-[90px] pt-20 pb-28 font-poppins">
      {/* Section Header */}
      <h1 className="text-[#55e6a5] text-2xl font-lg relative before:absolute before:h-[2px] before:w-[100px] before:bg-[#55e6a5] before:top-4 before:left-[-80px] md:before:left-[-100px] mx-5 pl-[30px] mb-3 uppercase tracking-wider font-semibold">
        Get In Touch
      </h1>
      <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-5 pl-[30px] mb-10">
        Have an open software engineering role, a high-impact project, or an engineering discussion
        in mind? Feel free to reach out directly.
      </p>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mx-5 max-w-6xl">
        {/* Left Column: Modern Contact Form */}
        <div className="lg:col-span-7 bg-[#0d1624]/95 border border-slate-700/70 hover:border-[#55e6a5]/40 transition-all duration-300 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-700/70 mb-6">
            <div>
              <h2 className="text-white text-xl font-bold tracking-tight">Send a Message</h2>
              <p className="text-slate-400 text-xs mt-0.5">
                Drop your details and I'll respond as soon as possible.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#55e6a5]/10 border border-[#55e6a5]/30 text-[#55e6a5] text-xs font-medium">
              <span className="size-2 rounded-full bg-[#55e6a5] animate-pulse" />
              Available for Opportunities
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="w-full bg-[#101824] text-white placeholder-slate-500 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#55e6a5] focus:ring-1 focus:ring-[#55e6a5] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="w-full bg-[#101824] text-white placeholder-slate-500 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#55e6a5] focus:ring-1 focus:ring-[#55e6a5] transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#101824] text-white placeholder-slate-500 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#55e6a5] focus:ring-1 focus:ring-[#55e6a5] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Subject / Role
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineer Opportunity"
                  className="w-full bg-[#101824] text-white placeholder-slate-500 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#55e6a5] focus:ring-1 focus:ring-[#55e6a5] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share project details, job description, or message..."
                className="w-full bg-[#101824] text-white placeholder-slate-500 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#55e6a5] focus:ring-1 focus:ring-[#55e6a5] transition resize-none"
              ></textarea>
            </div>

            {/* Success Message Banner */}
            {status === "success" && (
              <div className="p-3 bg-[#55e6a5]/10 border border-[#55e6a5]/40 rounded-xl flex items-center gap-2 text-xs font-semibold text-[#55e6a5]">
                <FaCheck className="text-sm flex-shrink-0" />
                <span>Message drafted! Opening your email client to send directly.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl bg-[#55e6a5] hover:bg-[#43ca8f] text-[#141c27] font-bold text-sm shadow-md shadow-[#55e6a5]/20 hover:shadow-[#55e6a5]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-70"
            >
              <FaPaperPlane className="text-xs" />
              <span>{status === "sending" ? "Preparing Email..." : "Send Message via Email"}</span>
            </button>
          </form>
        </div>

        {/* Right Column: Unified Contact Information & Channels Card */}
        <div className="lg:col-span-5 bg-[#0d1624]/95 border border-slate-700/70 hover:border-[#55e6a5]/40 transition-all duration-300 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/70 mb-6">
              <div>
                <h2 className="text-white text-xl font-bold tracking-tight">Direct Contact</h2>
                <p className="text-slate-400 text-xs mt-0.5">Reach out via any preferred channel.</p>
              </div>
              <span className="size-8 rounded-xl bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center text-[#55e6a5] text-sm font-mono">
                @
              </span>
            </div>

            {/* Contact Channels List */}
            <div className="space-y-4 mb-6">
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-[#101824] border border-slate-700/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="size-10 rounded-lg bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center text-[#55e6a5] text-base flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href="mailto:avuladharaniswarreddy@gmail.com"
                      className="text-white text-xs sm:text-sm font-semibold hover:text-[#55e6a5] transition truncate block"
                    >
                      avuladharaniswarreddy@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-slate-700 hover:border-[#55e6a5] text-slate-300 hover:text-white text-xs transition flex-shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <FaCheck className="text-[#55e6a5]" /> : <FaCopy />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-[#101824] border border-slate-700/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center text-[#55e6a5] text-base flex-shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href="tel:+918790756930"
                      className="text-white text-xs sm:text-sm font-semibold hover:text-[#55e6a5] transition font-mono"
                    >
                      +91 8790756930
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/918790756930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-[#55e6a5]/15 border border-[#55e6a5]/40 text-[#55e6a5] text-xs font-semibold hover:bg-[#55e6a5] hover:text-[#141c27] transition flex-shrink-0"
                >
                  WhatsApp
                </a>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-[#101824] border border-slate-700/80 flex items-center gap-3">
                <div className="size-10 rounded-lg bg-[#55e6a5]/10 border border-[#55e6a5]/30 flex items-center justify-center text-[#55e6a5] text-base flex-shrink-0">
                  <FaLocationDot />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Location &amp; Availability
                  </span>
                  <p className="text-white text-xs sm:text-sm font-semibold">
                    Kadapa, Andhra Pradesh, India
                  </p>
                  <span className="text-[11px] text-[#55e6a5] font-mono">
                    Open to Hybrid / Remote &amp; Relocation
                  </span>
                </div>
              </div>
            </div>

            {/* Integrated Download Resume Banner */}
            <div
              onClick={downloadResume}
              className="p-3.5 rounded-xl bg-[#101824] border border-slate-700/80 hover:border-[#55e6a5]/50 transition cursor-pointer flex items-center justify-between gap-3 mb-6 group"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 text-lg group-hover:scale-105 transition">
                  <FaFilePdf />
                </div>
                <div>
                  <h4 className="text-white text-xs sm:text-sm font-bold group-hover:text-[#55e6a5] transition">
                    Download Official Resume
                  </h4>
                  <p className="text-slate-400 text-[11px]">Updated September 2026 · PDF Format</p>
                </div>
              </div>
              <div className="size-8 rounded-lg bg-[#55e6a5] text-[#141c27] flex items-center justify-center text-base shadow-sm group-hover:scale-110 transition">
                <MdFileDownload />
              </div>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
              Connect on Socials
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              <a
                href="https://github.com/Dharaneeswar-Reddy-Avula"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#101824] border border-slate-700/80 hover:border-[#55e6a5]/60 hover:bg-[#152233] text-white hover:text-[#55e6a5] transition group text-xs font-semibold"
              >
                <FaGithub className="text-base group-hover:scale-110 transition" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dharaneeswar-reddy-avula-6600912aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#101824] border border-slate-700/80 hover:border-[#55e6a5]/60 hover:bg-[#152233] text-white hover:text-[#55e6a5] transition group text-xs font-semibold"
              >
                <FaLinkedin className="text-base text-blue-400 group-hover:scale-110 transition" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://x.com/Dharaneeswar_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#101824] border border-slate-700/80 hover:border-[#55e6a5]/60 hover:bg-[#152233] text-white hover:text-[#55e6a5] transition group text-xs font-semibold"
              >
                <FaXTwitter className="text-base group-hover:scale-110 transition" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
