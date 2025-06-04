
import { MessageCircle, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background avec image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/90 to-green-600/95" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              animationDelay: `${Math.random() * 25}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-slide-in-down">
            Contactez Dr. JNB
          </h2>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto animate-fade-in animation-delay-600">
            Prêt à commencer votre voyage vers une meilleure santé ? 
            Contactez-moi pour une consultation personnalisée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-white mb-8 animate-slide-in-left">Informations de Contact</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-300">
                <MessageCircle className="text-orange-300 mt-1 animate-bounce" size={32} />
                <div>
                  <h4 className="font-semibold text-xl text-white mb-2">WhatsApp</h4>
                  <p className="text-green-200 text-lg mb-2">698 67 74 91</p>
                  <a 
                    href="https://wa.me/+237698677491" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-300 hover:text-orange-200 transition-colors duration-300 font-medium underline hover:no-underline"
                  >
                    Envoyer un message
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-600">
                <Facebook className="text-orange-300 mt-1 animate-bounce animation-delay-300" size={32} />
                <div>
                  <h4 className="font-semibold text-xl text-white mb-2">Réseaux Sociaux</h4>
                  <p className="text-green-200 mb-3">Retrouvez-moi aussi sur :</p>
                  <ul className="text-orange-300 space-y-2">
                    <li className="hover:text-orange-200 transition-colors duration-300">• Facebook: Dr. JNB Nature & Santé</li>
                    <li className="hover:text-orange-200 transition-colors duration-300">• TikTok: Dr. JNB Nature & Santé</li>
                    <li className="hover:text-orange-200 transition-colors duration-300">• YouTube: Dr. JNB Nature & Santé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105">
              <h3 className="text-3xl font-bold text-white mb-8 text-center animate-bounce-subtle">Envoyez-moi un message</h3>
              <form className="space-y-6">
                <div className="animate-slide-in-right animation-delay-300">
                  <label className="block text-sm font-medium mb-3 text-green-200">Nom complet</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-orange-300 focus:bg-white/30 transition-all duration-300"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div className="animate-slide-in-right animation-delay-600">
                  <label className="block text-sm font-medium mb-3 text-green-200">Téléphone</label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-orange-300 focus:bg-white/30 transition-all duration-300"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div className="animate-slide-in-right animation-delay-900">
                  <label className="block text-sm font-medium mb-3 text-green-200">Problème de santé</label>
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-orange-300 focus:bg-white/30 transition-all duration-300 resize-none"
                    placeholder="Décrivez votre problème de santé"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-1200"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in-up animation-delay-1500">
          <p className="text-2xl md:text-3xl font-semibold text-orange-300 animate-pulse">
            "Santé et bien-être pour une vie meilleure !"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
