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
      className="w-full flex flex-col bg-white overflow-hidden select-none"
    >
      {/* ========================================================================= */}
      {/* CONTAINER DUA KOLOM:                                                      */}
      {/* Kiri: Konten (Hero -> Visi & Misi -> Services)                            */}
      {/* Kanan: Strip Foto Vertikal "Work" sticky mengikuti scroll sampai Service  */}
      {/* ========================================================================= */}
      <div className="relative w-full flex flex-col lg:flex-row items-stretch">
        
        {/* ======================================================================= */}
        {/* KOLOM KIRI (LEBAR ~88%): SEMUA KONTEN TEKS & CARD                       */}
        {/* ======================================================================= */}
        <div className="w-full lg:w-[88%] xl:w-[89%] flex flex-col">
          
          {/* --------------------------------------------------------------------- */}
          {/* 1. HERO BIRU METADESIGN (Dinaikkan ke atas, badge dihapus)            */}
          {/* --------------------------------------------------------------------- */}
          <section
            className="relative w-full min-h-[92vh] flex flex-col justify-center text-white overflow-hidden"
            style={{
              background: "#0080c8",
              paddingTop: "clamp(5rem, 8vh, 6.5rem)", // Dinaikkan ke atas
              paddingBottom: "clamp(4.5rem, 7vh, 6rem)",
              paddingLeft: "clamp(2rem, 6vw, 6.5rem)",
              paddingRight: "clamp(2rem, 5vw, 5.5rem)",
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

            <div className="relative z-10 max-w-4xl">
              {/* Headline Besar MetaDesign */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[4.75rem] font-black tracking-tight leading-[1.08] mb-8 text-white">
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

              {/* 3 Metrik Prestasi */}
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
          </section>

          {/* --------------------------------------------------------------------- */}
          {/* 2. VISI & MISI (Dirapikan, jarak antar kalimat & align estetik)         */}
          {/* --------------------------------------------------------------------- */}
          <section
            className="w-full bg-[#f8f9fa] border-t border-gray-200"
            style={{
              paddingTop: "clamp(5rem, 8vh, 7rem)",
              paddingBottom: "clamp(5rem, 8vh, 7rem)",
              paddingLeft: "clamp(2rem, 6vw, 6.5rem)",
              paddingRight: "clamp(2rem, 5vw, 5.5rem)",
            }}
          >
            <div className="w-full max-w-6xl">
              {/* Header Visi & Misi */}
              <div className="mb-14 pb-6 border-b border-gray-300">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0080c8] block mb-3">
                  {t("about.v_subtitle")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                  {t("about.v_title")}
                </h2>
              </div>

              {/* 2 Kolom Visi & Misi: Rapi, Lega, Estetik */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                
                {/* Box 1: Visi & Tujuan */}
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0080c8] text-xs font-bold uppercase tracking-wider mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#0080c8]" />
                      <span>{t("about.v_purpose_badge")}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mb-6 leading-snug">
                      {t("about.v_vision_title")}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify font-normal">
                      {t("about.v_vision_desc")}
                    </p>
                  </div>

                  <div className="pt-8 mt-10 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                      {t("about.v_vision_tag")}
                    </span>
                    <span className="text-lg font-bold text-[#0080c8]">01</span>
                  </div>
                </div>

                {/* Box 2: Misi & Nilai Utama */}
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0080c8] text-xs font-bold uppercase tracking-wider mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#0080c8]" />
                      <span>{t("about.v_core_badge")}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mb-6 leading-snug">
                      {t("about.v_core_title")}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-8 text-justify font-normal">
                      <strong className="text-gray-900 font-semibold">{t("about.v_core_desc_prefix")}</strong>
                      {t("about.v_core_desc")}
                    </p>

                    <blockquote className="border-l-4 border-[#0080c8] pl-5 py-1 text-xl sm:text-2xl font-bold text-gray-900 italic">
                      {t("about.v_core_quote")}
                    </blockquote>
                  </div>

                  <div className="pt-8 mt-10 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                      {t("about.v_core_tag")}
                    </span>
                    <span className="text-lg font-bold text-[#0080c8]">02</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* --------------------------------------------------------------------- */}
          {/* 3. SERVICES & EXPERTISE (Diberi jarak nyaman & tidak tumpang tindih)    */}
          {/* --------------------------------------------------------------------- */}
          <section
            className="w-full bg-white border-t border-gray-200"
            style={{
              paddingTop: "clamp(5rem, 8vh, 7rem)",
              paddingBottom: "clamp(6rem, 9vh, 8rem)",
              paddingLeft: "clamp(2rem, 6vw, 6.5rem)",
              paddingRight: "clamp(2rem, 5vw, 5.5rem)",
            }}
          >
            <div className="w-full max-w-6xl">
              {/* Header Services */}
              <div className="mb-14 pb-6 border-b border-gray-200 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0080c8] block mb-3">
                    {t("about.s_subtitle")}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
                    {t("about.s_title")}
                  </h2>
                </div>
                <p className="text-gray-500 max-w-md text-sm sm:text-base leading-relaxed">
                  {lang === "en"
                    ? "Delivering specialized publication and brand consulting solutions tailored for high-profile corporations."
                    : "Menghadirkan solusi publikasi dan konsultasi brand terpadu bagi korporasi dan institusi ternama."}
                </p>
              </div>

              {/* 3 Kartu Layanan Unggulan */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {/* Service 1 */}
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-3xl p-8 sm:p-10 hover:border-[#0080c8] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
                  <div>
                    <span className="text-4xl font-black text-gray-300 group-hover:text-[#0080c8] transition-colors block mb-6 font-mono">
                      01
                    </span>
                    <h3 className="text-2xl font-black text-gray-950 mb-4 leading-snug">
                      {t("about.s1_title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t("about.s1_desc")}
                    </p>
                  </div>
                  <div className="pt-8 mt-8 border-t border-gray-200 text-xs font-bold text-[#0080c8] uppercase tracking-wider">
                    Annual & ESG Reports
                  </div>
                </div>

                {/* Service 2 */}
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-3xl p-8 sm:p-10 hover:border-[#0080c8] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
                  <div>
                    <span className="text-4xl font-black text-gray-300 group-hover:text-[#0080c8] transition-colors block mb-6 font-mono">
                      02
                    </span>
                    <h3 className="text-2xl font-black text-gray-950 mb-4 leading-snug">
                      {t("about.s2_title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t("about.s2_desc")}
                    </p>
                  </div>
                  <div className="pt-8 mt-8 border-t border-gray-200 text-xs font-bold text-[#0080c8] uppercase tracking-wider">
                    Corporate Publication
                  </div>
                </div>

                {/* Service 3 */}
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-3xl p-8 sm:p-10 hover:border-[#0080c8] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
                  <div>
                    <span className="text-4xl font-black text-gray-300 group-hover:text-[#0080c8] transition-colors block mb-6 font-mono">
                      03
                    </span>
                    <h3 className="text-2xl font-black text-gray-950 mb-4 leading-snug">
                      {t("about.s3_title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t("about.s3_desc")}
                    </p>
                  </div>
                  <div className="pt-8 mt-8 border-t border-gray-200 text-xs font-bold text-[#0080c8] uppercase tracking-wider">
                    Brand & Identity Systems
                  </div>
                </div>
              </div>

              {/* Bottom Banner Hubungi Kami (Diberi margin top besar agar tidak bertabrakan) */}
              <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0077b6] to-[#0091D7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-8 shadow-xl">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-cyan-200 block mb-2">
                    {t("footer.lets_talk")}
                  </span>
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black">
                    {lang === "en" ? "Ready to transform your brand?" : "Siap mentransformasi brand Anda?"}
                  </h4>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-[#0077b6] font-bold text-base transition-all shadow-md shrink-0 self-start sm:self-auto"
                >
                  <span>{t("nav.contact")}</span>
                  <span>→</span>
                </Link>
              </div>

            </div>
          </section>

        </div>

        {/* ======================================================================= */}
        {/* KOLOM KANAN (~11%): STRIP FOTO STICKY MENEMPEL & MENGIKUTI SCROLL       */}
        {/* (Tetap terlihat menempel di sisi kanan layar saat di-scroll ke bawah)    */}
        {/* ======================================================================= */}
        <div className="w-full lg:w-[12%] xl:w-[11%] relative bg-black shrink-0">
          <div className="sticky top-0 h-[320px] lg:h-screen w-full overflow-hidden select-none">
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

              {/* Teks Vertikal "Work" persis MetaDesign */}
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
              <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-1.5 z-20 pointer-events-none">
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
          </div>
        </div>

      </div>
    </motion.div>
  );
}
