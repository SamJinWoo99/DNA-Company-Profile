"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);

  const tabs = [
    { id: 0, title: t("about.tab0_title"), number: "01" },
    { id: 1, title: t("about.tab1_title"), number: "02" },
    { id: 2, title: t("about.tab2_title"), number: "03" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-start overflow-hidden text-white"
      style={{
        background: "linear-gradient(135deg, #0077b6 0%, #0091D7 55%, #005a8d 100%)",
        paddingTop: "clamp(5rem, 8vh, 6.5rem)",
        paddingBottom: "clamp(4rem, 6vh, 5.5rem)",
        paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
        paddingRight: "clamp(1.5rem, 4vw, 4rem)",
      }}
    >
      {/* Background Graphic Pattern with subtle opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src="/about-bg-pattern.jpg"
          alt="DNA Background Artwork"
          className="w-full h-full object-cover opacity-10 mix-blend-screen scale-105"
        />
        {/* Ambient lighting glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-cyan-300/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Decorative DNA Motif Strip (DesainDNA.png) - Di belakang konten navigasi agar tidak menutupi tab */}
      <div
        className="hidden md:flex absolute inset-y-0 top-0 bottom-0 right-0 z-0 pointer-events-none items-center justify-end select-none overflow-hidden"
        style={{ right: "-24px" }}
        aria-hidden="true"
      >
        {/* Totem motif spanning full height flush to the right (No shadow / no blur) */}
        <img
          src="/about-pattern-strip.png"
          alt="Desain DNA Pattern Totem"
          className="w-24 sm:w-32 lg:w-40 xl:w-48 2xl:w-56 h-full object-cover object-left select-none"
        />
      </div>

      {/* Main Content Wrapper - z-30 agar tab '03 Services & Expertise' berada di atas totem strip */}
      <div className="w-full relative z-30 max-w-full flex flex-col justify-start">
        
        {/* ======================================================== */}
        {/* TOP BAR: Fixed Top Position Across All Tabs              */}
        {/* ======================================================== */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/20 select-none shrink-0 relative z-30"
          style={{ marginBottom: "2.5rem" }}
        >
          {/* Left: Section Breadcrumb Badge */}
          <div className="flex items-center gap-3 pb-3">
            <span className="w-7 h-0.5 bg-cyan-300 rounded-full inline-block" />
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-200 leading-none">
              {t("about.top_badge")}
            </span>
          </div>

          {/* Right: Numbers 01, 02, 03 & Tab Titles (Dengan padding kanan agar tidak tertumpuk motif totem) */}
          <div className="flex items-center gap-7 sm:gap-9 overflow-x-auto -mb-[1px] relative z-30 pr-8 sm:pr-24 lg:pr-36">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 0 | 1 | 2)}
                className={`relative flex items-center gap-3 pb-3 text-sm sm:text-base font-bold transition-all duration-200 whitespace-nowrap cursor-pointer select-none outline-none focus:outline-none focus:ring-0 border-b-2 ${
                  activeTab === tab.id
                    ? "border-white text-white"
                    : "border-transparent text-white/65 hover:text-white"
                }`}
              >
                {/* Number Badge (Lebih besar, lapang & simetris) */}
                <span
                  className={`text-xs font-mono font-black w-7 h-7 flex items-center justify-center rounded-lg transition-colors leading-none shrink-0 ${
                    activeTab === tab.id
                      ? "bg-white/25 text-cyan-200 shadow-sm"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  {tab.number}
                </span>

                {/* Tab Label */}
                <span className="leading-none text-sm sm:text-base font-bold">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* TAB 0: WHO WE ARE                                        */}
        {/* ======================================================== */}
        {activeTab === 0 && (
          <div className="animate-fade-in">
            {/* Top Heading Group (Identik dengan Vision & Values) */}
            <div style={{ marginBottom: "2rem" }}>
              <span
                className="text-cyan-200 text-xs sm:text-sm font-bold uppercase tracking-widest block"
                style={{ marginBottom: "0.35rem" }}
              >
                {t("about.est")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {t("about.who_we_are_title")}
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
              {/* Left Column (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-start">
                {/* 4 Clean Paragraphs */}
                <div style={{ marginBottom: "2rem" }}>
                  <p
                    className="text-white font-semibold text-lg sm:text-xl"
                    style={{ marginBottom: "1rem", lineHeight: "1.7" }}
                  >
                    {t("about.p1")}
                  </p>
                  <p
                    className="text-white/90 text-base sm:text-lg"
                    style={{ marginBottom: "1rem", lineHeight: "1.75" }}
                  >
                    {t("about.p2_pre")}
                    <strong className="font-bold text-white">{t("about.p2_company")}</strong>
                    {t("about.p2_mid")}
                    <strong className="font-bold text-cyan-200">{t("about.p2_brand")}</strong>
                    {t("about.p2_post")}
                  </p>
                  <p
                    className="text-white/90 text-base sm:text-lg"
                    style={{ marginBottom: "1rem", lineHeight: "1.75" }}
                  >
                    {t("about.p3")}
                  </p>
                  <p
                    className="text-white/90 text-base sm:text-lg"
                    style={{ marginBottom: "0", lineHeight: "1.75" }}
                  >
                    {t("about.p4")}
                  </p>
                </div>

                {/* Ethos Quote Section */}
                <div
                  style={{
                    paddingLeft: "1.75rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    borderLeft: "3.5px solid #67e8f9",
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest text-amber-300 block"
                    style={{ marginBottom: "0.65rem" }}
                  >
                    {t("about.ethos_badge")}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-black text-white leading-tight"
                    style={{ marginBottom: "0.85rem" }}
                  >
                    {t("about.ethos_title")}
                  </h3>
                  <p
                    className="text-sm sm:text-base text-white/90 italic leading-relaxed"
                    style={{ lineHeight: "1.8", margin: 0 }}
                  >
                    {t("about.ethos_quote")}
                  </p>
                </div>
              </div>

              {/* Right Column (5 Cols) - Glass Card with Logo + Studio Metrics */}
              <div className="lg:col-span-5 flex items-start justify-center">
                <div
                  className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-center"
                  style={{ padding: "2.5rem 2.25rem" }}
                >
                  {/* DNA Logo above 12+ (Centered & Extra Large) */}
                  <div
                    className="w-full flex items-center justify-center"
                    style={{ marginBottom: "2rem" }}
                  >
                    <img
                      src="/logo-dna.png"
                      alt="DNA Komunika"
                      className="w-full max-w-[280px] h-auto object-contain object-center"
                      style={{
                        maxHeight: "180px",
                        filter: "brightness(0) invert(1) drop-shadow(0 6px 16px rgba(0,0,0,0.25))",
                        opacity: 1,
                      }}
                    />
                  </div>

                  {/* 12+ Box */}
                  <div
                    className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm"
                    style={{ padding: "1.15rem 1.4rem", marginBottom: "1.25rem" }}
                  >
                    <span className="text-3xl sm:text-4xl font-black text-white block leading-none">
                      12+
                    </span>
                    <span
                      className="text-xs sm:text-sm uppercase tracking-wider text-cyan-200 font-bold block"
                      style={{ marginTop: "0.6rem" }}
                    >
                      {t("about.metric_exp")}
                    </span>
                  </div>

                  {/* 200+ Box */}
                  <div
                    className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm"
                    style={{ padding: "1.15rem 1.4rem", marginBottom: "1.25rem" }}
                  >
                    <span className="text-3xl sm:text-4xl font-black text-white block leading-none">
                      200+
                    </span>
                    <span
                      className="text-xs sm:text-sm uppercase tracking-wider text-cyan-200 font-bold block"
                      style={{ marginTop: "0.6rem" }}
                    >
                      {t("about.metric_proj")}
                    </span>
                  </div>

                  {/* 30+ Box */}
                  <div
                    className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm"
                    style={{ padding: "1.15rem 1.4rem", marginBottom: "0" }}
                  >
                    <span className="text-3xl sm:text-4xl font-black text-white block leading-none">
                      30+
                    </span>
                    <span
                      className="text-xs sm:text-sm uppercase tracking-wider text-cyan-200 font-bold block"
                      style={{ marginTop: "0.6rem" }}
                    >
                      {t("about.metric_awards")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 1: VISION & VALUES (Top-Aligned Rata Atas)           */}
        {/* ======================================================== */}
        {activeTab === 1 && (
          <div className="animate-fade-in">
            <div style={{ marginBottom: "2rem" }}>
              <span
                className="text-cyan-200 text-xs sm:text-sm font-bold uppercase tracking-widest block"
                style={{ marginBottom: "0.35rem" }}
              >
                {t("about.v_subtitle")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {t("about.v_title")}
              </h2>
            </div>

            {/* 2 Clean Glass Cards with Equal Balance */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Vision & Purpose */}
              <div
                className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md flex flex-col justify-between shadow-xl"
                style={{ padding: "2.5rem 2.5rem" }}
              >
                <div>
                  <div className="flex items-center gap-2.5" style={{ marginBottom: "1.25rem" }}>
                    <span className="text-xs font-mono font-bold w-6 h-6 flex items-center justify-center rounded-md bg-white/20 text-cyan-200">
                      01
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-200">
                      {t("about.v_purpose_badge")}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-black text-white tracking-tight"
                    style={{ marginBottom: "1.25rem" }}
                  >
                    {t("about.v_vision_title")}
                  </h3>

                  <p
                    className="text-white/90 text-base sm:text-lg font-light leading-relaxed"
                    style={{ lineHeight: "1.85", margin: 0 }}
                  >
                    {t("about.v_vision_desc")}
                  </p>
                </div>

                <div
                  className="border-t border-white/20 flex items-center gap-3"
                  style={{ paddingTop: "1.5rem", marginTop: "2.5rem" }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-100">
                    {t("about.v_vision_tag")}
                  </span>
                </div>
              </div>

              {/* Core Values */}
              <div
                className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md flex flex-col justify-between shadow-xl"
                style={{ padding: "2.5rem 2.5rem" }}
              >
                <div>
                  <div className="flex items-center gap-2.5" style={{ marginBottom: "1.25rem" }}>
                    <span className="text-xs font-mono font-bold w-6 h-6 flex items-center justify-center rounded-md bg-white/20 text-amber-300">
                      02
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                      {t("about.v_core_badge")}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-black text-white tracking-tight"
                    style={{ marginBottom: "1.25rem" }}
                  >
                    {t("about.v_core_title")}
                  </h3>

                  <p
                    className="text-white/90 text-base sm:text-lg font-light leading-relaxed"
                    style={{ lineHeight: "1.85", marginBottom: "1.5rem" }}
                  >
                    <strong className="font-bold text-white">{t("about.v_core_desc_prefix")}</strong>
                    {t("about.v_core_desc")}
                  </p>

                  <div
                    style={{
                      borderLeft: "3.5px solid #fcd34d",
                      paddingLeft: "1.5rem",
                      paddingTop: "0.4rem",
                      paddingBottom: "0.4rem",
                      marginTop: "1.25rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <p className="text-base sm:text-lg font-bold text-cyan-200 tracking-wide italic" style={{ margin: 0 }}>
                      {t("about.v_core_quote")}
                    </p>
                  </div>
                </div>

                <div
                  className="border-t border-white/20 flex items-center gap-3"
                  style={{ paddingTop: "1.5rem", marginTop: "2.5rem" }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-100">
                    {t("about.v_core_tag")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: SERVICES & EXPERTISE (Top-Aligned Rata Atas)      */}
        {/* ======================================================== */}
        {activeTab === 2 && (
          <div className="animate-fade-in">
            <div style={{ marginBottom: "2rem" }}>
              <span
                className="text-cyan-200 text-xs sm:text-sm font-bold uppercase tracking-widest block"
                style={{ marginBottom: "0.35rem" }}
              >
                {t("about.s_subtitle")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {t("about.s_title")}
              </h2>
            </div>

            {/* 3 Balanced Cards */}
            <div className="grid md:grid-cols-3 gap-6 xl:gap-8 items-stretch mt-4">
              {/* Card 1: Annual Reports */}
              <div className="rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group flex flex-col shadow-xl">
                <div className="h-60 sm:h-64 lg:h-72 overflow-hidden relative bg-black/30 p-2.5">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                      src="/about-service-annual-report.png"
                      alt="Annual Reports"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-5 left-5 w-8 h-8 rounded-full bg-white text-[#0077b6] text-xs font-black shadow-lg flex items-center justify-center tracking-normal">
                    01
                  </div>
                </div>

                <div style={{ padding: "1.75rem" }} className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4
                      className="text-lg xl:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {t("about.s1_title")}
                    </h4>
                    <p
                      className="text-xs xl:text-sm text-white/85 leading-relaxed font-light"
                      style={{ margin: 0 }}
                    >
                      {t("about.s1_desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Calendar */}
              <div className="rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group flex flex-col shadow-xl">
                <div className="h-60 sm:h-64 lg:h-72 overflow-hidden relative bg-black/30 p-2.5">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                      src="/about-service-calendar.png"
                      alt="Calendar Design"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-5 left-5 w-8 h-8 rounded-full bg-white text-[#0077b6] text-xs font-black shadow-lg flex items-center justify-center tracking-normal">
                    02
                  </div>
                </div>

                <div style={{ padding: "1.75rem" }} className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4
                      className="text-lg xl:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {t("about.s2_title")}
                    </h4>
                    <p
                      className="text-xs xl:text-sm text-white/85 leading-relaxed font-light"
                      style={{ margin: 0 }}
                    >
                      {t("about.s2_desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Branding */}
              <div className="rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group flex flex-col shadow-xl">
                <div className="h-60 sm:h-64 lg:h-72 overflow-hidden relative bg-black/30 p-2.5">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                      src="/about-service-branding.png"
                      alt="Branding"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-5 left-5 w-8 h-8 rounded-full bg-white text-[#0077b6] text-xs font-black shadow-lg flex items-center justify-center tracking-normal">
                    03
                  </div>
                </div>

                <div style={{ padding: "1.75rem" }} className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4
                      className="text-lg xl:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {t("about.s3_title")}
                    </h4>
                    <p
                      className="text-xs xl:text-sm text-white/85 leading-relaxed font-light"
                      style={{ margin: 0 }}
                    >
                      {t("about.s3_desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
