"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function AboutHeroMeta() {
  const { lang, t } = useLanguage();

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex flex-col bg-white overflow-hidden"
    >
      {/* ======================================================== */}
      {/* 1. HERO BIRU META-STYLE (Foto 1)                         */}
      {/* ======================================================== */}
      <section
        className="relative w-full text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0077b6 0%, #0091D7 55%, #005a8d 100%)",
          paddingTop: "clamp(6.5rem, 11vh, 9rem)",
          paddingBottom: "clamp(5rem, 9vh, 7.5rem)",
          paddingLeft: "clamp(2rem, 6vw, 6rem)",
          paddingRight: "clamp(2rem, 6vw, 6rem)",
        }}
      >
        {/* Subtle DNA background texture */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-15 mix-blend-screen">
          <img
            src="/about-bg-pattern.jpg"
            alt="DNA Texture"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Ambient Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
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
          <p className="text-lg sm:text-xl lg:text-[1.35rem] text-white/90 font-normal leading-relaxed max-w-3xl mb-10">
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

          {/* Quick Metrics / Tagline */}
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
      </section>
    </motion.div>
  );
}
