"use client";

import { useState } from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useLanguage } from "../context/LanguageContext";

type Project = {
  id: number;
  title: string;
  category: "Annual Report" | "Calendar Design" | "Branding & Print";
  client: string;
  year: string;
  image: string;
  images?: string[];
  description: string;
};

const clientList = [
  { name: "Danantara Indonesia", logo: "/logo-danantara.png" },
  { name: "Bank Indonesia", logo: "/logo-bank-indonesia.png" },
  { name: "MIND ID", logo: "/logo-mind-id.png" },
  { name: "Telkom Indonesia", logo: "/logo-telkom-indonesia.png" },
  { name: "Mitratel", logo: "/logo-mitratel.png" },
  { name: "Pertamina Hulu Energi", logo: "/logo-pertamina-hulu.png" },
  { name: "Pertamina Retail", logo: "/logo-pertamina-retail.png" },
  { name: "PGN", logo: "/logo-pgn.png" },
  { name: "PGN LNG", logo: "/logo-pgn-lng.png" },
  { name: "PGN Gagas", logo: "/logo-pgn-gagas.png" },
  { name: "PGN Mas", logo: "/logo-pgn-mas.png" },
  { name: "PGN Saka", logo: "/logo-pgn-saka.png" },
  { name: "Cikarang Listrindo Energy", logo: "/logo-cikarang-listrindo.png" },
  { name: "Adaro Energy", logo: "/logo-adaro.png" },
  { name: "AlamTri Geo", logo: "/logo-alamtri-geo.png" },
  { name: "Indika Energy", logo: "/logo-indika-energy.png" },
  { name: "Donggi Senoro LNG", logo: "/logo-donggi-senoro.png" },
  { name: "MedcoEnergi", logo: "/logo-medco-energi.png" },
  { name: "SIG Semen Indonesia", logo: "/logo-sig.png" },
  { name: "PP Construction & Investment", logo: "/logo-pp-konstruksi.png" },
  { name: "Peruri", logo: "/logo-peruri.png" },
  { name: "Pfizer", logo: "/logo-pfizer.png" },
  { name: "Sriboga Raturaya", logo: "/logo-sriboga.png" },
  { name: "First Media", logo: "/logo-first-media.png" },
  { name: "Home Credit", logo: "/logo-home-credit.png" },
];

const workCategories = [
  { id: "All", title: "All Work", number: "01" },
  { id: "Annual Report", title: "Annual Report", number: "02" },
  { id: "Calendar Design", title: "Calendar Design", number: "03" },
  { id: "Branding & Print", title: "Branding & Print", number: "04" },
] as const;

const projects: Project[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────
  {
    id: 100,
    title: "Tripatra Calendar 2026",
    category: "Calendar Design",
    client: "PT Tripatra Engineers and Constructors",
    year: "2026",
    image: "/work-tripatra-calendar-2026.jpg",
    images: [
      "/work-tripatra-calendar-2026.jpg",
      "/work-tripatra-calendar-2026-slide-2.jpg",
      "/work-tripatra-calendar-2026-slide-3.jpg",
      "/work-tripatra-calendar-2026-slide-4.jpg",
      "/work-tripatra-calendar-2026-slide-5.jpg",
      "/work-tripatra-calendar-2026-slide-6.jpg",
      "/work-tripatra-calendar-2026-slide-7.jpg",
    ],
    description: "Vibrant corporate desk calendar themed 'Excellent Performance for Better Success' with custom hand-drawn character illustrations celebrating engineering teamwork and industrial plant safety.",
  },
  {
    id: 101,
    title: "Pertamina Gas Calendar 2026",
    category: "Calendar Design",
    client: "PT Pertamina Gas",
    year: "2026",
    image: "/work-pertamina-gas-calendar-2026.jpg",
    description: "Exclusive spiral corporate desk calendar themed 'Delivering Reliable Energy', highlighting state energy connectivity, gas pipeline infrastructure, and field operational excellence.",
  },
  {
    id: 102,
    title: "Mitsui Indonesia Calendar 2026",
    category: "Calendar Design",
    client: "PT Mitsui Indonesia",
    year: "2026",
    image: "/work-mitsui-calendar-2026.jpg",
    description: "Minimalist Japanese-inspired corporate calendar featuring dual-sided flip pages, traditional wave illustrations, rising sun motif, and clean dual-month scheduling grids.",
  },
  // ── 2025 ──────────────────────────────────────────────────────────────
  {
    id: 105,
    title: "Cikarang Listrindo Calendar 2025",
    category: "Calendar Design",
    client: "PT Cikarang Listrindo Energy",
    year: "2025",
    image: "/work-cikarang-listrindo-calendar-2025.jpg",
    description: "Vibrant yellow-themed desk calendar titled '#Light that Brings Goodness', featuring playful vector illustrations celebrating clean solar energy, environmental planting, and power generation.",
  },
  {
    id: 106,
    title: "Mitsui Indonesia Calendar 2025",
    category: "Calendar Design",
    client: "PT Mitsui Indonesia",
    year: "2025",
    image: "/work-mitsui-calendar-2025.jpg",
    description: "Sophisticated Japanese-inspired corporate desk calendar featuring traditional seigaiha wave patterns, rising sun motif, and dual-sided calendar layouts for executive workspaces.",
  },
  {
    id: 103,
    title: "PGN Annual Report 2025",
    category: "Annual Report",
    client: "PT Perusahaan Gas Negara Tbk",
    year: "2025",
    image: "/work-pgn-ar-2025.jpg",
    description: "Flagship corporate annual report layout themed 'Strength in Balance' with geometric leaf pattern accents, interactive pull-tab feature, and comprehensive ESG reporting.",
  },
  {
    id: 104,
    title: "Pertamina Retail Annual Report 2025",
    category: "Annual Report",
    client: "PT Pertamina Retail",
    year: "2025",
    image: "/work-pertamina-ar-2025.jpg",
    description: "Human-centric corporate report themed 'Teguh Menjaga Tulus Melayani (Steadfast in Stewardship, Sincere in Service)' with Danantara Indonesia partnership endorsement.",
  },
  {
    id: 1,
    title: "Pertamina Kilang Internasional Calendar 2025",
    category: "Calendar Design",
    client: "PT Kilang Pertamina Internasional",
    year: "2025",
    image: "/work-pertamina-calendar.jpg",
    description: "Exclusive corporate desk calendar featuring custom stylized illustrations celebrating energy operational excellence and technical teamwork.",
  },
  // ── 2024 ──────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "PGN COM Annual Report 2024",
    category: "Annual Report",
    client: "PT PGAS Telekomunikasi Nusantara",
    year: "2024",
    image: "/work-pgn-annual-report.jpg",
    description: "Comprehensive corporate annual report layout themed 'Expanding Network Towards Prominent Provider Solution' with interactive ribbon pulls and crisp data infographics.",
  },
  {
    id: 3,
    title: "PGN LNG Annual Report 2024",
    category: "Annual Report",
    client: "PT PGN LNG Indonesia",
    year: "2024",
    image: "/work-pgn-lng-annual-report-2024.jpg",
    description: "Stunning stained-glass pop-art editorial cover and structured reporting themed 'Driving Progress, Powering Success', celebrating LNG infrastructure and operational safety.",
  },
  {
    id: 4,
    title: "PGN Gagas Annual Report 2024",
    category: "Annual Report",
    client: "PT Gagas Energi Indonesia",
    year: "2024",
    image: "/work-gagas-annual-report-2024.jpg",
    description: "Modern vector-style thematic book layout with interactive cyan pull-tab and comprehensive corporate ESG performance metrics.",
  },
  {
    id: 5,
    title: "Telkom Indonesia Brand Publication",
    category: "Branding & Print",
    client: "Telkom Indonesia",
    year: "2024",
    image: "/about-service-branding.png",
    description: "Executive multi-volume magazine series, brand guideline publications, and high-impact corporate editorial collateral.",
  },
  // ── 2023 ──────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "MIND ID Sustainability Report",
    category: "Annual Report",
    client: "MIND ID",
    year: "2023",
    image: "/about-service-annual-report.png",
    description: "Award-winning editorial layout for sustainability communications, data visual storytelling, and hardbound metallic foiling.",
  },
  // ── 2022 ──────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "PGN LNG Annual Report 2022",
    category: "Annual Report",
    client: "PT PGN LNG Indonesia",
    year: "2022",
    image: "/work-pgn-lng-annual-report-2022.jpg",
    description: "Minimalist matte-black executive book finish with precision die-cut window and futuristic optical line hologram effect themed 'Igniting New Possibilities'.",
  },
  {
    id: 8,
    title: "Pertamina Hulu Energi Brand Guidelines",
    category: "Branding & Print",
    client: "Pertamina Hulu Energi",
    year: "2022",
    image: "/about-service-branding.png",
    description: "Comprehensive brand architecture manual and visual communication guidelines across enterprise touchpoints.",
  },
  // ── 2021 ──────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Telkom Indonesia Annual Report 2021",
    category: "Annual Report",
    client: "PT Telkom Indonesia (Persero) Tbk",
    year: "2021",
    image: "/work-telkom-annual-report-2021.jpg",
    description: "Prestigious national telecom annual report themed 'Digitalization for a Better Future', featuring futuristic isometric digital ecosystem artwork and BUMN branding.",
  },
  {
    id: 10,
    title: "Go Beyond Corporate Desk Calendar",
    category: "Calendar Design",
    client: "Corporate Partner Series",
    year: "2021",
    image: "/about-service-calendar.png",
    description: "Bold geometric triangular desk calendar design with tactile dual-tone red & charcoal finish.",
  },
  // ── 2020 ──────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Diamond Food Indonesia Annual Report 2020",
    category: "Annual Report",
    client: "PT Diamond Food Indonesia Tbk",
    year: "2020",
    image: "/work-diamond-annual-report-2020.jpg",
    description: "FMCG cold-chain food & dairy leadership annual report themed 'Reinforcing Foundations, Building New Strengths', showcasing nationwide logistics networks and warehouse resilience.",
  },
  {
    id: 12,
    title: "Indika Energy Annual Report 2020",
    category: "Annual Report",
    client: "PT Indika Energy Tbk",
    year: "2020",
    image: "/work-indika-annual-report-2020.jpg",
    description: "Visionary energy transition publication themed 'Tomorrow Redefined', symbolized by minimalist origami paper airplanes soaring toward renewable synergy.",
  },
  // ── 2019 ──────────────────────────────────────────────────────────────
  {
    id: 109,
    title: "New Horizon Calendar 2019",
    category: "Calendar Design",
    client: "Corporate Calendar Series",
    year: "2019",
    image: "/work-calendar-2019-new-horizon.jpg",
    description: "Creative illustrated desk calendar themed 'New Horizon', showcasing vibrant typography filled with whimsical hot air balloons, urban lifestyles, and future landscapes.",
  },
  {
    id: 107,
    title: "Semen Indonesia Calendar 2019",
    category: "Calendar Design",
    client: "PT Semen Indonesia (Persero) Tbk",
    year: "2019",
    image: "/work-semen-indonesia-calendar-2019.jpg",
    description: "Exclusive spiral desk calendar themed 'Pesona Budaya Nusantara', highlighting Indonesian cultural heritage, traditional Balinese dancers, and scenic national landmarks.",
  },
  {
    id: 13,
    title: "MedcoEnergi 40 Years Young Annual Report 2019",
    category: "Annual Report",
    client: "PT Medco Energi Internasional Tbk",
    year: "2019",
    image: "/work-medco-annual-report-2019.jpg",
    description: "Milestone commemorative 40th anniversary corporate report celebrating four decades of pioneering energy leadership, renewable transition, and sustainable operations.",
  },
  {
    id: 14,
    title: "Adaro Energy Annual Report 2019",
    category: "Annual Report",
    client: "PT Adaro Energy Tbk",
    year: "2019",
    image: "/work-adaro-annual-report-2019.jpg",
    description: "Advancing Growth Through Empowerment and Synergy corporate annual report celebrating 27 years of energy leadership, mining operations, and sustainable synergy.",
  },
  {
    id: 15,
    title: "Enseval Annual Report 2019",
    category: "Annual Report",
    client: "PT Enseval Putera Megatrading Tbk",
    year: "2019",
    image: "/work-enseval-annual-report-2019.jpg",
    description: "Healthcare supply chain distribution annual report themed 'Become a Digital Distributor', showcasing digital logistics transformation and pharmaceutical supply connectivity.",
  },
  {
    id: 16,
    title: "Telkom Indonesia Annual Report 2019",
    category: "Annual Report",
    client: "PT Telkom Indonesia (Persero) Tbk",
    year: "2019",
    image: "/work-telkom-annual-report-2019.jpg",
    description: "Masterfully crafted 3D typographic cover highlighting enterprise growth, digital profitability, and nationwide telecommunication infrastructure.",
  },
  {
    id: 17,
    title: "Transgasindo Annual Report 2019",
    category: "Annual Report",
    client: "PT Transportasi Gas Indonesia",
    year: "2019",
    image: "/work-transgasindo-annual-report-2019.jpg",
    description: "Clean cyan and golden pipeline visual narrative representing natural gas transport across Indonesia under the theme 'Delivering Energy For Better Life'.",
  },
  {
    id: 18,
    title: "Cikarang Listrindo Annual Report 2019",
    category: "Annual Report",
    client: "PT Cikarang Listrindo Tbk",
    year: "2019",
    image: "/work-cikarang-listrindo-annual-report-2019.jpg",
    description: "Clean energy transition narrative themed 'Empowering Sustainable Energy', featuring modern isometric solar plant graphics and sustainable power generation metrics.",
  },
  {
    id: 19,
    title: "PGN LNG Annual Report 2019",
    category: "Annual Report",
    client: "PT PGN LNG Indonesia",
    year: "2019",
    image: "/work-pgn-lng-annual-report-2019.jpg",
    description: "Innovative custom slipcase book packaging with illustrated engineer cut-away sleeve and vibrant marine gas terminal editorial artwork themed 'Exploring New Potential'.",
  },
  {
    id: 20,
    title: "Bank Mandiri Executive Corporate Calendar",
    category: "Calendar Design",
    client: "Bank Mandiri",
    year: "2019",
    image: "/work-pertamina-calendar.jpg",
    description: "National banking milestone calendar series with customized regional heritage sketches and executive typography.",
  },
  // ── 2018 ──────────────────────────────────────────────────────────────
  {
    id: 119,
    title: "Mitratel Annual Report 2018",
    category: "Annual Report",
    client: "PT Dayamitra Telekomunikasi (Mitratel)",
    year: "2018",
    image: "/work-mitratel-ar-2018.jpg",
    description: "Bold red telecommunications corporate annual report themed 'Potential Everywhere', featuring an embossed metallic silver map of the Indonesian archipelago and digital network connectivity.",
  },
  {
    id: 120,
    title: "PGN LNG Annual Report 2018",
    category: "Annual Report",
    client: "PT PGN LNG Indonesia",
    year: "2018",
    image: "/work-pgn-lng-ar-2018.jpg",
    description: "Vibrant cyan corporate annual report themed 'Expanding New Market', featuring die-cut illustrated LNG carrier vessels, offshore crews, and specialized maritime technical personnel.",
  },
  {
    id: 121,
    title: "PGN Annual Report 2018",
    category: "Annual Report",
    client: "PT Perusahaan Gas Negara Tbk",
    year: "2018",
    image: "/work-pgn-ar-2018.jpg",
    description: "Distinguished corporate annual report themed 'Doors of Opportunity', featuring cinematic photography of field engineers opening energy access across Indonesia against a golden sunrise sky.",
  },
  {
    id: 122,
    title: "Cikarang Listrindo Annual Report 2018",
    category: "Annual Report",
    client: "PT Cikarang Listrindo Energy",
    year: "2018",
    image: "/work-cikarang-listrindo-ar-2018.jpg",
    description: "Commemorative 25th anniversary corporate report themed '25 Years of Partnership: Continuous Transformation', featuring intricate 3D isometric power plant and clean energy illustrations.",
  },
  {
    id: 110,
    title: "PGN MAS Annual Report 2018",
    category: "Annual Report",
    client: "PT Permata Graha Nusantara (PGN MAS)",
    year: "2018",
    image: "/work-pgn-mas-ar-2018.jpg",
    description: "Property and facility management corporate report themed 'Synergy and Transformation', symbolized by interconnected gears, architectural schematics, and teamwork synergy.",
  },
  {
    id: 111,
    title: "First Media Calendar 2018",
    category: "Calendar Design",
    client: "PT First Media Tbk",
    year: "2018",
    image: "/work-first-media-calendar-2018.jpg",
    description: "Dynamic telecommunications corporate desk calendar featuring colorful geometric facets, colorful monthly tabs, and high-energy lifestyle imagery.",
  },
  {
    id: 22,
    title: "Bank Indonesia Annual Report 2018",
    category: "Annual Report",
    client: "Bank Indonesia",
    year: "2018",
    image: "/work-bi-annual-report-2018.jpg",
    description: "Prestigious central bank annual report themed 'Synergy for Resilience and Growth', featuring architectural heritage photography and embossed gold security patterns.",
  },
  {
    id: 23,
    title: "PGN Sustainability Report 2018",
    category: "Annual Report",
    client: "PT Perusahaan Gas Negara Tbk",
    year: "2018",
    image: "/work-pgn-sustainability-report-2018.jpg",
    description: "Environmental and ESG transparency report featuring symbolic 'Doors of Sustainability' photography, highlighting clean energy transmission across Indonesia.",
  },
  {
    id: 24,
    title: "Pelindo Multi-Terminal Brand Identity",
    category: "Branding & Print",
    client: "PT Pelabuhan Indonesia",
    year: "2018",
    image: "/about-service-branding.png",
    description: "Port logistics corporate branding, signage guidelines, and premium business collateral system.",
  },
  // ── 2017 ──────────────────────────────────────────────────────────────
  {
    id: 112,
    title: "PGN Annual Report 2017",
    category: "Annual Report",
    client: "PT Perusahaan Gas Negara (Persero) Tbk",
    year: "2017",
    image: "/work-pgn-ar-2017.jpg",
    description: "Iconic flagship corporate report themed 'The Big Picture', featuring a navy hardbound cover with a camera aperture lens revealing integrated PGN group subsidiary synergies.",
  },
  {
    id: 114,
    title: "Pfizer Wellness Calendar 2017",
    category: "Calendar Design",
    client: "Pfizer Indonesia",
    year: "2017",
    image: "/work-pfizer-calendar-2017.jpg",
    description: "Inspiring healthcare corporate desk calendar themed 'Makan Makanan Sehat', highlighting healthy nutritional habits, balanced lifestyle education, and warm family wellness moments.",
  },
  {
    id: 115,
    title: "Pertamina Retail Calendar 2017",
    category: "Calendar Design",
    client: "PT Pertamina Retail",
    year: "2017",
    image: "/work-pertamina-retail-calendar-2017.jpg",
    description: "Distinctive red and white corporate desk calendar featuring dynamic circular retail network graphics, gas station services, Bright Store facilities, and national distribution points.",
  },
  {
    id: 113,
    title: "Adaro Energy Annual Report 2017",
    category: "Annual Report",
    client: "PT Adaro Energy Tbk",
    year: "2017",
    image: "/work-adaro-ar-2017.jpg",
    description: "Milestone corporate report themed '25 Years of Empowering Excellence', celebrating a quarter-century of mining leadership, environmental stewardship, and heavy equipment operations.",
  },
  {
    id: 108,
    title: "Enseval Annual Report 2017",
    category: "Annual Report",
    client: "PT Enseval Putera Megatrading Tbk",
    year: "2017",
    image: "/work-enseval-ar-2017.jpg",
    description: "Healthcare logistics annual report themed 'Journey of Digital Transformation', showcasing nationwide pharmaceutical supply chain modernization, mobile distribution systems, and enterprise growth.",
  },
  {
    id: 25,
    title: "Season's Greetings 3D Pop-Up Card",
    category: "Branding & Print",
    client: "Corporate Gifting Series",
    year: "2017",
    image: "/work-greeting-card.jpg",
    description: "Mastercrafted 3D paper engineering pop-up greeting card showcasing an intricate mythical phoenix, gold foil stamping, and traditional batik floral motifs.",
  },
  // ── 2016 ──────────────────────────────────────────────────────────────
  {
    id: 116,
    title: "Enseval Annual Report 2016",
    category: "Annual Report",
    client: "PT Enseval Putera Megatrading Tbk",
    year: "2016",
    image: "/work-enseval-ar-2016.jpg",
    description: "Comprehensive healthcare distribution annual report themed 'Collaborative Innovation for Service Excellence', featuring traditional batik background motifs and mobile app digital synergy icons.",
  },
  {
    id: 117,
    title: "Adaro Energy Annual Report 2016",
    category: "Annual Report",
    client: "PT Adaro Energy Tbk",
    year: "2016",
    image: "/work-adaro-ar-2016.jpg",
    description: "Corporate annual report themed 'Capitalizing on the Momentum to Build Solid Growth Foundation Indonesia', highlighting coal mining operations, power infrastructure, and industrial resilience.",
  },
  {
    id: 118,
    title: "First Media Multi-Platform Campaign",
    category: "Branding & Print",
    client: "PT First Media Tbk",
    year: "2016",
    image: "/work-first-media-campaign.jpg",
    description: "Integrated digital marketing and promotional branding campaign featuring high-impact comic pop-art graphics ('aMAYzing Offer') and '#MyFirstStyle' multi-device responsive collaterals.",
  },
  {
    id: 124,
    title: "Indonesian Heritage Desk Calendar 2016",
    category: "Calendar Design",
    client: "Corporate Heritage Series",
    year: "2016",
    image: "/work-heritage-calendar-2016.jpg",
    description: "Sophisticated black-themed executive desk calendar titled 'Happy New Year 2016', celebrating Indonesian cultural heritage with intricate tribal motifs, carved wooden totems, and traditional stone reliefs.",
  },
  {
    id: 125,
    title: "Season's Greetings 3D Pop-Up Calendar 2016",
    category: "Calendar Design",
    client: "Corporate Gifting Series",
    year: "2016",
    image: "/work-seasons-greetings-calendar-2016.jpg",
    description: "Luxurious gold-foil hardcover pop-up calendar featuring intricate multi-layered circular zodiac paper engineering, ornate decorative borders, and full annual scheduling layout.",
  },
  {
    id: 126,
    title: "#DoIT Cerdas Financial Campaign",
    category: "Branding & Print",
    client: "Financial Literacy Initiative",
    year: "2016",
    image: "/work-doit-cerdas-campaign.jpg",
    description: "Impactful bold red brand campaign identity themed '#DoIT CERDAS - Cerdas Soal Finansial', created to promote public financial literacy, smart investment awareness, and digital money management.",
  },
  {
    id: 129,
    title: "Pfizer Child Wellness Calendar 2016",
    category: "Calendar Design",
    client: "Pfizer Indonesia",
    year: "2016",
    image: "/work-pfizer-calendar-2016.jpg",
    description: "Heartwarming corporate desk calendar themed 'Pentingnya Menjaga Kesehatan Sejak Anak Usia Dini', highlighting pediatric healthcare, child immunization, and vibrant youth wellness education.",
  },
  // ── 2015 ──────────────────────────────────────────────────────────────
  {
    id: 130,
    title: "Indonesian Gas Association Web Portal",
    category: "Branding & Print",
    client: "Indonesian Gas Association (IGA)",
    year: "2015",
    image: "/work-iga-portal-website.jpg",
    description: "Official digital corporate web portal and communication interface for the Indonesian Gas Association, featuring international council updates, member portals, and natural gas industry news.",
  },
  {
    id: 131,
    title: "Sriboga Raturaya Vintage Calendar 2015",
    category: "Calendar Design",
    client: "PT Sriboga Raturaya",
    year: "2015",
    image: "/work-sriboga-calendar-2015.jpg",
    description: "Rustic parchment-textured desk calendar titled 'Happy New Year 2015', celebrating heritage wheat flour milling craft, artisanal culinary tradition, and authentic food production.",
  },
  {
    id: 26,
    title: "Garuda Indonesia In-Flight Calendar & Print",
    category: "Calendar Design",
    client: "Garuda Indonesia",
    year: "2015",
    image: "/about-service-calendar.png",
    description: "Aviation corporate calendar publication highlighting Indonesian cultural destinations and premium aviation hospitality.",
  },
  // ── 2014 ──────────────────────────────────────────────────────────────
  {
    id: 127,
    title: "PGN Annual Report 2014",
    category: "Annual Report",
    client: "PT Perusahaan Gas Negara (Persero) Tbk",
    year: "2014",
    image: "/work-pgn-ar-2014.jpg",
    description: "Modern minimalist corporate report with curved corner bookbinding, elegant micro-dot texture patterns, and crisp cyan brand accents reflecting state clean gas energy stewardship.",
  },
  {
    id: 128,
    title: "PGN Sustainability Report 2014",
    category: "Annual Report",
    client: "PT Perusahaan Gas Negara (Persero) Tbk",
    year: "2014",
    image: "/work-pgn-sr-2014.jpg",
    description: "Inspiring sustainability report themed 'A Story of Sustainability', presenting human-interest photography of micro-enterprise partners and community empowerment through clean gas infrastructure.",
  },
  {
    id: 132,
    title: "Darma Henwa Annual Report 2014",
    category: "Annual Report",
    client: "PT Darma Henwa Tbk",
    year: "2014",
    image: "/work-darma-henwa-ar-2014.jpg",
    description: "Clean mining corporate annual report themed 'Delivering Value', featuring an integrated cyclic diagram illustrating mining contractors, heavy earthmoving equipment, and occupational safety.",
  },
  // ── 2013 ──────────────────────────────────────────────────────────────
  {
    id: 134,
    title: "PGN Annual Report Boxset 2013",
    category: "Annual Report",
    client: "PT Perusahaan Gas Negara (Persero) Tbk",
    year: "2013",
    image: "/work-pgn-ar-boxset-2013.jpg",
    description: "Exclusive slipcase presentation boxset containing the 2013 Annual Report and executive summary '2013 at a glance' alongside custom corporate USB & merchandise.",
  },
  {
    id: 133,
    title: "PGN Gagas Annual Report 2013",
    category: "Annual Report",
    client: "PT Gagas Energi Indonesia",
    year: "2013",
    image: "/work-pgn-gagas-ar-2013.jpg",
    description: "Interactive corporate annual report with an interactive pull-tab feature themed 'Harnessing Natural Gas for The People and The Nation', showcasing CNG transport, city buses, and power plant distribution.",
  },
  {
    id: 123,
    title: "Jasa Marga Annual Report 2013",
    category: "Annual Report",
    client: "PT Jasa Marga (Persero) Tbk",
    year: "2013",
    image: "/work-jasa-marga-ar-2013.jpg",
    description: "Clean architectural corporate annual report themed 'Menuju Pertumbuhan Berikutnya', highlighting toll road infrastructure expansion, flyover bridge perspectives, and state highway engineering.",
  },
  {
    id: 135,
    title: "12 Sikap Positif Anak Usia Dini Kit",
    category: "Branding & Print",
    client: "Pfizer Early Childhood Education CSR",
    year: "2016",
    image: "/work-paud-sikap-positif-kit.jpg",
    description: "Comprehensive educational character kit for early childhood education (PAUD), featuring teacher guidebooks, illustrated flash cards, and a colorful animal growth chart.",
  },
  {
    id: 136,
    title: "PGN Nusantara Heritage Corporate Gift Set",
    category: "Branding & Print",
    client: "PT Perusahaan Gas Negara (Persero) Tbk",
    year: "2015",
    image: "/work-pgn-heritage-gift-set.jpg",
    description: "Premium corporate executive gift set featuring an embossed emerald journal and a curated collection of traditional Indonesian woven and batik textile bookmark cards.",
  },
];

const allYears = [
  "All",
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
] as const;

export default function WorkSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const workCategories = [
    { id: "All", title: t("work.cat_all"), number: "01" },
    { id: "Annual Report", title: t("work.cat_ar"), number: "02" },
    { id: "Calendar Design", title: t("work.cat_cal"), number: "03" },
    { id: "Branding & Print", title: t("work.cat_brand"), number: "04" },
  ];

  const getCategoryCount = (catId: string) => {
    return projects.filter((p) => {
      const matchCat = catId === "All" || p.category === catId;
      const matchYr = selectedYear === "All" || p.year === selectedYear;
      return matchCat && matchYr;
    }).length;
  };

  const filtered = projects
    .filter((p) => {
      const matchCat = activeTab === "All" || p.category === activeTab;
      const matchYr = selectedYear === "All" || p.year === selectedYear;
      return matchCat && matchYr;
    })
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <section
      id="work"
      className="relative min-h-screen w-full flex flex-col justify-start overflow-hidden bg-white text-slate-900"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "clamp(5rem, 8vh, 6.5rem)",
        paddingBottom: "clamp(5rem, 8vh, 7rem)",
        paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
        paddingRight: "clamp(1.5rem, 4vw, 4rem)",
      }}
    >

      {/* Main Content Wrapper - Lebar Penuh (w-full max-w-full) sehingga tidak kosong di kanan */}
      <div className="w-full relative z-10 max-w-full flex flex-col justify-start">
        
        {/* ======================================================== */}
        {/* TOP BAR: Category Filter Tabs                            */}
        {/* ======================================================== */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 select-none shrink-0"
          style={{ marginBottom: "2.5rem" }}
        >
          {/* Left: Section Breadcrumb Badge */}
          <div className="flex items-center gap-3 pb-3">
            <span className="w-7 h-0.5 bg-[#0080c8] rounded-full inline-block" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#0080c8] leading-none">
              {t("work.top_badge")}
            </span>
          </div>

          {/* Right: Numbers 01, 02, 03, 04 & Category Filter Tabs */}
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto -mb-[1px] pr-4">
            {workCategories.map((tab) => {
              const isActive = activeTab === tab.id;
              const count = getCategoryCount(tab.id);

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center pb-3 text-sm sm:text-base font-bold transition-all duration-200 whitespace-nowrap cursor-pointer select-none outline-none focus:outline-none focus:ring-0 border-b-2 ${
                    isActive
                      ? "border-[#0080c8] text-[#0080c8]"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                  style={{ gap: "0.65rem" }}
                >
                  {/* Number Badge */}
                  <span
                    className={`text-xs font-mono font-bold rounded-lg transition-colors leading-none shrink-0 flex items-center justify-center text-center ${
                      isActive
                        ? "bg-[#0080c8] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600"
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
                        ? "bg-[#0080c8] text-white shadow-sm font-extrabold"
                        : "bg-slate-200 text-slate-700"
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
              className="text-[#0080c8] text-xs sm:text-sm font-bold uppercase tracking-widest block"
              style={{ marginBottom: "0.35rem" }}
            >
              {t("work.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {t("work.title")}
            </h2>
          </div>
        </div>

        {/* Project Year Filter Bar (2026 - 2013) */}
        <div
          className="flex flex-col rounded-3xl border border-white/20 shadow-2xl relative z-10"
          style={{
            backgroundColor: "#0d2847",
            padding: "1.75rem 2rem",
            marginBottom: "3.75rem",
          }}
        >
          {/* Header Row inside Filter Container */}
          <div
            className="flex items-center justify-between border-b border-white/15"
            style={{
              paddingBottom: "1.1rem",
              marginBottom: "1.25rem",
            }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9] animate-pulse inline-block"
                style={{ flexShrink: 0 }}
              />
              <span
                className="text-cyan-200 font-extrabold uppercase tracking-wider text-xs"
                style={{ letterSpacing: "0.12em" }}
              >
                {t("work.filter_title")}
              </span>
            </div>
            <span
              className="text-xs font-semibold text-cyan-100 bg-white/15 rounded-full border border-white/20 tracking-wide"
              style={{ padding: "0.4rem 1.1rem", letterSpacing: "0.05em" }}
            >
              {filtered.length} {t("work.projects_count")}
            </span>
          </div>

          {/* Year Buttons Row - Clean spacing, generous gaps and comfortable padding */}
          <div
            className="flex flex-wrap items-center select-none"
            style={{
              gap: "0.85rem 0.75rem",
              paddingTop: "0.35rem",
              paddingBottom: "0.35rem",
            }}
          >
            {allYears.map((yr) => {
              const isSelected = selectedYear === yr;
              const countInYr = projects.filter((p) => {
                const matchCat = activeTab === "All" || p.category === activeTab;
                const matchYr = yr === "All" || p.year === yr;
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

        {/* 5-Column Portfolio Grid */}
        {filtered.length === 0 ? (
          <div
            className="w-full bg-white/10 backdrop-blur-md rounded-3xl text-center border border-white/15 flex flex-col items-center justify-center"
            style={{
              padding: "4rem 2rem",
              marginTop: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <p className="text-white/90 text-sm mb-5 font-medium" style={{ letterSpacing: "0.03em" }}>
              {t("work.no_project")} <span className="font-bold text-cyan-200">{selectedYear}</span>.
            </p>
            <button
              onClick={() => setSelectedYear("All")}
              className="px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs font-bold hover:bg-cyan-100 transition shadow-lg cursor-pointer"
              style={{ letterSpacing: "0.05em" }}
            >
              {t("work.show_all")}
            </button>
          </div>
        ) : (
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch animate-fade-in"
            style={{
              gap: "2rem",
              marginTop: "0.5rem",
              marginBottom: "3.5rem",
            }}
          >
            {filtered.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                onClick={() => setSelectedProject(project)}
                className="group rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-xl cursor-pointer"
              >
                {/* Image Preview Container */}
                <div className="relative w-full aspect-square overflow-hidden bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Ambient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div
                    className="absolute top-3 left-3 rounded-full bg-[#0077b6]/95 backdrop-blur-md border border-white/40 text-white font-extrabold shadow-lg uppercase inline-flex items-center justify-center whitespace-nowrap"
                    style={{
                      padding: "0.35rem 0.85rem",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      lineHeight: "1",
                    }}
                  >
                    {project.category === "Annual Report"
                      ? t("work.cat_ar")
                      : project.category === "Calendar Design"
                      ? t("work.cat_cal")
                      : project.category === "Branding & Print"
                      ? t("work.cat_brand")
                      : project.category}
                  </div>

                  {/* Year Tag */}
                  <div
                    className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white font-mono font-bold shadow-md inline-flex items-center justify-center whitespace-nowrap"
                    style={{
                      padding: "0.35rem 0.75rem",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      lineHeight: "1",
                    }}
                  >
                    {project.year}
                  </div>

                  {/* Hover Quick Action */}
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
                      VIEW
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div
                  className="flex-1 flex flex-col justify-start bg-gradient-to-b from-[#0e3b64] via-[#092d4f] to-[#05213b]"
                  style={{
                    padding: "1.25rem 1.25rem 1.35rem 1.25rem",
                    minHeight: "115px",
                  }}
                >
                  <span
                    className="text-[11px] uppercase text-cyan-200/90 font-bold block truncate"
                    style={{
                      letterSpacing: "0.08em",
                      marginBottom: "0.6rem",
                      lineHeight: "1.2",
                    }}
                  >
                    {project.client}
                  </span>
                  <h3
                    className="text-[13px] sm:text-sm font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-2"
                    title={project.title}
                    style={{
                      letterSpacing: "0.02em",
                      lineHeight: "1.45",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ======================================================== */}
        {/* GARIS PEMBATAS ANTARA OUR WORK & OUR CLIENTS             */}
        {/* ======================================================== */}
        <div className="w-full my-12 sm:my-16 border-t border-slate-200" />

        {/* ======================================================== */}
        {/* OUR CLIENTS SECTION (Pure Logos, Tanpa Box, Kanan & Kiri)*/}
        {/* ======================================================== */}
        <div
          className="w-full flex flex-col relative z-10"
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          {/* Header Row: Langsung di atas background utama, identik dengan Our Work */}
          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
            style={{ marginBottom: "1.75rem" }}
          >
            <div>
              <span
                className="text-[#0080c8] text-xs sm:text-sm font-bold uppercase tracking-widest block"
                style={{ marginBottom: "0.35rem" }}
              >
                {t("work.clients_badge")}
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight"
              >
                {t("work.clients_title")}
              </h2>
            </div>
          </div>

          {/* Infinite Moving Sliders: Pure Logos, Centered in the Section Box with generous padding */}
          <div className="w-full relative select-none flex flex-col justify-center gap-9 py-6 sm:py-8 my-auto">
            {/* Slider Baris 1: Bergerak ke KANAN (reverse=true) */}
            <InfiniteSlider gap={64} duration={120} durationOnHover={240} reverse={true} className="w-full py-0">
              {clientList.map((client, idx) => {
                const isWide = client.name === "Bank Indonesia" || client.name === "Cikarang Listrindo Energy" || client.name === "Danantara Indonesia";
                return (
                  <div
                    key={`slider-r1-${idx}`}
                    className="shrink-0 flex items-center justify-center self-center px-4 group cursor-pointer transition-transform duration-300 hover:scale-110"
                    style={{
                      width: isWide ? "280px" : "220px",
                      height: "64px",
                    }}
                    title={client.name}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(1800%)_hue-rotate(180deg)_brightness(95%)_contrast(100%)] opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none ${
                        isWide
                          ? "h-[32px] sm:h-[36px] md:h-[40px] max-w-[260px]"
                          : "h-[42px] sm:h-[46px] md:h-[50px] max-w-[190px]"
                      }`}
                    />
                  </div>
                );
              })}
            </InfiniteSlider>

            {/* Slider Baris 2: Bergerak ke KIRI (reverse=false) */}
            <InfiniteSlider gap={64} duration={135} durationOnHover={260} reverse={false} className="w-full py-0">
              {clientList.slice().reverse().map((client, idx) => {
                const isWide = client.name === "Bank Indonesia" || client.name === "Cikarang Listrindo Energy" || client.name === "Danantara Indonesia";
                return (
                  <div
                    key={`slider-r2-${idx}`}
                    className="shrink-0 flex items-center justify-center self-center px-4 group cursor-pointer transition-transform duration-300 hover:scale-110"
                    style={{
                      width: isWide ? "280px" : "220px",
                      height: "64px",
                    }}
                    title={client.name}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(1800%)_hue-rotate(180deg)_brightness(95%)_contrast(100%)] opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none ${
                        isWide
                          ? "h-[32px] sm:h-[36px] md:h-[40px] max-w-[260px]"
                          : "h-[42px] sm:h-[46px] md:h-[50px] max-w-[190px]"
                      }`}
                    />
                  </div>
                );
              })}
            </InfiniteSlider>
          </div>

          {/* Bottom Trust Badge - Jarak simetris sama persis dengan jarak dari header atas */}
          <div className="mt-14 sm:mt-16 pt-7 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0080c8] inline-block animate-pulse" />
              <span className="font-medium">{t("work.partners_count")}</span>
            </span>
            <span className="text-[#0080c8] font-semibold">
              {t("work.categories")}
            </span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* LIGHTBOX MODAL (Click project to view full photo)        */}
      {/* ======================================================== */}
      {selectedProject && (() => {
        // Daftar gambar untuk slide (jika ada images[], gunakan itu; fallback ke [image])
        const projectImages = selectedProject.images && selectedProject.images.length > 0
          ? selectedProject.images
          : [selectedProject.image];
        const currentImg = projectImages[activeImageIndex] || projectImages[0] || selectedProject.image;
        const totalSlides = projectImages.length;

        const handlePrev = (e: React.MouseEvent) => {
          e.stopPropagation();
          setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
        };

        const handleNext = (e: React.MouseEvent) => {
          e.stopPropagation();
          setActiveImageIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
        };

        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-xl animate-fade-in"
            onClick={() => {
              setSelectedProject(null);
              setActiveImageIndex(0);
            }}
          >
            <div
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setActiveImageIndex(0);
                }}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer border border-white/20 select-none"
                aria-label="Close"
              >
                ✕
              </button>

              {/* High-res Image Preview & Carousel Controls */}
              <div className="relative w-full h-[52vh] sm:h-[60vh] max-h-[65vh] overflow-hidden bg-black flex items-center justify-center p-2 group">
                <img
                  key={currentImg}
                  src={currentImg}
                  alt={`${selectedProject.title} - Slide ${activeImageIndex + 1}`}
                  className="w-full h-full object-contain rounded-2xl select-none transition-all duration-300"
                />

                {/* Navigasi Panah Kiri & Kanan (jika lebih dari 1 gambar) */}
                {totalSlides > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#0080c8] text-white flex items-center justify-center border border-white/30 backdrop-blur transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
                      aria-label="Previous Slide"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#0080c8] text-white flex items-center justify-center border border-white/30 backdrop-blur transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
                      aria-label="Next Slide"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Counter Badge Slide (misal: 1 / 5) */}
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-xs font-mono font-semibold text-white backdrop-blur">
                      {activeImageIndex + 1} / {totalSlides}
                    </div>
                  </>
                )}
              </div>

              {/* THUMBNAIL STRIP / SLOT SLIDER (Mendukung hingga 10 slot) */}
              {totalSlides > 1 && (
                <div className="w-full bg-slate-950/70 border-t border-white/10 px-4 py-2.5 flex items-center justify-center gap-2 overflow-x-auto select-none">
                  {projectImages.map((imgSrc, idx) => {
                    const isActive = activeImageIndex === idx;
                    return (
                      <button
                        key={`thumb-${idx}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(idx);
                        }}
                        className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 w-14 h-10 sm:w-16 sm:h-11 cursor-pointer ${
                          isActive
                            ? "border-[#0080c8] scale-105 shadow-[0_0_12px_rgba(0,128,200,0.6)]"
                            : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/50"
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-0.5 right-0.5 px-1 rounded bg-black/70 text-[9px] font-mono text-white leading-none">
                          {idx + 1}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Modal Detail Footer */}
              <div
                className="bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10"
                style={{
                  padding: "1.75rem 2.25rem",
                }}
              >
                <div className="flex-1 pr-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider text-cyan-300 block"
                    style={{
                      letterSpacing: "0.1em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {selectedProject.client} • {selectedProject.year}
                  </span>
                  <h4
                    className="text-xl sm:text-2xl font-black text-white"
                    style={{
                      letterSpacing: "0.01em",
                      lineHeight: "1.35",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {selectedProject.title}
                  </h4>
                  <p
                    className="text-sm text-white/80 max-w-2xl"
                    style={{
                      lineHeight: "1.65",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {selectedProject.description}
                  </p>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  <span
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md"
                    style={{
                      padding: "0.55rem 1.35rem",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {selectedProject.category === "Annual Report"
                      ? t("work.cat_ar")
                      : selectedProject.category === "Calendar Design"
                      ? t("work.cat_cal")
                      : selectedProject.category === "Branding & Print"
                      ? t("work.cat_brand")
                      : selectedProject.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        @keyframes marqueeLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .marquee-left-to-right {
          display: flex;
          width: max-content;
          animation: marqueeLeftToRight 38s linear infinite;
        }
        .marquee-left-to-right:hover {
          animation-play-state: paused;
        }

        .marquee-left-to-right-staggered {
          display: flex;
          width: max-content;
          animation: marqueeLeftToRight 46s linear infinite;
        }
        .marquee-left-to-right-staggered:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}