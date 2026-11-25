"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import WorkSection from "./WorkSection";

export default function WorkHeroMeta() {
  const { lang, t } = useLanguage();

  // 3 Foto background dari Home (Annual Report, Calendar, Publications)
  const homeSlides = [
    { id: 1, image: "/hero-slide-1.jpg", label: "Annual Report" },
    { id: 2, image: "/hero-slide-2.jpg", label: "Calendar Design" },
    { id: 3, image: "/hero-slide-3.jpg", label: "Publication Design" },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % homeSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [homeSlides.length]);

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full flex min-h-screen bg-white select-none"
    >
      {/* ========================================================================= */}
      {/* 1. STRIP KIRI (STICKY DI DESKTOP) - PERSIS UKURAN ASLI 12% / 11%           */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex flex-col justify-between items-center w-[12%] xl:w-[11%] shrink-0 h-screen sticky top-0 bg-[#0080c8] z-30 select-none overflow-hidden shadow-md">
        <Link
          href="/about"
          className="relative w-full h-full flex flex-col justify-between items-center py-10 group cursor-pointer bg-[#0080c8] hover:bg-[#0073b3] transition-colors"
          title="Explore About Us"
        >
          {/* Ruang atas */}
          <div className="w-full h-12" />

          {/* TEKS VERTIKAL "ABOUT" DI TENGAH STRIP BIRU (PUTIH) */}
          <div className="flex items-center justify-center pointer-events-none">
            <span
              className="text-base lg:text-lg font-bold tracking-[0.28em] text-white uppercase whitespace-nowrap drop-shadow-md select-none group-hover:scale-105 transition-transform"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              About
            </span>
          </div>

          {/* Dot Indicator di bagian bawah strip */}
          <div className="flex justify-center items-center pointer-events-none">
            <span className="w-4 h-1.5 rounded-full bg-white transition-all group-hover:w-6" />
          </div>
        </Link>
      </aside>

      {/* ========================================================================= */}
      {/* 2. AREA KONTEN KANAN: BACKGROUND HERO BIRU SOLID SEPERTI DI HOME FOTO 2   */}
      {/* ========================================================================= */}
      <div className="flex-1 min-w-0 flex flex-col bg-white">

        {/* ----------------------------------------------------------------------- */}
        {/* HERO WORK: BACKGROUND 3 FOTO DARI HOME BERGANTIAN + TEKS WORK TETAP SAMA*/}
        {/* ----------------------------------------------------------------------- */}
        <section
          className="relative w-full min-h-screen flex flex-col justify-center text-white overflow-hidden"
          style={{
            paddingTop: "clamp(6.5rem, 12vh, 10rem)",
            paddingBottom: "clamp(5rem, 10vh, 8rem)",
            paddingLeft: "clamp(4.5rem, 9vw, 11rem)",
            paddingRight: "clamp(2rem, 5vw, 5rem)",
          }}
        >
          {/* CAROUSEL 3 FOTO BACKGROUND DARI HOME DENGAN OVERLAY ELEGAN */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={homeSlides[activeSlide].image}
                  alt={homeSlides[activeSlide].label}
                  className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.02]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay Lembut & Terang */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/35 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/25 pointer-events-none" />
          </div>

          {/* Wadah Teks Headline & Deskripsi */}
          <div className="relative z-10 w-full max-w-4xl">
            {/* Headline Besar Teks Putih */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-black tracking-tight leading-[1.25] text-white">
              {lang === "en" ? (
                <>
                  <span className="block mb-2 sm:mb-3">Crafting impact through</span>
                  <span className="block">strategic design excellence</span>
                </>
              ) : (
                <>
                  <span className="block mb-2 sm:mb-3">Menciptakan dampak melalui</span>
                  <span className="block">keunggulan desain strategis</span>
                </>
              )}
            </h1>

            {/* Paragraf Deskripsi Teks Putih Lembut */}
            <div style={{ marginTop: "38px", marginBottom: "44px" }}>
              <p
                className="text-white/90 font-normal max-w-2xl tracking-normal text-justify sm:text-left"
                style={{
                  fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
                  lineHeight: "1.85",
                  letterSpacing: "0.01em",
                }}
              >
                {lang === "en" ? (
                  <>
                    Explore our curated portfolio of Annual &amp; Sustainability Reports, corporate
                    calendar design, brand identity systems, and strategic marketing collateral
                    trusted by leading enterprises, ministries, and global corporations since 2013.
                  </>
                ) : (
                  <>
                    Jelajahi kurasi portofolio Laporan Tahunan &amp; Keberlanjutan (Sustainability Report),
                    desain kalender korporat eksklusif, identitas brand, serta publikasi strategis
                    yang telah dipercaya oleh BUMN terkemuka, kementerian, dan korporasi multinasional sejak 2013.
                  </>
                )}
              </p>
            </div>

            {/* Tombol Scroll / Jelajahi Portfolio */}
            <div className="pt-2">
              <a
                href="#our-work-grid"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-[#1a8cc7] font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-slate-100 hover:scale-105 transition-all shadow-xl leading-none select-none"
                style={{
                  padding: "0.85rem 1.75rem",
                  minHeight: "44px",
                }}
              >
                <span className="leading-none pt-[1px]">{lang === "en" ? "Explore Portfolio" : "Jelajahi Portofolio"}</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1a8cc7]/10 shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#1a8cc7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </a>
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* WORK SECTION GRID LENGKAP: CATEGORIES, YEAR FILTER, PROJECTS, CLIENTS   */}
        {/* ----------------------------------------------------------------------- */}
        <div id="our-work-grid" className="w-full">
          <WorkSection />
        </div>

      </div>
    </motion.div>
  );
}
