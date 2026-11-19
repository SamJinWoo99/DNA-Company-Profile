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
        {/* VISI & MISI (Sejajar Presisi dengan Hero Atas, Rapi & Seimbang)         */}
        {/* ----------------------------------------------------------------------- */}
        <section
          className="w-full bg-[#f8f9fa] border-t border-gray-200"
          style={{
            paddingTop: "clamp(6rem, 10vh, 8.5rem)",
            paddingBottom: "clamp(6rem, 10vh, 8.5rem)",
            paddingLeft: "clamp(2.5rem, 6.5vw, 6.5rem)",
            paddingRight: "clamp(2.5rem, 6.5vw, 6.5rem)",
          }}
        >
          <div className="w-full max-w-6xl">
            {/* Header Visi & Misi */}
            <div className="mb-16 pb-8 border-b border-gray-200">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                {t("about.v_title")}
              </h2>
            </div>

            {/* 2 Kolom Visi & Misi: Rapi, Lega, Sejajar dengan Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

              {/* Box 1: Visi & Tujuan */}
              <div className="bg-white rounded-3xl p-10 sm:p-12 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0080c8] text-xs font-bold uppercase tracking-wider mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#0080c8]" />
                    <span>{t("about.v_purpose_badge")}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mb-6 leading-snug">
                    {t("about.v_vision_title")}
                  </h3>

                  <p className="text-gray-600 leading-[1.85] text-base sm:text-lg font-normal">
                    {t("about.v_vision_desc")}
                  </p>
                </div>

                <div className="pt-8 mt-12 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                    {t("about.v_vision_tag")}
                  </span>
                  <span className="text-lg font-bold text-[#0080c8]">01</span>
                </div>
              </div>

              {/* Box 2: Misi & Nilai Utama */}
              <div className="bg-white rounded-3xl p-10 sm:p-12 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0080c8] text-xs font-bold uppercase tracking-wider mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#0080c8]" />
                    <span>{t("about.v_core_badge")}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mb-6 leading-snug">
                    {t("about.v_core_title")}
                  </h3>

                  <p className="text-gray-600 leading-[1.85] text-base sm:text-lg mb-8 font-normal">
                    <strong className="text-gray-900 font-semibold">{t("about.v_core_desc_prefix")}</strong>{" "}
                    {t("about.v_core_desc")}
                  </p>

                  <blockquote className="border-l-4 border-[#0080c8] pl-5 py-2 text-xl sm:text-2xl font-bold text-gray-900 italic">
                    {t("about.v_core_quote")}
                  </blockquote>
                </div>

                <div className="pt-8 mt-12 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                    {t("about.v_core_tag")}
                  </span>
                  <span className="text-lg font-bold text-[#0080c8]">02</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* SERVICES & EXPERTISE (Sejajar Presisi dengan Hero Atas, Rapi & Seimbang) */}
        {/* ----------------------------------------------------------------------- */}
        <section
          className="w-full bg-white border-t border-gray-200"
          style={{
            paddingTop: "clamp(6rem, 10vh, 8.5rem)",
            paddingBottom: "clamp(7rem, 12vh, 10rem)",
            paddingLeft: "clamp(2.5rem, 6.5vw, 6.5rem)",
            paddingRight: "clamp(2.5rem, 6.5vw, 6.5rem)",
          }}
        >
          <div className="w-full max-w-6xl">
            {/* Header Services */}
            <div className="mb-16 pb-8 border-b border-gray-200 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
                  {t("about.s_title")}
                </h2>
              </div>
              <p className="text-gray-500 max-w-lg text-sm sm:text-base leading-relaxed">
                {lang === "en"
                  ? "Delivering specialized publication and brand consulting solutions tailored for high-profile corporations."
                  : "Menghadirkan solusi publikasi dan konsultasi brand terpadu bagi korporasi dan institusi ternama."}
              </p>
            </div>

            {/* 3 Kartu Layanan Unggulan dengan Foto Mockup Produk sesuai Referensi User */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-20 items-stretch">
              {/* Service 1: Annual & Sustainability Reports */}
              <div className="bg-[#f8f9fa] border border-gray-200/90 rounded-3xl overflow-hidden hover:border-[#0080c8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="relative w-full h-56 sm:h-64 bg-gradient-to-b from-[#0284c7] to-[#0369a1] p-5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/about-service-annual-report.png"
                    alt="Annual & Sustainability Reports"
                    className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/90 text-[#0080c8] shadow-sm">
                    01
                  </span>
                </div>
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-3 leading-snug">
                      {t("about.s1_title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t("about.s1_desc")}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0080c8] uppercase tracking-wider">
                      Annual & ESG Reports
                    </span>
                    <span className="text-gray-400 group-hover:text-[#0080c8] group-hover:translate-x-1 transition-all font-bold">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* Service 2: Calendar Design */}
              <div className="bg-[#f8f9fa] border border-gray-200/90 rounded-3xl overflow-hidden hover:border-[#0080c8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="relative w-full h-56 sm:h-64 bg-gradient-to-b from-gray-700 to-gray-900 p-5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/about-service-calendar.png"
                    alt="Calendar Design"
                    className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/90 text-gray-900 shadow-sm">
                    02
                  </span>
                </div>
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-3 leading-snug">
                      {t("about.s2_title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t("about.s2_desc")}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0080c8] uppercase tracking-wider">
                      Corporate Publication
                    </span>
                    <span className="text-gray-400 group-hover:text-[#0080c8] group-hover:translate-x-1 transition-all font-bold">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* Service 3: Corporate Branding & Collateral */}
              <div className="bg-[#f8f9fa] border border-gray-200/90 rounded-3xl overflow-hidden hover:border-[#0080c8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="relative w-full h-56 sm:h-64 bg-gradient-to-b from-red-600 to-red-800 p-5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/about-service-branding.png"
                    alt="Corporate Branding & Collateral"
                    className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/90 text-red-600 shadow-sm">
                    03
                  </span>
                </div>
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-3 leading-snug">
                      {t("about.s3_title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t("about.s3_desc")}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0080c8] uppercase tracking-wider">
                      Brand & Identity Systems
                    </span>
                    <span className="text-gray-400 group-hover:text-[#0080c8] group-hover:translate-x-1 transition-all font-bold">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner Hubungi Kami */}
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
    </motion.div>
  );
}
