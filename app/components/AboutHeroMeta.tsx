"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function AboutHeroMeta() {
  const { lang, t } = useLanguage();

  // Foto berjalan (carousel slider) seperti di Home
  const heroSlides = [
    {
      id: 1,
      image: "/hero-slide-1.jpg",
      label: "Annual Report Excellence",
    },
    {
      id: 2,
      image: "/hero-slide-2.jpg",
      label: "Calendar Design",
    },
    {
      id: 3,
      image: "/hero-slide-3.jpg",
      label: "Corporate Publications",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Otomatis berpindah slide setiap 4.5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    // Animasi geser dari KIRI ke KANAN (-100% -> 0)
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex flex-col overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* HERO SECTION: Biru di Kiri (Lebar), Foto Carousel Separoh di Kanan (Foto 3) */}
      {/* ========================================================================= */}
      <section
        className="relative w-full min-h-[92vh] lg:min-h-screen text-white overflow-hidden flex flex-col justify-between"
        style={{
          background: "linear-gradient(135deg, #0077b6 0%, #0091D7 55%, #005a8d 100%)",
          paddingTop: "clamp(6.5rem, 11vh, 9rem)",
          paddingBottom: "clamp(4.5rem, 8vh, 6.5rem)",
          paddingLeft: "clamp(2rem, 5vw, 5.5rem)",
          paddingRight: "0px", // Biar slide foto di kanan rapat flush ke pinggir layar
        }}
      >
        {/* Subtle DNA background texture */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-10 mix-blend-screen">
          <img
            src="/about-bg-pattern.jpg"
            alt="DNA Texture"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Ambient Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />

        {/* Grid Konten: Kiri Teks Biru, Kanan Foto Berjalan Separoh */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12 pr-6 sm:pr-10 lg:pr-0">
          
          {/* KOLOM KIRI: Teks Utama Headline & Paragraf */}
          <div className="lg:col-span-7 xl:col-span-8 max-w-4xl">
            {/* Badge Atas */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-cyan-300 rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-200">
                {t("about.top_badge")}
              </span>
            </div>

            {/* Headline Besar Tebal Meta-Style */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.08] mb-8 text-white">
              {lang === "en" ? (
                <>We turn corporate stories into powerful visual identity</>
              ) : (
                <>Mengubah cerita korporasi menjadi identitas visual yang berdaya</>
              )}
            </h1>

            {/* Paragraf Meta-Style */}
            <p className="text-lg sm:text-xl lg:text-[1.3rem] text-white/90 font-normal leading-relaxed max-w-3xl mb-10">
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

            {/* 3 Metrik Prestasi */}
            <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-200">12+</div>
                <div className="text-xs uppercase tracking-wider text-white/75">{t("about.metric_exp")}</div>
              </div>
              <div className="w-[1px] h-8 bg-white/20" />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-200">200+</div>
                <div className="text-xs uppercase tracking-wider text-white/75">{t("about.metric_proj")}</div>
              </div>
              <div className="w-[1px] h-8 bg-white/20" />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-200">30+</div>
                <div className="text-xs uppercase tracking-wider text-white/75">{t("about.metric_awards")}</div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Foto Berjalan Separoh (Peek Strip Carousel seperti Foto 3) */}
          <div className="lg:col-span-5 xl:col-span-4 relative h-[380px] sm:h-[480px] lg:h-[620px] w-full flex items-center justify-end overflow-hidden select-none">
            
            {/* Wadah foto peek strip menjulur ke kanan */}
            <Link
              href="/work"
              className="group relative w-full h-full rounded-l-3xl overflow-hidden shadow-2xl border-l border-y border-white/20 bg-black/40 block"
              title="Click to view our works"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={heroSlides[activeSlide].image}
                    alt={heroSlides[activeSlide].label}
                    className="w-full h-full object-cover object-left"
                  />
                  {/* Dark subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Label Vertikal "Work" di pojok kanan (Sesuai Foto 3) */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-black/60 backdrop-blur-md flex items-center justify-center border-l border-white/10 z-20 pointer-events-none">
                <span className="text-xs font-bold tracking-widest text-white uppercase -rotate-90 whitespace-nowrap">
                  Work →
                </span>
              </div>

              {/* Indikator Titik Slide */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSlide(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === idx ? "w-8 bg-cyan-300" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </Link>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
