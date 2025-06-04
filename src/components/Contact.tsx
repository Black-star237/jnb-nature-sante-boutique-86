
import { MessageCircle, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-800 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Contactez Dr. JNB
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Prêt à commencer votre voyage vers une meilleure santé ? 
            Contactez-moi pour une consultation personnalisée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MessageCircle className="text-orange-300 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">WhatsApp</h4>
                  <p className="text-green-100">698 67 74 91</p>
                  <a 
                    href="https://wa.me/+237698677491" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-300 hover:text-orange-200 transition-colors"
                  >
                    Envoyer un message
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Facebook className="text-orange-300 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Réseaux Sociaux</h4>
                  <p className="text-green-100">Retrouvez-moi aussi sur :</p>
                  <ul className="text-orange-300 space-y-1">
                    <li>• Facebook: Dr. JNB Nature & Santé</li>
                    <li>• TikTok: Dr. JNB Nature & Santé</li>
                    <li>• YouTube: Dr. JNB Nature & Santé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-orange-300"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-orange-300"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Problème de santé</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-orange-300"
                  placeholder="Décrivez votre problème de santé"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl font-semibold text-orange-300">
            "Santé et bien-être pour une vie meilleure !"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
