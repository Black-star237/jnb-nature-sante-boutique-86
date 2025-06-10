
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
      
      // Transformer les données pour créer le tableau image_urls
      const transformedData = data?.map(product => {
        const images = [];
        
        // Utiliser le champ images (JSONB) s'il existe et contient des données
        if (product.images && Array.isArray(product.images) && product.images.length > 0) {
          images.push(...product.images);
        }
        // Sinon, utiliser l'image principale comme fallback
        else if (product.image_url) {
          images.push(product.image_url);
        }
        
        return {
          ...product,
          images: product.images || [],
          image_urls: images
        };
      }) || [];

      return transformedData;
    },
  });
};
