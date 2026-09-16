import { ref, computed, watch } from 'vue';
import { CartItem, Product } from '../types';

const STORAGE_KEY = 'monarch_cart_v1';

// Shared state across all component usages
const cart = ref<CartItem[]>([]);
const isCartOpen = ref(false);

// Initialize from localStorage
function initCart() {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      cart.value = JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load cart from localStorage', e);
  }
}

initCart();

// Save on change
if (typeof window !== 'undefined') {
  watch(
    cart,
    (val) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
      } catch (e) {
        console.error('Failed to save cart to localStorage', e);
      }
    },
    { deep: true }
  );
}

export function useCart() {
  const addToCart = (product: Product, size: string, color: string, quantity = 1) => {
    const existingIndex = cart.value.findIndex(
      (item) => item.product.id === product.id && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
      cart.value[existingIndex].quantity += quantity;
    } else {
      cart.value.push({
        product,
        size,
        color,
        quantity
      });
    }

    // Auto-open drawer on add
    isCartOpen.value = true;
  };

  const removeFromCart = (productId: number, size: string, color: string) => {
    cart.value = cart.value.filter(
      (item) => !(item.product.id === productId && item.size === size && item.color === color)
    );
  };

  const updateQuantity = (productId: number, size: string, color: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(productId, size, color);
      return;
    }

    const item = cart.value.find(
      (i) => i.product.id === productId && i.size === size && i.color === color
    );
    if (item) {
      item.quantity = newQty;
    }
  };

  const clearCart = () => {
    cart.value = [];
  };

  const openCart = () => {
    isCartOpen.value = true;
  };

  const closeCart = () => {
    isCartOpen.value = false;
  };

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
  };

  const subtotal = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  });

  const itemCount = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.quantity, 0);
  });

  return {
    cart,
    isCartOpen,
    subtotal,
    itemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart
  };
}
