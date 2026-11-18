import Navbar from "../components/Navbar";
import AboutHeroMeta from "../components/AboutHeroMeta";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-white">
        {/* Halaman About lengkap berurutan rapi:
            1. Hero Profil Meta-Style dengan strip foto peek di kanan
            2. Visi & Misi DNA Komunika (2 kolom bersih)
            3. Services & Expertise DNA Komunika (3 kolom layanan + CTA) */}
        <AboutHeroMeta />
      </main>
      <Footer />
    </>
  );
}
