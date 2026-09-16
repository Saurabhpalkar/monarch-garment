<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Heart, Eye, ShoppingBag } from 'lucide-vue-next';
import { Product } from '../../types';
import { useWishlist } from '../../composables/useWishlist';
import { useCart } from '../../composables/useCart';

interface Props {
  product: Product;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'quick-view', product: Product): void;
}>();

const { isInWishlist, toggleWishlist } = useWishlist();
const { addToCart } = useCart();

const isHovered = ref(false);
const activeImageIndex = ref(0);

const handleQuickAdd = () => {
  const defaultSize = props.product.sizes[0] || 'M';
  const defaultColor = props.product.colors[0] || 'Standard';
  addToCart(props.product, defaultSize, defaultColor, 1);
};
</script>

<template>
  <div
    class="group relative flex flex-col bg-[#0F0F0F] border border-[#1A1A1A] hover:border-[#333] transition-all duration-500 select-none"
    @mouseenter="isHovered = true; activeImageIndex = (product.images.length > 1 ? 1 : 0)"
    @mouseleave="isHovered = false; activeImageIndex = 0"
  >
    <!-- Image Box -->
    <div class="relative aspect-[3/4] w-full overflow-hidden bg-[#161616]">
      <RouterLink :to="`/product/${product.slug}`" class="block w-full h-full">
        <img
          :src="product.images[activeImageIndex] || product.images[0]"
          :alt="product.name"
          loading="lazy"
          class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </RouterLink>

      <!-- Soft gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

      <!-- Badges: New Arrival / Featured -->
      <div class="absolute top-3 left-3 flex flex-col gap-1 z-10 pointer-events-none">
        <span
          v-if="product.newArrival"
          class="bg-[#0B0B0B]/90 text-[#D4AF6A] border border-[#D4AF6A]/30 text-[9px] font-sans font-semibold tracking-[0.2em] uppercase px-2.5 py-1"
        >
          NEW ARRIVAL
        </span>
        <span
          v-else-if="product.featured"
          class="bg-[#0B0B0B]/90 text-white/90 border border-white/20 text-[9px] font-sans font-medium tracking-[0.2em] uppercase px-2.5 py-1"
        >
          CURATED
        </span>
      </div>

      <!-- Wishlist Action Top Right -->
      <button
        @click.prevent="toggleWishlist(product.id)"
        class="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#0B0B0B]/80 hover:bg-[#0B0B0B] border border-white/10 hover:border-[#D4AF6A] flex items-center justify-center transition-all duration-300 cursor-pointer"
        :aria-label="isInWishlist(product.id) ? 'Remove from wishlist' : 'Save to wishlist'"
      >
        <Heart
          :class="[
            'w-4 h-4 transition-colors',
            isInWishlist(product.id)
              ? 'fill-[#D4AF6A] text-[#D4AF6A]'
              : 'text-white hover:text-[#D4AF6A]'
          ]"
        />
      </button>

      <!-- Quick Action Overlay on Hover -->
      <div
        class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-between gap-2 z-10"
      >
        <button
          @click.stop="emit('quick-view', product)"
          class="flex-1 py-2 px-3 bg-[#181818] hover:bg-[#242424] text-white text-[10px] tracking-[0.2em] uppercase font-semibold border border-[#333] hover:border-[#D4AF6A] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <Eye class="w-3.5 h-3.5 text-[#D4AF6A]" />
          <span>Quick View</span>
        </button>

        <button
          @click.stop="handleQuickAdd"
          class="py-2 px-3 bg-[#D4AF6A] hover:bg-[#E8D5A8] text-[#0B0B0B] text-[10px] tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          title="Add size to bag"
        >
          <ShoppingBag class="w-3.5 h-3.5" />
          <span class="hidden sm:inline">Add</span>
        </button>
      </div>

      <!-- Subtle gold line animation on bottom border -->
      <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF6A] group-hover:w-full transition-all duration-500 ease-out z-20" />
    </div>

    <!-- Product Meta -->
    <div class="p-4 sm:p-5 flex flex-col flex-grow justify-between text-left">
      <div>
        <span class="text-[9px] font-sans uppercase tracking-[0.25em] text-[#888] font-medium block mb-1">
          {{ product.category.replace('-', ' ') }}
        </span>

        <RouterLink :to="`/product/${product.slug}`" class="block">
          <h3 class="font-serif text-sm sm:text-base font-semibold text-[#F5F1E8] group-hover:text-[#D4AF6A] transition-colors line-clamp-1 leading-snug">
            {{ product.name }}
          </h3>
        </RouterLink>
      </div>

      <!-- Price & Sizes Row -->
      <div class="mt-3 pt-3 border-t border-[#1C1C1C] flex items-center justify-between">
        <div class="flex items-baseline gap-2">
          <span class="font-sans text-xs sm:text-sm font-semibold text-white tracking-wide">
            ₹{{ product.price.toLocaleString('en-IN') }}
          </span>
          <span
            v-if="product.originalPrice && product.originalPrice > product.price"
            class="text-[11px] text-[#666] line-through font-light"
          >
            ₹{{ product.originalPrice.toLocaleString('en-IN') }}
          </span>
        </div>

        <!-- Available sizes chips preview -->
        <div class="flex items-center gap-1 text-[9px] text-[#777] uppercase font-mono">
          <span v-for="size in product.sizes.slice(0, 3)" :key="size" class="px-1 border border-[#222]">
            {{ size }}
          </span>
          <span v-if="product.sizes.length > 3">+{{ product.sizes.length - 3 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
