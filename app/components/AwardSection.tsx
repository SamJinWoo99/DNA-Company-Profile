"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Trophy, 
  Search, 
  LayoutGrid, 
  GitCommit, 
  Maximize2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Globe,
  X
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AwardItem {
  id: string;
  year: string;
  category: string;
  subCategory: string;
  subCategory_id?: string;
  awardName: string;
  edition: string;
  badgeType: string;
  badgeClass: string;
  client: string;
  clientIndustry: string;
  description: string;
  description_id?: string;
  scope: string[];
  scope_id?: string[];
  image: string;
  location: string;
}

const prestigeAwards: AwardItem[] = [
  // ── 2024 ──────────────────────────────────────────────────────────────
  {
    id: 'arc-38-cover',
    year: '2024',
    awardName: 'ARC Awards International XXXVIII',
    edition: "38th Year • World's Best Annual Reports (New York)",
    category: 'Annual Report',
    subCategory: 'Best of Cover Design',
    subCategory_id: 'Desain Sampul Terbaik',
    badgeType: 'Grand Winner',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT Permata Graha Nusantara',
    clientIndustry: 'Real Estate & Infrastructure',
    description: 'Recognized as the pinnacle of cover design artwork combining tactile embossing and sustainable luxury foil finishes for corporate storytelling.',
    description_id: 'Diakui sebagai puncak karya desain sampul yang memadukan teknik cetak timbul taktil dan sentuhan foil mewah berkelanjutan untuk narasi korporat.',
    scope: ['Concept & Art Direction', 'Custom Typography', 'Print Finishing & Production'],
    scope_id: ['Konsep & Arahan Seni', 'Tipografi Kustom', 'Finishing & Produksi Cetak'],
    image: '/award-arc-plaque-podium.jpg',
    location: 'New York, USA',
  },
  {
    id: 'stevie-2024-gov',
    year: '2024',
    awardName: 'The International Business Awards (Stevie)',
    edition: '2024 Stevie Awards Winner',
    category: 'Annual Report',
    subCategory: 'Best Annual Report – Government Agencies',
    subCategory_id: 'Laporan Tahunan Terbaik – Lembaga & Badan Usaha Milik Negara',
    badgeType: 'Bronze Stevie® Winner',
    badgeClass: 'from-amber-700 to-orange-800 text-amber-100',
    client: 'PT Mineral Industri Indonesia (MIND ID)',
    clientIndustry: 'Mining & Natural Resources',
    description: 'Awarded for exceptional transparency and structural narrative highlighting Indonesia state mining holding sustainability milestones.',
    description_id: 'Dianugerahi penghargaan atas transparansi luar biasa dan struktur narasi yang menonjolkan tonggak keberlanjutan holding industri pertambangan Indonesia.',
    scope: ['Information Architecture', 'Infographic Design', 'Editorial Translation'],
    scope_id: ['Arsitektur Informasi', 'Desain Infografis', 'Penyusunan Editorial'],
    image: '/award-stevie-trophy.jpg',
    location: 'Vienna, Austria',
  },

  // ── 2023 ──────────────────────────────────────────────────────────────
  {
    id: 'arc-37-cover',
    year: '2023',
    awardName: 'ARC Awards International XXXVII',
    edition: "37th Year • World's Best Annual Reports (New York)",
    category: 'Annual Report',
    subCategory: 'Best of Cover Design',
    subCategory_id: 'Desain Sampul Terbaik',
    badgeType: 'Grand Winner',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT PGN LNG Indonesia',
    clientIndustry: 'Energy & Liquefied Gas',
    description: 'Innovative translucent overlay cover concept signifying clean energy transition and corporate transparency.',
    description_id: 'Konsep sampul inovatif dengan lapisan transparan tembus pandang yang melambangkan transisi energi bersih dan keterbukaan korporasi.',
    scope: ['Visual Identity System', 'Photo Shoot Direction', 'Specialty Binding'],
    scope_id: ['Sistem Identitas Visual', 'Arahan Pemotretan', 'Jilid Khusus Eksklusif'],
    image: '/award-arc-holder-pgn.jpg',
    location: 'New York, USA',
  },
  {
    id: 'arc-37-indonesia',
    year: '2023',
    awardName: 'ARC Awards International XXXVII',
    edition: "37th Year • World's Best Annual Reports (New York)",
    category: 'Annual Report',
    subCategory: 'Best of Indonesia',
    subCategory_id: 'Laporan Tahunan Terbaik dari Indonesia',
    badgeType: 'Grand Winner',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT PGN LNG Indonesia',
    clientIndustry: 'Energy & Liquefied Gas',
    description: 'Crowned as the top-ranking annual report originating from Indonesia across all competitive categories in 2023.',
    description_id: 'Dinobatkan sebagai laporan tahunan peringkat teratas asal Indonesia di seluruh kategori kompetisi dunia tahun 2023.',
    scope: ['Comprehensive Editorial Design', 'ESG Data Visualization', 'Digital Interactive PDF'],
    scope_id: ['Desain Editorial Komprehensif', 'Visualisasi Data ESG', 'PDF Interaktif Digital'],
    image: '/award-arc-holder-indonesia.jpg',
    location: 'New York, USA',
  },
  {
    id: 'galaxy-2023-gold',
    year: '2023',
    awardName: 'Galaxy Awards 2023 (MerComm, Inc.)',
    edition: '34th Annual International Competition • Asia/Pacific',
    category: 'Sustainability Report',
    subCategory: 'Galaxy Gold Winner (Non-Traditional)',
    subCategory_id: 'Pemenang Emas Galaxy (Format Non-Tradisional)',
    badgeType: 'Gold Winner',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT Permata Graha Nusantara',
    clientIndustry: 'Real Estate & Infrastructure',
    description: 'Honored for creative storytelling through eco-friendly paper selection and interactive QR grid integration.',
    description_id: 'Dianugerahi penghargaan atas penyampaian cerita kreatif melalui pemilihan kertas ramah lingkungan dan integrasi kisi kode QR interaktif.',
    scope: ['Sustainable Paper Sourcing', 'UX/UI Digital Companion', 'Copywriting'],
    scope_id: ['Pemilihan Kertas Berkelanjutan', 'Pendamping Digital UX/UI', 'Penulisan Naskah'],
    image: '/award-galaxy-2023-gold-framed.jpg',
    location: 'Carlsbad, California',
  },
  {
    id: 'arc-37-gold-cover',
    year: '2023',
    awardName: 'ARC Awards International XXXVII',
    edition: "37th Year • World's Best Annual Reports",
    category: 'Annual Report',
    subCategory: 'Cover Photo/Design – Property Development',
    subCategory_id: 'Foto & Desain Sampul – Pengembangan Properti',
    badgeType: 'Gold Winner',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT Permata Graha Nusantara',
    clientIndustry: 'Real Estate & Infrastructure',
    description: 'Harmonious geometric architectural photography combined with metallic ink treatments.',
    description_id: 'Fotografi arsitektur geometris yang selaras dipadukan dengan teknik cetak tinta metalik presisi.',
    scope: ['Architectural Photography', 'Foil Stamping', 'Layout Typography'],
    scope_id: ['Fotografi Arsitektur', 'Stempel Foil Emas', 'Tipografi Tata Letak'],
    image: '/award-arc-2023-gold-cover-framed.jpg',
    location: 'New York, USA',
  },
  {
    id: 'arc-37-gold-printing',
    year: '2023',
    awardName: 'ARC Awards International XXXVII',
    edition: "37th Year • World's Best Annual Reports",
    category: 'Annual Report',
    subCategory: 'Printing & Production – Property Development',
    subCategory_id: 'Pencetakan & Produksi – Pengembangan Properti',
    badgeType: 'Gold Winner',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT Permata Graha Nusantara',
    clientIndustry: 'Real Estate & Infrastructure',
    description: 'Exemplary offset printing calibration, precise color balance, and FSC-certified fine paper binding.',
    description_id: 'Kalibrasi cetak offset teladan, keseimbangan warna presisi, dan jilid kertas halus bersertifikat FSC.',
    scope: ['Color Separation Quality Control', 'Paper Sourcing', 'Precision Binding'],
    scope_id: ['Kontrol Kualitas Separasi Warna', 'Penyediaan Kertas Halus', 'Penjilidan Presisi'],
    image: '/award-arc-2023-gold-printing-framed.jpg',
    location: 'New York, USA',
  },
  {
    id: 'arc-37-bronze',
    year: '2023',
    awardName: 'ARC Awards International XXXVII',
    edition: "37th Year • World's Best Annual Reports",
    category: 'Annual Report',
    subCategory: 'Non-Traditional Annual Report',
    subCategory_id: 'Laporan Tahunan Non-Tradisional',
    badgeType: 'Bronze Winner',
    badgeClass: 'from-amber-700 to-orange-800 text-amber-100',
    client: 'PT Permata Graha Nusantara',
    clientIndustry: 'Real Estate & Infrastructure',
    description: 'Creative report format breaking standard annual corporate publication templates with modular chapters.',
    description_id: 'Format publikasi kreatif yang mendobrak pakem laporan korporat konvensional dengan susunan bab modular dinamis.',
    scope: ['Modular Architecture', 'Data Infographics', 'Editorial Strategy'],
    scope_id: ['Arsitektur Modular', 'Infografis Data', 'Strategi Editorial'],
    image: '/award-arc-2023-bronze-framed.jpg',
    location: 'New York, USA',
  },

  // ── 2022 ──────────────────────────────────────────────────────────────
  {
    id: 'arc-36-cover-plaque',
    year: '2022',
    awardName: 'ARC Awards International XXXVI',
    edition: "36th Year • World's Best Annual Reports (New York)",
    category: 'Annual Report',
    subCategory: 'Best of Cover Design (Plaque)',
    subCategory_id: 'Desain Sampul Terbaik (Plakat Dunia)',
    badgeType: 'Grand Winner',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT PGN LNG Indonesia',
    clientIndustry: 'Energy & Liquefied Gas',
    description: 'Prestigious global acrylic trophy for excellence in annual report cover design aesthetics.',
    description_id: 'Piala plakat akrilik bergengsi dunia atas keunggulan estetika desain sampul laporan tahunan.',
    scope: ['Cover Concept', 'Typography System', 'Art Direction'],
    scope_id: ['Konsep Sampul', 'Sistem Tipografi', 'Arahan Seni'],
    image: '/award-arc-2022-plaque.jpg',
    location: 'New York, USA',
  },
  {
    id: 'arc-36-bi-gold',
    year: '2022',
    awardName: 'ARC Awards International XXXVI',
    edition: "36th Year • World's Best Annual Reports",
    category: 'Annual Report',
    subCategory: 'Gold Winner – Banks: National',
    subCategory_id: 'Pemenang Emas – Perbankan Nasional',
    badgeType: 'Gold Winner',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'Bank Indonesia',
    clientIndustry: 'Central Banking & Monetary',
    description: 'Rise and Be Optimistic: Institutional transformation narrative crafted for Indonesia central bank.',
    description_id: 'Bangkit dan Optimis: Narasi transformasi kelembagaan yang dirancang khusus untuk bank sentral Republik Indonesia.',
    scope: ['Macroeconomic Data Viz', 'Institutional Narrative', 'Executive Summary'],
    scope_id: ['Visualisasi Data Makroekonomi', 'Narasi Institusi', 'Ringkasan Eksekutif'],
    image: '/award-arc-2022-bi-gold.jpg',
    location: 'New York, USA',
  },
  {
    id: 'arc-36-telkom-trio',
    year: '2022',
    awardName: 'ARC Awards International XXXVI',
    edition: "36th Year • World's Best Annual Reports",
    category: 'Annual Report',
    subCategory: 'Gold (Non-Traditional), Silver (Printing), Honors',
    subCategory_id: 'Emas (Non-Tradisional), Perak (Pencetakan), & Kehormatan',
    badgeType: 'Trio Winner',
    badgeClass: 'from-slate-200 to-slate-400 text-slate-900',
    client: 'PT Telkom Indonesia (Persero) Tbk',
    clientIndustry: 'Telecommunications & Tech',
    description: 'Triple ARC award win for digital transformation storytelling, non-traditional infographics and printing.',
    description_id: 'Kemenangan tiga penghargaan ARC sekaligus untuk narasi transformasi digital, infografis non-tradisional, dan mutu cetak istimewa.',
    scope: ['Digital Graphics', 'Comprehensive ESG Design', 'Custom Print Production'],
    scope_id: ['Grafis Digital Modern', 'Desain ESG Komprehensif', 'Produksi Cetak Khusus'],
    image: '/award-arc-2022-telkom-trio.jpg',
    location: 'New York, USA',
  },
  {
    id: 'arc-36-pgn-trio',
    year: '2022',
    awardName: 'ARC Awards International XXXVI',
    edition: "36th Year • World's Best Annual Reports",
    category: 'Annual Report',
    subCategory: 'Double Gold (Cover & Traditional) & Bronze',
    subCategory_id: 'Dua Emas (Sampul & Tradisional) serta Perunggu',
    badgeType: 'Double Gold',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT PGN LNG Indonesia',
    clientIndustry: 'Energy & Liquefied Gas',
    description: 'Double Gold for Cover Design & Traditional Annual Report, complemented with Bronze for specialty printing.',
    description_id: 'Meraih Dua Emas untuk Desain Sampul & Laporan Tahunan Tradisional, disempurnakan dengan Perunggu untuk teknik cetak khusus.',
    scope: ['Visual Identity', 'Photo Shoot', 'Printing Oversight'],
    scope_id: ['Identitas Visual', 'Pemotretan Lapangan', 'Pengawasan Produksi Cetak'],
    image: '/award-arc-2022-pgn-lng-trio.jpg',
    location: 'New York, USA',
  },

  // ── 2020 ──────────────────────────────────────────────────────────────
  {
    id: 'german-brand-2020-book',
    year: '2020',
    awardName: 'German Brand Award 2020',
    edition: 'Brand Communication – Print (Frankfurt, Germany)',
    category: 'Brand Strategy',
    subCategory: 'Excellence in Brand Strategy and Creation',
    subCategory_id: 'Keunggulan dalam Strategi & Penciptaan Merek',
    badgeType: 'Winner',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT Perusahaan Gas Negara Tbk',
    clientIndustry: 'Energy & Natural Gas',
    description: 'Selected and published in the German Design Council prestigious annual compendium in Frankfurt.',
    description_id: 'Terpilih dan dipublikasikan resmi dalam buku kompendium tahunan bergengsi German Design Council di Frankfurt.',
    scope: ['Brand Strategy', 'Editorial Book Production', 'Identity System'],
    scope_id: ['Strategi Merek', 'Produksi Buku Editorial', 'Sistem Identitas'],
    image: '/award-german-brand-2020-book.jpg',
    location: 'Frankfurt, Germany',
  },
  {
    id: 'german-brand-2020-mention',
    year: '2020',
    awardName: 'German Brand Award 2020',
    edition: 'Excellence in Brand Strategy • German Design Council',
    category: 'Brand Strategy',
    subCategory: 'Brand Communication – Print & Editorial',
    subCategory_id: 'Komunikasi Merek – Media Cetak & Editorial',
    badgeType: 'Special Mention',
    badgeClass: 'from-slate-200 to-slate-400 text-slate-900',
    client: 'PT PGN LNG Indonesia',
    clientIndustry: 'Energy & Marine Gas',
    description: 'Recognized for pioneering marine clean energy editorial narrative presented to European jurists.',
    description_id: 'Apresiasi kehormatan atas narasi editorial pelopor energi gas maritim bersih yang dipresentasikan di hadapan dewan juri Eropa.',
    scope: ['Marine Gas Editorial', 'Infographic Design', 'Editorial Translation'],
    scope_id: ['Editorial Gas Maritim', 'Desain Infografis', 'Penerjemahan Bahasa'],
    image: '/award-german-brand-pgn-lng-page.jpg',
    location: 'Frankfurt, Germany',
  },
  {
    id: 'german-brand-2020-framed',
    year: '2020',
    awardName: 'German Brand Institute',
    edition: 'Frankfurt am Main, 18 June 2020',
    category: 'Brand Strategy',
    subCategory: 'Winner Official Certificate',
    subCategory_id: 'Sertifikat Resmi Pemenang Penghargaan',
    badgeType: 'Official Winner',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT Perusahaan Gas Negara Tbk',
    clientIndustry: 'Energy Infrastructure',
    description: 'Framed formal citation of distinction issued by German Brand Institute and German Design Council.',
    description_id: 'Piagam kehormatan resmi berbingkai yang dianugerahkan oleh German Brand Institute dan German Design Council.',
    scope: ['Corporate Annual Report', 'Visual Communication', 'Editorial Production'],
    scope_id: ['Laporan Tahunan Korporat', 'Komunikasi Visual', 'Produksi Editorial'],
    image: '/award-german-brand-2020-framed.jpg',
    location: 'Frankfurt, Germany',
  },

  // ── 2019 ──────────────────────────────────────────────────────────────
  {
    id: 'arc-33-gold-bronze',
    year: '2019',
    awardName: 'ARC Awards International XXXIII',
    edition: "33rd Year • World's Best Annual Reports",
    category: 'Annual Report',
    subCategory: 'Gold (Printing) & Bronze (Traditional)',
    subCategory_id: 'Emas (Teknik Cetak) & Perunggu (Tradisional)',
    badgeType: 'Gold & Bronze',
    badgeClass: 'from-amber-400 to-amber-600 text-slate-950',
    client: 'PT Permata Graha Nusantara',
    clientIndustry: 'Real Estate & Infrastructure',
    description: 'Gold Winner for Printing & Production and Bronze for Traditional Annual Report.',
    description_id: 'Pemenang Emas untuk kategori Percetakan & Produksi serta Perunggu untuk Laporan Tahunan Tradisional.',
    scope: ['Specialty Printing', 'Visual Layout', 'Executive Summary'],
    scope_id: ['Teknik Cetak Khusus', 'Tata Letak Visual', 'Ringkasan Eksekutif'],
    image: '/award-arc-2019-certificates-gold.jpg',
    location: 'New York, USA',
  },
  {
    id: 'arc-33-triple-silver',
    year: '2019',
    awardName: 'ARC Awards International XXXIII',
    edition: "33rd Year • World's Best Annual Reports",
    category: 'Annual Report',
    subCategory: 'Triple Silver Winner',
    subCategory_id: 'Pemenang Tiga Penghargaan Perak',
    badgeType: 'Triple Silver',
    badgeClass: 'from-slate-200 to-slate-400 text-slate-900',
    client: 'PT PGN LNG Indonesia',
    clientIndustry: 'Energy & Liquefied Gas',
    description: 'Triple Silver honors across Non-Traditional Annual Report, Custom Illustrations and Specialty Printing.',
    description_id: 'Meraih Tiga Penghargaan Perak di kategori Laporan Tahunan Non-Tradisional, Ilustrasi Kustom, dan Teknik Cetak Khusus.',
    scope: ['Custom Illustrations', 'Production QC', 'Creative Strategy'],
    scope_id: ['Ilustrasi Kustom', 'Kontrol Kualitas Produksi', 'Strategi Kreatif'],
    image: '/award-arc-2019-certificates-silver.jpg',
    location: 'New York, USA',
  }
];

export default function AwardSection() {
  const { lang, t } = useLanguage();
  const [cardsVisible, setCardsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<'grid' | 'spotlight' | 'timeline'>('grid');
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [activeModalAward, setActiveModalAward] = useState<AwardItem | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const formatBadgeType = (badge: string) => {
    switch (badge.toLowerCase()) {
      case "grand winner":
        return t("award.badge_grand");
      case "gold winner":
        return t("award.badge_gold");
      case "silver winner":
        return t("award.badge_silver");
      case "bronze winner":
        return t("award.badge_bronze");
      case "bronze stevie® winner":
      case "bronze stevie winner":
        return t("award.badge_bronze_stevie");
      case "triple silver":
      case "triple silver winner":
        return t("award.badge_triple_silver");
      case "triple gold":
      case "triple gold winner":
        return t("award.badge_triple_gold");
      default:
        return badge;
    }
  };

  const achievements = [
    { value: "50+", label: t("award.stat_awards"), sub: t("award.stat_awards_sub") },
    { value: "100%", label: t("award.stat_record"), sub: t("award.stat_record_sub") },
    { value: "15+ Years", label: t("award.stat_leadership"), sub: t("award.stat_leadership_sub") },
    { value: "Top Tier", label: t("award.stat_trust"), sub: t("award.stat_trust_sub") },
  ];

  const awardCategories = [
    { id: "All", title: t("award.cat_all"), number: "01" },
    { id: "Annual Report", title: t("award.cat_ar"), number: "02" },
    { id: "Sustainability Report", title: t("award.cat_sr"), number: "03" },
    { id: "Brand Strategy", title: t("award.cat_bs"), number: "04" },
  ];

  const yearsAvailable = ["All", "2024", "2023", "2022", "2020", "2019"] as const;

  const getCategoryCount = (catId: string) => {
    return prestigeAwards.filter((item) => {
      const matchCat = catId === "All" || item.category === catId;
      const matchYr = selectedYear === "All" || item.year === selectedYear;
      return matchCat && matchYr;
    }).length;
  };

  const filteredAwards = useMemo(() => {
    return prestigeAwards.filter((item) => {
      const matchCat = activeCategory === "All" || item.category === activeCategory;
      const matchYr = selectedYear === "All" || item.year === selectedYear;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || (
        item.awardName.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.subCategory.toLowerCase().includes(q) ||
        item.badgeType.toLowerCase().includes(q)
      );
      return matchCat && matchYr && matchSearch;
    });
  }, [activeCategory, selectedYear, searchQuery]);

  const handleNextSpotlight = () => {
    setSpotlightIndex((prev) => (prev + 1) % (filteredAwards.length || 1));
  };

  const handlePrevSpotlight = () => {
    setSpotlightIndex((prev) => (prev - 1 + filteredAwards.length) % (filteredAwards.length || 1));
  };

  const currentSpotlight = filteredAwards[spotlightIndex] || filteredAwards[0];

  return (
    <section
      id="award"
      className="relative min-h-screen w-full flex flex-col justify-start overflow-hidden text-white"
      style={{
        backgroundColor: "#0077b6",
        paddingTop: "clamp(5rem, 8vh, 6.5rem)",
        paddingBottom: "clamp(5rem, 8vh, 7rem)",
        paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
        paddingRight: "clamp(1.5rem, 4vw, 4rem)",
      }}
    >

      {/* Main Content Wrapper - Lebar Penuh Sampai Samping Seperti Our Work */}
      <div className="w-full relative z-10 max-w-full flex flex-col justify-start">
        
        {/* ======================================================== */}
        {/* TOP BAR: Category Filter Tabs (Identik dengan Work)       */}
        {/* ======================================================== */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/20 select-none shrink-0"
          style={{ marginBottom: "2.5rem" }}
        >
          {/* Left: Section Breadcrumb Badge */}
          <div className="flex items-center gap-3 pb-3">
            <span className="w-7 h-0.5 bg-cyan-300 rounded-full inline-block" />
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-200 leading-none">
              {t("award.top_badge")}
            </span>
          </div>

          {/* Right: Numbers 01, 02, 03, 04 & Category Filter Tabs */}
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto -mb-[1px] pr-4">
            {awardCategories.map((tab) => {
              const isActive = activeCategory === tab.id;
              const count = getCategoryCount(tab.id);

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative flex items-center pb-3 text-sm sm:text-base font-bold transition-all duration-200 whitespace-nowrap cursor-pointer select-none outline-none focus:outline-none focus:ring-0 border-b-2 ${
                    isActive
                      ? "border-white text-white"
                      : "border-transparent text-white/70 hover:text-white"
                  }`}
                  style={{ gap: "0.65rem" }}
                >
                  {/* Number Badge */}
                  <span
                    className={`text-xs font-mono font-bold rounded-lg transition-colors leading-none shrink-0 flex items-center justify-center text-center ${
                      isActive
                        ? "bg-white/25 text-cyan-200 shadow-sm"
                        : "bg-white/10 text-white/60"
                    }`}
                    style={{
                      width: "28px",
                      height: "28px",
                      lineHeight: "1",
                    }}
                  >
                    <span>{tab.number}</span>
                  </span>

                  {/* Tab Label */}
                  <span className="leading-none text-sm sm:text-base font-bold">
                    {tab.title}
                  </span>

                  {/* Count Pill */}
                  <span
                    className={`text-[11px] font-mono font-bold rounded-full transition-colors shrink-0 flex items-center justify-center leading-none ${
                      isActive
                        ? "bg-white text-slate-900 shadow-sm font-extrabold"
                        : "bg-white/15 text-white/80"
                    }`}
                    style={{
                      minWidth: "22px",
                      height: "22px",
                      padding: "0 6px",
                      marginLeft: "0.25rem",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Headline */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          style={{ marginBottom: "1.75rem" }}
        >
          <div>
            <span
              className="text-cyan-200 text-xs sm:text-sm font-bold uppercase tracking-widest block"
              style={{ marginBottom: "0.35rem" }}
            >
              {t("award.sub_badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {t("award.headline")} {t("award.headline_accent")}
            </h2>
          </div>
        </div>

        {/* ======================================================== */}
        {/* YEAR FILTER & CONTROL BAR (Identik Kotak Kaca Our Work)   */}
        {/* ======================================================== */}
        <div
          className={`flex flex-col rounded-3xl border border-white/20 shadow-2xl relative z-10 transition-all duration-700 ease-out ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            backgroundColor: "rgba(3, 15, 38, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "1.75rem 2rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Header Row inside Filter Container: Title, View Mode & Project Count */}
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15"
            style={{
              paddingBottom: "1.1rem",
              marginBottom: "1.25rem",
            }}
          >
            {/* Left: Indicator Title */}
            <div className="flex items-center gap-2.5 shrink-0">
              <span
                className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9] animate-pulse inline-block"
                style={{ flexShrink: 0 }}
              />
              <span
                className="text-cyan-200 font-extrabold uppercase tracking-wider text-xs"
                style={{ letterSpacing: "0.12em" }}
              >
                {t("award.filter_year")}
              </span>
            </div>

            {/* Right: View Mode Switcher + Count Pill */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Layout Switcher */}
              <div 
                className="bg-black/60 rounded-full border border-white/20 inline-flex items-center shadow-inner"
                style={{
                  padding: "4px 6px",
                  gap: "6px",
                }}
              >
                <button 
                  onClick={() => setViewMode('grid')}
                  title="3D Grid"
                  className={`inline-flex items-center justify-center rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    viewMode === 'grid' 
                      ? 'bg-white text-slate-950 shadow-md font-extrabold' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    padding: "6px 14px",
                    gap: "6px",
                  }}
                >
                  <LayoutGrid className="w-3.5 h-3.5 shrink-0" />
                  <span>{t("award.view_grid")}</span>
                </button>
                <button 
                  onClick={() => setViewMode('spotlight')}
                  title="Spotlight Stage"
                  className={`inline-flex items-center justify-center rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    viewMode === 'spotlight' 
                      ? 'bg-white text-slate-950 shadow-md font-extrabold' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    padding: "6px 14px",
                    gap: "6px",
                  }}
                >
                  <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{t("award.view_spotlight")}</span>
                </button>
                <button 
                  onClick={() => setViewMode('timeline')}
                  title="Timeline"
                  className={`inline-flex items-center justify-center rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    viewMode === 'timeline' 
                      ? 'bg-white text-slate-950 shadow-md font-extrabold' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    padding: "6px 14px",
                    gap: "6px",
                  }}
                >
                  <GitCommit className="w-3.5 h-3.5 shrink-0" />
                  <span>{t("award.view_timeline")}</span>
                </button>
              </div>

              {/* Total Count */}
              <span
                className="text-xs font-bold text-cyan-100 bg-white/15 rounded-full border border-white/20 tracking-wide shrink-0 whitespace-nowrap inline-flex items-center justify-center"
                style={{ padding: "0.5rem 1.25rem", letterSpacing: "0.05em" }}
              >
                {filteredAwards.length} {t("award.honors_count")}
              </span>
            </div>
          </div>

          {/* Year Buttons Row - Identik dengan WorkSection */}
          <div
            className="flex flex-wrap items-center select-none"
            style={{
              gap: "0.85rem 0.75rem",
              paddingTop: "0.35rem",
              paddingBottom: "0.35rem",
            }}
          >
            {yearsAvailable.map((yr) => {
              const isSelected = selectedYear === yr;
              const countInYr = prestigeAwards.filter((item) => {
                const matchCat = activeCategory === "All" || item.category === activeCategory;
                const matchYr = yr === "All" || item.year === yr;
                return matchCat && matchYr;
              }).length;

              return (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`group relative shrink-0 flex items-center justify-center rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-white text-slate-900 border-white shadow-xl shadow-black/40 scale-105"
                      : "bg-white/10 hover:bg-white/20 text-white border-white/25"
                  }`}
                  style={{
                    padding: "0.55rem 1.15rem",
                    gap: "0.6rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span className="whitespace-nowrap text-xs font-bold tracking-normal">
                    {yr === "All" ? t("work.all_years") : yr}
                  </span>
                  {countInYr > 0 && (
                    <span
                      className={`text-[11px] rounded-full font-bold transition-colors leading-none shrink-0 flex items-center justify-center ${
                        isSelected
                          ? "bg-slate-900 text-white"
                          : "bg-white/25 text-white"
                      }`}
                      style={{
                        minWidth: "22px",
                        height: "22px",
                        padding: "0 6px",
                      }}
                    >
                      {countInYr}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* MAIN DISPLAY: GRID / SPOTLIGHT / TIMELINE                */}
        {/* ======================================================== */}

        {filteredAwards.length === 0 ? (
          <div
            className="w-full bg-white/10 backdrop-blur-md rounded-3xl text-center border border-white/15 flex flex-col items-center justify-center"
            style={{
              padding: "4rem 2rem",
              marginTop: "0.5rem",
              marginBottom: "3.5rem",
            }}
          >
            <Trophy className="w-12 h-12 text-cyan-300/50 mx-auto mb-3 animate-bounce" />
            <p className="text-white/90 text-sm mb-4 font-medium" style={{ letterSpacing: "0.03em" }}>
              No awards found for the selected filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSelectedYear("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs font-bold hover:bg-cyan-100 transition shadow-lg cursor-pointer"
              style={{ letterSpacing: "0.05em" }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            {/* 1. GRID VIEW MODE (5 Kolom Penuh Identik Our Work) */}
            {viewMode === 'grid' && (
              <div
                className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch transition-all duration-700 delay-150 ease-out ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  gap: "2rem",
                  marginTop: "0.5rem",
                  marginBottom: "3.5rem",
                }}
              >
                {filteredAwards.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveModalAward(item)}
                    className="group rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-xl cursor-pointer"
                  >
                    {/* Visual Image Container - Full bleed like Our Work */}
                    <div className="relative w-full aspect-square overflow-hidden bg-black/40">
                      <img
                        src={item.image}
                        alt={item.subCategory}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Ambient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Badge Honor - Top Left */}
                      <div
                        className={`absolute top-3 left-3 rounded-full bg-gradient-to-r ${item.badgeClass} font-extrabold uppercase shadow-lg inline-flex items-center justify-center max-w-[65%] truncate whitespace-nowrap`}
                        style={{
                          padding: "0.35rem 0.85rem",
                          fontSize: "10px",
                          letterSpacing: "0.08em",
                          lineHeight: "1",
                        }}
                        title={item.badgeType}
                      >
                        ★ {formatBadgeType(item.badgeType)}
                      </div>

                      {/* Year Tag - Top Right */}
                      <div
                        className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white font-mono font-bold shadow-md inline-flex items-center justify-center whitespace-nowrap"
                        style={{
                          padding: "0.35rem 0.75rem",
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                          lineHeight: "1",
                        }}
                      >
                        {item.year}
                      </div>

                      {/* Hover Quick View Action (VIEW Pill like Our Work) */}
                      <div className="absolute inset-0 bg-cyan-600/35 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span
                          className="rounded-full bg-white text-slate-900 font-black uppercase shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform inline-flex items-center justify-center whitespace-nowrap"
                          style={{
                            padding: "0.55rem 1.4rem",
                            fontSize: "11px",
                            letterSpacing: "0.12em",
                            lineHeight: "1",
                          }}
                        >
                          {lang === "id" ? "LIHAT" : "VIEW"}
                        </span>
                      </div>
                    </div>

                    {/* Card Content & Metadata - Clean Gradient matching Our Work */}
                    <div
                      className="flex-1 flex flex-col justify-start bg-gradient-to-b from-black/40 via-black/60 to-black/80"
                      style={{
                        padding: "1.25rem 1.25rem 1.35rem 1.25rem",
                        minHeight: "125px",
                      }}
                    >
                      {/* Competition / Awarding Body */}
                      <span
                        className="text-[11px] uppercase text-cyan-200/90 font-bold block truncate"
                        style={{
                          letterSpacing: "0.08em",
                          marginBottom: "0.35rem",
                          lineHeight: "1",
                        }}
                        title={item.awardName}
                      >
                        {item.awardName}
                      </span>

                      {/* Main Title */}
                      <h3
                        className="text-white font-black text-sm sm:text-base leading-snug group-hover:text-amber-300 transition-colors line-clamp-2"
                        style={{
                          letterSpacing: "-0.01em",
                          marginBottom: "0.4rem",
                        }}
                        title={lang === "id" && item.subCategory_id ? item.subCategory_id : item.subCategory}
                      >
                        {lang === "id" && item.subCategory_id ? item.subCategory_id : item.subCategory}
                      </h3>

                      {/* Client Name */}
                      <div
                        className="text-[11px] font-semibold text-white/90 flex items-center gap-1.5 truncate mt-auto pt-1"
                        title={item.client}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
                        <span className="truncate">{item.client}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. SPOTLIGHT STAGE VIEW MODE */}
            {viewMode === 'spotlight' && currentSpotlight && (
              <div 
                className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden animate-fade-in"
                style={{ marginBottom: "3.5rem" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left: Spotlight Image */}
                  <div className="lg:col-span-6 relative group">
                    <div className="relative h-80 sm:h-96 lg:h-[460px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/50 flex items-center justify-center p-4">
                      <img 
                        src={currentSpotlight.image} 
                        alt={currentSpotlight.subCategory} 
                        className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Floating Bottom Label */}
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                        <div className="pr-2">
                          <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest block mb-1">
                            {t("award.spotlight_feature")}
                          </span>
                          <h4 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">
                            {currentSpotlight.client}
                          </h4>
                        </div>
                        <button
                          onClick={() => setActiveModalAward(currentSpotlight)}
                          className="p-3 rounded-full bg-white text-slate-950 hover:bg-cyan-200 transition-colors shadow-xl shrink-0 cursor-pointer"
                          title="Maximize"
                        >
                          <Maximize2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: Detailed Metadata - Jarak Atas, Bawah, Kanan Lega & Rapi */}
                  <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6 py-2 px-2 sm:px-4 lg:pr-6">
                    
                    {/* Top Row: Meta Header (Left) & Controls (Right) */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1.5 flex-1 pr-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                          <span className="font-bold uppercase tracking-wider text-cyan-300">
                            {currentSpotlight.client} • {currentSpotlight.year}
                          </span>
                          <span className="text-white/40">•</span>
                          <span className="font-semibold text-white/75 truncate max-w-[190px]" title={currentSpotlight.awardName}>
                            {currentSpotlight.awardName}
                          </span>
                        </div>
                        {currentSpotlight.location && (
                          <div className="text-cyan-200/90 flex items-center gap-1.5 text-xs font-medium">
                            <Globe className="w-3.5 h-3.5 inline shrink-0 text-cyan-400" />
                            <span>{currentSpotlight.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Main Award Title */}
                    <h2 
                      className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight"
                      style={{ marginTop: "0.35rem", marginBottom: "0.2rem" }}
                    >
                      {lang === "id" && currentSpotlight.subCategory_id ? currentSpotlight.subCategory_id : currentSpotlight.subCategory}
                    </h2>

                    {/* Description Paragraph with breathing room */}
                    <p 
                      className="text-white/85 text-sm sm:text-base leading-relaxed"
                      style={{ marginTop: "0.35rem", marginBottom: "0.35rem", lineHeight: "1.7" }}
                    >
                      {lang === "id" && currentSpotlight.description_id ? currentSpotlight.description_id : currentSpotlight.description}
                    </p>

                    {/* Scope Deliverables */}
                    <div style={{ paddingTop: "0.5rem", paddingBottom: "0.35rem" }}>
                      <div className="flex flex-wrap items-center gap-2.5">
                        {((lang === "id" && currentSpotlight.scope_id) ? currentSpotlight.scope_id : currentSpotlight.scope).map((s, idx) => (
                          <div 
                            key={idx} 
                            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 text-xs text-white/90 shadow-sm leading-none"
                            style={{
                              padding: "0.55rem 1rem",
                            }}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                            <span className="font-semibold leading-none">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Controls: Counter Pill & Grand Winner Badge di Samping Kanan, Panah Navigasi di Bawahnya */}
                    <div 
                      className="border-t border-white/15 flex flex-col items-start gap-4"
                      style={{ paddingTop: "1.25rem", marginTop: "0.85rem" }}
                    >
                      {/* Baris 1: Counter Pill + Grand Winner Badge di sebelah kanannya */}
                      <div className="flex flex-wrap items-center gap-3">
                        {/* Counter Pill */}
                        <div 
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-black/40 text-cyan-200 shadow-inner select-none"
                          style={{
                            padding: "0.55rem 1.25rem",
                            letterSpacing: "0.04em",
                          }}
                        >
                          <span className="text-white font-black text-sm leading-none">{spotlightIndex + 1}</span>
                          <span className="text-white/40 text-xs leading-none">/</span>
                          <span className="text-white/90 font-bold text-sm leading-none">{filteredAwards.length}</span>
                          <span className="text-cyan-300 font-extrabold uppercase text-[11px] ml-1 tracking-wider leading-none">
                            HONORS
                          </span>
                        </div>

                        {/* Grand Winner / Gold / Bronze Badge (Dipindahkan ke sebelah kanan Honors) */}
                        <span 
                          className={`rounded-full font-black uppercase bg-gradient-to-r ${currentSpotlight.badgeClass} text-slate-950 shadow-md border border-white/20 whitespace-nowrap`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "32px",
                            padding: "0 18px",
                            fontSize: "11px",
                            letterSpacing: "0.08em",
                            lineHeight: 1,
                          }}
                        >
                          <span style={{ display: "inline-block", transform: "translateY(-0.5px)" }}>
                            ★ {formatBadgeType(currentSpotlight.badgeType)}
                          </span>
                        </span>
                      </div>

                      {/* Baris 2: Navigation Arrows (Di Bawah Baris Counter & Badge) */}
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={handlePrevSpotlight}
                          className="w-11 h-11 rounded-full border border-white/20 bg-black/40 hover:bg-white text-white hover:text-slate-950 transition-all duration-200 cursor-pointer shadow-lg active:scale-95 flex items-center justify-center p-0 select-none outline-none"
                          aria-label="Previous Honor"
                          title="Previous Honor"
                        >
                          <ChevronLeft className="w-5 h-5 text-current shrink-0" />
                        </button>
                        <button 
                          onClick={handleNextSpotlight}
                          className="w-11 h-11 rounded-full border border-white/20 bg-black/40 hover:bg-white text-white hover:text-slate-950 transition-all duration-200 cursor-pointer shadow-lg active:scale-95 flex items-center justify-center p-0 select-none outline-none"
                          aria-label="Next Honor"
                          title="Next Honor"
                        >
                          <ChevronRight className="w-5 h-5 text-current shrink-0" />
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* 3. TIMELINE VIEW MODE */}
            {viewMode === 'timeline' && (
              <div 
                className="w-full py-8 animate-fade-in"
                style={{ marginBottom: "4rem" }}
              >
                {/* Full Width Container with balanced vertical gap between each award */}
                <div 
                  className="w-full relative flex flex-col"
                  style={{ gap: "1.75rem" }}
                >
                  {filteredAwards.map((item, index) => {
                    const isLast = index === filteredAwards.length - 1;
                    return (
                      <div 
                        key={item.id} 
                        className="relative flex items-center gap-4 sm:gap-7 md:gap-8 group"
                      >
                        
                        {/* 1. Left: Year & Location Pill / Badge - Vertically Centered */}
                        <div className="w-24 sm:w-32 md:w-36 shrink-0 text-right select-none">
                          <div className="inline-flex flex-col items-end justify-center">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-black text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                              {item.year}
                            </span>
                            <span 
                              className="mt-1.5 text-[10px] sm:text-xs font-mono font-bold text-cyan-200 uppercase tracking-wider block truncate max-w-[140px]" 
                              title={item.location}
                            >
                              {item.location}
                            </span>
                          </div>
                        </div>

                        {/* 2. Middle: Timeline Spine & Node Icon - Centered with Continuous Line to Next Award */}
                        <div className="relative flex flex-col items-center justify-center shrink-0 self-stretch">
                          {/* Continuous Vertical Line Connecting to Next Award */}
                          {!isLast && (
                            <div 
                              className="absolute left-1/2 -translate-x-1/2 top-1/2 w-0.5 bg-gradient-to-b from-cyan-300/60 via-cyan-400/40 to-cyan-300/60 z-0 pointer-events-none" 
                              style={{ height: "calc(100% + 1.75rem)" }}
                            />
                          )}

                          {/* Glowing Node Trophy (Precisely Centered Vertically with the card) */}
                          <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-950 border-2 border-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-115 group-hover:border-amber-300 group-hover:shadow-amber-400/40 transition-all">
                            <Trophy className="w-5 h-5 text-cyan-300 group-hover:text-amber-300 transition-colors shrink-0" />
                          </div>
                        </div>

                        {/* 3. Right: Award Glass Card - Stretches full width with distinct separation */}
                        <div 
                          onClick={() => setActiveModalAward(item)}
                          className="flex-1 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-cyan-300/50 rounded-2xl backdrop-blur-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-cyan-500/15 flex flex-col justify-center"
                          style={{
                            padding: "1.4rem 1.85rem",
                          }}
                        >
                          {/* Top Row: Award Competition / Body & Category Badge */}
                          <div 
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                            style={{ marginBottom: "0.65rem" }}
                          >
                            <div className="pr-2">
                              <span 
                                className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block"
                                style={{ marginBottom: "0.25rem" }}
                              >
                                {item.awardName}
                              </span>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                                {lang === "id" && item.subCategory_id ? item.subCategory_id : item.subCategory}
                              </h3>
                            </div>
                            
                            {/* Grand / Gold / Silver Winner Badge - Presisi di Tengah Shape */}
                            <div className="shrink-0 self-start sm:self-center">
                              <span 
                                className={`rounded-full font-black uppercase bg-gradient-to-r ${item.badgeClass} text-slate-950 border border-white/20 shadow-lg whitespace-nowrap`}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  height: "30px",
                                  padding: "0 18px",
                                  fontSize: "11px",
                                  letterSpacing: "0.08em",
                                  lineHeight: 1,
                                }}
                              >
                                <span style={{ display: "inline-block", transform: "translateY(-0.5px)" }}>
                                  ★ {formatBadgeType(item.badgeType)}
                                </span>
                              </span>
                            </div>
                          </div>

                          <p 
                            className="text-sm sm:text-base text-white/85 line-clamp-2 leading-relaxed font-normal"
                            style={{ marginBottom: "0.85rem" }}
                          >
                            {lang === "id" && item.description_id ? item.description_id : item.description}
                          </p>

                          <div 
                            className="flex items-center justify-between text-xs sm:text-sm border-t border-white/15"
                            style={{ paddingTop: "0.75rem" }}
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block shrink-0" />
                              <span className="font-semibold text-white/95">{t("award.client_label")} {item.client}</span>
                            </div>
                            <span className="text-cyan-200 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              <span>{t("award.view_details")}</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}

        {/* ======================================================== */}
        {/* STATS COUNTER BAR (Identik Tema Work)                    */}
        {/* ======================================================== */}
        <div
          className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl grid grid-cols-2 lg:grid-cols-4 items-center"
          style={{
            padding: "2rem 2.5rem",
            marginBottom: "3.5rem",
            gap: "1.5rem",
          }}
        >
          {achievements.map((ach, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i !== achievements.length - 1 ? "lg:border-r lg:border-white/10" : ""
              } pr-4`}
            >
              <span
                className="text-3xl sm:text-4xl font-black text-white"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #67e8f9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.35rem",
                }}
              >
                {ach.value}
              </span>
              <span
                className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider"
                style={{ letterSpacing: "0.06em", marginBottom: "0.2rem" }}
              >
                {ach.label}
              </span>
              <span className="text-[11px] text-white/60 leading-tight">
                {ach.sub}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* ======================================================== */}
      {/* DETAIL MODAL POPUP (Design Bersih, Simpel & Serasi dg Work) */}
      {/* ======================================================== */}
      {activeModalAward && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveModalAward(null)}
        >
          <div 
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveModalAward(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer border border-white/20 select-none shadow-lg active:scale-95"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-res Photo Container (Persis seperti Lightbox Modal Work) */}
            <div className="relative w-full max-h-[60vh] overflow-hidden bg-black flex items-center justify-center p-4 sm:p-6">
              <img 
                src={activeModalAward.image} 
                alt={activeModalAward.subCategory} 
                className="w-full h-auto max-h-[55vh] object-contain rounded-2xl drop-shadow-2xl"
              />
            </div>

            {/* Modal Detail Body - Bersih, Rapih, Serasi dengan Work Modal */}
            <div 
              className="bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10"
              style={{
                padding: "2rem 2.25rem",
              }}
            >
              {/* Left Content */}
              <div className="flex-1 pr-4 space-y-3">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-2">
                  <span 
                    className="text-xs font-bold uppercase tracking-wider text-cyan-300"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {activeModalAward.client} • {activeModalAward.year}
                  </span>
                  <span className="text-white/40 text-xs">•</span>
                  <span className="text-xs font-semibold text-white/70">
                    {activeModalAward.awardName}
                  </span>
                  {activeModalAward.location && (
                    <>
                      <span className="text-white/40 text-xs">•</span>
                      <span className="text-xs text-cyan-200/90 flex items-center gap-1 font-medium">
                        <Globe className="w-3.5 h-3.5 inline shrink-0" />
                        {activeModalAward.location}
                      </span>
                    </>
                  )}
                </div>

                {/* Main Title */}
                <h4 
                  className="text-xl sm:text-2xl font-black text-white"
                  style={{
                    letterSpacing: "0.01em",
                    lineHeight: "1.35",
                  }}
                >
                  {lang === "id" && activeModalAward.subCategory_id ? activeModalAward.subCategory_id : activeModalAward.subCategory}
                </h4>

                {/* Description */}
                <p 
                  className="text-sm text-white/80 max-w-2xl"
                  style={{
                    lineHeight: "1.65",
                    letterSpacing: "0.01em",
                  }}
                >
                  {lang === "id" && activeModalAward.description_id ? activeModalAward.description_id : activeModalAward.description}
                </p>

                {/* Scope of Work Tags */}
                {((lang === "id" && activeModalAward.scope_id) ? activeModalAward.scope_id : activeModalAward.scope) && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {((lang === "id" && activeModalAward.scope_id) ? activeModalAward.scope_id : activeModalAward.scope).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs text-white/90"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Pill: Award Category / Badge (Persis seperti pill kanan di Work Modal) */}
              <div className="shrink-0 self-start sm:self-center flex flex-col items-end gap-2">
                <span 
                  className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r ${activeModalAward.badgeClass} text-slate-950 text-xs font-black uppercase tracking-wider shadow-md`}
                  style={{
                    padding: "0.55rem 1.35rem",
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                  }}
                >
                  ★ {formatBadgeType(activeModalAward.badgeType)}
                </span>
                <span className="text-[11px] font-mono text-white/40 tracking-wider">
                  {activeModalAward.id}
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
