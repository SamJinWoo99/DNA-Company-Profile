"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function InfoTable() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.work"), href: "/work" },
    { label: t("nav.award"), href: "/award" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <section
      className="w-full select-none"
      style={{
        background: "#f5f5f5",
        paddingTop: "clamp(3.5rem, 6vh, 5rem)",
        paddingBottom: "clamp(3rem, 5vh, 4.5rem)",
        paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
        paddingRight: "clamp(1.5rem, 4vw, 4rem)",
      }}
    >
      <div className="w-full max-w-full">
        {/* Navigation Links Row */}
        <div className="flex flex-wrap gap-6 sm:gap-10 mb-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm sm:text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="pb-10 border-b border-gray-300">
          <span className="text-xs sm:text-sm text-gray-500 block mb-2">
            {t("footer.lets_talk")}
          </span>
          <Link
            href="/contact"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0077b6] hover:text-[#005a8d] transition-colors inline-flex items-center gap-3"
          >
            {t("nav.contact")} <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} DNA Komunika. All rights reserved.
        </div>
      </div>
    </section>
  );
}
