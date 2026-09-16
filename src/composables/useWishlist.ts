import { ref, computed, watch } from 'vue';
import { products } from '../data/products';
import { Product } from '../types';

const STORAGE_KEY = 'monarch_wishlist_v1';

const wishlistIds = ref<number[]>([]);

function initWishlist() {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      wishlistIds.value = JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load wishlist from localStorage', e);
  }
}

initWishlist();

if (typeof window !== 'undefined') {
  watch(
    wishlistIds,
    (val) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
      } catch (e) {
        console.error('Failed to save wishlist to localStorage', e);
      }
    },
    { deep: true }
  );
}

export function useWishlist() {
  const isInWishlist = (productId: number) => {
    return wishlistIds.value.includes(productId);
  };

  const toggleWishlist = (productId: number) => {
    if (wishlistIds.value.includes(productId)) {
      wishlistIds.value = wishlistIds.value.filter((id) => id !== productId);
    } else {
      wishlistIds.value.push(productId);
    }
  };

  const addToWishlist = (productId: number) => {
    if (!wishlistIds.value.includes(productId)) {
      wishlistIds.value.push(productId);
    }
  };

  const removeFromWishlist = (productId: number) => {
    wishlistIds.value = wishlistIds.value.filter((id) => id !== productId);
  };

  const clearWishlist = () => {
    wishlistIds.value = [];
  };

  const wishlistProducts = computed<Product[]>(() => {
    return products.filter((p) => wishlistIds.value.includes(p.id));
  });

  const wishlistCount = computed(() => wishlistIds.value.length);

  return {
    wishlistIds,
    wishlistProducts,
    wishlistCount,
    isInWishlist,
    toggleWishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist
  };
}
