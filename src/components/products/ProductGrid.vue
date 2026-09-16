<script setup lang="ts">
import { Product } from '../../types';
import ProductCard from './ProductCard.vue';

interface Props {
  products: Product[];
  emptyMessage?: string;
}

withDefaults(defineProps<Props>(), {
  emptyMessage: 'No garments found matching your selected criteria.'
});

const emit = defineEmits<{
  (e: 'quick-view', product: Product): void;
}>();
</script>

<template>
  <div>
    <div
      v-if="products.length > 0"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @quick-view="emit('quick-view', $event)"
      />
    </div>

    <!-- Empty State -->
    <div
      v-else
      class="text-center py-20 px-4 border border-[#1F1F1F] bg-[#0E0E0E] my-8"
    >
      <span class="text-[10px] tracking-[0.3em] uppercase text-[#D4AF6A] block mb-2">
        CATALOGUE NOTICE
      </span>
      <h3 class="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
        NO PIECES MATCHED
      </h3>
      <p class="text-xs text-[#888] max-w-md mx-auto mb-6">
        {{ emptyMessage }}
      </p>
      <slot name="empty-action" />
    </div>
  </div>
</template>
