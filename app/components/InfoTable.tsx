"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function InfoTable() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.work"), href: "/work" },
    { label: t("nav.award"), href: "/award" },
  ];

  return (
    <section
      className="w-full select-none"
      style={{
        background: "#f4f4f4",
        paddingTop: "clamp(4.5rem, 7vh, 6.5rem)",
        paddingBottom: "clamp(5rem, 8vh, 7rem)",
        paddingLeft: "clamp(2rem, 5vw, 5rem)",
        paddingRight: "clamp(2rem, 5vw, 5rem)",
      }}
    >
      <div className="w-full max-w-full">
        {/* Navigation Links Row: ada efek garis bawah saat kursor diarahkan (hover) */}
        <div className="flex flex-wrap items-center gap-10 sm:gap-16 mb-28 lg:mb-36">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-base sm:text-lg font-normal text-[#4a5568] hover:text-black transition-colors group pb-1"
            >
              <span>{link.label}</span>
              {/* Garis bawah animasi saat hover */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Contact CTA: Let's talk & Contact diturunkan jauh ke bawah agar berjarak lega */}
        <div>
          <span className="text-lg sm:text-xl text-[#718096] font-normal block mb-6">
            {t("footer.lets_talk")}
          </span>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0077b6] hover:text-[#005a8d] transition-colors"
          >
            <span>{t("nav.contact")}</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-2 text-2xl sm:text-3xl lg:text-4xl"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
