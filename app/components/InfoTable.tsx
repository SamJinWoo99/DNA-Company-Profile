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
        background: "#eeeeee",
        paddingTop: "80px",
        paddingBottom: "100px",
        paddingLeft: "clamp(2rem, 5vw, 5rem)",
        paddingRight: "clamp(2rem, 5vw, 5rem)",
      }}
    >
      <div className="w-full max-w-full">
        {/* Navigation Links Row */}
        <div
          className="flex flex-wrap items-center gap-12 sm:gap-20"
          style={{ marginBottom: "120px" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-base sm:text-[1.125rem] font-normal text-[#4a5568] hover:text-black transition-colors group pb-1 tracking-normal"
            >
              <span>{link.label}</span>
              {/* Garis bawah animasi saat hover */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Contact CTA: Let's talk & Contact berjarak 120px di bawah About */}
        <div>
          <span className="text-xl sm:text-2xl text-[#828894] font-normal block mb-3 tracking-normal">
            {t("footer.lets_talk")}
          </span>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-[#0077b6] hover:text-[#005a8d] transition-colors leading-tight"
          >
            <span>{t("nav.contact")}</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-2 text-3xl sm:text-4xl lg:text-5xl font-light"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
