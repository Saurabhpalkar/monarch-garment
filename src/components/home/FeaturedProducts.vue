<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { Product } from '../../types';
import { products } from '../../data/products';
import SectionHeading from '../common/SectionHeading.vue';
import ProductGrid from '../products/ProductGrid.vue';
import ProductQuickView from '../products/ProductQuickView.vue';
import PremiumButton from '../common/PremiumButton.vue';

const activeTab = ref<'featured' | 'new' | 'all'>('featured');
const quickViewProduct = ref<Product | null>(null);
const isQuickViewOpen = ref(false);

const displayedProducts = computed(() => {
  if (activeTab.value === 'featured') {
    return products.filter((p) => p.featured).slice(0, 8);
  }
  if (activeTab.value === 'new') {
    return products.filter((p) => p.newArrival).slice(0, 8);
  }
  return products.slice(0, 8);
});

const handleQuickView = (product: Product) => {
  quickViewProduct.value = product;
  isQuickViewOpen.value = true;
};
</script>

<template>
  <section class="py-20 sm:py-28 bg-[#0B0B0B] border-b border-[#1A1A1A]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="SELECT EDITIONS"
        title="CURATED HIGHLIGHTS"
        subtitle="Signature pieces commanding attention through subtle textile nuances and flawless drape."
      />

      <!-- Filter Tabs -->
      <div class="flex items-center justify-center gap-3 mb-12">
        <button
          @click="activeTab = 'featured'"
          :class="[
            'px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium border transition-colors cursor-pointer',
            activeTab === 'featured'
              ? 'bg-[#D4AF6A] text-[#0B0B0B] border-[#D4AF6A] font-bold'
              : 'bg-[#141414] text-[#888] border-[#2A2A2A] hover:text-white'
          ]"
        >
          Curated Essentials
        </button>

        <button
          @click="activeTab = 'new'"
          :class="[
            'px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium border transition-colors cursor-pointer',
            activeTab === 'new'
              ? 'bg-[#D4AF6A] text-[#0B0B0B] border-[#D4AF6A] font-bold'
              : 'bg-[#141414] text-[#888] border-[#2A2A2A] hover:text-white'
          ]"
        >
          New In Store
        </button>

        <button
          @click="activeTab = 'all'"
          :class="[
            'px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium border transition-colors cursor-pointer',
            activeTab === 'all'
              ? 'bg-[#D4AF6A] text-[#0B0B0B] border-[#D4AF6A] font-bold'
              : 'bg-[#141414] text-[#888] border-[#2A2A2A] hover:text-white'
          ]"
        >
          All Highlights
        </button>
      </div>

      <!-- Product Grid -->
      <ProductGrid
        :products="displayedProducts"
        @quick-view="handleQuickView"
      />

      <!-- View Entire Catalogue CTA -->
      <div class="mt-14 text-center">
        <PremiumButton
          to="/collection"
          variant="outline"
          size="lg"
        >
          EXPLORE THE FULL CATALOGUE
        </PremiumButton>
      </div>
    </div>

    <!-- Quick View Modal -->
    <ProductQuickView
      :product="quickViewProduct"
      :isOpen="isQuickViewOpen"
      @close="isQuickViewOpen = false"
    />
  </section>
</template>
