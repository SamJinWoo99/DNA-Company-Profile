import Navbar from "../components/Navbar";
import WorkHeroMeta from "../components/WorkHeroMeta";
import Footer from "../components/Footer";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-white">
        <WorkHeroMeta />
      </main>
      <div className="w-full lg:pl-[12%] xl:pl-[11%]">
        <Footer />
      </div>
    </>
  );
}
