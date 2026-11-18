"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function AboutHeroMeta() {
  const { lang, t } = useLanguage();

  // Foto carousel berjalan
  const heroSlides = [
    { id: 1, image: "/hero-slide-1.jpg", label: "Annual Report Excellence" },
    { id: 2, image: "/hero-slide-2.jpg", label: "Calendar Design" },
    { id: 3, image: "/hero-slide-3.jpg", label: "Corporate Publications" },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Otomatis ganti slide setiap 4.5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    // Transisi geser dari Kiri ke Kanan
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex flex-col overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* HERO SECTION PERSIS METADESIGN:                                          */}
      {/* Kolom Kiri Biru Solid Penuh (No rounded card), Kolom Kanan Peek Strip Foto */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden select-none">
        
        {/* ==================================================== */}
        {/* 1. BAGIAN KIRI: BIRU SOLID FULL SCREEN (PERSIS FOTO) */}
        {/* ==================================================== */}
        <div
          className="w-full lg:w-[88%] xl:w-[89%] relative z-10 flex flex-col justify-center text-white"
          style={{
            background: "#0080c8", // Biru solid DNA Meta-style
            paddingTop: "clamp(6.5rem, 11vh, 9rem)",
            paddingBottom: "clamp(4.5rem, 8vh, 6.5rem)",
            paddingLeft: "clamp(2rem, 6vw, 6.5rem)",
            paddingRight: "clamp(2rem, 5vw, 5.5rem)",
          }}
        >
          {/* Headline Besar MetaDesign */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[4.75rem] font-black tracking-tight leading-[1.08] mb-8 text-white max-w-4xl">
            {lang === "en" ? (
              <>We turn corporate stories into powerful visual identity</>
            ) : (
              <>Mengubah cerita korporasi menjadi identitas visual yang berdaya</>
            )}
          </h1>

          {/* Paragraf MetaDesign */}
          <p className="text-base sm:text-lg lg:text-[1.2rem] text-white/95 font-normal leading-relaxed max-w-3xl mb-12">
            {lang === "en" ? (
              <>
                We are a creative brand and corporate communication consultancy based in South Jakarta.
                Since 2013, we have been collaborating with leading State-Owned Enterprises (BUMN),
                ministries, and multinational corporations to solve brand, publication, and annual report challenges
                with award-winning design excellence.
              </>
            ) : (
              <>
                Kami adalah konsultan brand kreatif dan komunikasi korporat berbasis di Jakarta Selatan.
                Sejak 2013, kami bermitra dengan puluhan BUMN terkemuka, kementerian, dan korporasi multinasional
                dalam menyelesaikan tantangan branding, desain publikasi, serta laporan tahunan dengan standar keunggulan global.
              </>
            )}
          </p>

          {/* 3 Metrik Prestasi di Bawah Teks */}
          <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/25 max-w-xl">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">12+</div>
              <div className="text-xs uppercase tracking-wider text-white/80">{t("about.metric_exp")}</div>
            </div>
            <div className="w-[1px] h-8 bg-white/25" />
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">200+</div>
              <div className="text-xs uppercase tracking-wider text-white/80">{t("about.metric_proj")}</div>
            </div>
            <div className="w-[1px] h-8 bg-white/25" />
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">30+</div>
              <div className="text-xs uppercase tracking-wider text-white/80">{t("about.metric_awards")}</div>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 2. BAGIAN KANAN: PEEK STRIP FOTO (PERSIS FOTO 2)      */}
        {/* Strip foto vertikal yang terpotong di tepi kanan     */}
        {/* ==================================================== */}
        <Link
          href="/work"
          className="w-full lg:w-[12%] xl:w-[11%] relative min-h-[300px] lg:min-h-full bg-black group overflow-hidden block cursor-pointer select-none"
          title="Explore Our Work"
        >
          {/* Carousel Slide Foto */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={heroSlides[activeSlide].image}
                alt={heroSlides[activeSlide].label}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
              />
              {/* Gelap subtle agar teks Work kontras */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            </motion.div>
          </AnimatePresence>

          {/* Teks Vertikal "Work" persis di Foto MetaDesign */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <span
              className="text-base lg:text-lg font-bold tracking-[0.2em] text-white uppercase whitespace-nowrap drop-shadow-md"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Work
            </span>
          </div>

          {/* Dot Indicator di bagian bawah strip foto */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-1.5 z-20 pointer-events-none">
            {heroSlides.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  activeSlide === idx ? "w-4 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </Link>
      </section>
    </motion.div>
  );
}
