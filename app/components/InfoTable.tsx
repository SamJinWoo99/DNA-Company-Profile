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
        paddingTop: "clamp(4rem, 6vh, 5.5rem)",
        paddingBottom: "clamp(4.5rem, 7vh, 6rem)",
        paddingLeft: "clamp(2rem, 5vw, 5rem)",
        paddingRight: "clamp(2rem, 5vw, 5rem)",
      }}
    >
      <div className="w-full max-w-full">
        {/* Navigation Links Row: persis seperti foto 1 dengan jarak lega */}
        <div className="flex flex-wrap items-center gap-10 sm:gap-16 mb-20 lg:mb-24">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base sm:text-lg font-normal text-[#4a5568] hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact CTA: Let's talk & Contact dengan jarak vertikal lega */}
        <div>
          <span className="text-lg sm:text-xl text-[#718096] font-normal block mb-5">
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
