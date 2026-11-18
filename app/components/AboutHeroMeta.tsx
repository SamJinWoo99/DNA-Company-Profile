"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function AboutHeroMeta() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);

  const tabs = [
    { id: 0, title: t("about.tab0_title"), number: "01" },
    { id: 1, title: t("about.tab1_title"), number: "02" },
    { id: 2, title: t("about.tab2_title"), number: "03" },
  ];

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex flex-col bg-white overflow-hidden"
    >
      {/* ======================================================== */}
      {/* 1. HERO BIRU META-STYLE (Sesuai Foto Acuan User)        */}
      {/* ======================================================== */}
      <section
        className="relative w-full text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0077b6 0%, #0091D7 55%, #005a8d 100%)",
          paddingTop: "clamp(6rem, 10vh, 8.5rem)",
          paddingBottom: "clamp(4.5rem, 8vh, 6.5rem)",
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
          <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-white/20">
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

      {/* ======================================================== */}
      {/* 2. SECTION PUTIH: OUR CORE SOLUTIONS / KAPABILITAS       */}
      {/* ======================================================== */}
      <section
        className="w-full bg-white text-gray-900"
        style={{
          paddingTop: "clamp(4.5rem, 7vh, 6.5rem)",
          paddingBottom: "clamp(5rem, 8vh, 7rem)",
          paddingLeft: "clamp(2rem, 6vw, 6rem)",
          paddingRight: "clamp(2rem, 6vw, 6rem)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section Putih */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold text-[#0077b6] tracking-widest uppercase block mb-2">
                {lang === "en" ? "WHAT WE DO" : "KAPABILITAS KAMI"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
                {lang === "en" ? "Our core solutions" : "Solusi & Layanan Utama"}
              </h2>
            </div>

            {/* Tab Filter 01, 02, 03 */}
            <div className="flex items-center gap-6 sm:gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 0 | 1 | 2)}
                  className={`pb-2 text-sm sm:text-base font-bold transition-all border-b-2 cursor-pointer ${
                    activeTab === tab.id
                      ? "border-[#0077b6] text-[#0077b6]"
                      : "border-transparent text-gray-400 hover:text-gray-700"
                  }`}
                >
                  <span className="mr-2 text-xs font-mono">{tab.number}</span>
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="tab0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    {t("about.p1")}
                  </p>
                  <p>
                    {t("about.p2_pre")}
                    <strong className="text-gray-900 font-semibold">{t("about.p2_company")}</strong>
                    {t("about.p2_mid")}
                    <span className="text-[#0077b6] font-bold">{t("about.p2_brand")}</span>
                    {t("about.p2_post")}
                  </p>
                  <p>{t("about.p3")}</p>
                  <p>{t("about.p4")}</p>
                </div>

                <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm space-y-5">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077b6] bg-blue-50 px-3 py-1 rounded-full">
                    {t("about.ethos_badge")}
                  </span>
                  <h3 className="text-2xl font-black text-gray-900">{t("about.ethos_title")}</h3>
                  <p className="text-gray-700 italic leading-relaxed text-base sm:text-lg">
                    {t("about.ethos_quote")}
                  </p>
                  <div className="pt-4 border-t border-gray-200 text-xs text-gray-500 font-medium">
                    {t("about.est")}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div
                key="tab1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Vision Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6] block mb-3">
                      {t("about.v_purpose_badge")}
                    </span>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">{t("about.v_vision_title")}</h3>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {t("about.v_vision_desc")}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-200">
                    <span className="text-xs font-bold text-gray-500 tracking-wide uppercase">
                      {t("about.v_vision_tag")}
                    </span>
                  </div>
                </div>

                {/* Values Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6] block mb-3">
                      {t("about.v_core_badge")}
                    </span>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">{t("about.v_core_title")}</h3>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-3">
                      <strong className="text-gray-900">{t("about.v_core_desc_prefix")}</strong>
                      {t("about.v_core_desc")}
                    </p>
                    <blockquote className="text-xl font-bold text-[#0077b6] italic">
                      {t("about.v_core_quote")}
                    </blockquote>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-200">
                    <span className="text-xs font-bold text-gray-500 tracking-wide uppercase">
                      {t("about.v_core_tag")}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 2 && (
              <motion.div
                key="tab2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Service 1 */}
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-[#0077b6] transition-all flex flex-col justify-between group">
                  <div>
                    <span className="text-3xl font-black text-gray-300 group-hover:text-[#0077b6] transition-colors block mb-4 font-mono">
                      01
                    </span>
                    <h3 className="text-xl font-black text-gray-900 mb-3">{t("about.s1_title")}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t("about.s1_desc")}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-200 text-xs font-bold text-[#0077b6] uppercase tracking-wider">
                    Core Specialization
                  </div>
                </div>

                {/* Service 2 */}
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-[#0077b6] transition-all flex flex-col justify-between group">
                  <div>
                    <span className="text-3xl font-black text-gray-300 group-hover:text-[#0077b6] transition-colors block mb-4 font-mono">
                      02
                    </span>
                    <h3 className="text-xl font-black text-gray-900 mb-3">{t("about.s2_title")}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t("about.s2_desc")}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-200 text-xs font-bold text-[#0077b6] uppercase tracking-wider">
                    Corporate Publication
                  </div>
                </div>

                {/* Service 3 */}
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-[#0077b6] transition-all flex flex-col justify-between group">
                  <div>
                    <span className="text-3xl font-black text-gray-300 group-hover:text-[#0077b6] transition-colors block mb-4 font-mono">
                      03
                    </span>
                    <h3 className="text-xl font-black text-gray-900 mb-3">{t("about.s3_title")}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t("about.s3_desc")}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-200 text-xs font-bold text-[#0077b6] uppercase tracking-wider">
                    Visual Identity
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Hubungi Kami di bagian bawah halaman About */}
          <div className="mt-20 pt-12 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 block mb-1">
                {t("footer.lets_talk")}
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-gray-900">
                {lang === "en" ? "Ready to transform your brand?" : "Siap mentransformasi brand Anda?"}
              </h4>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0077b6] hover:bg-[#005a8d] text-white font-bold text-base transition-all shadow-lg hover:shadow-cyan-500/25 shrink-0 self-start sm:self-auto"
            >
              <span>{t("nav.contact")}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
