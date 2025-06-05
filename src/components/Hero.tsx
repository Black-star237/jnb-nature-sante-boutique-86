
import { Leaf, Heart, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Overlay vert uni moins prononcé */}
      <div className="absolute inset-0 bg-green-800/60" />
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-left">
            Dr. JONATHAN NOUBOUOSSIE
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-300 mb-6 animate-slide-in-right animation-delay-300">
            Physiopathologiste & Naturopathe
          </h2>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-12 animate-fade-in animation-delay-600">
            Spécialiste du bien-être global, j'utilise des méthodes naturelles pour renforcer l'immunité, 
            prévenir et guérir les maladies en rétablissant l'équilibre du corps et de l'esprit.
          </p>
          <a 
            href="https://wa.me/+237698677491" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:from-green-600 hover:to-orange-600 transition-all duration-300 inline-block transform hover:scale-105 animate-bounce-subtle animation-delay-900 shadow-2xl"
          >
            Consultation WhatsApp
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-1200">
            <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Leaf className="text-green-300" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Naturopathie</h3>
            <p className="text-green-100">
              Traitement naturel des maladies par les plantes et substances bio pour un bien-être durable.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-1500">
            <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse animation-delay-300">
              <Heart className="text-orange-300" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Physiopathologie</h3>
            <p className="text-green-100">
              Analyse scientifique des mécanismes des maladies pour des solutions ciblées et efficaces.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-1800">
            <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse animation-delay-600">
              <Users className="text-green-300" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Suivi Personnalisé</h3>
            <p className="text-green-100">
              Accompagnement individualisé pour une approche holistique de votre santé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
