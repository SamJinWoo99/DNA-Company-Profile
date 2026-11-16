"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.work"), href: "/work" },
    { label: t("nav.award"), href: "/award" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* padding matches HeroSection clamp padding */
  const PAD = "clamp(2.5rem, 8%, 5rem)";

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10, 20, 35, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.25)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        {/* ── Row: logo (left half)  +  nav links (right half) ── */}
        <div className="flex w-full h-16 lg:h-20 items-center">

          {/* LOGO – sits inside the left panel area */}
          <div
            className="flex items-center lg:w-1/2 shrink-0"
            style={{ paddingLeft: PAD }}
          >
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 group"
            >
              <DnaLogo />
            </Link>
          </div>

          {/* DESKTOP NAV – sits inside the right panel area */}
          <div
            className="hidden md:flex items-center gap-8 lg:w-1/2 justify-end shrink-0"
            style={{ paddingRight: PAD }}
          >
            {langMenuOpen ? (
              /* Saat mode pemilihan bahasa aktif (Persis Foto 1):
                 Menu navigasi disembunyikan dan digantikan langsung oleh "Language >  En  In" sebaris dengan logo */
              <div
                ref={langRef}
                className="flex items-center gap-6 text-sm font-semibold text-white select-none animate-fade-in"
              >
                {/* Tombol Language > (Klik untuk kembali/tutup) */}
                <button
                  type="button"
                  onClick={() => setLangMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors cursor-pointer group"
                  title="Close language switcher"
                >
                  <span className="font-medium text-white group-hover:text-[#38bdf8]">Language</span>
                  <svg
                    className="w-3.5 h-3.5 text-white/80 group-hover:text-[#38bdf8] transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                  </svg>
                </button>

                {/* En In Selector sebaris persis seperti di gambar 1 */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setLang("en");
                      setLangMenuOpen(false);
                    }}
                    className={`cursor-pointer transition-colors relative py-0.5 ${
                      lang === "en"
                        ? "text-white font-bold"
                        : "text-white/60 hover:text-white font-normal"
                    }`}
                  >
                    En
                    {lang === "en" && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLang("id");
                      setLangMenuOpen(false);
                    }}
                    className={`cursor-pointer transition-colors relative py-0.5 ${
                      lang === "id"
                        ? "text-white font-bold"
                        : "text-white/60 hover:text-white font-normal"
                    }`}
                  >
                    In
                    {lang === "id" && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full" />
                    )}
                  </button>
                </div>
              </div>
            ) : (
              /* Mode default navigasi: Home About Work Award Contact En v */
              <>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative text-sm font-medium transition-colors duration-200 text-white hover:text-white/80"
                    >
                      {item.label}
                      <span
                        className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300"
                        style={{
                          width: isActive ? "100%" : "0%",
                          background: "white",
                        }}
                      />
                    </Link>
                  );
                })}

                {/* En v Trigger Button */}
                <button
                  type="button"
                  onClick={() => setLangMenuOpen(true)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white transition-colors cursor-pointer py-1 px-1 rounded-lg hover:bg-white/10"
                >
                  <span>{lang === "en" ? "En" : "In"}</span>
                  <svg
                    className="w-3.5 h-3.5 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg ml-auto mr-5 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0a1423] shadow-2xl">
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      color: isActive ? "#38bdf8" : "white",
                      background: isActive ? "rgba(56,189,248,0.12)" : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-3 mt-3 px-4 pt-3 border-t border-white/10">
                <span className="text-xs text-white/60">Language:</span>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`text-sm font-bold ${lang === "en" ? "text-[#38bdf8] underline" : "text-white/70"}`}
                >
                  En
                </button>
                <span className="text-white/30">•</span>
                <button
                  type="button"
                  onClick={() => setLang("id")}
                  className={`text-sm font-bold ${lang === "id" ? "text-[#38bdf8] underline" : "text-white/70"}`}
                >
                  In
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Floating Button */}
      <a
        href="https://api.whatsapp.com/send?phone=6287774443847&text=Hello%20DNA%20Komunika!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ background: "var(--dna-green)" }}
        aria-label="Chat via WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.74 5.47 2.03 7.77L0 32l8.47-2.22A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.773-1.853l-.487-.29-5.027 1.32 1.343-4.9-.317-.503A13.253 13.253 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333zm7.307-9.987c-.4-.2-2.367-1.167-2.733-1.3-.367-.133-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.687-.623-3.213-1.98-1.187-1.057-1.99-2.363-2.223-2.763-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.657-.673-.9-.686-.233-.013-.5-.016-.767-.016-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.04.957.413 1.703.66 2.287.843.96.307 1.835.263 2.526.16.77-.113 2.367-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
        </svg>
      </a>
    </>
  );
}

function DnaLogo() {
  return (
    <img
      src="/logo-dna.png"
      alt="DNA Komunika"
      height={60}
      style={{
        height: "60px",
        width: "auto",
        filter: "brightness(0) invert(1)",
        transition: "filter 0.3s ease",
      }}
    />
  );
}
