
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
      
      // Transformer les données pour créer le tableau image_urls avec les vraies images
      const transformedData = data?.map(product => {
        const images = [];
        
        // Ajouter l'image principale si elle existe
        if (product.image_url) {
          images.push(product.image_url);
        }
        
        // Ajouter les images supplémentaires depuis la colonne JSONB si elles existent
        if (product.additional_images && Array.isArray(product.additional_images)) {
          images.push(...product.additional_images);
        }
        
        return {
          ...product,
          image_urls: images
        };
      }) || [];

      return transformedData;
    },
  });
};
