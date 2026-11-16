"use client";

import Link from "next/link";

export default function Footer() {

  return (
    <footer
      className="relative text-white border-t border-white/10"
      style={{
        background: "#070c14",
        paddingTop: "clamp(3rem, 5vh, 4.5rem)",
        paddingBottom: "clamp(2rem, 4vh, 3rem)",
        paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
        paddingRight: "clamp(1.5rem, 4vw, 4rem)",
      }}
    >
      <div className="w-full max-w-full">
        {/* Main Footer 3 Columns (Foto 3) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">

          {/* Column 1: OUR ADDRESS (Foto 3) */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <h5
              className="text-xs font-black uppercase text-white/90 tracking-widest"
              style={{ letterSpacing: "0.14em" }}
            >
              OUR ADDRESS
            </h5>
            <div className="text-sm text-white/70 leading-relaxed font-normal">
              <p>Jl. Terogong Raya No. 36B Cilandak Barat, Jakarta Selatan 12430 Indonesia</p>
            </div>

            <div className="pt-2 space-y-1.5 text-sm text-white/80">
              <p className="flex items-center gap-2.5">
                <span className="text-cyan-300">📞</span>
                <span>021 278 28838</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="text-cyan-300">📠</span>
                <span>021 295 53570</span>
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=6287774443847&text=Hello%20DNA%20Komunika!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                <span>WHATSAPP (+62 877-7444-3847)</span>
              </a>
              <p className="flex items-center gap-2.5 pt-1 text-white/90">
                <span className="text-cyan-300">✉️</span>
                <a
                  href="mailto:info@dnakomunika.com"
                  className="hover:text-cyan-200 transition-colors"
                >
                  info@dnakomunika.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: SITE MAP (Foto 3) */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <h5
              className="text-xs font-black uppercase text-white/90 tracking-widest"
              style={{ letterSpacing: "0.14em" }}
            >
              SITE MAP
            </h5>
            <ul className="space-y-2 text-sm text-white/70 font-normal">
              <li>
                <Link
                  href="/work"
                  className="hover:text-cyan-300 transition-colors cursor-pointer capitalize"
                >
                  design & work
                </Link>
              </li>
              <li>
                <Link
                  href="/award"
                  className="hover:text-cyan-300 transition-colors cursor-pointer capitalize"
                >
                  awards & news
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-300 transition-colors cursor-pointer capitalize"
                >
                  about dna komunika
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-300 transition-colors cursor-pointer capitalize"
                >
                  contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: GET IN TOUCH / SOCIAL (Foto 3) */}
          <div className="md:col-span-4 space-y-4">
            <h5
              className="text-xs font-black uppercase text-white/90 tracking-widest"
              style={{ letterSpacing: "0.14em" }}
            >
              GET IN TOUCH
            </h5>
            <ul className="space-y-2 text-sm text-white/70 font-normal">
              <li>
                <a
                  href="https://www.facebook.com/dnakomunika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors block"
                >
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dna_komunika/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors block"
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/dna_komunika/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors block"
                >
                  behance
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Logo & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-3">
            <img
              src="/logo-dna.png"
              alt="DNA Komunika"
              className="h-7 w-auto filter brightness-0 invert opacity-80"
            />
            <span>PT Desain Nindya Amarta</span>
          </div>
          <p>© 2027 DNA Komunika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
