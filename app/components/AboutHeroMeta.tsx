"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function AboutHeroMeta() {
  const { lang, t } = useLanguage();

  // Carousel foto berjalan di strip kanan
  const heroSlides = [
    { id: 1, image: "/hero-slide-1.jpg", label: "Annual Report Excellence" },
    { id: 2, image: "/hero-slide-2.jpg", label: "Calendar Design" },
    { id: 3, image: "/hero-slide-3.jpg", label: "Corporate Publications" },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full flex flex-col bg-white select-none"
    >
      {/* ========================================================================= */}
      {/* 1. STRIP FOTO KANAN YANG TETAP MENEMPEL (FIXED) DARI HERO SAMPAI SERVICES */}
      {/* ========================================================================= */}
      <aside className="hidden lg:block fixed top-0 right-0 w-[12%] xl:w-[11%] h-screen bg-black z-30 select-none overflow-hidden">
        <Link
          href="/work"
          className="relative w-full h-full block group cursor-pointer"
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
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            </motion.div>
          </AnimatePresence>

          {/* TEKS VERTIKAL "WORK" SELALU DI TENGAH FOTO */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
            <span
              className="text-base lg:text-lg font-bold tracking-[0.25em] text-white uppercase whitespace-nowrap drop-shadow-md select-none"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Work
            </span>
          </div>

          {/* Dot Indicator di bagian bawah strip foto */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-1.5 z-40 pointer-events-none">
            {heroSlides.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${activeSlide === idx ? "w-4 bg-white" : "w-1.5 bg-white/40"
                  }`}
              />
            ))}
          </div>
        </Link>
      </aside>

      {/* ========================================================================= */}
      {/* 2. AREA KONTEN KIRI: HERO, VISI & MISI, SERVICES                          */}
      {/* ========================================================================= */}
      <div className="w-full lg:pr-[12%] xl:pr-[11%] flex flex-col">

        {/* ----------------------------------------------------------------------- */}
        {/* HERO BIRU METADESIGN (Presisi 100% Sesuai Foto 2 Acuan User)            */}
        {/* ----------------------------------------------------------------------- */}
        <section
          className="relative w-full min-h-screen flex flex-col justify-center text-white"
          style={{
            backgroundColor: "#0080c8",
            paddingTop: "clamp(6.5rem, 12vh, 9.5rem)",
            paddingBottom: "clamp(6.5rem, 12vh, 10rem)",
            paddingLeft: "clamp(2.5rem, 6.5vw, 6.5rem)",
            paddingRight: "clamp(2rem, 5vw, 5rem)",
          }}
        >
          {/* Wadah Teks: Diberi max-w-4xl agar baris judul memanjang rapi persis Foto 2 */}
          <div className="relative z-10 w-full max-w-4xl">

            {/* Headline Besar MetaDesign */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-black tracking-tight leading-[1.25] text-white">
              {lang === "en" ? (
                <>
                  <span className="block mb-2 sm:mb-3">We turn corporate</span>
                  <span className="block mb-2 sm:mb-3">stories into powerful</span>
                  <span className="block">visual identity</span>
                </>
              ) : (
                <>
                  <span className="block mb-2 sm:mb-3">Mengubah cerita korporasi</span>
                  <span className="block mb-2 sm:mb-3">menjadi identitas visual</span>
                  <span className="block">yang berdaya</span>
                </>
              )}
            </h1>

            {/* SPASI ATAS BAWAH LEGA ANTARA JUDUL DAN PARAGRAF */}
            <div style={{ marginTop: "38px", marginBottom: "44px" }}>
              <p
                className="text-white/90 font-normal max-w-3xl tracking-normal text-justify sm:text-left"
                style={{
                  fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
                  lineHeight: "1.9",
                  letterSpacing: "0.01em",
                }}
              >
                {lang === "en" ? (
                  <>
                    We are a creative brand and corporate communication consultancy based in South
                    Jakarta. Since 2013, we have been collaborating with leading State-Owned
                    Enterprises (BUMN), ministries, and multinational corporations to solve brand,
                    publication, and annual report challenges with award-winning design
                    excellence.
                  </>
                ) : (
                  <>
                    Kami adalah konsultan brand kreatif dan komunikasi korporat berbasis di Jakarta
                    Selatan. Sejak 2013, kami bermitra dengan puluhan BUMN terkemuka, kementerian,
                    dan korporasi multinasional dalam menyelesaikan tantangan branding, desain
                    publikasi, serta laporan tahunan dengan standar keunggulan global.
                  </>
                )}
              </p>
            </div>

            {/* 3 Metrik Prestasi: Spasi padding top seimbang dan rapi */}
            <div
              className="flex flex-row flex-nowrap items-center border-t border-white/20 w-fit max-w-full"
              style={{
                paddingTop: "36px",
                gap: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              <div className="shrink-0 flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2">12+</span>
                <span className="text-xs uppercase tracking-wider text-white/75 font-semibold whitespace-nowrap">{t("about.metric_exp")}</span>
              </div>
              <div className="w-[1px] h-11 bg-white/20 shrink-0" />
              <div className="shrink-0 flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2">200+</span>
                <span className="text-xs uppercase tracking-wider text-white/75 font-semibold whitespace-nowrap">{t("about.metric_proj")}</span>
              </div>
              <div className="w-[1px] h-11 bg-white/20 shrink-0" />
              <div className="shrink-0 flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2">30+</span>
                <span className="text-xs uppercase tracking-wider text-white/75 font-semibold whitespace-nowrap">{t("about.metric_awards")}</span>
              </div>
            </div>

          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* VISI & MISI (Slide 2: Layar Penuh Mandiri - Sesuai Desain Laptop Acuan) */}
        {/* ----------------------------------------------------------------------- */}
        <section
          className="w-full min-h-screen bg-white border-t border-gray-200 flex flex-col justify-center"
          style={{
            paddingTop: "clamp(5rem, 10vh, 8rem)",
            paddingBottom: "clamp(5rem, 10vh, 8rem)",
            paddingLeft: "clamp(2.5rem, 6.5vw, 6.5rem)",
            paddingRight: "clamp(2rem, 4vw, 4rem)",
          }}
        >
          <div className="w-full max-w-[1550px]">
            {/* Grid 2 Kolom: Kiri Teks Vision & Core Values, Kanan Ilustrasi Laptop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Kolom Kiri: Teks Vision & Purpose + Core Values */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center pr-0 lg:pr-4">
                {/* 1. Vision & Purpose */}
                <div style={{ marginBottom: "56px" }}>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-gray-950 tracking-tight leading-[1.1] mb-6">
                    {t("about.v_vision_title")}
                  </h2>
                  <div style={{ marginTop: "24px", marginBottom: "36px" }}>
                    <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl font-normal leading-[1.9] max-w-2xl">
                      {t("about.v_vision_desc")}
                    </p>
                  </div>
                </div>

                {/* 2. Core Values */}
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-gray-950 tracking-tight leading-[1.1] mb-6">
                    {t("about.v_core_title")}
                  </h2>
                  <div style={{ marginTop: "24px" }}>
                    <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl font-normal leading-[1.9] max-w-2xl">
                      <strong className="text-gray-900 font-semibold">{t("about.v_core_desc_prefix")}</strong>{" "}
                      {t("about.v_core_desc")}{" "}
                      <span className="text-gray-900 font-medium">({t("about.v_core_quote")}).</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Ilustrasi Laptop DNA Komunika (DIBESARKAN LEBIH DOMINAN) */}
              <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center">
                <div className="relative w-full max-w-[650px] xl:max-w-[720px] flex items-center justify-center">
                  <img
                    src="/dna-laptop-illustration.png"
                    alt="DNA Komunika Vision & Purpose"
                    className="w-full h-auto max-h-[600px] xl:max-h-[660px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* SERVICES & EXPERTISE (Slide 3: Layar Penuh Mandiri di Bawahnya)         */}
        {/* ----------------------------------------------------------------------- */}
        <section
          className="w-full min-h-screen bg-white border-t border-gray-200 flex flex-col justify-start"
          style={{
            paddingTop: "clamp(4.5rem, 8vh, 7rem)",
            paddingBottom: "clamp(5rem, 10vh, 8rem)",
            paddingLeft: "clamp(2.5rem, 6.5vw, 6.5rem)",
            paddingRight: "clamp(2.5rem, 5vw, 4.5rem)",
          }}
        >
          <div className="w-full max-w-[1450px]">
            {/* Header Services (Dinaikkan ke atas dengan margin bawah ekstra) */}
            <div className="mb-20 sm:mb-24 lg:mb-28">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight">
                {t("about.s_title")}
              </h2>
            </div>

            {/* 3 Kartu Layanan Unggulan Persis Foto 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20 items-stretch">
              
              {/* Service 1: Annual & Sustainability Reports */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between group">
                <div>
                  {/* Foto Mockup Box */}
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#f0f2f5] p-6 flex items-center justify-center overflow-hidden mb-8">
                    <span className="absolute top-4 left-4 text-xs font-mono font-bold text-gray-400">
                      01
                    </span>
                    <img
                      src="/about-service-annual-report.png"
                      alt="Annual & Sustainability Reports"
                      className="max-h-full max-w-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-4 leading-snug">
                    {t("about.s1_title")}
                  </h3>
                  <div style={{ marginTop: "12px", marginBottom: "28px" }}>
                    <p className="text-gray-600 leading-[1.8] text-sm sm:text-base">
                      {t("about.s1_desc")}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-[#0080c8] uppercase tracking-wider">
                    ANNUAL & ESG REPORTS
                  </span>
                </div>
              </div>

              {/* Service 2: Calendar Design */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between group">
                <div>
                  {/* Foto Mockup Box */}
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#f0f2f5] p-6 flex items-center justify-center overflow-hidden mb-8">
                    <span className="absolute top-4 left-4 text-xs font-mono font-bold text-gray-400">
                      02
                    </span>
                    <img
                      src="/about-service-calendar.png"
                      alt="Calendar Design"
                      className="max-h-full max-w-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500 mx-auto"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-4 leading-snug">
                    {t("about.s2_title")}
                  </h3>
                  <div style={{ marginTop: "12px", marginBottom: "28px" }}>
                    <p className="text-gray-600 leading-[1.8] text-sm sm:text-base">
                      {t("about.s2_desc")}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-[#0080c8] uppercase tracking-wider">
                    CORPORATE PUBLICATION
                  </span>
                </div>
              </div>

              {/* Service 3: Corporate Branding & Collateral */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between group">
                <div>
                  {/* Foto Mockup Box */}
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#9e0c15] p-6 flex items-center justify-center overflow-hidden mb-8">
                    <span className="absolute top-4 left-4 text-xs font-mono font-bold text-white/70">
                      03
                    </span>
                    <img
                      src="/about-service-branding.png"
                      alt="Corporate Branding & Collateral"
                      className="max-h-full max-w-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-4 leading-snug">
                    {t("about.s3_title")}
                  </h3>
                  <div style={{ marginTop: "12px", marginBottom: "28px" }}>
                    <p className="text-gray-600 leading-[1.8] text-sm sm:text-base">
                      {t("about.s3_desc")}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-[#0080c8] uppercase tracking-wider">
                    BRAND & IDENTITY SYSTEMS
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </motion.div>
  );
}
