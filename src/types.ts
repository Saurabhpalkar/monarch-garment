export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  featured: boolean;
  newArrival: boolean;
  originalPrice?: number;
  fabric?: string;
  fit?: string;
  careInstructions?: string[];
  inStock?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image: string;
  itemCount?: number;
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface WishlistItem {
  productId: number;
  addedAt?: string;
}

export interface BrandConfig {
  name: string;
  shortName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    district: string;
    state: string;
    country: string;
  };
  googleMapsUrl: string;
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}
