
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Heart, Brain, Shield, Zap, Users } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: Heart,
      title: "Troubles Cardiovasculaires",
      description: "Hypertension artérielle, problèmes cardiaques, circulation sanguine",
      treatments: ["Régulation de la tension", "Amélioration de la circulation", "Renforcement cardiaque"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Troubles Neurologiques",
      description: "Migraines, stress, troubles du sommeil, anxiété",
      treatments: ["Gestion du stress", "Amélioration du sommeil", "Équilibre nerveux"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Système Immunitaire",
      description: "Renforcement des défenses naturelles, infections récurrentes",
      treatments: ["Boost immunitaire", "Prévention infections", "Vitalité générale"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Troubles Digestifs",
      description: "Problèmes gastro-intestinaux, troubles hépatiques",
      treatments: ["Détoxification", "Amélioration digestion", "Santé intestinale"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Users,
      title: "Santé Reproductive",
      description: "Infertilité, troubles hormonaux, santé sexuelle",
      treatments: ["Équilibre hormonal", "Fertilité naturelle", "Vitalité sexuelle"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Leaf,
      title: "Détoxification",
      description: "Purification de l'organisme, élimination des toxines",
      treatments: ["Drainage lymphatique", "Purification du sang", "Régénération cellulaire"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 to-orange-900/85" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 15 + 10}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-slide-in-down">
              Mes Spécialités
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto animate-fade-in animation-delay-600">
              Découvrez mes domaines d'expertise en naturopathie et physiopathologie. 
              Chaque spécialité est traitée avec des approches naturelles personnalisées.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-${index * 200} border-l-4 border-gradient-to-b ${specialty.color}`}
                >
                  <div className={`bg-gradient-to-r ${specialty.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-pulse`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-green-600 transition-colors duration-300">
                    {specialty.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {specialty.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                      Traitements proposés :
                    </h4>
                    <ul className="space-y-2">
                      {specialty.treatments.map((treatment, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 animate-pulse" style={{animationDelay: `${idx * 200}ms`}}></span>
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-orange-800/90" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-bounce-subtle">
              Consultation Spécialisée
            </h2>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              Chaque cas est unique. Je vous propose une consultation personnalisée 
              pour déterminer le traitement naturel le plus adapté à votre situation.
            </p>
            <a 
              href="https://wa.me/+237698677491" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-12 py-5 rounded-full text-xl font-semibold hover:from-green-600 hover:to-orange-600 transition-all duration-300 inline-block transform hover:scale-110 shadow-2xl animate-pulse"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Specialties;
