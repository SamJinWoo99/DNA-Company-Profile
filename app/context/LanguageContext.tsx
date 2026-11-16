"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.award": "Award",
    "nav.contact": "Contact",
    "nav.language": "Language",

    // Hero
    "hero.annual_report": "Annual Report",
    "hero.calendar_design": "Calendar Design",
    "hero.publication_design": "Publication Design",
    "hero.left_heading": "We turn corporate stories into powerful visual identity",
    "hero.about_us": "About Us",
    "hero.our_work": "Our Work",
    "hero.slide1_title": "Design with the power to inspire and deliver results",
    "hero.slide2_title": "We craft visual stories that define your brand",
    "hero.slide3_title": "Premium publications that speak to your audience",

    // About Section
    "about.top_badge": "About DNA Komunika",
    "about.tab0_num": "01",
    "about.tab0_title": "Who We Are",
    "about.tab1_num": "02",
    "about.tab1_title": "Vision & Values",
    "about.tab2_num": "03",
    "about.tab2_title": "Services & Expertise",
    "about.est": "Established 2013 • South Jakarta, Indonesia",
    "about.who_we_are_title": "Who We Are",
    "about.p1": "We are a graphic design agency based in South Jakarta, Indonesia.",
    "about.p2_pre": "Established in 2013, ",
    "about.p2_company": "PT Desain Nindya Amarta",
    "about.p2_mid": " (also known as ",
    "about.p2_brand": "DNA Komunika",
    "about.p2_post": ") mainly focuses on strategic design and corporate communications.",
    "about.p3": "The information encoded in our DNA determines our creativity, passion, and enthusiasm about design.",
    "about.p4": "We use our determination to our full advantage to give every design project the boost of creative energy it needs to succeed.",
    "about.ethos_badge": "Creativity is in our DNA!",
    "about.ethos_title": "Passion. Ideas. Enthusiasm.",
    "about.ethos_quote": "“Our aim is simple but significant. We form ideas and help build good communication by delivering meaningful impact in everything we do.”",
    "about.metric_exp": "Years Experience",
    "about.metric_proj": "Corporate Projects",
    "about.metric_awards": "Design Awards",
    "about.v_subtitle": "Our Philosophy & Foundation",
    "about.v_title": "Vision & Values",
    "about.v_purpose_badge": "Our Purpose",
    "about.v_vision_title": "Vision & Purpose",
    "about.v_vision_desc": "Empowering clients to transform their corporate narratives into compelling, communicative, and impactful visual identities that inspire and connect with every stakeholder.",
    "about.v_vision_tag": "Transforming Corporate Narratives",
    "about.v_core_badge": "DNA Identity",
    "about.v_core_title": "Core Values",
    "about.v_core_desc_prefix": "Passion, Ideas, & Enthusiasm:",
    "about.v_core_desc": " Championing high-caliber creativity and strategic insight in every design execution.",
    "about.v_core_quote": "“Creativity is in our DNA”",
    "about.v_core_tag": "Strategic & Creative Excellence",
    "about.s_subtitle": "Our Capabilities",
    "about.s_title": "Services & Expertise",
    "about.s1_title": "Annual & Sustainability Reports",
    "about.s1_desc": "Comprehensive editorial layouts, compelling visual narratives, data infographics, and strategic annual report storytelling.",
    "about.s2_title": "Calendar Design",
    "about.s2_desc": "Exclusive corporate calendars, company profile publications, internal company magazines, and premium business collateral.",
    "about.s3_title": "Corporate Branding & Collateral",
    "about.s3_desc": "Distinctive brand identity systems, corporate guidelines, environmental branding, and strategic marketing communication assets.",

    // Work Section
    "work.top_badge": "Work DNA Komunika",
    "work.cat_all": "All Work",
    "work.cat_ar": "Annual Report",
    "work.cat_cal": "Calendar Design",
    "work.cat_brand": "Branding & Print",
    "work.badge": "SELECTED PORTFOLIO",
    "work.title": "Our Work",
    "work.desc": "Explore our curated portfolio of strategic annual reports, corporate calendars, and high-impact branding systems.",
    "work.filter_title": "FILTER BY PROJECT YEAR",
    "work.all_years": "All Years",
    "work.projects_count": "Projects",
    "work.clients_badge": "TRUSTED PARTNERSHIPS",
    "work.clients_title": "Our Clients",
    "work.clients_desc": "Trusted by dozens of leading state-owned enterprises (BUMN),\nministries, banking institutions, and multinational corporations across Indonesia.",
    "work.partners_count": "24+ Official Enterprise Strategic Partners",
    "work.categories": "Energy • Banking • Telecommunications • Infrastructure • Healthcare",
    "work.no_project": "No projects found in year",
    "work.show_all": "Show All Years",
    "work.modal_overview": "Project Overview",
    "work.modal_client": "Client Organization",
    "work.modal_category": "Design Category",
    "work.modal_year": "Publication Year",
    "work.modal_close": "Close Preview",

    // Award Section
    "award.top_badge": "AWARDS & RECOGNITION",
    "award.all_honors": "All Honors",
    "award.cat_all": "All Honors",
    "award.cat_ar": "Annual Report",
    "award.cat_sr": "Sustainability",
    "award.cat_bs": "Brand Strategy",
    "award.filter_year": "FILTER BY YEAR",
    "award.all_years": "All Years",
    "award.honors_count": "Honors",
    "award.view_grid": "Grid",
    "award.view_spotlight": "Spotlight",
    "award.view_timeline": "Timeline",
    "award.client_label": "Client:",
    "award.view_details": "View Details",
    "award.badge_grand": "Grand Winner",
    "award.badge_gold": "Gold Winner",
    "award.badge_silver": "Silver Winner",
    "award.badge_bronze": "Bronze Winner",
    "award.badge_bronze_stevie": "Bronze Stevie® Winner",
    "award.badge_triple_silver": "Triple Silver",
    "award.badge_triple_gold": "Triple Gold",
    "award.stat_awards": "International Awards",
    "award.stat_awards_sub": "ARC (USA), Stevie (USA), Galaxy (USA) & German Brand (DE)",
    "award.stat_record": "Grand Winner Record",
    "award.stat_record_sub": "Consecutive Best of Cover Design Honors",
    "award.stat_leadership": "Creative Leadership",
    "award.stat_leadership_sub": "Annual Reports, ESG & Strategic Branding",
    "award.stat_trust": "BUMN & Enterprise Trust",
    "award.stat_trust_sub": "Bank Indonesia, MIND ID, Telkom, PGN, Pertamina",
    "award.sub_badge": "Global Excellence • Proven Track Record",
    "award.headline": "Our Work is Recognized",
    "award.headline_accent": "Globally",
    "award.desc": "World-class trophies and international certificates of distinction\nachieved with Indonesia's prominent corporate partners.",
    "award.card_view": "Click to view citation",
    "award.modal_title": "Honors Citation",
    "award.modal_competition": "Competition & Organizer",
    "award.modal_edition": "Award Edition",
    "award.modal_client": "Corporate Partner",
    "award.modal_theme": "Creative Theme",
    "award.modal_close": "Close",

    // Contact Section
    "contact.top_badge": "Contact DNA Komunika",
    "contact.top_index": "Get in Touch",
    "contact.badge": "HEADQUARTERS & BUSINESS INQUIRY",
    "contact.title_white": "Let's create something",
    "contact.title_yellow": "remarkable",
    "contact.title_post": "together",
    "contact.desc": "Connect directly with DNA Komunika headquarters for strategic annual reports, corporate branding, or visit our studio in South Jakarta.",
    "contact.address": "ADDRESS",
    "contact.phone": "PHONE & INQUIRY",
    "contact.whatsapp": "WHATSAPP OFFICIAL",
    "contact.business": "FOR BUSINESS",
    "contact.consultation": "PROJECT CONSULTATION",
    "contact.send_msg": "Send us a message",
    "contact.consultation_desc": "Tell us about your next annual report, sustainability report, corporate branding, or publication project. Our creative team will get in touch promptly.",
    "contact.instant_wa": "Instant Chat via WhatsApp",
    "contact.open_maps": "OPEN IN MAPS",
    "contact.map_pill": "DNA Komunika Studio • Cilandak",

    // Footer
    "footer.our_address": "OUR ADDRESS",
    "footer.site_map": "SITE MAP",
    "footer.get_in_touch": "GET IN TOUCH",
    "footer.design_work": "design & work",
    "footer.awards_news": "awards & news",
    "footer.about_dna": "about dna komunika",
    "footer.contact_us": "contact us",
    "footer.rights": "© 2027 DNA Komunika. All rights reserved.",
  },
  id: {
    // Nav
    "nav.home": "Home",
    "nav.about": "Tentang",
    "nav.work": "Karya",
    "nav.award": "Penghargaan",
    "nav.contact": "Kontak",
    "nav.language": "Bahasa",

    // Hero
    "hero.annual_report": "Laporan Tahunan",
    "hero.calendar_design": "Desain Kalender",
    "hero.publication_design": "Desain Publikasi",
    "hero.left_heading": "Mengubah cerita korporasi menjadi identitas visual yang berdaya",
    "hero.about_us": "Tentang Kami",
    "hero.our_work": "Karya Kami",
    "hero.slide1_title": "Desain dengan kekuatan menginspirasi dan menghadirkan hasil nyata",
    "hero.slide2_title": "Kami merancang narasi visual yang mendefinisikan citra brand Anda",
    "hero.slide3_title": "Publikasi premium yang terhubung langsung dengan audiens Anda",

    // About Section
    "about.top_badge": "Tentang DNA Komunika",
    "about.tab0_num": "01",
    "about.tab0_title": "Tentang Kami",
    "about.tab1_num": "02",
    "about.tab1_title": "Visi & Nilai",
    "about.tab2_num": "03",
    "about.tab2_title": "Layanan & Keahlian",
    "about.est": "BERDIRI SEJAK 2013 • JAKARTA SELATAN, INDONESIA",
    "about.who_we_are_title": "Tentang Kami",
    "about.p1": "Kami adalah agensi desain grafis yang berbasis di Jakarta Selatan, Indonesia.",
    "about.p2_pre": "Didirikan pada tahun 2013, ",
    "about.p2_company": "PT Desain Nindya Amarta",
    "about.p2_mid": " (juga dikenal sebagai ",
    "about.p2_brand": "DNA Komunika",
    "about.p2_post": ") berfokus utama pada desain strategis dan komunikasi korporat.",
    "about.p3": "Informasi yang terpatri dalam DNA kami menentukan kreativitas, dedikasi, dan antusiasme kami terhadap desain.",
    "about.p4": "Kami memanfaatkan ketekunan ini sebaik-baiknya guna memberikan dorongan energi kreatif bagi setiap proyek desain hingga sukses memukau.",
    "about.ethos_badge": "KREATIVITAS ADALAH DNA KAMI!",
    "about.ethos_title": "Gairah. Ide. Antusiasme.",
    "about.ethos_quote": "“Tujuan kami sederhana namun bermakna. Kami merumuskan gagasan dan membantu membangun komunikasi yang unggul dengan memberikan dampak nyata dalam setiap karya kami.”",
    "about.metric_exp": "Tahun Pengalaman",
    "about.metric_proj": "Projek Korporasi",
    "about.metric_awards": "Penghargaan Desain",
    "about.v_subtitle": "Filosofi & Fondasi Kami",
    "about.v_title": "Visi & Nilai",
    "about.v_purpose_badge": "Tujuan Kami",
    "about.v_vision_title": "Visi & Tujuan",
    "about.v_vision_desc": "Memberdayakan klien untuk mentransformasikan narasi korporasi mereka menjadi identitas visual yang memikat, komunikatif, dan berdampak kuat yang menginspirasi seluruh pemangku kepentingan.",
    "about.v_vision_tag": "Mentransformasi Narasi Korporat",
    "about.v_core_badge": "Identitas DNA",
    "about.v_core_title": "Nilai-Nilai Utama",
    "about.v_core_desc_prefix": "Gairah, Ide, & Antusiasme:",
    "about.v_core_desc": " Menjunjung tinggi kreativitas berkelas dunia dan wawasan strategis dalam setiap eksekusi desain.",
    "about.v_core_quote": "“Kreativitas adalah DNA kami”",
    "about.v_core_tag": "Keunggulan Strategis & Kreatif",
    "about.s_subtitle": "Kapabilitas Kami",
    "about.s_title": "Layanan & Keahlian",
    "about.s1_title": "Laporan Tahunan & Keberlanjutan",
    "about.s1_desc": "Tata letak editorial komprehensif, narasi visual yang memikat, infografis data terstruktur, dan penuturan kisah laporan tahunan yang strategis.",
    "about.s2_title": "Desain Kalender",
    "about.s2_desc": "Kalender korporat eksklusif, publikasi profil perusahaan, majalah internal korporat, dan media bisnis premium lainnya.",
    "about.s3_title": "Branding Korporasi & Media Promosi",
    "about.s3_desc": "Sistem identitas brand yang khas, panduan visual korporat, environmental branding, dan materi komunikasi pemasaran strategis.",

    // Work Section
    "work.top_badge": "Karya DNA Komunika",
    "work.cat_all": "Semua Karya",
    "work.cat_ar": "Laporan Tahunan",
    "work.cat_cal": "Desain Kalender",
    "work.cat_brand": "Branding & Cetak",
    "work.badge": "PORTOFOLIO TERPILIH",
    "work.title": "Karya Kami",
    "work.desc": "Jelajahi portofolio pilihan kami mulai dari laporan tahunan strategis, kalender korporat eksklusif, hingga sistem branding berdampak tinggi.",
    "work.filter_title": "FILTER BERDASARKAN TAHUN",
    "work.all_years": "Semua Tahun",
    "work.projects_count": "Projek",
    "work.clients_badge": "KEMITRAAN TERPERCAYA",
    "work.clients_title": "Klien Kami",
    "work.clients_desc": "Dipercaya oleh puluhan BUMN terkemuka, kementerian,\ninstitusi perbankan nasional, dan korporasi multinasional di Indonesia.",
    "work.partners_count": "24+ Mitra Strategis Korporasi Resmi",
    "work.categories": "Energi • Perbankan • Telekomunikasi • Infrastruktur • Layanan Kesehatan",
    "work.no_project": "Tidak ada projek pada tahun",
    "work.show_all": "Tampilkan Semua Tahun",
    "work.modal_overview": "Ringkasan Projek",
    "work.modal_client": "Organisasi Klien",
    "work.modal_category": "Kategori Desain",
    "work.modal_year": "Tahun Publikasi",
    "work.modal_close": "Tutup Pratinjau",

    // Award Section
    "award.top_badge": "PENGHARGAAN & PENGAKUAN",
    "award.all_honors": "Semua Penghargaan",
    "award.cat_all": "Semua Penghargaan",
    "award.cat_ar": "Laporan Tahunan",
    "award.cat_sr": "Keberlanjutan",
    "award.cat_bs": "Strategi Merek",
    "award.filter_year": "FILTER BERDASARKAN TAHUN",
    "award.all_years": "Semua Tahun",
    "award.honors_count": "Penghargaan",
    "award.view_grid": "Kisi",
    "award.view_spotlight": "Sorotan",
    "award.view_timeline": "Linimasa",
    "award.client_label": "Klien:",
    "award.view_details": "Lihat Detail",
    "award.badge_grand": "Pemenang Utama",
    "award.badge_gold": "Pemenang Emas",
    "award.badge_silver": "Pemenang Perak",
    "award.badge_bronze": "Pemenang Perunggu",
    "award.badge_bronze_stevie": "Pemenang Stevie® Perunggu",
    "award.badge_triple_silver": "Tiga Perak",
    "award.badge_triple_gold": "Tiga Emas",
    "award.stat_awards": "Penghargaan Internasional",
    "award.stat_awards_sub": "ARC (USA), Stevie (USA), Galaxy (USA) & German Brand (DE)",
    "award.stat_record": "Rekor Pemenang Utama",
    "award.stat_record_sub": "Penghargaan Berturut-turut Desain Sampul Terbaik",
    "award.stat_leadership": "Kepemimpinan Kreatif",
    "award.stat_leadership_sub": "Laporan Tahunan, ESG & Strategi Merek",
    "award.stat_trust": "Kepercayaan BUMN & Korporasi",
    "award.stat_trust_sub": "Bank Indonesia, MIND ID, Telkom, PGN, Pertamina",
    "award.sub_badge": "Keunggulan Global • Rekam Jejak Terbukti",
    "award.headline": "Karya Kami Diakui",
    "award.headline_accent": "Secara Global",
    "award.desc": "Deretan trofi dan piagam penghargaan internasional\nyang diraih bersama para mitra korporasi terkemuka di Indonesia.",
    "award.card_view": "Klik untuk melihat piagam",
    "award.modal_title": "Piagam Kehormatan",
    "award.modal_competition": "Kompetisi & Penyelenggara",
    "award.modal_edition": "Edisi Penghargaan",
    "award.modal_client": "Mitra Korporat",
    "award.modal_theme": "Tema Kreatif",
    "award.modal_close": "Tutup",

    // Contact Section
    "contact.top_badge": "Kontak DNA Komunika",
    "contact.top_index": "Hubungi Kami",
    "contact.badge": "KANTOR PUSAT & PERTANYAAN BISNIS",
    "contact.title_white": "Mari ciptakan karya",
    "contact.title_yellow": "luar biasa",
    "contact.title_post": "bersama",
    "contact.desc": "Terhubung langsung dengan kantor pusat DNA Komunika untuk annual report strategis, branding korporasi, atau kunjungi studio kami di Jakarta Selatan.",
    "contact.address": "ALAMAT",
    "contact.phone": "TELEPON & INFORMASI",
    "contact.whatsapp": "WHATSAPP RESMI",
    "contact.business": "KERJASAMA BISNIS",
    "contact.consultation": "KONSULTASI PROJEK",
    "contact.send_msg": "Kirim pesan kepada kami",
    "contact.consultation_desc": "Ceritakan rencana annual report, sustainability report, corporate branding, atau publikasi Anda berikutnya. Tim kreatif kami siap merespons segera.",
    "contact.instant_wa": "Chat Langsung via WhatsApp",
    "contact.open_maps": "BUKA DI MAPS",
    "contact.map_pill": "Studio DNA Komunika • Cilandak",

    // Footer
    "footer.our_address": "ALAMAT KAMI",
    "footer.site_map": "PETA SITUS",
    "footer.get_in_touch": "HUBUNGI KAMI",
    "footer.design_work": "desain & karya",
    "footer.awards_news": "penghargaan & berita",
    "footer.about_dna": "tentang dna komunika",
    "footer.contact_us": "hubungi kami",
    "footer.rights": "© 2027 DNA Komunika. Hak cipta dilindungi undang-undang.",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("dna_lang") as Language;
    if (saved && (saved === "en" || saved === "id")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("dna_lang", newLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
