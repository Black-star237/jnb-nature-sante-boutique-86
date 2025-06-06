
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Leaf, Shield, Clock } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Product } from '@/types/shop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: async (): Promise<Product | null> => {
      if (!id) return null;
      
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          categories (
            id,
            name,
            description,
            created_at
          )
        `)
        .eq('id', id)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error('Error fetching product:', error);
        throw new Error('Erreur lors du chargement du produit');
      }

      return data;
    },
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CM', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleOrder = () => {
    if (!product) return;
    
    const whatsappNumber = "+237698677491";
    const message = `Bonjour Dr. JNB,\n\nJe souhaite commander le produit suivant :\n\n📦 ${product.name}\n💰 Prix : ${formatPrice(product.price)} FCFA\n\n${product.description}\n\nMerci !`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          <span className="ml-4 text-gray-600">Chargement du produit...</span>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="text-center py-20">
          <p className="text-red-600 text-xl">Produit non trouvé</p>
          <button 
            onClick={() => navigate('/boutique')}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Retour à la boutique
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-8 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <button 
              onClick={() => navigate('/boutique')}
              className="flex items-center space-x-1 hover:text-green-600 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Retour à la boutique</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image du produit */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-lg">
                {product.image_url ? (
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-8xl">
                    🌿
                  </div>
                )}
              </div>
            </div>

            {/* Informations du produit */}
            <div className="space-y-6">
              {product.categories && (
                <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                  {product.categories.name}
                </span>
              )}
              
              <h1 className="text-4xl font-bold text-green-800 leading-tight">
                {product.name}
              </h1>
              
              <div className="text-4xl font-bold text-orange-600">
                {formatPrice(product.price)} FCFA
              </div>

              <div className="prose prose-lg text-gray-700">
                <p>{product.description}</p>
              </div>

              {/* Avantages */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <Leaf className="text-green-600" size={24} />
                  <span className="text-sm font-medium text-gray-700">100% Naturel</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <Shield className="text-green-600" size={24} />
                  <span className="text-sm font-medium text-gray-700">Sans Effets Secondaires</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <Clock className="text-green-600" size={24} />
                  <span className="text-sm font-medium text-gray-700">Résultats Rapides</span>
                </div>
              </div>

              {/* Bouton de commande */}
              <div className="space-y-4">
                <button 
                  onClick={handleOrder}
                  className="w-full bg-gradient-to-r from-green-600 to-orange-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                >
                  <ShoppingCart size={24} />
                  <span>Commander via WhatsApp</span>
                </button>
                
                <p className="text-sm text-gray-600 text-center">
                  Livraison gratuite • Paiement à la livraison • Consultation incluse
                </p>
              </div>

              {/* Informations supplémentaires */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Consultation personnalisée incluse
                </h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  Chaque commande inclut une consultation personnalisée avec Dr. Jonathan Noubouossie 
                  pour optimiser votre traitement selon vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
