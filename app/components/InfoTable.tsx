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
        background: "#f8f9fa",
        paddingTop: "clamp(4.5rem, 7vh, 6rem)",
        paddingBottom: "clamp(3.5rem, 6vh, 5rem)",
        paddingLeft: "clamp(2rem, 5vw, 5rem)",
        paddingRight: "clamp(2rem, 5vw, 5rem)",
      }}
    >
      <div className="w-full max-w-full">
        {/* Navigation Links Row */}
        <div className="flex flex-wrap gap-8 sm:gap-14 mb-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base sm:text-lg font-semibold text-gray-700 hover:text-[#0077b6] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact CTA */}
        <div>
          <span className="text-sm sm:text-base text-gray-500 block mb-4">
            {t("footer.lets_talk")}
          </span>
          <Link
            href="/contact"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0077b6] hover:text-[#005a8d] transition-colors inline-flex items-center gap-4"
          >
            {t("nav.contact")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
