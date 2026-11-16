"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slides = [
    {
      id: "slide-1",
      tag: t("hero.annual_report"),
      title: t("hero.slide1_title"),
      cta: t("hero.our_work"),
      ctaHref: "/work",
      bgColor: "#1a3a5c",
      accentColor: "#2fa4e7",
      image: "/hero-slide-1.jpg",
    },
    {
      id: "slide-2",
      tag: t("hero.calendar_design"),
      title: t("hero.slide2_title"),
      cta: t("hero.our_work"),
      ctaHref: "/work",
      bgColor: "#0f2744",
      accentColor: "#f59e0b",
      image: "/hero-slide-2.jpg",
    },
    {
      id: "slide-3",
      tag: t("hero.publication_design"),
      title: t("hero.slide3_title"),
      cta: t("hero.our_work"),
      ctaHref: "/work",
      bgColor: "#1a1a2e",
      accentColor: "#8b5cf6",
      image: "/hero-slide-3.jpg",
    },
  ];

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Left (Blue Panel) */}
      <div
        className="absolute top-0 bottom-0 left-0 w-full lg:w-1/2 z-0 transition-colors duration-700"
        style={{ background: "var(--dna-blue)" }}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Background Right (Full Photo with Dark Overlay like photo 4) */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1/2 z-0 overflow-hidden">
        <img
          key={`bg-${current}`}
          src={slides[current].image}
          alt={slides[current].tag}
          className="w-full h-full object-cover animate-slide-in"
        />
        {/* Lapisan gelap di depan foto */}
        <div className="absolute inset-0 bg-slate-950/55" />
      </div>

      {/* Unified 2-Column Content - 100% Aligned Horizontally */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-2 items-start"
          style={{ padding: "5rem 0 4rem" }}
        >
          {/* Left Column Content */}
          <div
            key={`left-${current}`}
            className="animate-fade-in flex flex-col justify-start"
            style={{ padding: "0 clamp(2.5rem, 8%, 5rem)" }}
          >
            <p className="text-blue-100 text-sm font-medium tracking-widest uppercase mb-4">
              {slides[current].tag}
            </p>

            <h1 className="text-white font-black text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8 max-w-lg">
              {t("hero.left_heading")}
            </h1>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-white font-semibold text-base border-b-2 border-white/40 pb-1 hover:border-white transition-colors duration-200 w-fit"
            >
              {t("hero.about_us")}
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>

          {/* Right Column Content - perfectly aligned with left column */}
          <div
            key={`right-${current}`}
            className="hidden lg:flex flex-col justify-start animate-slide-in"
            style={{ padding: "0 clamp(2.5rem, 8%, 5rem)" }}
          >
            <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-4 drop-shadow">
              {slides[current].tag}
            </p>

            <h2 className="text-white font-black text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-lg mb-8 drop-shadow-md">
              {slides[current].title}
            </h2>

            <Link
              href={slides[current].ctaHref}
              className="group inline-flex items-center gap-3 text-white font-semibold text-base border-b-2 border-white/40 pb-1 w-fit hover:border-white transition-colors"
            >
              {slides[current].cta}
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide dots left */}
      <div className="absolute bottom-8 flex gap-3 z-20" style={{ left: "clamp(2.5rem, 8%, 5rem)" }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              background: i === current ? "white" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* Slide indicator right */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: "8px",
              height: i === current ? "28px" : "8px",
              background: i === current ? "white" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease forwards; }
        .animate-slide-in { animation: slideIn 0.6s ease forwards; }
      `}</style>
    </section>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        width: "clamp(220px, 38vw, 420px)",
        maxHeight: "70vh",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 25px 60px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.3)",
        transform: "perspective(900px) rotateY(-4deg) rotateX(2deg)",
        transition: "transform 0.6s ease",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
