<script setup lang="ts">
import { ref } from 'vue';
import { SlidersHorizontal, X, RotateCcw } from 'lucide-vue-next';
import { categories } from '../../data/categories';

interface Props {
  selectedCategory: string;
  selectedSize: string;
  selectedPriceRange: string;
  sortBy: string;
  totalResults: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:category', val: string): void;
  (e: 'update:size', val: string): void;
  (e: 'update:priceRange', val: string): void;
  (e: 'update:sortBy', val: string): void;
  (e: 'reset'): void;
}>();

const isMobileDrawerOpen = ref(false);

const sizesList = ['All', 'S', 'M', 'L', 'XL', 'XXL', '30', '32', '34', '36', '38', '40'];

const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under ₹1,800', value: 'under-1800' },
  { label: '₹1,800 – ₹2,500', value: '1800-2500' },
  { label: 'Above ₹2,500', value: 'above-2500' }
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Newest Arrivals', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Alphabetical', value: 'name' }
];
</script>

<template>
  <div class="mb-8">
    <!-- Desktop Filter Bar & Mobile Toggle -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#222]">
      <!-- Left: Category Quick Pills (horizontal scrollable) -->
      <div class="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
        <button
          @click="emit('update:category', 'all')"
          :class="[
            'px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors border select-none cursor-pointer',
            selectedCategory === 'all'
              ? 'bg-[#D4AF6A] text-[#0B0B0B] border-[#D4AF6A] font-semibold'
              : 'bg-[#141414] text-[#888] border-[#2A2A2A] hover:text-white hover:border-[#444]'
          ]"
        >
          All ({{ totalResults }})
        </button>

        <button
          v-for="cat in categories"
          :key="cat.slug"
          @click="emit('update:category', cat.slug)"
          :class="[
            'px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors border select-none cursor-pointer',
            selectedCategory === cat.slug
              ? 'bg-[#D4AF6A] text-[#0B0B0B] border-[#D4AF6A] font-semibold'
              : 'bg-[#141414] text-[#888] border-[#2A2A2A] hover:text-white hover:border-[#444]'
          ]"
        >
          {{ cat.name }}
        </button>
      </div>

      <!-- Right: Sort & Filter Toggle -->
      <div class="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
        <!-- Sort Dropdown -->
        <div class="flex items-center gap-2">
          <span class="text-[10px] uppercase tracking-wider text-[#666] hidden md:inline">Sort:</span>
          <select
            :value="sortBy"
            @change="emit('update:sortBy', ($event.target as HTMLSelectElement).value)"
            class="bg-[#141414] text-xs text-[#CCC] border border-[#2A2A2A] px-3 py-1.5 focus:outline-none focus:border-[#D4AF6A] cursor-pointer"
          >
            <option v-for="opt in sortOptions" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
        </div>

        <!-- Filter Drawer Button (for detailed size & price) -->
        <button
          @click="isMobileDrawerOpen = true"
          class="flex items-center gap-2 bg-[#181818] border border-[#333] hover:border-[#D4AF6A] text-white px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer"
        >
          <SlidersHorizontal class="w-3.5 h-3.5 text-[#D4AF6A]" />
          <span>Filters</span>
          <span
            v-if="selectedSize !== 'all' || selectedPriceRange !== 'all'"
            class="w-2 h-2 rounded-full bg-[#D4AF6A]"
          />
        </button>
      </div>
    </div>

    <!-- Active Filters Summary (if size or price is filtered) -->
    <div
      v-if="selectedSize !== 'all' || selectedPriceRange !== 'all' || selectedCategory !== 'all'"
      class="flex items-center gap-2 mt-4 text-xs flex-wrap"
    >
      <span class="text-[10px] tracking-wider uppercase text-[#777]">Applied:</span>

      <span
        v-if="selectedCategory !== 'all'"
        class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1A1A] border border-[#333] text-white text-[11px]"
      >
        Category: {{ selectedCategory }}
        <button @click="emit('update:category', 'all')" class="hover:text-[#D4AF6A]">
          <X class="w-3 h-3" />
        </button>
      </span>

      <span
        v-if="selectedSize !== 'all'"
        class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1A1A] border border-[#333] text-white text-[11px]"
      >
        Size: {{ selectedSize }}
        <button @click="emit('update:size', 'all')" class="hover:text-[#D4AF6A]">
          <X class="w-3 h-3" />
        </button>
      </span>

      <span
        v-if="selectedPriceRange !== 'all'"
        class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1A1A] border border-[#333] text-white text-[11px]"
      >
        Price: {{ selectedPriceRange }}
        <button @click="emit('update:priceRange', 'all')" class="hover:text-[#D4AF6A]">
          <X class="w-3 h-3" />
        </button>
      </span>

      <button
        @click="emit('reset')"
        class="text-[11px] text-[#D4AF6A] hover:underline flex items-center gap-1 ml-2"
      >
        <RotateCcw class="w-3 h-3" /> Reset all
      </button>
    </div>

    <!-- Filter Drawer Modal -->
    <Transition name="fade">
      <div
        v-if="isMobileDrawerOpen"
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end"
      >
        <div class="w-full max-w-md bg-[#111111] border-l border-[#222] h-full flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
          <!-- Drawer Header -->
          <div class="flex items-center justify-between pb-4 border-b border-[#222]">
            <div class="flex items-center gap-2">
              <SlidersHorizontal class="w-4 h-4 text-[#D4AF6A]" />
              <h3 class="font-serif text-lg font-bold uppercase tracking-wider text-white">
                REFINE CATALOGUE
              </h3>
            </div>
            <button
              @click="isMobileDrawerOpen = false"
              class="p-1.5 text-[#888] hover:text-white border border-[#333]"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Drawer Content -->
          <div class="py-6 space-y-8 flex-grow">
            <!-- Categories -->
            <div>
              <h4 class="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF6A] mb-3">
                Garment Category
              </h4>
              <div class="flex flex-wrap gap-2">
                <button
                  @click="emit('update:category', 'all')"
                  :class="[
                    'px-3 py-1.5 text-xs border transition-colors',
                    selectedCategory === 'all'
                      ? 'bg-[#D4AF6A] text-[#0B0B0B] border-[#D4AF6A] font-semibold'
                      : 'bg-[#181818] text-[#888] border-[#333] hover:text-white'
                  ]"
                >
                  All Garments
                </button>
                <button
                  v-for="cat in categories"
                  :key="cat.slug"
                  @click="emit('update:category', cat.slug)"
                  :class="[
                    'px-3 py-1.5 text-xs border transition-colors',
                    selectedCategory === cat.slug
                      ? 'bg-[#D4AF6A] text-[#0B0B0B] border-[#D4AF6A] font-semibold'
                      : 'bg-[#181818] text-[#888] border-[#333] hover:text-white'
                  ]"
                >
                  {{ cat.name }}
                </button>
              </div>
            </div>

            <!-- Sizes -->
            <div>
              <h4 class="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF6A] mb-3">
                Size / Waist
              </h4>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="s in sizesList"
                  :key="s"
                  @click="emit('update:size', s)"
                  :class="[
                    'w-11 h-9 flex items-center justify-center text-xs border transition-colors',
                    selectedSize === s
                      ? 'bg-[#D4AF6A] text-[#0B0B0B] border-[#D4AF6A] font-bold'
                      : 'bg-[#181818] text-[#888] border-[#333] hover:text-white'
                  ]"
                >
                  {{ s }}
                </button>
              </div>
            </div>

            <!-- Price Range -->
            <div>
              <h4 class="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF6A] mb-3">
                Price Tier
              </h4>
              <div class="space-y-2">
                <label
                  v-for="pr in priceRanges"
                  :key="pr.value"
                  class="flex items-center gap-3 text-xs text-[#CCC] cursor-pointer hover:text-white"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    :value="pr.value"
                    :checked="selectedPriceRange === pr.value"
                    @change="emit('update:priceRange', pr.value)"
                    class="accent-[#D4AF6A]"
                  />
                  <span>{{ pr.label }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Drawer Footer -->
          <div class="pt-6 border-t border-[#222] flex gap-3">
            <button
              @click="emit('reset'); isMobileDrawerOpen = false"
              class="flex-1 py-3 bg-[#181818] text-white text-xs uppercase tracking-wider font-semibold border border-[#333] hover:bg-[#222]"
            >
              Reset
            </button>
            <button
              @click="isMobileDrawerOpen = false"
              class="flex-1 py-3 bg-[#D4AF6A] text-[#0B0B0B] text-xs uppercase tracking-wider font-bold hover:bg-[#E8D5A8]"
            >
              Apply Refinements
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
