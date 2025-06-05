
import { Loader2, AlertCircle } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Shop = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-20 relative overflow-hidden">
          {/* Background avec image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2116&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-green-800/70" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-slide-in-down">
                Boutique Nature & Santé
              </h2>
            </div>
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-green-300" />
              <span className="ml-4 text-green-200 text-xl">Chargement des produits...</span>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-20 relative overflow-hidden">
          {/* Background avec image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2116&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-red-800/70" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-slide-in-down">
                Boutique Nature & Santé
              </h2>
            </div>
            <div className="flex justify-center items-center py-20 text-red-300">
              <AlertCircle className="h-12 w-12 animate-bounce" />
              <span className="ml-4 text-xl">Erreur lors du chargement des produits</span>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section avec bannière */}
      <section className="py-20 relative overflow-hidden">
        {/* Background avec image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2116&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-green-800/65" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-slide-in-down">
              Boutique Nature & Santé
            </h2>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto animate-fade-in animation-delay-600">
              Découvrez nos produits naturels soigneusement sélectionnés pour votre bien-être. 
              Tous nos remèdes sont préparés avec des plantes et substances 100% naturelles.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products && products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-16">
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`animate-fade-in-up animation-delay-${index * 200}`}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 animate-fade-in-up">
              <p className="text-gray-600 text-xl">Aucun produit disponible pour le moment.</p>
            </div>
          )}

          {/* Commande Personnalisée section */}
          <div className="mt-16 animate-fade-in-up animation-delay-1000">
            <div className="bg-gradient-to-r from-green-600 to-orange-600 text-white p-10 rounded-3xl text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${Math.random() * 30 + 10}px`,
                      height: `${Math.random() * 30 + 10}px`,
                      animationDelay: `${Math.random() * 10}s`,
                      animationDuration: `${Math.random() * 15 + 10}s`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-bounce-subtle">
                  Commande Personnalisée
                </h3>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                  Besoin d'un traitement spécifique ? Contactez-moi directement via WhatsApp 
                  pour une consultation et un traitement adapté à vos besoins.
                </p>
                <a 
                  href="https://wa.me/+237698677491" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-110 shadow-lg animate-pulse"
                >
                  Commander via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Shop;
