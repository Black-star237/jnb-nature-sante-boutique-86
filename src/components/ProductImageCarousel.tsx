
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel = ({ images, productName }: ProductImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si pas d'images, afficher l'emoji par défaut
  if (!images || images.length === 0) {
    return (
      <div className="space-y-4">
        <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-lg">
          <div className="w-full h-full flex items-center justify-center text-8xl">
            🌿
          </div>
        </div>
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="space-y-4">
      {/* Image principale */}
      <div className="relative aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-lg group">
        <img 
          src={images[currentIndex]} 
          alt={`${productName} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        
        {/* Boutons de navigation - affichés seulement s'il y a plus d'une image */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
        
        {/* Indicateurs de position */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-white scale-125 shadow-md" 
                    : "bg-white/60 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Miniatures - affichées seulement s'il y a plus d'une image */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.slice(0, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300",
                index === currentIndex 
                  ? "border-green-500 shadow-md scale-105" 
                  : "border-gray-200 hover:border-green-300"
              )}
            >
              <img
                src={image}
                alt={`${productName} - Miniature ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
          {images.length > 4 && (
            <div className="aspect-square rounded-lg bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium">
              +{images.length - 4}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;
