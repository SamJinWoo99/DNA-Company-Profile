import Navbar from "../components/Navbar";
import AwardSection from "../components/AwardSection";
import Footer from "../components/Footer";

export default function AwardPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AwardSection />
      </main>
      <Footer />
    </>
  );
}
