
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '@/types/shop';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CM', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const whatsappNumber = "+237698677491";
    const message = `Bonjour Dr. JNB,\n\nJe souhaite commander le produit suivant :\n\n📦 ${product.name}\n💰 Prix : ${formatPrice(product.price)} FCFA\n\n${product.description}\n\nMerci !`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Link to={`/produit/${product.id}`} className="block">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer aspect-square flex flex-col">
        {/* Image avec catégorie en overlay */}
        <div className="relative flex-1 bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
          {product.image_url ? (
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              🌿
            </div>
          )}
          
          {/* Catégorie en overlay - coin supérieur droit */}
          {product.categories && (
            <div className="absolute top-2 right-2">
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg font-medium shadow-lg">
                {product.categories.name}
              </span>
            </div>
          )}
        </div>
        
        {/* Contenu compact */}
        <div className="p-4 flex flex-col justify-between flex-shrink-0">
          <h3 className="text-sm font-semibold text-green-800 mb-2 line-clamp-2 leading-tight">
            {product.name}
          </h3>
          
          {/* Prix et bouton - optimisés pour une ligne */}
          <div className="flex justify-between items-center gap-2">
            <span className="text-lg font-bold text-orange-600 whitespace-nowrap">
              {formatPrice(product.price)} FCFA
            </span>
            <button 
              onClick={handleOrder}
              className="bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1 text-xs font-medium shadow-md hover:shadow-lg flex-shrink-0"
            >
              <ShoppingCart size={14} />
              <span>Commander</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
