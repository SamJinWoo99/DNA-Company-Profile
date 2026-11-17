import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoTable from "./components/InfoTable";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <InfoTable />
      </main>
      <Footer />
    </>
  );
}
