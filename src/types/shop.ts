
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
  image_urls?: string[]; // Optionnel pour la compatibilité
  category_id: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  categories?: Category;
}
