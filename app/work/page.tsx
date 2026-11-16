import Navbar from "../components/Navbar";
import WorkSection from "../components/WorkSection";
import Footer from "../components/Footer";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <WorkSection />
      </main>
      <Footer />
    </>
  );
}
