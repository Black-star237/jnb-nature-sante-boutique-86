
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
      
      // Transformer les données pour ajouter image_urls basé sur l'image_url existante
      const transformedData = data?.map(product => ({
        ...product,
        image_urls: product.image_url ? [product.image_url] : []
      })) || [];

      return transformedData;
    },
  });
};
