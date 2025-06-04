
import { ShoppingCart, Package, Leaf } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      name: "Traitement Anti-Diabète Naturel",
      price: "25 000 FCFA",
      description: "Mélange de plantes pour réguler la glycémie naturellement",
      image: "🌿"
    },
    {
      name: "Remède Anti-Hypertension",
      price: "30 000 FCFA", 
      description: "Solution naturelle pour normaliser la tension artérielle",
      image: "🍃"
    },
    {
      name: "Traitement Fertilité Masculine",
      price: "35 000 FCFA",
      description: "Produits naturels pour améliorer la fertilité masculine",
      image: "🌱"
    },
    {
      name: "Solution Anti-Fibrome",
      price: "40 000 FCFA",
      description: "Traitement naturel pour éliminer les fibromes",
      image: "🌾"
    },
    {
      name: "Remède Anti-Hémorroïdes",
      price: "20 000 FCFA",
      description: "Solution douce et efficace contre les hémorroïdes",
      image: "🌿"
    },
    {
      name: "Traitement Rhumatisme",
      price: "28 000 FCFA",
      description: "Soulagement naturel des douleurs articulaires",
      image: "🍀"
    }
  ];

  return (
    <section id="boutique" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Boutique Nature & Santé
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez nos produits naturels soigneusement sélectionnés pour votre bien-être. 
            Tous nos remèdes sont préparés avec des plantes et substances 100% naturelles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-green-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{product.image}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                    <ShoppingCart size={18} />
                    <span>Commander</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-orange-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">
            Commande Personnalisée
          </h3>
          <p className="text-lg mb-6">
            Besoin d'un traitement spécifique ? Contactez-moi directement via WhatsApp 
            pour une consultation et un traitement adapté à vos besoins.
          </p>
          <a 
            href="https://wa.me/+237698677491" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Commander via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shop;
