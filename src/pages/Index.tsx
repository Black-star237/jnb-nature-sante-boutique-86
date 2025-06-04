
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Treatments />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
