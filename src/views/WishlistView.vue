<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Heart, ShoppingBag, Trash2 } from 'lucide-vue-next';
import { useWishlist } from '../composables/useWishlist';
import { useCart } from '../composables/useCart';
import { Product } from '../types';
import ProductGrid from '../components/products/ProductGrid.vue';
import ProductQuickView from '../components/products/ProductQuickView.vue';
import PremiumButton from '../components/common/PremiumButton.vue';

const { wishlistProducts, clearWishlist, wishlistCount } = useWishlist();
const { addToCart } = useCart();

const quickViewProduct = ref<Product | null>(null);
const isQuickViewOpen = ref(false);

const handleQuickView = (product: Product) => {
  quickViewProduct.value = product;
  isQuickViewOpen.value = true;
};
</script>

<template>
  <div class="bg-[#0B0B0B] text-[#F5F1E8] min-h-screen pt-28 pb-24">
    <!-- Header -->
    <div class="border-b border-[#1E1E1E] bg-[#0E0E0E] py-14 px-4 sm:px-6 lg:px-8 text-center mb-12">
      <div class="max-w-4xl mx-auto">
        <span class="text-[10px] tracking-[0.35em] uppercase text-[#D4AF6A] font-semibold block mb-2">
          SAVED EDITORIALS
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
          MY WISHLIST ({{ wishlistCount }})
        </h1>
        <div class="w-16 h-0.5 bg-[#D4AF6A] mx-auto my-4" />
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="wishlistProducts.length > 0">
        <div class="flex justify-end mb-6">
          <button
            @click="clearWishlist"
            class="text-xs text-[#888] hover:text-red-400 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Trash2 class="w-3.5 h-3.5" />
            <span>Clear Saved Items</span>
          </button>
        </div>

        <ProductGrid
          :products="wishlistProducts"
          @quick-view="handleQuickView"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20 px-4 border border-[#1E1E1E] bg-[#0E0E0E] max-w-xl mx-auto space-y-6">
        <div class="w-16 h-16 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center mx-auto text-[#D4AF6A]">
          <Heart class="w-7 h-7" />
        </div>
        <h2 class="font-serif text-2xl font-bold uppercase text-white">
          YOUR WISHLIST IS EMPTY
        </h2>
        <p class="text-xs text-[#888] max-w-sm mx-auto leading-relaxed">
          Tap the heart icon on any piece while exploring our collection to preserve it here for in-store trial or comparison.
        </p>
        <PremiumButton to="/collection" variant="gold" size="md">
          Explore Garments
        </PremiumButton>
      </div>
    </div>

    <ProductQuickView
      :product="quickViewProduct"
      :isOpen="isQuickViewOpen"
      @close="isQuickViewOpen = false"
    />
  </div>
</template>
