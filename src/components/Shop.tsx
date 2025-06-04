
import { Loader2, AlertCircle } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard';

const Shop = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <section id="boutique" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Boutique Nature & Santé
            </h2>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-green-600" />
            <span className="ml-2 text-green-600">Chargement des produits...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="boutique" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Boutique Nature & Santé
            </h2>
          </div>
          <div className="flex justify-center items-center py-20 text-red-600">
            <AlertCircle className="h-8 w-8" />
            <span className="ml-2">Erreur lors du chargement des produits</span>
          </div>
        </div>
      </section>
    );
  }

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

        {products && products.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600">Aucun produit disponible pour le moment.</p>
          </div>
        )}

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
