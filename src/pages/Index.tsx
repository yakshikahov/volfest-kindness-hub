import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Festival2026 from "@/components/Festival2026";
import Highlights from "@/components/Highlights";
import PastPartners from "@/components/PastPartners";
import DonateCTA from "@/components/DonateCTA";
import Partner from "@/components/Partner";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Festival2026 />
      <Highlights />
      <Gallery />
      <DonateCTA />
      <PastPartners />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
