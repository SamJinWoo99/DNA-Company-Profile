import Navbar from "../components/Navbar";
import AboutHeroMeta from "../components/AboutHeroMeta";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-white">
        <AboutHeroMeta />
      </main>
      <Footer />
    </>
  );
}
