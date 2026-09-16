<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ArrowRight } from 'lucide-vue-next';
import { categories } from '../../data/categories';
import SectionHeading from '../common/SectionHeading.vue';
</script>

<template>
  <section class="py-20 sm:py-28 bg-[#0E0E0E] border-b border-[#1A1A1A]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="CURATED DEPARTMENTS"
        title="EXPLORE BY CATEGORY"
        subtitle="Each discipline of menswear is curated with intentional textile sourcing and silhouette engineering."
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <RouterLink
          v-for="cat in categories"
          :key="cat.slug"
          :to="`/collection/${cat.slug}`"
          class="group relative aspect-[4/5] overflow-hidden bg-[#161616] border border-[#222] block select-none"
        >
          <!-- Background Category Image -->
          <img
            :src="cat.image"
            :alt="cat.name"
            loading="lazy"
            class="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-[0.9]"
          />

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

          <!-- Category Content -->
          <div class="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-left z-10">
            <span class="text-[9px] tracking-[0.3em] uppercase text-[#D4AF6A] font-semibold block mb-1">
              COLLECTION
            </span>

            <h3 class="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider group-hover:text-[#D4AF6A] transition-colors mb-2">
              {{ cat.name }}
            </h3>

            <p class="text-xs text-[#AAA] line-clamp-2 font-light mb-4 max-w-sm">
              {{ cat.description }}
            </p>

            <div class="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-semibold text-white group-hover:text-[#D4AF6A] transition-colors">
              <span>View Garments</span>
              <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </div>

            <!-- Subtle Gold Bottom Border on Hover -->
            <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF6A] group-hover:w-full transition-all duration-500 ease-out" />
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
