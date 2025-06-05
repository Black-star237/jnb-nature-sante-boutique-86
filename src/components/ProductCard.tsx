
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
      <div className="bg-green-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
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
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-green-800 mb-3 line-clamp-2 hover:text-green-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
            {product.description}
          </p>
          
          {product.categories && (
            <div className="mb-4">
              <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                {product.categories.name}
              </span>
            </div>
          )}
          
          {/* Prix et bouton sur une seule ligne */}
          <div className="flex justify-between items-center gap-3">
            <div className="flex-1">
              <span className="text-xl font-bold text-orange-600 block">
                {formatPrice(product.price)} FCFA
              </span>
            </div>
            <button 
              onClick={handleOrder}
              className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1 text-sm whitespace-nowrap flex-shrink-0"
            >
              <ShoppingCart size={16} />
              <span>Commander</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
