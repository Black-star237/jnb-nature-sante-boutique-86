
import { CheckCircle } from 'lucide-react';

const Treatments = () => {
  const treatments = [
    "Faiblesse sexuelle",
    "Éjaculation précoce", 
    "Infertilité masculine et féminine",
    "Fibromes et myomes",
    "Hernie discale",
    "Cancer en tous genres",
    "Polype",
    "Diabète",
    "Hypertension artérielle",
    "Obésité",
    "Goutte",
    "Hernie",
    "Hémorroïdes externes et internes",
    "Trompes bouchées",
    "Hépatite A, B, C",
    "Typhoïde",
    "Rhumatisme (Arthrite, Arthrose et ostéoporose)"
  ];

  return (
    <section id="traitements" className="py-20 relative overflow-hidden">
      {/* Background avec image et overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-green-800/70" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 30}s`,
              animationDuration: `${Math.random() * 25 + 15}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-slide-in-down">
            Traitements Naturels Disponibles
          </h2>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto animate-fade-in animation-delay-600">
            Vous souffrez d'une maladie depuis des années ? Ici vous pouvez avoir un traitement curatif 
            avec des produits naturels issus des plantes et des écorces d'arbres.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-${index * 100}`}
            >
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-300 mt-1 flex-shrink-0 animate-pulse" size={24} />
                <span className="text-white font-medium text-lg hover:text-green-200 transition-colors duration-300">{treatment}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up animation-delay-2000">
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-bounce-subtle">
              Consultation Personnalisée
            </h3>
            <p className="text-green-100 mb-8 text-lg md:text-xl">
              Chaque traitement est adapté à votre condition spécifique. 
              Contactez-moi pour une consultation personnalisée via WhatsApp.
            </p>
            <a 
              href="https://wa.me/+237698677491" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-green-600 hover:to-orange-600 transition-all duration-300 inline-block transform hover:scale-110 shadow-2xl animate-pulse"
            >
              Consulter maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
