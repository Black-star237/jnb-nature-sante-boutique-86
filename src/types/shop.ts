
export interface Category {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  additional_images?: string[] | null; // Colonne JSONB pour les images supplémentaires
  image_urls?: string[]; // Tableau final des images pour l'affichage
  category_id: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  categories?: Category;
}
