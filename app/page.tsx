import About from "@/components/About";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Experience from "@/components/Experience";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import InstagramFeed from "@/components/InstagramFeed";
import Navbar from "@/components/Navbar";
import LuxuryLoader from "@/components/LuxuryLoader";
import MouseGlow from "@/components/MouseGlow";
import PageExperience from "@/components/PageExperience";
import Reservation from "@/components/Reservation";

export default function Home() {
  return (
    <>
      <LuxuryLoader />
      <MouseGlow />
      <PageExperience>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Events />
        <Gallery />
        <InstagramFeed />
        <Reservation />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </PageExperience>
    </>
  );
}
