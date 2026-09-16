import { computed } from 'vue';
import { products } from '../data/products';
import { Product } from '../types';

export function useProducts() {
  const allProducts = computed<Product[]>(() => products);

  const featuredProducts = computed<Product[]>(() => {
    return products.filter((p) => p.featured);
  });

  const newArrivals = computed<Product[]>(() => {
    return products.filter((p) => p.newArrival);
  });

  const getProductBySlug = (slug: string): Product | undefined => {
    return products.find((p) => p.slug === slug);
  };

  const getProductById = (id: number): Product | undefined => {
    return products.find((p) => p.id === id);
  };

  const getRelatedProducts = (currentProduct: Product, limit = 4): Product[] => {
    return products
      .filter((p) => p.id !== currentProduct.id && (p.category === currentProduct.category || p.featured))
      .slice(0, limit);
  };

  return {
    allProducts,
    featuredProducts,
    newArrivals,
    getProductBySlug,
    getProductById,
    getRelatedProducts
  };
}
