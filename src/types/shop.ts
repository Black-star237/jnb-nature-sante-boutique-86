
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
  images: string[] | null; // Tableau d'URLs d'images depuis la colonne JSONB
  image_urls?: string[]; // Tableau final des images pour l'affichage
  category_id: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  categories?: Category;
}
