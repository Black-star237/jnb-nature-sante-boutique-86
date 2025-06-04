
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="accueil">
        <Hero />
      </div>
      <div id="apropos">
        <About />
      </div>
      <div id="specialites">
        {/* Section Spécialités - peut être ajoutée plus tard */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-green-700 mb-6">Mes Spécialités</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4">🌿 Naturopathie</h3>
                <p className="text-gray-700">Spécialiste du bien-être global, j'utilise des méthodes naturelles pour renforcer l'immunité, prévenir et guérir les maladies des plus simples aux plus complexes.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">🔬 Physiopathologie</h3>
                <p className="text-gray-700">Expert du fonctionnement du corps et des mécanismes des maladies, j'identifie et j'analyse les causes profondes des troubles pour proposer des solutions ciblées.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="traitements">
        <Treatments />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
