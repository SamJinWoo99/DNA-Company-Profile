import Navbar from "../components/Navbar";
import AboutHeroMeta from "../components/AboutHeroMeta";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-white">
        {/* Bagian Atas: Banner Hero Biru Meta-Style (Foto 1) dengan efek geser halus */}
        <AboutHeroMeta />

        {/* Bagian Bawah: Tampilan Asli Lengkap DNA Komunika (Foto 2) tetap ada saat di-scroll ke bawah */}
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
