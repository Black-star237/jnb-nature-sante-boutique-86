
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, MapPin, Phone, MessageCircle, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Consultation Initiale",
      duration: "60 minutes",
      price: "25 000 FCFA",
      description: "Bilan complet de santé, analyse des symptômes et élaboration d'un plan de traitement personnalisé.",
      includes: [
        "Anamnèse détaillée",
        "Examen physiopathologique",
        "Plan de traitement naturel",
        "Conseils nutritionnels",
        "Prescription de plantes médicinales"
      ]
    },
    {
      title: "Suivi de Traitement",
      duration: "30 minutes",
      price: "15 000 FCFA", 
      description: "Évaluation des progrès et ajustement du traitement en cours.",
      includes: [
        "Évaluation des résultats",
        "Ajustement du traitement",
        "Nouveaux conseils",
        "Soutien et motivation",
        "Réponses aux questions"
      ]
    },
    {
      title: "Consultation d'Urgence",
      duration: "45 minutes",
      price: "35 000 FCFA",
      description: "Prise en charge rapide pour les cas urgents nécessitant une intervention immédiate.",
      includes: [
        "Disponibilité prioritaire",
        "Diagnostic rapide",
        "Traitement d'urgence",
        "Prescription immédiate",
        "Suivi téléphonique 24h"
      ]
    }
  ];

  const consultationModes = [
    {
      title: "Consultation en Présentiel",
      icon: MapPin,
      description: "Rendez-vous direct au cabinet pour un examen complet",
      advantages: ["Examen physique approfondi", "Analyse directe", "Contact humain", "Diagnostic précis"],
      location: "Yaoundé, Cameroun"
    },
    {
      title: "Téléconsultation WhatsApp",
      icon: MessageCircle,
      description: "Consultation à distance via WhatsApp pour plus de flexibilité",
      advantages: ["Économie de temps", "Pas de déplacement", "Flexibilité horaire", "Suivi continu"],
      location: "Disponible partout"
    },
    {
      title: "Consultation Téléphonique",
      icon: Phone,
      description: "Entretien téléphonique pour les suivis et conseils",
      advantages: ["Rapidité", "Accessibilité", "Questions urgentes", "Conseils immédiats"],
      location: "National et international"
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
            backgroundImage: `url('https://images.unsplash.com/photo-1559757175-0eb30cd0b29c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
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
              Mes Services
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto animate-fade-in animation-delay-600">
              Consultations personnalisées en naturopathie et physiopathologie. 
              Choisissez la formule qui vous convient le mieux pour retrouver votre santé naturellement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 animate-slide-in-up">
              Types de Consultations
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-${index * 200} border-t-4 border-gradient-to-r from-green-500 to-orange-500`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <div className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-6 py-3 rounded-full inline-block">
                    <span className="text-2xl font-bold">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-center mt-4 text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>{service.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                    Inclus dans la consultation :
                  </h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse" style={{animationDelay: `${idx * 200}ms`}}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 text-center">
                  <a 
                    href="https://wa.me/+237698677491" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-orange-600 transition-all duration-300 inline-block transform hover:scale-105 shadow-lg"
                  >
                    Réserver
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Modes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 animate-slide-in-up">
              Modes de Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la modalité qui vous convient le mieux selon vos contraintes et préférences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {consultationModes.map((mode, index) => {
              const IconComponent = mode.icon;
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-green-50 to-orange-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-${index * 300}`}
                >
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{mode.title}</h3>
                    <p className="text-gray-600">{mode.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Star className="text-yellow-500 mr-2" size={18} />
                        Avantages :
                      </h4>
                      <ul className="space-y-2">
                        {mode.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 animate-pulse" style={{animationDelay: `${idx * 200}ms`}}></span>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl border-l-4 border-green-500">
                      <div className="flex items-center text-gray-700">
                        <MapPin size={16} className="mr-2 text-green-500" />
                        <span className="font-medium">{mode.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-orange-800/90" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-bounce-subtle">
              Prêt à Commencer ?
            </h2>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              Contactez-moi dès maintenant pour planifier votre consultation 
              et débuter votre parcours vers une santé optimale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/+237698677491" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 inline-block transform hover:scale-110 shadow-2xl"
              >
                WhatsApp
              </a>
              <a 
                href="tel:+237698677491"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 inline-block transform hover:scale-110 shadow-2xl"
              >
                Appeler
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
