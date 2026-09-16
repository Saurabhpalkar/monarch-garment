<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  images: string[];
  productName: string;
}

const props = defineProps<Props>();

const activeIndex = ref(0);
const isZoomed = ref(false);

const selectImage = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <div class="flex flex-col-reverse lg:flex-row gap-4">
    <!-- Thumbnail Strip -->
    <div
      v-if="images.length > 1"
      class="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto scrollbar-none shrink-0"
    >
      <button
        v-for="(img, idx) in images"
        :key="idx"
        @click="selectImage(idx)"
        :class="[
          'relative w-16 sm:w-20 aspect-[3/4] overflow-hidden border transition-all duration-200 shrink-0 cursor-pointer',
          activeIndex === idx
            ? 'border-[#D4AF6A] ring-1 ring-[#D4AF6A]'
            : 'border-[#222] opacity-60 hover:opacity-100 hover:border-[#444]'
        ]"
      >
        <img
          :src="img"
          :alt="`${productName} thumbnail ${idx + 1}`"
          class="w-full h-full object-cover"
        />
      </button>
    </div>

    <!-- Main High-Res Image Viewport -->
    <div
      class="relative flex-grow aspect-[3/4] overflow-hidden bg-[#141414] border border-[#222]"
      @mouseenter="isZoomed = true"
      @mouseleave="isZoomed = false"
    >
      <img
        :src="images[activeIndex] || images[0]"
        :alt="productName"
        :class="[
          'w-full h-full object-cover object-center transition-transform duration-700 ease-out select-none',
          isZoomed ? 'scale-110' : 'scale-100'
        ]"
      />

      <!-- Image counter badge -->
      <div
        v-if="images.length > 1"
        class="absolute bottom-4 right-4 px-2.5 py-1 bg-[#0B0B0B]/80 backdrop-blur-sm border border-white/10 text-[10px] text-[#CCC] font-mono tracking-widest"
      >
        {{ activeIndex + 1 }} / {{ images.length }}
      </div>
    </div>
  </div>
</template>
