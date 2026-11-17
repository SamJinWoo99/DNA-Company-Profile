"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-start overflow-hidden text-white"
      ref={ref}
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

      {/* Decorative DNA Motif Strip at the Right Side */}
      <div
        className="hidden lg:flex absolute inset-y-0 top-0 bottom-0 right-0 z-0 pointer-events-none items-center justify-end select-none overflow-hidden"
        style={{ right: "-24px" }}
        aria-hidden="true"
      >
        <img
          src="/about-pattern-strip.png"
          alt="DNA Pattern Totem"
          className="w-24 sm:w-32 lg:w-40 xl:w-48 2xl:w-56 h-full object-cover object-left select-none opacity-40 mix-blend-screen"
        />
      </div>

      {/* Main Container */}
      <div className="w-full relative z-20 max-w-full flex flex-col justify-start">
        {/* ======================================================== */}
        {/* TOP BAR: Breadcrumb Header & Navigation                  */}
        {/* ======================================================== */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/20 select-none shrink-0"
          style={{ marginBottom: "2.5rem" }}
        >
          {/* Left: Breadcrumb */}
          <div className="flex items-center gap-3 pb-3">
            <span className="w-7 h-0.5 bg-cyan-300 rounded-full inline-block" />
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-200 leading-none">
              {t("contact.top_badge")}
            </span>
          </div>

          {/* Right: Section Index */}
          <div className="flex items-center gap-7 sm:gap-9 pb-3 text-sm sm:text-base font-bold text-white">
            <span className="inline-flex items-center gap-2.5 border-b-2 border-white pb-3 -mb-[13px]">
              <span
                className="text-xs font-mono font-bold rounded-lg bg-white/25 text-cyan-200 shadow-sm leading-none shrink-0 flex items-center justify-center text-center"
                style={{
                  width: "28px",
                  height: "28px",
                }}
              >
                05
              </span>
              <span className="leading-none text-sm sm:text-base font-bold">
                {t("contact.top_index")}
              </span>
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION HEADER: Title & Subtitle                         */}
        {/* ======================================================== */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          style={{ marginBottom: "2.75rem" }}
        >
          <div>
            <span
              className="text-cyan-200 text-xs sm:text-sm font-bold uppercase tracking-widest block"
              style={{ marginBottom: "0.35rem" }}
            >
              {t("contact.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {t("contact.title_white")} {t("contact.title_yellow")} {t("contact.title_post")}
            </h2>
          </div>
          <p className="text-white/80 max-w-xl text-sm sm:text-base leading-relaxed hidden md:block">
            {t("contact.desc")}
          </p>
        </div>

        {/* ======================================================== */}
        {/* MAIN LAYOUT:                                             */}
        {/* Left: Official Contact Details & WhatsApp                */}
        {/* Right: Live Interactive Google Maps                      */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT COLUMN: Clean Corporate Contact Info Card */}
          <div
            className={`lg:col-span-4 flex flex-col transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <div className="h-full flex flex-col justify-evenly items-center text-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl px-6 sm:px-8 py-6 sm:py-7 overflow-hidden">

              {/* Address */}
              <div className="w-full flex flex-col items-center justify-center text-center py-2">
                <div className="inline-flex items-center justify-center gap-2 text-cyan-200 text-xs font-black uppercase tracking-wider mb-2">
                  <svg className="w-4 h-4 text-cyan-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{t("contact.address")}</span>
                </div>
                <p className="text-white text-sm sm:text-base font-bold leading-relaxed mb-0 text-center max-w-sm px-2 mx-auto">
                  Jl. Terogong Raya No. 36B Cilandak Barat,
                  <br className="hidden sm:inline" /> Jakarta Selatan 12430, Indonesia
                </p>
              </div>

              {/* Phone & Inquiry */}
              <div className="w-full flex flex-col items-center justify-center text-center border-t border-white/15 py-3">
                <div className="inline-flex items-center justify-center gap-2 text-cyan-200 text-xs font-black uppercase tracking-wider mb-2">
                  <svg className="w-4 h-4 text-cyan-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{t("contact.phone")}</span>
                </div>
                <div className="space-y-1 text-white text-sm sm:text-base font-semibold text-center mx-auto">
                  <p>021 278 28838</p>
                  <p>021 295 53570</p>
                </div>
              </div>

              {/* WhatsApp Official */}
              <div className="w-full flex flex-col items-center justify-center text-center border-t border-white/15 py-3">
                <div className="inline-flex items-center justify-center gap-2 text-cyan-200 text-xs font-black uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse shrink-0" />
                  <span>{t("contact.whatsapp")}</span>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=6287774443847&text=Hello%20DNA%20Komunika!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 font-bold text-sm sm:text-base transition-colors inline-block text-center mx-auto"
                >
                  +62 877-7444-3847
                </a>
              </div>

              {/* Business Email */}
              <div className="w-full flex flex-col items-center justify-center text-center border-t border-white/15 py-3">
                <div className="inline-flex items-center justify-center gap-2 text-cyan-200 text-xs font-black uppercase tracking-wider mb-2">
                  <svg className="w-4 h-4 text-cyan-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{t("contact.business")}</span>
                </div>
                <a
                  href="mailto:info@dnakomunika.com"
                  className="text-white hover:text-cyan-200 font-bold text-sm sm:text-base transition-colors inline-block break-all text-center mx-auto"
                >
                  info@dnakomunika.com
                </a>
              </div>

              {/* Consultation & Instant WhatsApp Action */}
              <div className="w-full flex flex-col items-center justify-center text-center border-t border-white/15 py-3">
                <span className="text-cyan-200 text-xs font-black uppercase tracking-wider block mb-1.5 text-center mx-auto">
                  {t("contact.consultation")}
                </span>
                <h4 className="text-base sm:text-lg font-black text-white mb-2 leading-tight text-center mx-auto">
                  {t("contact.send_msg")}
                </h4>
                <p className="text-white/80 text-xs leading-relaxed mb-4 max-w-sm text-center mx-auto px-2">
                  {t("contact.consultation_desc")}
                </p>

                <div className="w-full flex justify-center items-center">
                  <a
                    href="https://api.whatsapp.com/send?phone=6287774443847&text=Hello%20DNA%20Komunika!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xs inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg text-center mx-auto"
                  >
                    <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.74 5.47 2.03 7.77L0 32l8.47-2.22A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.307 22.013c-.4-.2-2.367-1.167-2.733-1.3-.367-.133-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.687-.623-3.213-1.98-1.187-1.057-1.99-2.363-2.223-2.763-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.657-.673-.9-.686-.233-.013-.5-.016-.767-.016-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.04.957.413 1.703.66 2.287.843.96.307 1.835.263 2.526.16.77-.113 2.367-.967 2.7-1.9.333-.933.333-1.733.233-1.9z" />
                    </svg>
                    <span>{t("contact.instant_wa")}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Live Interactive Google Maps */}
          <div
            className={`lg:col-span-8 flex flex-col transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <div className="relative w-full h-full min-h-[500px] lg:min-h-[560px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group bg-slate-900">
              {/* Google Maps Live iFrame */}
              <iframe
                title="DNA Komunika Office Location"
                src="https://maps.google.com/maps?q=DNA+Komunika,+Jl.+Terogong+Raya+No.+36B,+Cilandak+Barat,+Jakarta+Selatan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                style={{ filter: "contrast(1.05) saturate(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Location Pill */}
              <div className="absolute top-6 right-6 z-10 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/20 px-6 py-3 text-xs font-bold text-white shadow-xl flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="tracking-wide whitespace-nowrap">DNA Komunika Studio • Cilandak</span>
              </div>

              {/* Open in Google Maps External Button */}
              <a
                href="https://maps.google.com/?q=DNA+Komunika,+Jl.+Terogong+Raya+No.+36B+Cilandak+Barat+Jakarta+Selatan+12430"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 z-10 rounded-full bg-white text-slate-950 font-black text-xs uppercase px-6 py-3 shadow-2xl hover:bg-cyan-300 hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer border border-white/40"
                style={{ letterSpacing: "0.06em" }}
              >
                <span className="whitespace-nowrap">OPEN IN MAPS</span>
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
