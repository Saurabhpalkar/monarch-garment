<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { products } from '../data/products';
import { Product } from '../types';
import SectionHeading from '../components/common/SectionHeading.vue';
import ProductGrid from '../components/products/ProductGrid.vue';
import ProductFilter from '../components/products/ProductFilter.vue';
import ProductQuickView from '../components/products/ProductQuickView.vue';

const route = useRoute();
const router = useRouter();

const selectedCategory = ref('all');
const selectedSize = ref('all');
const selectedPriceRange = ref('all');
const sortBy = ref('featured');
const searchQuery = ref('');

const quickViewProduct = ref<Product | null>(null);
const isQuickViewOpen = ref(false);

// Synchronize state with route params or query
const syncFromRoute = () => {
  if (route.params.category) {
    selectedCategory.value = route.params.category as string;
  } else {
    selectedCategory.value = 'all';
  }

  if (route.query.filter === 'new') {
    sortBy.value = 'newest';
  }

  if (route.query.q) {
    searchQuery.value = (route.query.q as string).toLowerCase();
  } else {
    searchQuery.value = '';
  }
};

onMounted(() => {
  syncFromRoute();
});

watch(
  () => [route.params.category, route.query],
  () => {
    syncFromRoute();
  }
);

const handleCategoryChange = (cat: string) => {
  selectedCategory.value = cat;
  if (cat === 'all') {
    router.push('/collection');
  } else {
    router.push(`/collection/${cat}`);
  }
};

const handleResetFilters = () => {
  selectedCategory.value = 'all';
  selectedSize.value = 'all';
  selectedPriceRange.value = 'all';
  sortBy.value = 'featured';
  searchQuery.value = '';
  router.push('/collection');
};

const handleQuickView = (product: Product) => {
  quickViewProduct.value = product;
  isQuickViewOpen.value = true;
};

// Main computed property for filtering products
const filteredProducts = computed(() => {
  return products.filter((product) => {
    // Category match
    if (selectedCategory.value !== 'all' && product.category !== selectedCategory.value) {
      return false;
    }

    // Size match
    if (selectedSize.value !== 'all' && !product.sizes.includes(selectedSize.value)) {
      return false;
    }

    // Search query match
    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat) {
        return false;
      }
    }

    // Price range match
    if (selectedPriceRange.value === 'under-1800' && product.price >= 1800) {
      return false;
    }
    if (selectedPriceRange.value === '1800-2500' && (product.price < 1800 || product.price > 2500)) {
      return false;
    }
    if (selectedPriceRange.value === 'above-2500' && product.price <= 2500) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy.value === 'price-asc') {
      return a.price - b.price;
    }
    if (sortBy.value === 'price-desc') {
      return b.price - a.price;
    }
    if (sortBy.value === 'newest') {
      return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
    }
    if (sortBy.value === 'name') {
      return a.name.localeCompare(b.name);
    }
    // Default 'featured'
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });
});
</script>

<template>
  <div class="bg-[#0B0B0B] text-[#F5F1E8] min-h-screen pt-28 pb-24">
    <!-- Header Banner -->
    <div class="border-b border-[#1E1E1E] bg-[#0E0E0E] py-14 px-4 sm:px-6 lg:px-8 text-center mb-10">
      <div class="max-w-4xl mx-auto">
        <span class="text-[10px] tracking-[0.35em] uppercase text-[#D4AF6A] font-semibold block mb-2">
          HAUTE MENSWEAR DIRECTORY
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white">
          THE MONARCH COLLECTION
        </h1>
        <div class="w-16 h-0.5 bg-[#D4AF6A] mx-auto my-4" />
        <p class="text-xs sm:text-sm text-[#888] max-w-xl mx-auto font-light leading-relaxed">
          Explore curated printed shirts, structured formals, tailored trousers, and celebratory evening wear available at our Chiplun boutique.
        </p>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Search Banner Notice (if active) -->
      <div
        v-if="searchQuery"
        class="mb-6 p-4 bg-[#141414] border border-[#262626] flex items-center justify-between text-xs"
      >
        <span>Showing results for search: <strong class="text-[#D4AF6A]">"{{ searchQuery }}"</strong></span>
        <button
          @click="searchQuery = ''; router.push('/collection')"
          class="text-xs text-[#AAA] hover:text-white underline"
        >
          Clear search
        </button>
      </div>

      <!-- Filter Controls -->
      <ProductFilter
        :selectedCategory="selectedCategory"
        :selectedSize="selectedSize"
        :selectedPriceRange="selectedPriceRange"
        :sortBy="sortBy"
        :totalResults="filteredProducts.length"
        @update:category="handleCategoryChange"
        @update:size="selectedSize = $event"
        @update:priceRange="selectedPriceRange = $event"
        @update:sortBy="sortBy = $event"
        @reset="handleResetFilters"
      />

      <!-- Products Grid -->
      <ProductGrid
        :products="filteredProducts"
        @quick-view="handleQuickView"
      >
        <template #empty-action>
          <button
            @click="handleResetFilters"
            class="px-6 py-2.5 bg-[#D4AF6A] text-[#0B0B0B] text-xs font-bold uppercase tracking-wider hover:bg-[#E8D5A8] transition-colors"
          >
            Clear All Filters
          </button>
        </template>
      </ProductGrid>
    </div>

    <!-- Quick View Modal -->
    <ProductQuickView
      :product="quickViewProduct"
      :isOpen="isQuickViewOpen"
      @close="isQuickViewOpen = false"
    />
  </div>
</template>
