
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Product } from '@/types/shop';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      console.log('Fetching products from database...');
      
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
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error);
        throw new Error('Erreur lors du chargement des produits');
      }

      console.log('Products fetched successfully:', data);
      
      // Transformer les données pour nettoyer le champ images
      const transformedData = data?.map(product => {
        let galleryImages: string[] = [];
        
        // Traiter le champ images (JSONB) pour la galerie
        if (product.images && Array.isArray(product.images)) {
          galleryImages = product.images.filter(img => typeof img === 'string');
        }
        
        return {
          ...product,
          images: galleryImages
        };
      }) || [];

      return transformedData;
    },
  });
};
