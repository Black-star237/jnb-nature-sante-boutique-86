
import { Leaf, Heart, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="bg-gradient-to-br from-green-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Dr. JONATHAN NOUBOUOSSIE
          </h1>
          <h2 className="text-3xl font-semibold text-orange-600 mb-4">
            Physiopathologiste & Naturopathe
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Spécialiste du bien-être global, j'utilise des méthodes naturelles pour renforcer l'immunité, 
            prévenir et guérir les maladies en rétablissant l'équilibre du corps et de l'esprit.
          </p>
          <a 
            href="https://wa.me/+237698677491" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-block"
          >
            Consultation WhatsApp
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">Naturopathie</h3>
            <p className="text-gray-600">
              Traitement naturel des maladies par les plantes et substances bio pour un bien-être durable.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">Physiopathologie</h3>
            <p className="text-gray-600">
              Analyse scientifique des mécanismes des maladies pour des solutions ciblées et efficaces.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">Suivi Personnalisé</h3>
            <p className="text-gray-600">
              Accompagnement individualisé pour une approche holistique de votre santé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
